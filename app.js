// =====================================================
//  ÉlecAcademy — moteur de l'application
// =====================================================

let state = {
  currentModule: null,
  currentStep: 0,
  currentQuizQ: 0,
  quizAnswers: [],
  quizStartTime: null,
  progress: {},   // par module
  meta: null      // xp, badges, streak, activité
};

// Flashcards
let fcDeck = [], fcIndex = 0, fcFlipped = false, fcWhich = 'all';

// ===== NIVEAUX =====
const LEVELS = [
  { xp: 0,    name: "Curieux" },
  { xp: 100,  name: "Apprenti" },
  { xp: 300,  name: "Bricoleur averti" },
  { xp: 600,  name: "Technicien junior" },
  { xp: 1000, name: "Technicien" },
  { xp: 1500, name: "Électricien" },
  { xp: 2200, name: "Électricien confirmé" },
  { xp: 3000, name: "Expert" },
  { xp: 4000, name: "Maître électricien" },
  { xp: 5500, name: "Légende ⚡" }
];

function getLevel(xp) {
  let lvl = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) lvl = i;
  const cur = LEVELS[lvl];
  const next = LEVELS[lvl + 1] || null;
  const pctToNext = next ? Math.min(100, Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100)) : 100;
  return { index: lvl + 1, name: cur.name, next, pctToNext, xp };
}

// ===== BADGES =====
const BADGES = [
  { id: 'first-lesson',  icon: '📖', name: 'Premiers pas',      desc: 'Terminer sa première leçon',            check: () => MODULES.some(m => state.progress[m.id].lessonDone) },
  { id: 'first-quiz',    icon: '🎯', name: 'Premier quiz',      desc: 'Terminer son premier quiz',             check: () => MODULES.some(m => state.progress[m.id].quizScore !== null) },
  { id: 'perfect',       icon: '💯', name: 'Sans faute',        desc: 'Obtenir 100% à un quiz',                check: () => MODULES.some(m => state.progress[m.id].bestQuizScore === m.quiz.length) },
  { id: 'three-modules', icon: '🥉', name: 'Sur la lancée',     desc: 'Compléter 3 modules (leçon + quiz)',    check: () => MODULES.filter(m => state.progress[m.id].lessonDone && state.progress[m.id].quizScore !== null).length >= 3 },
  { id: 'half',          icon: '🥈', name: 'Mi-parcours',       desc: 'Compléter la moitié de la formation',   check: () => getGlobalPercent() >= 50 },
  { id: 'all-modules',   icon: '🥇', name: 'Diplômé',           desc: 'Compléter les 12 modules',              check: () => MODULES.every(m => state.progress[m.id].lessonDone && state.progress[m.id].quizScore !== null) },
  { id: 'one-hour',      icon: '⏱', name: 'Studieux',          desc: "Cumuler 1 heure de formation",          check: () => getTotalTime() >= 3600 },
  { id: 'streak-3',      icon: '🔥', name: 'Régulier',          desc: '3 jours de suite',                      check: () => state.meta.streakCount >= 3 },
  { id: 'streak-7',      icon: '🚀', name: 'Semaine parfaite',  desc: '7 jours de suite',                      check: () => state.meta.streakCount >= 7 },
  { id: 'retry',         icon: '💪', name: 'Persévérant',       desc: 'Refaire un quiz pour améliorer son score', check: () => MODULES.some(m => (state.progress[m.id].quizHistory || []).length >= 2) },
  { id: 'flashcards-20', icon: '🃏', name: 'Réviseur',          desc: 'Retourner 20 flashcards',               check: () => (state.meta.fcFlips || 0) >= 20 },
  { id: 'all-perfect',   icon: '👑', name: 'Perfectionniste',   desc: '100% à tous les quiz',                  check: () => MODULES.every(m => state.progress[m.id].bestQuizScore === m.quiz.length) }
];

// =====================================================
//  PERSISTANCE
// =====================================================
function loadProgress() {
  try {
    const saved = localStorage.getItem('elec-formation-progress');
    if (saved) state.progress = JSON.parse(saved);
  } catch(e) {}
  try {
    const meta = localStorage.getItem('elec-formation-meta');
    state.meta = meta ? JSON.parse(meta) : null;
  } catch(e) {}
  if (!state.meta) state.meta = { xp: 0, badges: [], activity: {}, streakCount: 0, lastStudyDay: null, lessonPos: {}, fcFlips: 0 };
  if (!state.meta.lessonPos) state.meta.lessonPos = {};
  if (!state.meta.activity) state.meta.activity = {};
  if (!state.meta.badges) state.meta.badges = [];

  MODULES.forEach(m => {
    if (!state.progress[m.id]) {
      state.progress[m.id] = { lessonDone: false, quizScore: null, bestQuizScore: null, quizHistory: [], timeSpentSec: 0, completedAt: null, lastVisitedAt: null };
    }
    const p = state.progress[m.id];
    if (!p.quizHistory) p.quizHistory = [];
    if (!p.timeSpentSec) p.timeSpentSec = 0;
    if (p.bestQuizScore === undefined) p.bestQuizScore = p.quizScore;
  });
}

function saveProgress() {
  localStorage.setItem('elec-formation-progress', JSON.stringify(state.progress));
  localStorage.setItem('elec-formation-meta', JSON.stringify(state.meta));
}

// =====================================================
//  XP / STREAK / BADGES
// =====================================================
function addXp(n, label) {
  const before = getLevel(state.meta.xp);
  state.meta.xp += n;
  const after = getLevel(state.meta.xp);
  saveProgress();
  if (label) toast(`+${n} XP · ${label}`, '⚡');
  if (after.index > before.index) toast(`Niveau ${after.index} — ${after.name} !`, '🎉', 'toast-level');
  checkBadges();
}

function todayKey(d) {
  const dt = d || new Date();
  return dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
}

function recordActivity(sec) {
  if (sec <= 0) return;
  const key = todayKey();
  state.meta.activity[key] = (state.meta.activity[key] || 0) + sec;
  // Streak
  if (state.meta.lastStudyDay !== key) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    state.meta.streakCount = (state.meta.lastStudyDay === todayKey(yesterday)) ? (state.meta.streakCount || 0) + 1 : 1;
    state.meta.lastStudyDay = key;
  }
  saveProgress();
  checkBadges();
}

function getStreak() {
  const key = todayKey();
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  // Le streak est encore valide si on a étudié aujourd'hui ou hier
  if (state.meta.lastStudyDay === key || state.meta.lastStudyDay === todayKey(yesterday)) return state.meta.streakCount || 0;
  return 0;
}

function checkBadges() {
  BADGES.forEach(b => {
    if (!state.meta.badges.includes(b.id) && b.check()) {
      state.meta.badges.push(b.id);
      saveProgress();
      toast(`Badge débloqué : ${b.name}`, b.icon, 'toast-badge');
    }
  });
}

// =====================================================
//  TOASTS
// =====================================================
let toastCount = 0;
function toast(msg, icon, cls) {
  const zone = document.getElementById('toast-zone');
  const el = document.createElement('div');
  el.className = 'toast ' + (cls || '');
  el.innerHTML = `<span class="toast-icon">${icon || 'ℹ️'}</span><span>${msg}</span>`;
  zone.appendChild(el);
  toastCount++;
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 2600 + Math.min(toastCount * 150, 900));
  setTimeout(() => toastCount = Math.max(0, toastCount - 1), 3000);
}

// =====================================================
//  TIMER
// =====================================================
let timerInterval = null;
let sessionStart = null;

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
  recordActivity(sessionSec);
  saveProgress();
}

function updateTimerDisplay(totalSec, sessionSec) {
  const el = document.getElementById('lesson-timer-display');
  const sel = document.getElementById('lesson-session-display');
  if (el) el.textContent = formatTime(totalSec);
  if (sel && sessionSec > 0) sel.textContent = `(+${formatTime(sessionSec)} cette session)`;
}

function formatTime(sec) {
  if (sec >= 3600) {
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
    return `${h}h${String(m).padStart(2, '0')}`;
  }
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

document.addEventListener('visibilitychange', () => {
  if (!state.currentModule) return;
  if (document.hidden) stopTimer(state.currentModule.id);
  else {
    const screen = document.querySelector('.screen.active');
    if (screen && screen.id === 'screen-lesson') startTimer(state.currentModule.id);
  }
});

// =====================================================
//  HELPERS
// =====================================================
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

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =====================================================
//  NAVIGATION
// =====================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function leaveModule() {
  if (state.currentModule) stopTimer(state.currentModule.id);
  state.currentModule = null;
}

function goToHome()      { leaveModule(); renderHome(); showScreen('home'); }
function goToDashboard() { leaveModule(); renderDashboard(); showScreen('dashboard'); }
function goToStats()     { leaveModule(); renderStats(); showScreen('stats'); }
function goToCert()      { leaveModule(); renderCert(); showScreen('cert'); }
function goToGlossary()  { leaveModule(); renderGlossary(); showScreen('glossary'); }
function goToFlashcards(){ leaveModule(); renderFcSetup(); showScreen('flashcards'); }

// =====================================================
//  ACCUEIL
// =====================================================
function renderHome() {
  const pct = getGlobalPercent();
  const total = getTotalTime();
  const lvl = getLevel(state.meta.xp);
  const streak = getStreak();

  const statsEl = document.getElementById('hero-stats');
  if (pct === 0 && state.meta.xp === 0) {
    statsEl.innerHTML = '';
    document.getElementById('hero-cta-btn').textContent = 'Commencer la formation →';
  } else {
    statsEl.innerHTML = `
      <div class="hero-stat-pill">📈 ${pct}% complété</div>
      <div class="hero-stat-pill">⚡ ${state.meta.xp} XP · Niv. ${lvl.index}</div>
      ${total > 0 ? `<div class="hero-stat-pill">⏱ ${formatTime(total)}</div>` : ''}
      ${streak > 0 ? `<div class="hero-stat-pill streak">🔥 ${streak} jour${streak > 1 ? 's' : ''}</div>` : ''}
    `;
    document.getElementById('hero-cta-btn').textContent = 'Continuer la formation →';
  }

  const totalLessons = MODULES.reduce((a, m) => a + m.steps.length, 0);
  const totalQuiz = MODULES.reduce((a, m) => a + m.quiz.length, 0);
  document.getElementById('hero-meta').innerHTML =
    `${MODULES.length} modules · ${totalLessons} leçons · ${totalQuiz} questions de quiz · 100% gratuit`;

  // Grille programme
  const grid = document.getElementById('overview-grid');
  grid.innerHTML = MODULES.map((m, i) => {
    const p = state.progress[m.id];
    const done = p.lessonDone && p.quizScore !== null;
    return `
      <div class="overview-card ${done ? 'ov-done' : ''}" onclick="goToDashboard()">
        <div class="ov-top"><span class="ov-icon">${m.icon}</span><span class="ov-num">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${m.title}</h3>
        <p>${m.subtitle}</p>
        ${done ? '<span class="ov-check">✓ Terminé</span>' : ''}
      </div>`;
  }).join('');
}

// =====================================================
//  DASHBOARD
// =====================================================
function renderDashboard() {
  const pct = getGlobalPercent();
  const lvl = getLevel(state.meta.xp);
  const streak = getStreak();

  // Carte joueur
  document.getElementById('player-card').innerHTML = `
    <div class="pc-level-ring">
      <span class="pc-level-num">${lvl.index}</span>
    </div>
    <div class="pc-info">
      <div class="pc-name">${lvl.name}</div>
      <div class="pc-xp-bar"><div class="pc-xp-fill" style="width:${lvl.pctToNext}%"></div></div>
      <div class="pc-xp-label">${state.meta.xp} XP${lvl.next ? ` · ${lvl.next.xp - state.meta.xp} XP avant « ${lvl.next.name} »` : ' · Niveau max !'}</div>
    </div>
    <div class="pc-side">
      <div class="pc-streak ${streak > 0 ? 'lit' : ''}">🔥 ${streak}</div>
      <div class="pc-streak-label">jour${streak > 1 ? 's' : ''} de suite</div>
    </div>
  `;

  // Ring
  const circumference = 163.4;
  const ring = document.getElementById('global-ring-fill');
  if (ring) ring.style.strokeDashoffset = circumference - (pct / 100) * circumference;
  const ringPct = document.getElementById('global-ring-pct');
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
    `${completedModules}/${MODULES.length} leçons · ${quizzesDone}/${MODULES.length} quiz`;

  document.getElementById('quick-stats-row').innerHTML = `
    <div class="qs-item"><span class="qs-val">${formatTime(totalTime)}</span><span class="qs-label">Temps total</span></div>
    <div class="qs-item"><span class="qs-val">${completedModules}</span><span class="qs-label">Leçons faites</span></div>
    <div class="qs-item"><span class="qs-val">${quizzesDone}</span><span class="qs-label">Quiz terminés</span></div>
    <div class="qs-item"><span class="qs-val">${avgScore !== null ? avgScore + '%' : '—'}</span><span class="qs-label">Score moyen</span></div>
  `;

  renderModuleList();
}

function renderModuleList() {
  const query = (document.getElementById('module-search')?.value || '').toLowerCase().trim();
  const list = document.getElementById('modules-list');
  list.innerHTML = '';

  MODULES.forEach((mod, idx) => {
    if (query && !(mod.title.toLowerCase().includes(query) || mod.subtitle.toLowerCase().includes(query))) return;

    const p = state.progress[mod.id];
    const lessonDone = p.lessonDone;
    const quizDone = p.quizScore !== null;
    const locked = idx > 0 && !state.progress[MODULES[idx - 1].id].lessonDone;
    const timeSec = p.timeSpentSec || 0;
    const quizPct = quizDone ? Math.round((p.quizScore / mod.quiz.length) * 100) : null;
    const resumePos = state.meta.lessonPos[mod.id];
    const canResume = !lessonDone && resumePos > 0;

    const card = document.createElement('div');
    card.className = 'module-card' + (locked ? ' locked' : '') + (lessonDone && quizDone ? ' complete' : '');

    const statusLesson = lessonDone
      ? `<span class="badge done">✓ Leçon</span>`
      : canResume
        ? `<span class="badge pending">📖 Étape ${resumePos + 1}/${mod.steps.length}</span>`
        : `<span class="badge pending">📖 Leçon</span>`;

    const statusQuiz = quizDone
      ? `<span class="badge done ${quizPct === 100 ? 'badge-gold' : ''}">${quizPct === 100 ? '💯' : '🎯'} ${p.quizScore}/${mod.quiz.length}</span>`
      : (lessonDone ? '<span class="badge pending">❓ Quiz</span>' : '<span class="badge locked-badge">🔒 Quiz</span>');

    const timeTag = timeSec > 0 ? `<span class="badge time-badge">⏱ ${formatTime(timeSec)}</span>` : '';

    card.innerHTML = `
      <div class="mc-progress-strip" style="width:${lessonDone && quizDone ? 100 : lessonDone ? 50 : canResume ? Math.round((resumePos / mod.steps.length) * 50) : 0}%"></div>
      <div class="mc-left">
        <span class="mc-icon">${mod.icon}</span>
        <div class="mc-info">
          <h3><span class="mc-num">${String(idx + 1).padStart(2, '0')}</span> ${mod.title}</h3>
          <p>${mod.subtitle}</p>
          <div class="mc-badges">${statusLesson}${statusQuiz}${timeTag}</div>
        </div>
      </div>
      <div class="mc-right">
        ${locked
          ? '<span class="mc-lock" title="Terminez le module précédent">🔒</span>'
          : `<button class="btn-lesson" onclick="startLesson(${mod.id})">${lessonDone ? 'Revoir' : canResume ? '▶ Reprendre' : 'Commencer'}</button>
             ${lessonDone ? `<button class="btn-quiz" onclick="startQuiz(${mod.id})">${quizDone ? 'Refaire quiz' : 'Faire le quiz'}</button>` : ''}`
        }
      </div>
    `;
    list.appendChild(card);
  });

  const allDone = MODULES.every(m => state.progress[m.id].lessonDone && state.progress[m.id].quizScore !== null);
  if (allDone && !query) {
    const certCard = document.createElement('div');
    certCard.className = 'cert-unlock-card';
    certCard.innerHTML = `<span>🏆</span><div><h3>Formation complète !</h3><p>Félicitations, vous avez tout terminé.</p></div><button class="btn-primary" onclick="goToCert()">Mon certificat</button>`;
    list.appendChild(certCard);
  }
}

// =====================================================
//  LEÇON
// =====================================================
function startLesson(modId) {
  leaveModule();
  state.currentModule = MODULES.find(m => m.id === modId);
  const saved = state.meta.lessonPos[modId];
  state.currentStep = (!state.progress[modId].lessonDone && saved > 0 && saved < state.currentModule.steps.length) ? saved : 0;
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

  // Sauvegarde de la position
  if (!state.progress[mod.id].lessonDone) {
    state.meta.lessonPos[mod.id] = state.currentStep;
    saveProgress();
  }

  document.getElementById('lesson-nav-title').textContent = mod.icon + ' ' + mod.title;
  document.getElementById('lesson-nav-steps').textContent = `${state.currentStep + 1}/${total}`;
  document.getElementById('lesson-title').textContent = step.title;
  document.getElementById('lesson-subtitle').textContent = mod.subtitle;
  document.getElementById('lesson-progress-fill').style.width = `${((state.currentStep + 1) / total) * 100}%`;

  const totalSec = state.progress[mod.id].timeSpentSec || 0;
  const timerEl = document.getElementById('lesson-timer-display');
  if (timerEl) timerEl.textContent = formatTime(totalSec);
  const sessEl = document.getElementById('lesson-session-display');
  if (sessEl) sessEl.textContent = '';

  const stepsEl = document.getElementById('lesson-steps');
  let dots = '<div class="step-dots">';
  for (let i = 0; i < total; i++) {
    dots += `<span class="dot ${i === state.currentStep ? 'active' : i < state.currentStep ? 'done' : ''}" onclick="jumpToStep(${i})" title="Étape ${i + 1}"></span>`;
  }
  dots += '</div>';
  stepsEl.innerHTML = dots + `<div class="step-content">${step.content}</div>`;

  document.getElementById('btn-prev').style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';
  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = state.currentStep === total - 1 ? '✓ Terminer la leçon' : 'Suivant →';
  btnNext.style.display = '';
}

function jumpToStep(i) {
  const maxReached = state.progress[state.currentModule.id].lessonDone
    ? state.currentModule.steps.length - 1
    : Math.max(state.currentStep, state.meta.lessonPos[state.currentModule.id] || 0);
  if (i <= maxReached) { state.currentStep = i; renderLesson(); }
}

function nextStep() {
  const mod = state.currentModule;
  if (state.currentStep < mod.steps.length - 1) {
    state.currentStep++;
    renderLesson();
  } else {
    const firstTime = !state.progress[mod.id].lessonDone;
    state.progress[mod.id].lessonDone = true;
    state.progress[mod.id].completedAt = new Date().toISOString();
    delete state.meta.lessonPos[mod.id];
    stopTimer(mod.id);
    saveProgress();
    if (firstTime) addXp(50, 'Leçon terminée');
    checkBadges();
    showQuizPrompt(mod.id);
  }
}

function prevStep() {
  if (state.currentStep > 0) { state.currentStep--; renderLesson(); }
}

function showQuizPrompt(modId) {
  const mod = MODULES.find(m => m.id === modId);
  document.getElementById('lesson-nav-steps').textContent = '✓ Terminé';
  document.getElementById('lesson-title').textContent = '🎉 Leçon terminée !';
  document.getElementById('lesson-subtitle').textContent = mod.title;
  document.getElementById('lesson-progress-fill').style.width = '100%';
  document.getElementById('lesson-steps').innerHTML = `
    <div class="step-content quiz-prompt">
      <div class="qp-icon">🎓</div>
      <p>Vous avez complété toutes les étapes de ce module.<br/>Prêt à valider vos connaissances ?</p>
      <div class="quiz-prompt-btns">
        <button class="btn-primary btn-lg" onclick="startQuiz(${modId})">Faire le quiz →</button>
        <button class="btn-secondary" onclick="goToDashboard()">Plus tard</button>
      </div>
    </div>`;
  document.getElementById('btn-prev').style.visibility = 'hidden';
  document.getElementById('btn-next').style.display = 'none';
}

// Navigation clavier dans les leçons
document.addEventListener('keydown', (e) => {
  const active = document.querySelector('.screen.active');
  if (!active || active.id !== 'screen-lesson' || !state.currentModule) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight') nextStep();
  if (e.key === 'ArrowLeft') prevStep();
});

// =====================================================
//  QUIZ
// =====================================================
let quizOrder = []; // ordre mélangé des choix pour la question courante

function startQuiz(modId) {
  leaveModule();
  state.currentModule = MODULES.find(m => m.id === modId);
  state.currentQuizQ = 0;
  state.quizAnswers = [];
  state.quizStartTime = Date.now();
  renderQuizQuestion();
  showScreen('quiz');
}

function renderQuizQuestion() {
  const mod = state.currentModule;
  const q = mod.quiz[state.currentQuizQ];
  const total = mod.quiz.length;

  quizOrder = shuffle(q.choices.map((_, i) => i));

  document.getElementById('quiz-nav-title').textContent = mod.icon + ' Quiz — ' + mod.title;
  document.getElementById('quiz-nav-progress').textContent = `${state.currentQuizQ + 1}/${total}`;
  document.getElementById('quiz-progress-fill').style.width = `${(state.currentQuizQ / total) * 100}%`;
  document.getElementById('quiz-result-block').classList.add('hidden');

  const block = document.getElementById('quiz-question-block');
  block.innerHTML = `
    <div class="quiz-q-num">Question ${state.currentQuizQ + 1} / ${total}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-choices">
      ${quizOrder.map(origIdx => `<button class="choice-btn" onclick="answerQuiz(${origIdx})">${q.choices[origIdx]}</button>`).join('')}
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
  buttons.forEach((btn, pos) => {
    const origIdx = quizOrder[pos];
    btn.disabled = true;
    if (origIdx === q.answer) btn.classList.add('correct');
    else if (origIdx === choiceIdx && !correct) btn.classList.add('wrong');
  });

  const expl = document.createElement('div');
  expl.className = 'quiz-explanation ' + (correct ? 'expl-correct' : 'expl-wrong');
  expl.innerHTML = `<strong>${correct ? '✓ Correct !' : '✗ Incorrect'}</strong><p>${q.explanation}</p>`;
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
  nextBtn.focus();
}

function showQuizResult() {
  const mod = state.currentModule;
  const score = state.quizAnswers.filter(a => a.correct).length;
  const total = mod.quiz.length;
  const pct = Math.round((score / total) * 100);
  const durationSec = Math.floor((Date.now() - state.quizStartTime) / 1000);

  const p = state.progress[mod.id];
  const firstTime = p.quizScore === null;
  const prevBest = p.bestQuizScore;
  p.quizScore = score;
  if (p.bestQuizScore === null || score > p.bestQuizScore) p.bestQuizScore = score;
  p.quizHistory.push({ score, date: new Date().toISOString(), durationSec });
  saveProgress();

  // XP : 10 par bonne réponse (première fois), bonus perfect
  if (firstTime) {
    addXp(score * 10, `${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}`);
    if (score === total) addXp(50, 'Quiz parfait !');
  } else if (prevBest !== null && score > prevBest) {
    addXp((score - prevBest) * 10, 'Record battu');
  }
  checkBadges();

  document.getElementById('quiz-progress-fill').style.width = '100%';
  document.getElementById('quiz-question-block').innerHTML = '';
  const result = document.getElementById('quiz-result-block');
  result.classList.remove('hidden');

  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const msg = pct === 100 ? 'Score parfait, bravo !' : pct >= 80 ? 'Excellent travail !' : pct >= 60 ? 'Bon résultat, continuez !' : 'Revoyez la leçon pour progresser.';
  const isBest = p.bestQuizScore === score && p.quizHistory.length > 1 && prevBest !== null && score > prevBest;

  result.innerHTML = `
    <div class="quiz-result-card">
      <div class="result-stars">${stars}</div>
      <h2>${score} / ${total}</h2>
      <div class="result-pct">${pct}%</div>
      ${isBest ? '<div class="new-best-badge">🏆 Nouveau record !</div>' : ''}
      <p class="result-msg">${msg}</p>
      <div class="result-meta">
        <span>⏱ ${formatTime(durationSec)}</span>
        <span>📊 Meilleur : ${Math.round((p.bestQuizScore / total) * 100)}%</span>
        <span>🔁 Tentative n°${p.quizHistory.length}</span>
      </div>
      <div class="quiz-answers-review">
        ${mod.quiz.map((q, i) => {
          const ans = state.quizAnswers[i];
          return `<div class="qa-item ${ans.correct ? 'qa-ok' : 'qa-ko'}">
            <span>${ans.correct ? '✓' : '✗'}</span>
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

  if (pct === 100) confetti();
}

// =====================================================
//  FLASHCARDS
// =====================================================
function renderFcSetup() {
  const container = document.getElementById('fc-container');
  document.getElementById('fc-progress').textContent = '';
  const available = MODULES.filter(m => state.progress[m.id].lessonDone);

  container.innerHTML = `
    <div class="fc-setup">
      <div class="fc-setup-icon">🃏</div>
      <h1>Mode révision</h1>
      <p>Révisez les notions clés sous forme de cartes mémoire.<br/>Lisez la question, réfléchissez, puis retournez la carte.</p>
      <div class="fc-deck-choices">
        <button class="fc-deck-btn" onclick="startFlashcards('all')">
          <span class="fdb-icon">🎲</span>
          <span class="fdb-title">Tout mélanger</span>
          <span class="fdb-sub">${MODULES.reduce((a, m) => a + m.quiz.length, 0)} cartes, tous modules</span>
        </button>
        ${available.length ? `<button class="fc-deck-btn" onclick="startFlashcards('done')">
          <span class="fdb-icon">✓</span>
          <span class="fdb-title">Modules étudiés</span>
          <span class="fdb-sub">${available.reduce((a, m) => a + m.quiz.length, 0)} cartes des modules terminés</span>
        </button>` : ''}
      </div>
      <div class="fc-module-grid">
        ${MODULES.map(m => `<button class="fc-mod-chip" onclick="startFlashcards(${m.id})">${m.icon} ${m.title}</button>`).join('')}
      </div>
    </div>
  `;
}

function startFlashcards(which) {
  fcWhich = which;
  let mods;
  if (which === 'all') mods = MODULES;
  else if (which === 'done') mods = MODULES.filter(m => state.progress[m.id].lessonDone);
  else mods = MODULES.filter(m => m.id === which);

  fcDeck = shuffle(mods.flatMap(m => m.quiz.map(q => ({
    mod: m.icon + ' ' + m.title,
    front: q.q,
    back: q.choices[q.answer],
    explanation: q.explanation
  }))));
  fcIndex = 0;
  fcFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const container = document.getElementById('fc-container');
  if (!fcDeck.length) { renderFcSetup(); return; }
  const card = fcDeck[fcIndex];
  document.getElementById('fc-progress').textContent = `${fcIndex + 1}/${fcDeck.length}`;

  container.innerHTML = `
    <div class="fc-play">
      <div class="fc-mod-label">${card.mod}</div>
      <div class="fc-card ${fcFlipped ? 'flipped' : ''}" onclick="flipCard()">
        <div class="fc-face fc-front">
          <span class="fc-hint">Question</span>
          <p>${card.front}</p>
          <span class="fc-tap">👆 Toucher pour retourner</span>
        </div>
        <div class="fc-face fc-back">
          <span class="fc-hint">Réponse</span>
          <p class="fc-answer">${card.back}</p>
          <p class="fc-expl">${card.explanation}</p>
        </div>
      </div>
      <div class="fc-controls">
        <button class="btn-secondary" onclick="fcPrev()" ${fcIndex === 0 ? 'disabled' : ''}>←</button>
        <button class="btn-ghost" onclick="restartFc()">🔀 Remélanger</button>
        <button class="btn-primary" onclick="fcNext()">${fcIndex === fcDeck.length - 1 ? 'Terminer ✓' : '→'}</button>
      </div>
      <p class="fc-kb-hint">Espace : retourner · ← → : naviguer</p>
    </div>
  `;
}

function restartFc() { startFlashcards(fcWhich); }

function flipCard() {
  fcFlipped = !fcFlipped;
  if (fcFlipped) {
    state.meta.fcFlips = (state.meta.fcFlips || 0) + 1;
    saveProgress();
    checkBadges();
  }
  document.querySelector('.fc-card')?.classList.toggle('flipped', fcFlipped);
}

function fcNext() {
  if (fcIndex < fcDeck.length - 1) { fcIndex++; fcFlipped = false; renderFlashcard(); }
  else { toast('Session de révision terminée !', '🎉'); renderFcSetup(); }
}
function fcPrev() {
  if (fcIndex > 0) { fcIndex--; fcFlipped = false; renderFlashcard(); }
}

document.addEventListener('keydown', (e) => {
  const active = document.querySelector('.screen.active');
  if (!active || active.id !== 'screen-flashcards' || !fcDeck.length) return;
  if (!document.querySelector('.fc-card')) return;
  if (e.key === ' ') { e.preventDefault(); flipCard(); }
  if (e.key === 'ArrowRight') fcNext();
  if (e.key === 'ArrowLeft') fcPrev();
});

// =====================================================
//  GLOSSAIRE
// =====================================================
function renderGlossary() {
  const query = (document.getElementById('glossary-search')?.value || '').toLowerCase().trim();
  const list = document.getElementById('glossary-list');
  const items = GLOSSARY.filter(g => !query || g.term.toLowerCase().includes(query) || g.def.toLowerCase().includes(query));
  list.innerHTML = items.length
    ? items.map(g => `
      <div class="gloss-item">
        <div class="gloss-head"><span class="gloss-term">${g.term}</span>${g.unit && g.unit !== '—' ? `<span class="gloss-unit">${g.unit}</span>` : ''}</div>
        <p>${g.def}</p>
      </div>`).join('')
    : '<p class="no-data">Aucun terme trouvé.</p>';
}

// =====================================================
//  STATS
// =====================================================
function renderStats() {
  const container = document.getElementById('stats-container');
  const totalTime = getTotalTime();
  const lvl = getLevel(state.meta.xp);
  const streak = getStreak();
  const quizzesDone = MODULES.filter(m => state.progress[m.id].quizScore !== null);
  const avgScore = quizzesDone.length
    ? Math.round(quizzesDone.reduce((a, m) => a + (state.progress[m.id].quizScore / m.quiz.length) * 100, 0) / quizzesDone.length)
    : 0;

  // Heatmap (12 dernières semaines)
  const weeks = 12;
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (weeks * 7 - 1) - today.getDay());
  let heatCells = '';
  const maxDay = Math.max(...Object.values(state.meta.activity), 600);
  for (let w = 0; w < weeks + 1; w++) {
    heatCells += '<div class="heat-col">';
    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + w * 7 + d);
      if (cellDate > today) { heatCells += '<span class="heat-cell empty"></span>'; continue; }
      const key = todayKey(cellDate);
      const sec = state.meta.activity[key] || 0;
      const level = sec === 0 ? 0 : sec < maxDay * 0.25 ? 1 : sec < maxDay * 0.5 ? 2 : sec < maxDay * 0.75 ? 3 : 4;
      heatCells += `<span class="heat-cell l${level}" title="${cellDate.toLocaleDateString('fr-FR')} : ${sec > 0 ? formatTime(sec) : 'aucune activité'}"></span>`;
    }
    heatCells += '</div>';
  }

  // Barres temps
  const maxTime = Math.max(...MODULES.map(m => state.progress[m.id].timeSpentSec || 0), 60);
  const timesBars = MODULES.map(m => {
    const t = state.progress[m.id].timeSpentSec || 0;
    return `
      <div class="chart-row">
        <span class="chart-label">${m.icon} ${m.title.length > 24 ? m.title.slice(0, 24) + '…' : m.title}</span>
        <div class="chart-bar-wrap"><div class="chart-bar-fill time-bar" style="width:${(t / maxTime) * 100}%"></div></div>
        <span class="chart-val">${t > 0 ? formatTime(t) : '—'}</span>
      </div>`;
  }).join('');

  // Barres scores
  const scoresBars = MODULES.map(m => {
    const p = state.progress[m.id];
    const pct = p.quizScore !== null ? (p.quizScore / m.quiz.length) * 100 : 0;
    const best = p.bestQuizScore !== null ? (p.bestQuizScore / m.quiz.length) * 100 : 0;
    const color = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : pct > 0 ? 'var(--danger)' : 'var(--border)';
    return `
      <div class="chart-row">
        <span class="chart-label">${m.icon} ${m.title.length > 24 ? m.title.slice(0, 24) + '…' : m.title}</span>
        <div class="chart-bar-wrap">
          ${best > pct ? `<div class="chart-bar-fill score-bar-best" style="width:${best}%"></div>` : ''}
          <div class="chart-bar-fill score-bar" style="width:${pct}%; background:${color}"></div>
        </div>
        <span class="chart-val">${p.quizScore !== null ? Math.round(pct) + '%' : '—'}</span>
      </div>`;
  }).join('');

  // Badges
  const badgesGrid = BADGES.map(b => {
    const unlocked = state.meta.badges.includes(b.id);
    return `<div class="badge-card ${unlocked ? 'unlocked' : ''}" title="${b.desc}">
      <span class="badge-card-icon">${unlocked ? b.icon : '🔒'}</span>
      <span class="badge-card-name">${b.name}</span>
      <span class="badge-card-desc">${b.desc}</span>
    </div>`;
  }).join('');

  // Historique
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
      <div class="hist-info"><span class="hist-mod">${h.modTitle}</span><span class="hist-date">${formatDate(h.date)}</span></div>
      <div class="hist-score-wrap">
        <span class="hist-score ${pct >= 80 ? 'score-good' : pct >= 60 ? 'score-ok' : 'score-bad'}">${h.score}/${h.modTotal} — ${pct}%</span>
        ${h.durationSec ? `<span class="hist-time">⏱ ${formatTime(h.durationSec)}</span>` : ''}
      </div>
    </div>`;
  }).join('') || '<p class="no-data">Aucun quiz terminé pour l\'instant.</p>';

  container.innerHTML = `
    <div class="stats-kpis">
      <div class="kpi-card"><div class="kpi-icon">⚡</div><div class="kpi-val">${state.meta.xp}</div><div class="kpi-label">XP — Niv. ${lvl.index} ${lvl.name}</div></div>
      <div class="kpi-card"><div class="kpi-icon">🔥</div><div class="kpi-val">${streak}</div><div class="kpi-label">Jour${streak > 1 ? 's' : ''} de suite</div></div>
      <div class="kpi-card"><div class="kpi-icon">⏱</div><div class="kpi-val">${formatTime(totalTime)}</div><div class="kpi-label">Temps total</div></div>
      <div class="kpi-card"><div class="kpi-icon">🎯</div><div class="kpi-val">${avgScore > 0 ? avgScore + '%' : '—'}</div><div class="kpi-label">Score moyen</div></div>
    </div>

    <div class="stats-section">
      <h3>📅 Activité des 12 dernières semaines</h3>
      <div class="heatmap">${heatCells}</div>
      <div class="heat-legend"><span>Moins</span><span class="heat-cell l0"></span><span class="heat-cell l1"></span><span class="heat-cell l2"></span><span class="heat-cell l3"></span><span class="heat-cell l4"></span><span>Plus</span></div>
    </div>

    <div class="stats-section">
      <h3>🏅 Badges — ${state.meta.badges.length}/${BADGES.length} débloqués</h3>
      <div class="badges-grid">${badgesGrid}</div>
    </div>

    <div class="stats-section">
      <h3>⏱ Temps passé par module</h3>
      <div class="chart-container">${timesBars}</div>
    </div>

    <div class="stats-section">
      <h3>🎯 Scores aux quiz</h3>
      <div class="chart-container">${scoresBars}</div>
      <div class="chart-legend">
        <span class="legend-item"><span class="legend-dot" style="background:var(--success)"></span>≥ 80%</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--warning)"></span>60–79%</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--danger)"></span>&lt; 60%</span>
        <span class="legend-item"><span class="legend-dot best-dot"></span>Meilleur score</span>
      </div>
    </div>

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
  if (confirm('Êtes-vous sûr ? Toute votre progression (XP, badges, scores, temps) sera effacée.')) {
    localStorage.removeItem('elec-formation-progress');
    localStorage.removeItem('elec-formation-meta');
    state.progress = {};
    state.meta = null;
    loadProgress();
    goToDashboard();
  }
}

// =====================================================
//  CERTIFICAT
// =====================================================
function renderCert() {
  let totalScore = 0, totalMax = 0, totalTimeSec = 0;
  MODULES.forEach(m => {
    const p = state.progress[m.id];
    if (p.bestQuizScore !== null) { totalScore += p.bestQuizScore; totalMax += m.quiz.length; }
    totalTimeSec += p.timeSpentSec || 0;
  });
  const pct = totalMax ? Math.round((totalScore / totalMax) * 100) : 0;
  const lvl = getLevel(state.meta.xp);
  const mention = pct >= 90 ? 'Mention Excellent' : pct >= 75 ? 'Mention Très Bien' : pct >= 60 ? 'Mention Bien' : 'Formation validée';

  document.getElementById('cert-details').innerHTML = `
    <div class="cert-row"><span>Modules complétés</span><strong>${MODULES.length} / ${MODULES.length}</strong></div>
    <div class="cert-row"><span>Score global aux quiz</span><strong>${totalScore}/${totalMax} (${pct}%)</strong></div>
    <div class="cert-row"><span>Temps de formation</span><strong>${formatTime(totalTimeSec)}</strong></div>
    <div class="cert-row"><span>Niveau atteint</span><strong>Niv. ${lvl.index} — ${lvl.name}</strong></div>
    <div class="cert-mention">${mention}</div>
  `;
  document.getElementById('cert-date').textContent =
    `Délivré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`;
  confetti();
}

// =====================================================
//  CONFETTI
// =====================================================
function confetti() {
  const colors = ['#4f8ef7', '#a855f7', '#22c55e', '#f59e0b', '#ef4444', '#f7964f'];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.8 + 's';
    c.style.animationDuration = (2 + Math.random() * 2) + 's';
    c.style.width = c.style.height = (6 + Math.random() * 6) + 'px';
    if (Math.random() > 0.5) c.style.borderRadius = '50%';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }
}

// =====================================================
//  CALCULATEURS (leçons)
// =====================================================
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
      <div><span class="pr-label">Par mois (30j)</span><span class="pr-val">${(kwhDay * 30).toFixed(2)} kWh</span><span class="pr-cost">${(costDay * 30).toFixed(2)} €</span></div>
      <div><span class="pr-label">Par an (365j)</span><span class="pr-val">${(kwhDay * 365).toFixed(1)} kWh</span><span class="pr-cost">${(costDay * 365).toFixed(2)} €</span></div>
    </div>`;
  res.classList.remove('hidden');
}

// =====================================================
//  INIT
// =====================================================
loadProgress();
renderHome();
