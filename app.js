// ===== STATE =====
let state = {
  currentModule: null,
  currentStep: 0,
  currentQuizQ: 0,
  quizAnswers: [],
  progress: {} // { moduleId: { lessonDone: bool, quizScore: int|null } }
};

function loadProgress() {
  try {
    const saved = localStorage.getItem('elec-formation-progress');
    if (saved) state.progress = JSON.parse(saved);
  } catch(e) {}
  MODULES.forEach(m => {
    if (!state.progress[m.id]) state.progress[m.id] = { lessonDone: false, quizScore: null };
  });
}

function saveProgress() {
  localStorage.setItem('elec-formation-progress', JSON.stringify(state.progress));
}

function getGlobalPercent() {
  const total = MODULES.length * 2;
  let done = 0;
  MODULES.forEach(m => {
    const p = state.progress[m.id];
    if (p.lessonDone) done++;
    if (p.quizScore !== null) done++;
  });
  return Math.round((done / total) * 100);
}

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function goToHome() {
  renderHeroStats();
  showScreen('home');
}

function goToDashboard() {
  renderDashboard();
  showScreen('dashboard');
}

function goToCert() {
  renderCert();
  showScreen('cert');
}

// ===== HOME =====
function renderHeroStats() {
  const pct = getGlobalPercent();
  const el = document.getElementById('hero-stats');
  if (pct === 0) { el.innerHTML = ''; return; }
  el.innerHTML = `<div class="hero-stat-pill">✅ Progression : ${pct}%</div>`;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const pct = getGlobalPercent();
  document.getElementById('global-bar').style.width = pct + '%';
  document.getElementById('global-percent').textContent = `${pct}% complété — ${MODULES.length * 2 - countDone()} actions restantes`;
  document.getElementById('nav-progress-text').textContent = pct + '%';

  const list = document.getElementById('modules-list');
  list.innerHTML = '';
  MODULES.forEach((mod, idx) => {
    const p = state.progress[mod.id];
    const lessonDone = p.lessonDone;
    const quizDone = p.quizScore !== null;
    const locked = idx > 0 && !state.progress[MODULES[idx - 1].id].lessonDone;

    const card = document.createElement('div');
    card.className = 'module-card' + (locked ? ' locked' : '');

    const statusLesson = lessonDone ? '<span class="badge done">✅ Leçon</span>' : '<span class="badge pending">📖 Leçon</span>';
    const statusQuiz = quizDone
      ? `<span class="badge done">🎯 Quiz ${p.quizScore}/${MODULES[idx].quiz.length}</span>`
      : (lessonDone ? '<span class="badge pending">❓ Quiz</span>' : '<span class="badge locked-badge">🔒 Quiz</span>');

    card.innerHTML = `
      <div class="mc-left">
        <span class="mc-icon">${mod.icon}</span>
        <div class="mc-info">
          <h3>${mod.title}</h3>
          <p>${mod.subtitle}</p>
          <div class="mc-badges">${statusLesson}${statusQuiz}</div>
        </div>
      </div>
      <div class="mc-right">
        ${locked
          ? '<span class="mc-lock">🔒</span>'
          : `<button class="btn-lesson" onclick="startLesson(${mod.id})">${lessonDone ? 'Revoir' : 'Commencer'}</button>
             ${lessonDone ? `<button class="btn-quiz" onclick="startQuiz(${mod.id})">${quizDone ? 'Refaire quiz' : 'Faire le quiz'}</button>` : ''}`
        }
      </div>
    `;
    list.appendChild(card);
  });

  // Certificat si tout terminé
  const allDone = MODULES.every(m => state.progress[m.id].lessonDone && state.progress[m.id].quizScore !== null);
  if (allDone) {
    const certCard = document.createElement('div');
    certCard.className = 'cert-unlock-card';
    certCard.innerHTML = `<span>🏆</span><div><h3>Formation complète !</h3><p>Vous avez terminé tous les modules.</p></div><button class="btn-primary" onclick="goToCert()">Voir mon certificat</button>`;
    list.appendChild(certCard);
  }
}

function countDone() {
  let done = 0;
  MODULES.forEach(m => {
    if (state.progress[m.id].lessonDone) done++;
    if (state.progress[m.id].quizScore !== null) done++;
  });
  return done;
}

// ===== LESSON =====
function startLesson(modId) {
  state.currentModule = MODULES.find(m => m.id === modId);
  state.currentStep = 0;
  renderLesson();
  showScreen('lesson');
}

function renderLesson() {
  const mod = state.currentModule;
  const step = mod.steps[state.currentStep];
  const total = mod.steps.length;

  document.getElementById('lesson-nav-title').textContent = mod.icon + ' ' + mod.title;
  document.getElementById('lesson-nav-steps').textContent = `${state.currentStep + 1}/${total}`;
  document.getElementById('lesson-title').textContent = step.title;
  document.getElementById('lesson-subtitle').textContent = mod.subtitle;

  const stepsEl = document.getElementById('lesson-steps');
  stepsEl.innerHTML = `<div class="step-content">${step.content}</div>`;

  // Progress dots
  let dots = '<div class="step-dots">';
  for (let i = 0; i < total; i++) {
    dots += `<span class="dot ${i === state.currentStep ? 'active' : i < state.currentStep ? 'done' : ''}"></span>`;
  }
  dots += '</div>';
  stepsEl.innerHTML = dots + stepsEl.innerHTML;

  document.getElementById('btn-prev').style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';
  const isLast = state.currentStep === total - 1;
  document.getElementById('btn-next').textContent = isLast ? '✅ Terminer la leçon' : 'Suivant →';
}

function nextStep() {
  const mod = state.currentModule;
  if (state.currentStep < mod.steps.length - 1) {
    state.currentStep++;
    renderLesson();
  } else {
    state.progress[mod.id].lessonDone = true;
    saveProgress();
    // prompt quiz
    showQuizPrompt(mod.id);
  }
}

function prevStep() {
  if (state.currentStep > 0) {
    state.currentStep--;
    renderLesson();
  }
}

function showQuizPrompt(modId) {
  const mod = MODULES.find(m => m.id === modId);
  const stepsEl = document.getElementById('lesson-steps');
  document.getElementById('lesson-nav-steps').textContent = '✅ Terminé';
  document.getElementById('lesson-title').textContent = '🎉 Leçon terminée !';
  document.getElementById('lesson-subtitle').textContent = mod.title;
  stepsEl.innerHTML = `
    <div class="step-content quiz-prompt">
      <p>Vous avez complété toutes les étapes de ce module. Prêt à tester vos connaissances ?</p>
      <div class="quiz-prompt-btns">
        <button class="btn-primary" onclick="startQuiz(${modId})">Faire le quiz maintenant →</button>
        <button class="btn-secondary" onclick="goToDashboard()">Plus tard</button>
      </div>
    </div>`;
  document.getElementById('btn-prev').style.visibility = 'hidden';
  document.getElementById('btn-next').style.display = 'none';
}

// ===== QUIZ =====
function startQuiz(modId) {
  state.currentModule = MODULES.find(m => m.id === modId);
  state.currentQuizQ = 0;
  state.quizAnswers = [];
  document.getElementById('btn-next').style.display = '';
  renderQuizQuestion();
  showScreen('quiz');
}

function renderQuizQuestion() {
  const mod = state.currentModule;
  const q = mod.quiz[state.currentQuizQ];
  const total = mod.quiz.length;

  document.getElementById('quiz-nav-title').textContent = mod.icon + ' Quiz — ' + mod.title;
  document.getElementById('quiz-nav-progress').textContent = `${state.currentQuizQ + 1}/${total}`;
  document.getElementById('quiz-result-block').classList.add('hidden');

  const block = document.getElementById('quiz-question-block');
  block.innerHTML = `
    <div class="quiz-q-num">Question ${state.currentQuizQ + 1} / ${total}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-choices">
      ${q.choices.map((c, i) => `
        <button class="choice-btn" onclick="answerQuiz(${i})">${c}</button>
      `).join('')}
    </div>
  `;
}

function answerQuiz(choiceIdx) {
  const mod = state.currentModule;
  const q = mod.quiz[state.currentQuizQ];
  const correct = choiceIdx === q.answer;
  state.quizAnswers.push({ correct, chosen: choiceIdx });

  const block = document.getElementById('quiz-question-block');
  const buttons = block.querySelectorAll('.choice-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === choiceIdx && !correct) btn.classList.add('wrong');
  });

  const expl = document.createElement('div');
  expl.className = 'quiz-explanation ' + (correct ? 'expl-correct' : 'expl-wrong');
  expl.innerHTML = `<strong>${correct ? '✅ Correct !' : '❌ Incorrect'}</strong><p>${q.explanation}</p>`;
  block.appendChild(expl);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary quiz-next-btn';
  const isLast = state.currentQuizQ === mod.quiz.length - 1;
  nextBtn.textContent = isLast ? 'Voir mes résultats →' : 'Question suivante →';
  nextBtn.onclick = () => {
    if (isLast) showQuizResult();
    else {
      state.currentQuizQ++;
      renderQuizQuestion();
    }
  };
  block.appendChild(nextBtn);
}

function showQuizResult() {
  const mod = state.currentModule;
  const score = state.quizAnswers.filter(a => a.correct).length;
  const total = mod.quiz.length;
  const pct = Math.round((score / total) * 100);

  state.progress[mod.id].quizScore = score;
  saveProgress();

  document.getElementById('quiz-question-block').innerHTML = '';
  const result = document.getElementById('quiz-result-block');
  result.classList.remove('hidden');

  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const msg = pct === 100 ? 'Parfait ! Score parfait !' : pct >= 80 ? 'Excellent travail !' : pct >= 60 ? 'Bon résultat, continuez !' : 'Revoyez la leçon pour améliorer votre score.';

  result.innerHTML = `
    <div class="quiz-result-card">
      <div class="result-stars">${stars}</div>
      <h2>${score} / ${total}</h2>
      <div class="result-pct">${pct}%</div>
      <p class="result-msg">${msg}</p>
      <div class="quiz-answers-review">
        ${mod.quiz.map((q, i) => {
          const ans = state.quizAnswers[i];
          return `<div class="qa-item ${ans.correct ? 'qa-ok' : 'qa-ko'}">
            <span>${ans.correct ? '✅' : '❌'}</span>
            <div>
              <p class="qa-q">${q.q}</p>
              ${!ans.correct ? `<p class="qa-correct">Bonne réponse : ${q.choices[q.answer]}</p>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="result-btns">
        <button class="btn-secondary" onclick="startQuiz(${mod.id})">Refaire le quiz</button>
        <button class="btn-primary" onclick="goToDashboard()">Retour aux modules</button>
      </div>
    </div>
  `;
}

// ===== CERTIFICAT =====
function renderCert() {
  let totalScore = 0, totalMax = 0;
  MODULES.forEach(m => {
    if (state.progress[m.id].quizScore !== null) {
      totalScore += state.progress[m.id].quizScore;
      totalMax += m.quiz.length;
    }
  });
  const pct = Math.round((totalScore / totalMax) * 100);
  document.getElementById('cert-score').textContent = `Score global : ${totalScore}/${totalMax} (${pct}%)`;
  document.getElementById('cert-date').textContent = `Obtenu le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`;
}

// ===== CALCULATEURS =====
function ohmsCalc() {
  const u = parseFloat(document.getElementById('calc-u')?.value);
  const r = parseFloat(document.getElementById('calc-r')?.value);
  const i = parseFloat(document.getElementById('calc-i')?.value);
  const res = document.getElementById('calc-result');
  if (!res) return;

  const filled = [!isNaN(u), !isNaN(r), !isNaN(i)].filter(Boolean).length;
  if (filled < 2) { res.classList.add('hidden'); return; }

  let result = '';
  if (isNaN(u) && !isNaN(r) && !isNaN(i)) result = `<strong>U = R × I = ${r} × ${i} = ${(r * i).toFixed(3)} V</strong>`;
  else if (isNaN(r) && !isNaN(u) && !isNaN(i)) result = i === 0 ? '⚠️ Division par zéro' : `<strong>R = U ÷ I = ${u} ÷ ${i} = ${(u / i).toFixed(3)} Ω</strong>`;
  else if (isNaN(i) && !isNaN(u) && !isNaN(r)) result = r === 0 ? '⚠️ Division par zéro' : `<strong>I = U ÷ R = ${u} ÷ ${r} = ${(u / r).toFixed(4)} A = ${((u / r) * 1000).toFixed(2)} mA</strong>`;
  else result = '⚠️ Laissez un seul champ vide';

  res.innerHTML = result;
  res.classList.remove('hidden');
}

function powerCalc() {
  const w = parseFloat(document.getElementById('power-w')?.value);
  const h = parseFloat(document.getElementById('power-h')?.value);
  const price = parseFloat(document.getElementById('power-price')?.value) || 0.20;
  const res = document.getElementById('power-result');
  if (!res || isNaN(w) || isNaN(h)) { res?.classList.add('hidden'); return; }

  const kwhDay = (w * h) / 1000;
  const kwhMonth = kwhDay * 30;
  const kwhYear = kwhDay * 365;
  const costDay = kwhDay * price;
  const costMonth = kwhMonth * price;
  const costYear = kwhYear * price;

  res.innerHTML = `
    <div class="power-result-grid">
      <div><span class="pr-label">Consommation par jour</span><span class="pr-val">${kwhDay.toFixed(3)} kWh</span><span class="pr-cost">${costDay.toFixed(3)} €</span></div>
      <div><span class="pr-label">Par mois (30j)</span><span class="pr-val">${kwhMonth.toFixed(2)} kWh</span><span class="pr-cost">${costMonth.toFixed(2)} €</span></div>
      <div><span class="pr-label">Par an (365j)</span><span class="pr-val">${kwhYear.toFixed(1)} kWh</span><span class="pr-cost">${costYear.toFixed(2)} €</span></div>
    </div>
  `;
  res.classList.remove('hidden');
}

// ===== INIT =====
loadProgress();
renderHeroStats();
