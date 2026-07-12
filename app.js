// ===== STATE =====
let state = {
  currentModule: null,
  currentStep: 0,
  currentQuizQ: 0,
  quizAnswers: [],
  quizStartTime: null,
  progress: {}
  // progress[id]: { lessonDone, quizScore, bestQuizScore, quizHistory:[{score,date,durationSec}],
  //                 timeSpentSec, completedAt, lastVisitedAt, sessionSec }
};

// ===== TIMER =====
let timerInterval = null;
let sessionStart = null; // quand la leçon a commencé (cette session)

function startTimer(modId) {
  clearInterval(timerInterval);
  sessionStart = Date.now();
  timerInterval = setInterval(() => {
    const sessionSec = Math.floor((Date.now() - sessionStart) / 1000);
    const totalSec = (state.progress[modId].timeSpentSec || 0) + sessionSec;
    updateTimerDisplay(totalSec, sessionSec);
  }, 1000);
}

function stopTimer(modId) {
  if (!timerInterval || !sessionStart) return;
  clearInterval(timerInterval);
  timerInterval = null;
  const sessionSec = Math.floor((Date.now() - sessionStart) / 1000);
  state.progress[modId].timeSpentSec = (state.progress[modId].timeSpentSec || 0) + sessionSec;
  state.progress[modId].lastVisitedAt = new Date().toISOString();
  sessionStart = null;
  saveProgress();
}

function updateTimerDisplay(totalSec, sessionSec) {
  const el = document.getElementById('lesson-timer-display');
  const sel = document.getElementById('lesson-session-display');
  if (el) el.textContent = formatTime(totalSec);
  if (sel && sessionSec > 0) sel.textContent = `(+${formatTime(sessionSec)} cette session)`;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Pause timer quand onglet caché
document.addEventListener('visibilitychange', () => {
  if (!state.currentModule) return;
  if (document.hidden) {
    stopTimer(state.currentModule.id);
  } else {
    const screen = document.querySelector('.screen.active');
    if (screen && screen.id === 'screen-lesson') {
      startTimer(state.currentModule.id);
    }
  }
});

// ===== PROGRESS =====
function loadProgress() {
  try {
    const saved = localStorage.getItem('elec-formation-progress');
    if (saved) state.progress = JSON.parse(saved);
  } catch(e) {}
  MODULES.forEach(m => {
    if (!state.progress[m.id]) {
      state.progress[m.id] = {
        lessonDone: false, quizScore: null, bestQuizScore: null,
        quizHistory: [], timeSpentSec: 0,
        completedAt: null, lastVisitedAt: null
      };
    }
    // Migration des anciennes sauvegardes
    const p = state.progress[m.id];
    if (!p.quizHistory) p.quizHistory = [];
    if (!p.timeSpentSec) p.timeSpentSec = 0;
    if (p.bestQuizScore === undefined) p.bestQuizScore = p.quizScore;
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

function getTotalTime() {
  return MODULES.reduce((acc, m) => acc + (state.progress[m.id].timeSpentSec || 0), 0);
}

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function goToHome() {
  if (state.currentModule) stopTimer(state.currentModule.id);
  state.currentModule = null;
  renderHeroStats();
  showScreen('home');
}

function goToDashboard() {
  if (state.currentModule) stopTimer(state.currentModule.id);
  state.currentModule = null;
  renderDashboard();
  showScreen('dashboard');
}

function goToStats() {
  renderStats();
  showScreen('stats');
}

function goToCert() {
  renderCert();
  showScreen('cert');
}

// ===== HOME =====
function renderHeroStats() {
  const pct = getGlobalPercent();
  const total = getTotalTime();
  const el = document.getElementById('hero-stats');
  if (pct === 0) { el.innerHTML = ''; return; }
  el.innerHTML = `
    <div class="hero-stat-pill">✅ ${pct}% complété</div>
    ${total > 0 ? `<div class="hero-stat-pill">⏱ ${formatTime(total)} de formation</div>` : ''}
  `;
}

// ===== DASHBOARD =====
function renderDashboard() {
  const pct = getGlobalPercent();

  // Ring
  const circumference = 163.4;
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('global-ring-fill');
  const ringPct = document.getElementById('global-ring-pct');
  if (ring) { ring.style.strokeDashoffset = offset; }
  if (ringPct) ringPct.textContent = pct + '%';

  const totalTime = getTotalTime();
  const completedModules = MODULES.filter(m => state.progress[m.id].lessonDone).length;
  const quizzesDone = MODULES.filter(m => state.progress[m.id].quizScore !== null).length;
  const avgScore = quizzesDone > 0
    ? Math.round(MODULES.reduce((acc, m) => {
        const p = state.progress[m.id];
        return p.quizScore !== null ? acc + (p.quizScore / m.quiz.length) * 100 : acc;
      }, 0) / quizzesDone)
    : null;

  document.getElementById('global-percent').textContent =
    `${completedModules}/${MODULES.length} modules · ${quizzesDone} quiz · ${MODULES.length * 2 - countDone()} actions restantes`;

  document.getElementById('quick-stats-row').innerHTML = `
    <div class="qs-item"><span class="qs-val">${formatTime(totalTime)}</span><span class="qs-label">Temps total</span></div>
    <div class="qs-item"><span class="qs-val">${completedModules}</span><span class="qs-label">Leçons faites</span></div>
    <div class="qs-item"><span class="qs-val">${quizzesDone}</span><span class="qs-label">Quiz terminés</span></div>
    <div class="qs-item"><span class="qs-val">${avgScore !== null ? avgScore + '%' : '—'}</span><span class="qs-label">Score moyen</span></div>
  `;

  const list = document.getElementById('modules-list');
  list.innerHTML = '';
  MODULES.forEach((mod, idx) => {
    const p = state.progress[mod.id];
    const lessonDone = p.lessonDone;
    const quizDone = p.quizScore !== null;
    const locked = idx > 0 && !state.progress[MODULES[idx - 1].id].lessonDone;
    const timeSec = p.timeSpentSec || 0;
    const quizPct = quizDone ? Math.round((p.quizScore / mod.quiz.length) * 100) : null;

    const card = document.createElement('div');
    card.className = 'module-card' + (locked ? ' locked' : '');

    const statusLesson = lessonDone
      ? `<span class="badge done">✅ Leçon</span>`
      : `<span class="badge pending">📖 Leçon</span>`;

    const statusQuiz = quizDone
      ? `<span class="badge done ${quizPct >= 80 ? 'badge-gold' : ''}">🎯 Quiz ${p.quizScore}/${mod.quiz.length} (${quizPct}%)</span>`
      : (lessonDone ? '<span class="badge pending">❓ Quiz</span>' : '<span class="badge locked-badge">🔒 Quiz</span>');

    const timeTag = timeSec > 0 ? `<span class="badge time-badge">⏱ ${formatTime(timeSec)}</span>` : '';
    const lastVisit = p.lastVisitedAt
      ? `<span class="mc-last-visit">Dernière visite : ${formatDate(p.lastVisitedAt)}</span>` : '';

    card.innerHTML = `
      <div class="mc-progress-strip" style="width:${lessonDone && quizDone ? 100 : lessonDone ? 50 : 0}%"></div>
      <div class="mc-left">
        <span class="mc-icon">${mod.icon}</span>
        <div class="mc-info">
          <h3>${mod.title}</h3>
          <p>${mod.subtitle}</p>
          <div class="mc-badges">${statusLesson}${statusQuiz}${timeTag}</div>
          ${lastVisit}
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

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ===== STATS SCREEN =====
function renderStats() {
  const container = document.getElementById('stats-container');
  const totalTime = getTotalTime();
  const quizzesDone = MODULES.filter(m => state.progress[m.id].quizScore !== null);
  const avgScore = quizzesDone.length
    ? Math.round(quizzesDone.reduce((a, m) => a + (state.progress[m.id].quizScore / m.quiz.length) * 100, 0) / quizzesDone.length)
    : 0;

  // Chart temps par module (barres SVG)
  const maxTime = Math.max(...MODULES.map(m => state.progress[m.id].timeSpentSec || 0), 60);
  const timesBars = MODULES.map(m => {
    const t = state.progress[m.id].timeSpentSec || 0;
    const pct = (t / maxTime) * 100;
    return `
      <div class="chart-row">
        <span class="chart-label">${m.icon} ${m.title.length > 22 ? m.title.slice(0, 22) + '…' : m.title}</span>
        <div class="chart-bar-wrap">
          <div class="chart-bar-fill time-bar" style="width:${pct}%"></div>
        </div>
        <span class="chart-val">${t > 0 ? formatTime(t) : '—'}</span>
      </div>`;
  }).join('');

  // Chart scores par module
  const scoresBars = MODULES.map(m => {
    const p = state.progress[m.id];
    const pct = p.quizScore !== null ? (p.quizScore / m.quiz.length) * 100 : 0;
    const best = p.bestQuizScore !== null ? (p.bestQuizScore / m.quiz.length) * 100 : 0;
    const color = pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : pct > 0 ? '#ef4444' : '#2a3050';
    return `
      <div class="chart-row">
        <span class="chart-label">${m.icon} ${m.title.length > 22 ? m.title.slice(0, 22) + '…' : m.title}</span>
        <div class="chart-bar-wrap">
          ${best > pct ? `<div class="chart-bar-fill score-bar-best" style="width:${best}%"></div>` : ''}
          <div class="chart-bar-fill score-bar" style="width:${pct}%; background:${color}"></div>
        </div>
        <span class="chart-val">${p.quizScore !== null ? Math.round(pct) + '%' : '—'}</span>
      </div>`;
  }).join('');

  // Historique quiz (derniers 10)
  let allHistory = [];
  MODULES.forEach(m => {
    (state.progress[m.id].quizHistory || []).forEach(h => {
      allHistory.push({ modTitle: m.icon + ' ' + m.title, modTotal: m.quiz.length, ...h });
    });
  });
  allHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
  const historyRows = allHistory.slice(0, 10).map(h => {
    const pct = Math.round((h.score / h.modTotal) * 100);
    const medal = pct === 100 ? '🥇' : pct >= 80 ? '🥈' : pct >= 60 ? '🥉' : '📝';
    return `<div class="hist-row">
      <span class="hist-medal">${medal}</span>
      <div class="hist-info">
        <span class="hist-mod">${h.modTitle}</span>
        <span class="hist-date">${formatDate(h.date)}</span>
      </div>
      <div class="hist-score-wrap">
        <span class="hist-score ${pct >= 80 ? 'score-good' : pct >= 60 ? 'score-ok' : 'score-bad'}">${h.score}/${h.modTotal} — ${pct}%</span>
        ${h.durationSec ? `<span class="hist-time">⏱ ${formatTime(h.durationSec)}</span>` : ''}
      </div>
    </div>`;
  }).join('') || '<p class="no-data">Aucun quiz terminé pour l\'instant.</p>';

  container.innerHTML = `
    <!-- KPIs -->
    <div class="stats-kpis">
      <div class="kpi-card">
        <div class="kpi-icon">⏱</div>
        <div class="kpi-val">${formatTime(totalTime)}</div>
        <div class="kpi-label">Temps total de formation</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon">📖</div>
        <div class="kpi-val">${MODULES.filter(m => state.progress[m.id].lessonDone).length}<span class="kpi-total">/${MODULES.length}</span></div>
        <div class="kpi-label">Leçons complétées</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon">🎯</div>
        <div class="kpi-val">${avgScore > 0 ? avgScore + '%' : '—'}</div>
        <div class="kpi-label">Score moyen aux quiz</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon">🔥</div>
        <div class="kpi-val">${allHistory.length}</div>
        <div class="kpi-label">Quiz réalisés au total</div>
      </div>
    </div>

    <!-- Chart temps -->
    <div class="stats-section">
      <h3>⏱ Temps passé par module</h3>
      <div class="chart-container">${timesBars}</div>
      <p class="stats-note">Total : ${formatTime(totalTime)}</p>
    </div>

    <!-- Chart scores -->
    <div class="stats-section">
      <h3>🎯 Scores aux quiz par module</h3>
      <div class="chart-container">${scoresBars}</div>
      <div class="chart-legend">
        <span class="legend-item"><span class="legend-dot" style="background:#22c55e"></span>≥ 80%</span>
        <span class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span>60–79%</span>
        <span class="legend-item"><span class="legend-dot" style="background:#ef4444"></span>&lt; 60%</span>
        <span class="legend-item"><span class="legend-dot best-dot"></span>Meilleur score</span>
      </div>
    </div>

    <!-- Historique -->
    <div class="stats-section">
      <h3>📋 Historique des quiz</h3>
      <div class="history-list">${historyRows}</div>
    </div>

    <div class="stats-reset-zone">
      <button class="btn-danger" onclick="confirmReset()">🗑 Réinitialiser ma progression</button>
    </div>
  `;
}

function confirmReset() {
  if (confirm('Êtes-vous sûr ? Toute votre progression sera effacée.')) {
    localStorage.removeItem('elec-formation-progress');
    state.progress = {};
    loadProgress();
    goToDashboard();
  }
}

// ===== LESSON =====
function startLesson(modId) {
  if (state.currentModule) stopTimer(state.currentModule.id);
  state.currentModule = MODULES.find(m => m.id === modId);
  state.currentStep = 0;
  state.progress[modId].lastVisitedAt = new Date().toISOString();
  saveProgress();
  renderLesson();
  showScreen('lesson');
  startTimer(modId);
}

function renderLesson() {
  const mod = state.currentModule;
  const step = mod.steps[state.currentStep];
  const total = mod.steps.length;

  document.getElementById('lesson-nav-title').textContent = mod.icon + ' ' + mod.title;
  document.getElementById('lesson-nav-steps').textContent = `${state.currentStep + 1}/${total}`;
  document.getElementById('lesson-title').textContent = step.title;
  document.getElementById('lesson-subtitle').textContent = mod.subtitle;

  // Timer display init
  const totalSec = state.progress[mod.id].timeSpentSec || 0;
  const timerEl = document.getElementById('lesson-timer-display');
  if (timerEl) timerEl.textContent = formatTime(totalSec);

  const stepsEl = document.getElementById('lesson-steps');
  let dots = '<div class="step-dots">';
  for (let i = 0; i < total; i++) {
    dots += `<span class="dot ${i === state.currentStep ? 'active' : i < state.currentStep ? 'done' : ''}"></span>`;
  }
  dots += '</div>';
  stepsEl.innerHTML = dots + `<div class="step-content">${step.content}</div>`;

  document.getElementById('btn-prev').style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';
  const isLast = state.currentStep === total - 1;
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = isLast ? '✅ Terminer la leçon' : 'Suivant →';
  btnNext.style.display = '';
}

function nextStep() {
  const mod = state.currentModule;
  if (state.currentStep < mod.steps.length - 1) {
    state.currentStep++;
    renderLesson();
  } else {
    state.progress[mod.id].lessonDone = true;
    state.progress[mod.id].completedAt = new Date().toISOString();
    stopTimer(mod.id);
    saveProgress();
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
  document.getElementById('lesson-nav-steps').textContent = '✅ Terminé';
  document.getElementById('lesson-title').textContent = '🎉 Leçon terminée !';
  document.getElementById('lesson-subtitle').textContent = mod.title;
  document.getElementById('lesson-steps').innerHTML = `
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
  if (state.currentModule) stopTimer(state.currentModule.id);
  state.currentModule = MODULES.find(m => m.id === modId);
  state.currentQuizQ = 0;
  state.quizAnswers = [];
  state.quizStartTime = Date.now();
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
      ${q.choices.map((c, i) => `<button class="choice-btn" onclick="answerQuiz(${i})">${c}</button>`).join('')}
    </div>
  `;
}

function answerQuiz(choiceIdx) {
  const mod = state.currentModule;
  const q = mod.quiz[state.currentQuizQ];
  const correct = choiceIdx === q.answer;
  state.quizAnswers.push({ correct, chosen: choiceIdx });

  const block = document.getElementById('quiz-question-block');
  block.querySelectorAll('.choice-btn').forEach((btn, i) => {
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
    else { state.currentQuizQ++; renderQuizQuestion(); }
  };
  block.appendChild(nextBtn);
}

function showQuizResult() {
  const mod = state.currentModule;
  const score = state.quizAnswers.filter(a => a.correct).length;
  const total = mod.quiz.length;
  const pct = Math.round((score / total) * 100);
  const durationSec = Math.floor((Date.now() - state.quizStartTime) / 1000);

  const p = state.progress[mod.id];
  p.quizScore = score;
  if (p.bestQuizScore === null || score > p.bestQuizScore) p.bestQuizScore = score;
  if (!p.quizHistory) p.quizHistory = [];
  p.quizHistory.push({ score, date: new Date().toISOString(), durationSec });
  saveProgress();

  document.getElementById('quiz-question-block').innerHTML = '';
  const result = document.getElementById('quiz-result-block');
  result.classList.remove('hidden');

  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const msg = pct === 100 ? 'Parfait ! Score parfait !' : pct >= 80 ? 'Excellent travail !' : pct >= 60 ? 'Bon résultat, continuez !' : 'Revoyez la leçon pour améliorer votre score.';
  const isBest = p.bestQuizScore === score && p.quizHistory.length > 1;

  result.innerHTML = `
    <div class="quiz-result-card">
      <div class="result-stars">${stars}</div>
      <h2>${score} / ${total}</h2>
      <div class="result-pct">${pct}%</div>
      ${isBest ? '<div class="new-best-badge">🏆 Nouveau meilleur score !</div>' : ''}
      <p class="result-msg">${msg}</p>
      <div class="result-meta">
        <span>⏱ Quiz réalisé en ${formatTime(durationSec)}</span>
        ${p.quizHistory.length > 1 ? `<span>📊 Meilleur score : ${Math.round((p.bestQuizScore / total) * 100)}%</span>` : ''}
        <span>🔁 Tentatives : ${p.quizHistory.length}</span>
      </div>
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
  let totalScore = 0, totalMax = 0, totalTime = 0;
  MODULES.forEach(m => {
    const p = state.progress[m.id];
    if (p.quizScore !== null) { totalScore += p.quizScore; totalMax += m.quiz.length; }
    totalTime += p.timeSpentSec || 0;
  });
  const pct = Math.round((totalScore / totalMax) * 100);
  document.getElementById('cert-score').textContent = `Score global : ${totalScore}/${totalMax} (${pct}%)`;
  document.getElementById('cert-date').textContent = `Obtenu le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · Temps total : ${formatTime(totalTime)}`;
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
  const costDay = kwhDay * price;
  res.innerHTML = `
    <div class="power-result-grid">
      <div><span class="pr-label">Par jour</span><span class="pr-val">${kwhDay.toFixed(3)} kWh</span><span class="pr-cost">${costDay.toFixed(3)} €</span></div>
      <div><span class="pr-label">Par mois (30j)</span><span class="pr-val">${(kwhDay*30).toFixed(2)} kWh</span><span class="pr-cost">${(costDay*30).toFixed(2)} €</span></div>
      <div><span class="pr-label">Par an (365j)</span><span class="pr-val">${(kwhDay*365).toFixed(1)} kWh</span><span class="pr-cost">${(costDay*365).toFixed(2)} €</span></div>
    </div>`;
  res.classList.remove('hidden');
}

// ===== INIT =====
loadProgress();
renderHeroStats();
