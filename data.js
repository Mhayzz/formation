const MODULES = [
  {
    id: 1,
    icon: "🔋",
    title: "Les grandeurs électriques",
    subtitle: "Tension, courant, résistance — les trois piliers de l'électricité",
    steps: [
      {
        type: "lesson",
        title: "Qu'est-ce que l'électricité ?",
        content: `
          <p>L'électricité est le mouvement de <strong>charges électriques</strong> (des électrons) dans un matériau conducteur comme le cuivre.</p>
          <div class="analogy-box">
            <h4>💧 L'analogie avec l'eau</h4>
            <p>Imaginez un tuyau d'eau : l'électricité fonctionne de manière très similaire. Le fil électrique est le tuyau, les électrons sont les molécules d'eau, et la batterie est la pompe qui fait circuler l'eau.</p>
          </div>
          <p>Pour qu'un circuit électrique fonctionne, il faut :</p>
          <ul>
            <li>Une <strong>source d'énergie</strong> (batterie, pile, secteur…)</li>
            <li>Des <strong>conducteurs</strong> (fils de cuivre)</li>
            <li>Un <strong>circuit fermé</strong> (un chemin complet pour les électrons)</li>
          </ul>
        `
      },
      {
        type: "lesson",
        title: "La tension (U) — en Volts (V)",
        content: `
          <p>La <strong>tension électrique</strong> (aussi appelée différence de potentiel) est la "pression" qui pousse les électrons dans le circuit.</p>
          <div class="formula-box">
            <span class="formula">U &nbsp;(Volt, V)</span>
          </div>
          <div class="analogy-box">
            <h4>💧 Analogie eau</h4>
            <p>La tension = la <strong>pression de l'eau</strong> dans le tuyau. Plus la pression est forte, plus l'eau (et donc les électrons) circule vigoureusement.</p>
          </div>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">1,5 V</span><span class="ex-label">Pile AA</span></div>
            <div class="example-item"><span class="ex-val">9 V</span><span class="ex-label">Pile carrée</span></div>
            <div class="example-item"><span class="ex-val">12 V</span><span class="ex-label">Batterie auto</span></div>
            <div class="example-item"><span class="ex-val">230 V</span><span class="ex-label">Secteur (France)</span></div>
          </div>
          <p class="info-tip">⚡ On mesure la tension avec un <strong>voltmètre</strong>, branché en <em>parallèle</em> dans le circuit.</p>
        `
      },
      {
        type: "lesson",
        title: "Le courant (I) — en Ampères (A)",
        content: `
          <p>Le <strong>courant électrique</strong> est la quantité d'électrons qui circule dans le conducteur par seconde. C'est le "débit" électrique.</p>
          <div class="formula-box">
            <span class="formula">I &nbsp;(Ampère, A)</span>
          </div>
          <div class="analogy-box">
            <h4>💧 Analogie eau</h4>
            <p>Le courant = le <strong>débit d'eau</strong> (litres/seconde). Un gros tuyau ouvert = fort courant.</p>
          </div>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">0,02 A</span><span class="ex-label">LED</span></div>
            <div class="example-item"><span class="ex-val">0,5 A</span><span class="ex-label">Téléphone en charge</span></div>
            <div class="example-item"><span class="ex-val">10 A</span><span class="ex-label">Four électrique</span></div>
            <div class="example-item"><span class="ex-val">16 A</span><span class="ex-label">Disjoncteur standard</span></div>
          </div>
          <p class="info-tip">🔌 On mesure le courant avec un <strong>ampèremètre</strong>, branché en <em>série</em> dans le circuit.</p>
        `
      },
      {
        type: "lesson",
        title: "La résistance (R) — en Ohms (Ω)",
        content: `
          <p>La <strong>résistance</strong> est l'opposition qu'un matériau offre au passage du courant. Plus un matériau résiste, moins le courant passe facilement.</p>
          <div class="formula-box">
            <span class="formula">R &nbsp;(Ohm, Ω)</span>
          </div>
          <div class="analogy-box">
            <h4>💧 Analogie eau</h4>
            <p>La résistance = un <strong>rétrécissement du tuyau</strong>. Plus le tuyau est étroit, moins l'eau passe (et donc moins le courant passe).</p>
          </div>
          <p>Les matériaux se divisent en deux grandes catégories :</p>
          <div class="two-col">
            <div class="col-card good">
              <h4>✅ Conducteurs</h4>
              <p>Faible résistance</p>
              <ul><li>Cuivre (~0,017 μΩ·m)</li><li>Aluminium</li><li>Argent</li><li>Or</li></ul>
            </div>
            <div class="col-card bad">
              <h4>🚫 Isolants</h4>
              <p>Très haute résistance</p>
              <ul><li>Plastique</li><li>Verre</li><li>Caoutchouc</li><li>Air (sec)</li></ul>
            </div>
          </div>
          <p class="info-tip">🎨 Les résistances ont des <strong>anneaux de couleur</strong> pour indiquer leur valeur. Il existe des tableaux de codes couleur pour les lire.</p>
        `
      },
      {
        type: "lesson",
        title: "Récapitulatif : les 3 grandeurs",
        content: `
          <div class="recap-table">
            <div class="recap-row recap-header">
              <span>Grandeur</span><span>Symbole</span><span>Unité</span><span>Instrument</span>
            </div>
            <div class="recap-row">
              <span>Tension</span><span><strong>U</strong> ou V</span><span>Volt (V)</span><span>Voltmètre (//)</span>
            </div>
            <div class="recap-row">
              <span>Courant</span><span><strong>I</strong></span><span>Ampère (A)</span><span>Ampèremètre (série)</span>
            </div>
            <div class="recap-row">
              <span>Résistance</span><span><strong>R</strong></span><span>Ohm (Ω)</span><span>Ohmmètre (hors circuit)</span>
            </div>
          </div>
          <div class="analogy-box">
            <h4>🧠 Pour retenir</h4>
            <p><strong>U = Voltage</strong> (la "force"), <strong>I = Intensité</strong> (le "débit"), <strong>R = Résistance</strong> (le "frein"). La loi d'Ohm relie ces trois grandeurs — vous l'apprendrez dans le prochain module !</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Quelle est l'unité de mesure de la tension électrique ?",
        choices: ["Ampère (A)", "Volt (V)", "Ohm (Ω)", "Watt (W)"],
        answer: 1,
        explanation: "La tension se mesure en Volts (V), avec un voltmètre branché en parallèle."
      },
      {
        q: "Quelle analogie représente le mieux le courant électrique ?",
        choices: ["La pression de l'eau", "Le débit de l'eau", "Le diamètre du tuyau", "La température de l'eau"],
        answer: 1,
        explanation: "Le courant (Ampères) correspond au débit d'eau : la quantité d'électrons qui passent par seconde."
      },
      {
        q: "Comment branche-t-on un ampèremètre ?",
        choices: ["En parallèle", "En série", "N'importe comment", "Hors circuit"],
        answer: 1,
        explanation: "L'ampèremètre se branche en série : tout le courant du circuit doit passer à travers lui."
      },
      {
        q: "Parmi ces matériaux, lequel est un isolant électrique ?",
        choices: ["Cuivre", "Aluminium", "Caoutchouc", "Argent"],
        answer: 2,
        explanation: "Le caoutchouc est un excellent isolant, c'est pourquoi les fils électriques sont gainés de caoutchouc ou de plastique."
      },
      {
        q: "Un disjoncteur standard de maison supporte généralement :",
        choices: ["0,5 A", "2 A", "16 A", "100 A"],
        answer: 2,
        explanation: "Les disjoncteurs standards en France sont souvent de 16 A pour les circuits d'éclairage et de 20 A pour les prises."
      }
    ]
  },

  {
    id: 2,
    icon: "📐",
    title: "La loi d'Ohm",
    subtitle: "La relation fondamentale entre U, I et R",
    steps: [
      {
        type: "lesson",
        title: "Énoncé de la loi d'Ohm",
        content: `
          <p>La <strong>loi d'Ohm</strong> est la loi la plus importante de l'électricité de base. Elle dit que dans un conducteur, la tension est proportionnelle au courant.</p>
          <div class="formula-box big">
            <span class="formula">U = R × I</span>
          </div>
          <p>Où :</p>
          <ul>
            <li><strong>U</strong> = Tension en Volts (V)</li>
            <li><strong>R</strong> = Résistance en Ohms (Ω)</li>
            <li><strong>I</strong> = Courant en Ampères (A)</li>
          </ul>
          <p>Cette loi vous permet de calculer n'importe quelle grandeur si vous connaissez les deux autres.</p>
        `
      },
      {
        type: "lesson",
        title: "Le triangle magique",
        content: `
          <p>Pour retrouver facilement les 3 formules, utilisez le <strong>triangle d'Ohm</strong> :</p>
          <div class="triangle-container">
            <div class="triangle">
              <div class="tri-top">U</div>
              <div class="tri-bottom"><span>R</span><span>×</span><span>I</span></div>
            </div>
          </div>
          <p>Pour trouver une grandeur, <strong>cachez-la avec le doigt</strong>, ce qui reste vous donne la formule :</p>
          <div class="formulas-trio">
            <div class="formula-card">
              <span class="fc-title">Cacher U</span>
              <span class="fc-formula">U = R × I</span>
            </div>
            <div class="formula-card">
              <span class="fc-title">Cacher R</span>
              <span class="fc-formula">R = U ÷ I</span>
            </div>
            <div class="formula-card">
              <span class="fc-title">Cacher I</span>
              <span class="fc-formula">I = U ÷ R</span>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Exemples de calculs",
        content: `
          <h4>Exemple 1 : Trouver le courant</h4>
          <div class="example-calc">
            <p>Une résistance de <strong>100 Ω</strong> est branchée sur une pile de <strong>9 V</strong>. Quel courant la traverse ?</p>
            <div class="calc-steps">
              <p>On cherche I → <code>I = U ÷ R</code></p>
              <p><code>I = 9 ÷ 100 = <strong>0,09 A = 90 mA</strong></code></p>
            </div>
          </div>
          <h4>Exemple 2 : Trouver la résistance</h4>
          <div class="example-calc">
            <p>Un courant de <strong>2 A</strong> traverse un composant sous <strong>12 V</strong>. Quelle est sa résistance ?</p>
            <div class="calc-steps">
              <p>On cherche R → <code>R = U ÷ I</code></p>
              <p><code>R = 12 ÷ 2 = <strong>6 Ω</strong></code></p>
            </div>
          </div>
          <h4>Exemple 3 : Trouver la tension</h4>
          <div class="example-calc">
            <p>Un courant de <strong>0,5 A</strong> passe dans une résistance de <strong>470 Ω</strong>. Quelle tension ?</p>
            <div class="calc-steps">
              <p>On cherche U → <code>U = R × I</code></p>
              <p><code>U = 470 × 0,5 = <strong>235 V</strong></code></p>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Calculateur interactif",
        content: `
          <p>Entrez deux valeurs pour calculer la troisième automatiquement :</p>
          <div class="calc-interactive">
            <div class="calc-field">
              <label>Tension U (V)</label>
              <input type="number" id="calc-u" placeholder="ex: 12" oninput="ohmsCalc()" />
            </div>
            <div class="calc-field">
              <label>Résistance R (Ω)</label>
              <input type="number" id="calc-r" placeholder="ex: 100" oninput="ohmsCalc()" />
            </div>
            <div class="calc-field">
              <label>Courant I (A)</label>
              <input type="number" id="calc-i" placeholder="ex: 0.5" oninput="ohmsCalc()" />
            </div>
          </div>
          <div id="calc-result" class="calc-result hidden"></div>
          <p class="info-tip">💡 Laissez un seul champ vide : il sera calculé automatiquement.</p>
        `
      },
      {
        type: "lesson",
        title: "Limites et précautions",
        content: `
          <p>La loi d'Ohm s'applique aux <strong>composants "ohmiques"</strong> (résistances pures). Pour d'autres composants, les choses se compliquent :</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🌡️</span>
              <div>
                <strong>Température</strong>
                <p>La résistance d'un métal augmente avec la température. Une ampoule à filament a une résistance plus faible à froid qu'à chaud.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">💡</span>
              <div>
                <strong>Diodes et LEDs</strong>
                <p>Elles ne suivent pas la loi d'Ohm : leur résistance varie selon le courant. C'est pour ça qu'on met toujours une résistance en série avec une LED.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔄</span>
              <div>
                <strong>Condensateurs et bobines</strong>
                <p>En courant alternatif, ils ont une "résistance apparente" (impédance) qui dépend de la fréquence.</p>
              </div>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Quelle est la formule de la loi d'Ohm ?",
        choices: ["U = R + I", "U = R × I", "U = R ÷ I", "U = I ÷ R"],
        answer: 1,
        explanation: "La loi d'Ohm : U = R × I. La tension est égale à la résistance multipliée par le courant."
      },
      {
        q: "Une résistance de 50 Ω est soumise à 10 V. Quel courant la traverse ?",
        choices: ["500 A", "5 A", "0,2 A", "0,02 A"],
        answer: 2,
        explanation: "I = U ÷ R = 10 ÷ 50 = 0,2 A"
      },
      {
        q: "Un courant de 3 A traverse une résistance de 4 Ω. Quelle est la tension aux bornes ?",
        choices: ["0,75 V", "1,33 V", "7 V", "12 V"],
        answer: 3,
        explanation: "U = R × I = 4 × 3 = 12 V"
      },
      {
        q: "Pour doubler le courant dans un circuit (tension fixe), que faut-il faire ?",
        choices: ["Doubler la résistance", "Diviser la résistance par 2", "Doubler la tension", "Rien changer"],
        answer: 1,
        explanation: "I = U/R. Si R est divisé par 2 (et U constant), alors I est multiplié par 2."
      },
      {
        q: "La loi d'Ohm s'applique directement à :",
        choices: ["Une LED seule", "Un condensateur", "Une résistance pure", "Une bobine en AC"],
        answer: 2,
        explanation: "La loi d'Ohm s'applique directement aux résistances pures (composants ohmiques)."
      }
    ]
  },

  {
    id: 3,
    icon: "🔌",
    title: "Circuits série et parallèle",
    subtitle: "Comment connecter les composants entre eux",
    steps: [
      {
        type: "lesson",
        title: "Le circuit en série",
        content: `
          <p>Dans un circuit <strong>en série</strong>, les composants sont connectés bout à bout, comme des wagons de train. Le courant n'a qu'<em>un seul chemin</em> possible.</p>
          <div class="circuit-diagram serie">
            <div class="wire">━━</div>
            <div class="comp">R₁</div>
            <div class="wire">━━</div>
            <div class="comp">R₂</div>
            <div class="wire">━━</div>
            <div class="comp">R₃</div>
            <div class="wire">━━</div>
          </div>
          <div class="rules-box">
            <h4>📋 Règles du circuit série</h4>
            <ul>
              <li>Le <strong>courant est identique</strong> partout : <code>I₁ = I₂ = I₃ = I</code></li>
              <li>Les <strong>tensions s'additionnent</strong> : <code>U = U₁ + U₂ + U₃</code></li>
              <li>Les <strong>résistances s'additionnent</strong> : <code>R_total = R₁ + R₂ + R₃</code></li>
            </ul>
          </div>
          <div class="example-calc">
            <p><strong>Exemple :</strong> R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω, U = 12 V</p>
            <p>R_total = 10 + 20 + 30 = <strong>60 Ω</strong></p>
            <p>I = 12 ÷ 60 = <strong>0,2 A</strong> (partout dans le circuit)</p>
          </div>
          <p class="info-tip">⚠️ Si un composant en série grille ou est retiré, <strong>tout le circuit s'éteint</strong>. C'est le principe des vieilles guirlandes de Noël !</p>
        `
      },
      {
        type: "lesson",
        title: "Le circuit en parallèle",
        content: `
          <p>Dans un circuit <strong>en parallèle</strong>, les composants sont branchés "côte à côte" entre les mêmes deux points. Le courant se divise en plusieurs chemins.</p>
          <div class="circuit-diagram parallel">
            <div class="par-line"><div class="wire-h">━━</div><div class="comp">R₁</div><div class="wire-h">━━</div></div>
            <div class="par-line"><div class="wire-h">━━</div><div class="comp">R₂</div><div class="wire-h">━━</div></div>
            <div class="par-line"><div class="wire-h">━━</div><div class="comp">R₃</div><div class="wire-h">━━</div></div>
          </div>
          <div class="rules-box">
            <h4>📋 Règles du circuit parallèle</h4>
            <ul>
              <li>La <strong>tension est identique</strong> pour tous : <code>U₁ = U₂ = U₃ = U</code></li>
              <li>Les <strong>courants s'additionnent</strong> : <code>I = I₁ + I₂ + I₃</code></li>
              <li>La <strong>résistance totale diminue</strong> : <code>1/R_total = 1/R₁ + 1/R₂ + 1/R₃</code></li>
            </ul>
          </div>
          <div class="example-calc">
            <p><strong>Exemple :</strong> R₁ = 60 Ω, R₂ = 60 Ω en parallèle sous U = 12 V</p>
            <p>1/R_total = 1/60 + 1/60 = 2/60 → R_total = <strong>30 Ω</strong></p>
            <p>I_total = 12 ÷ 30 = <strong>0,4 A</strong> (0,2 A dans chaque branche)</p>
          </div>
          <p class="info-tip">✅ Les prises de courant chez vous sont toutes en <strong>parallèle</strong> : chaque appareil reçoit 230 V, et si un appareil tombe en panne, les autres continuent de fonctionner.</p>
        `
      },
      {
        type: "lesson",
        title: "Circuits mixtes",
        content: `
          <p>En pratique, les circuits réels combinent souvent série et parallèle. On les appelle <strong>circuits mixtes</strong>.</p>
          <p>Pour les analyser, on procède par <strong>étapes</strong> :</p>
          <div class="steps-numbered">
            <div class="step-n">
              <span class="step-num">1</span>
              <div>Identifier les groupes série et parallèle</div>
            </div>
            <div class="step-n">
              <span class="step-num">2</span>
              <div>Calculer la résistance équivalente de chaque groupe</div>
            </div>
            <div class="step-n">
              <span class="step-num">3</span>
              <div>Simplifier jusqu'à obtenir un circuit simple</div>
            </div>
            <div class="step-n">
              <span class="step-num">4</span>
              <div>Appliquer la loi d'Ohm sur le circuit simplifié</div>
            </div>
            <div class="step-n">
              <span class="step-num">5</span>
              <div>Revenir en arrière pour trouver I et U de chaque composant</div>
            </div>
          </div>
          <div class="example-calc">
            <p><strong>Exemple :</strong> R₁ = 10 Ω en série avec (R₂ = 20 Ω ∥ R₃ = 20 Ω), U_total = 15 V</p>
            <p>R₂₃ = 20 × 20 ÷ (20 + 20) = <strong>10 Ω</strong></p>
            <p>R_total = R₁ + R₂₃ = 10 + 10 = <strong>20 Ω</strong></p>
            <p>I_total = 15 ÷ 20 = <strong>0,75 A</strong></p>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Lois de Kirchhoff",
        content: `
          <p>Les <strong>lois de Kirchhoff</strong> formalisent ce que vous venez d'apprendre et permettent d'analyser n'importe quel circuit.</p>
          <div class="kirchhoff-laws">
            <div class="law-card">
              <div class="law-icon">🔀</div>
              <h4>1ère loi — Loi des nœuds</h4>
              <div class="formula-box">
                <span class="formula">ΣI_entrant = ΣI_sortant</span>
              </div>
              <p>En un point de jonction (nœud), la somme des courants qui arrivent est égale à la somme des courants qui repartent. Les électrons ne disparaissent pas !</p>
            </div>
            <div class="law-card">
              <div class="law-icon">🔁</div>
              <h4>2ème loi — Loi des mailles</h4>
              <div class="formula-box">
                <span class="formula">ΣU = 0</span>
              </div>
              <p>Dans une boucle fermée (maille), la somme algébrique des tensions est nulle. L'énergie fournie par la source = énergie consommée par les résistances.</p>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Dans un circuit en série, si on ajoute une résistance supplémentaire, que se passe-t-il ?",
        choices: ["Le courant augmente", "Le courant diminue", "La tension augmente", "Rien ne change"],
        answer: 1,
        explanation: "En ajoutant une résistance en série, R_total augmente. Comme I = U/R (U constante), le courant diminue."
      },
      {
        q: "Dans un circuit en parallèle, que vaut la tension aux bornes de chaque branche ?",
        choices: ["Elle est différente pour chaque branche", "Elle est nulle", "Elle est identique pour toutes les branches", "Elle s'additionne"],
        answer: 2,
        explanation: "Dans un circuit parallèle, tous les composants partagent la même tension : U₁ = U₂ = U₃ = U."
      },
      {
        q: "Deux résistances de 10 Ω chacune sont en parallèle. Quelle est leur résistance équivalente ?",
        choices: ["20 Ω", "10 Ω", "5 Ω", "0 Ω"],
        answer: 2,
        explanation: "1/R = 1/10 + 1/10 = 2/10, donc R = 5 Ω. Deux résistances identiques en parallèle donnent la moitié."
      },
      {
        q: "Les prises électriques dans une maison sont câblées en :",
        choices: ["Série", "Parallèle", "Mixte", "Aucune de ces réponses"],
        answer: 1,
        explanation: "Les prises sont en parallèle : chacune reçoit 230 V, et une panne n'éteint pas les autres."
      },
      {
        q: "Que dit la loi des nœuds de Kirchhoff ?",
        choices: ["La somme des tensions dans une maille est nulle", "La somme des courants entrant = somme des courants sortant", "U = R × I", "Les résistances en série s'additionnent"],
        answer: 1,
        explanation: "La 1ère loi de Kirchhoff (loi des nœuds) : ΣI_entrant = ΣI_sortant. Les électrons ne se perdent pas."
      }
    ]
  },

  {
    id: 4,
    icon: "💡",
    title: "Puissance et énergie électrique",
    subtitle: "Watts, kilowattheures et facture d'électricité",
    steps: [
      {
        type: "lesson",
        title: "La puissance électrique (P)",
        content: `
          <p>La <strong>puissance électrique</strong> mesure la quantité d'énergie consommée (ou produite) par seconde.</p>
          <div class="formula-box big">
            <span class="formula">P = U × I</span>
          </div>
          <p>Unité : le <strong>Watt (W)</strong>, du nom de James Watt.</p>
          <p>En combinant avec la loi d'Ohm (U = R × I), on obtient aussi :</p>
          <div class="formulas-trio">
            <div class="formula-card">
              <span class="fc-formula">P = U × I</span>
            </div>
            <div class="formula-card">
              <span class="fc-formula">P = R × I²</span>
            </div>
            <div class="formula-card">
              <span class="fc-formula">P = U² ÷ R</span>
            </div>
          </div>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">5 W</span><span class="ex-label">LED moderne</span></div>
            <div class="example-item"><span class="ex-val">60 W</span><span class="ex-label">Ampoule ancienne</span></div>
            <div class="example-item"><span class="ex-val">1 500 W</span><span class="ex-label">Sèche-cheveux</span></div>
            <div class="example-item"><span class="ex-val">2 000 W</span><span class="ex-label">Four électrique</span></div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "L'énergie électrique (E)",
        content: `
          <p>L'<strong>énergie</strong> est la puissance consommée pendant un temps donné. C'est ce qu'on vous facture !</p>
          <div class="formula-box big">
            <span class="formula">E = P × t</span>
          </div>
          <p>En physique, on l'exprime en <strong>Joules (J)</strong> : 1 J = 1 W × 1 s.</p>
          <p>Mais pour la facturation, on utilise le <strong>kilowattheure (kWh)</strong> car le Joule est trop petit :</p>
          <div class="formula-box">
            <span class="formula">1 kWh = 1 000 W × 3 600 s = 3 600 000 J</span>
          </div>
          <div class="example-calc">
            <p><strong>Exemple :</strong> Un four de 2 000 W allumé pendant 2 heures consomme :</p>
            <p>E = 2 000 W × 2 h = 4 000 Wh = <strong>4 kWh</strong></p>
            <p>À 0,20 €/kWh : coût = 4 × 0,20 = <strong>0,80 €</strong></p>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Calculateur de consommation",
        content: `
          <p>Estimez le coût de fonctionnement d'un appareil :</p>
          <div class="calc-interactive">
            <div class="calc-field">
              <label>Puissance de l'appareil (W)</label>
              <input type="number" id="power-w" placeholder="ex: 1500" oninput="powerCalc()" />
            </div>
            <div class="calc-field">
              <label>Heures d'utilisation par jour</label>
              <input type="number" id="power-h" placeholder="ex: 2" oninput="powerCalc()" />
            </div>
            <div class="calc-field">
              <label>Prix du kWh (€)</label>
              <input type="number" id="power-price" placeholder="ex: 0.20" value="0.20" oninput="powerCalc()" />
            </div>
          </div>
          <div id="power-result" class="calc-result hidden"></div>
        `
      },
      {
        type: "lesson",
        title: "Effet Joule — La chaleur électrique",
        content: `
          <p>Quand un courant traverse une résistance, elle <strong>chauffe</strong>. C'est l'<strong>effet Joule</strong>, découvert par James Prescott Joule.</p>
          <div class="formula-box">
            <span class="formula">P_chaleur = R × I²</span>
          </div>
          <div class="two-col">
            <div class="col-card good">
              <h4>✅ Utilisations utiles</h4>
              <ul>
                <li>Radiateur électrique</li>
                <li>Grille-pain</li>
                <li>Fer à repasser</li>
                <li>Sèche-cheveux</li>
                <li>Ampoule à filament</li>
              </ul>
            </div>
            <div class="col-card bad">
              <h4>⚠️ Effets indésirables</h4>
              <ul>
                <li>Perte dans les fils de transport</li>
                <li>Surchauffe des composants</li>
                <li>Incendie si surcharge</li>
                <li>Rendement réduit des moteurs</li>
              </ul>
            </div>
          </div>
          <p class="info-tip">🔥 C'est à cause de l'effet Joule que les câbles électriques ont une <strong>limite de courant</strong> : au-delà, ils fondent et peuvent provoquer un incendie.</p>
        `
      }
    ],
    quiz: [
      {
        q: "Un appareil consomme 5 A sous 230 V. Quelle est sa puissance ?",
        choices: ["46 W", "225 W", "1150 W", "2350 W"],
        answer: 2,
        explanation: "P = U × I = 230 × 5 = 1 150 W"
      },
      {
        q: "Quelle unité est utilisée pour mesurer la consommation d'électricité sur une facture ?",
        choices: ["Joule (J)", "Watt (W)", "Kilowattheure (kWh)", "Ampère (A)"],
        answer: 2,
        explanation: "Les factures d'électricité sont en kWh (kilowattheures). 1 kWh = utiliser 1 000 W pendant 1 heure."
      },
      {
        q: "Une ampoule de 60 W reste allumée 8h/jour pendant 30 jours. Quelle est sa consommation ?",
        choices: ["1,44 kWh", "14,4 kWh", "144 kWh", "0,144 kWh"],
        answer: 1,
        explanation: "E = 60 W × (8 × 30) h = 60 × 240 = 14 400 Wh = 14,4 kWh"
      },
      {
        q: "L'effet Joule est la transformation de l'énergie électrique en :",
        choices: ["Énergie lumineuse", "Énergie cinétique", "Énergie thermique (chaleur)", "Énergie chimique"],
        answer: 2,
        explanation: "L'effet Joule : l'énergie électrique est convertie en chaleur quand un courant traverse une résistance."
      },
      {
        q: "Pour réduire les pertes par effet Joule dans les lignes électriques, EDF utilise :",
        choices: ["Des câbles plus fins", "Une très haute tension (très bas courant)", "Un courant très élevé", "Des résistances supplémentaires"],
        answer: 1,
        explanation: "P_perte = R × I². En transmettant à très haute tension (jusqu'à 400 000 V), le courant est très faible, donc les pertes I² × R sont minimes."
      }
    ]
  },

  {
    id: 5,
    icon: "〰️",
    title: "Courant AC vs DC",
    subtitle: "Alternatif et continu : les deux formes du courant",
    steps: [
      {
        type: "lesson",
        title: "Le courant continu (DC)",
        content: `
          <p>Le <strong>courant continu</strong> (DC, Direct Current) circule toujours dans le même sens. La tension reste constante dans le temps.</p>
          <div class="wave-visual dc">
            <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="40" x2="300" y2="40" stroke="#aaa" stroke-width="1" stroke-dasharray="4"/>
              <line x1="0" y1="25" x2="300" y2="25" stroke="#4f8ef7" stroke-width="3"/>
              <text x="5" y="20" fill="#4f8ef7" font-size="12">+V</text>
              <text x="5" y="55" fill="#aaa" font-size="12">0</text>
            </svg>
          </div>
          <p><strong>Sources de courant continu :</strong></p>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">🔋</span><span class="ex-label">Piles & batteries</span></div>
            <div class="example-item"><span class="ex-val">☀️</span><span class="ex-label">Panneaux solaires</span></div>
            <div class="example-item"><span class="ex-val">🔌</span><span class="ex-label">Chargeurs (AC→DC)</span></div>
            <div class="example-item"><span class="ex-val">🚗</span><span class="ex-label">Alternateur auto</span></div>
          </div>
          <p class="info-tip">📱 Tous vos appareils électroniques (téléphone, PC, TV…) fonctionnent en <strong>courant continu</strong>. C'est pourquoi les chargeurs convertissent le 230V AC en DC.</p>
        `
      },
      {
        type: "lesson",
        title: "Le courant alternatif (AC)",
        content: `
          <p>Le <strong>courant alternatif</strong> (AC, Alternating Current) change de sens périodiquement. Il suit une forme sinusoïdale.</p>
          <div class="wave-visual ac">
            <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="40" x2="300" y2="40" stroke="#aaa" stroke-width="1" stroke-dasharray="4"/>
              <path d="M 0 40 Q 37 5 75 40 Q 112 75 150 40 Q 187 5 225 40 Q 262 75 300 40" stroke="#f7964f" stroke-width="3" fill="none"/>
              <text x="5" y="15" fill="#f7964f" font-size="12">+V</text>
              <text x="5" y="70" fill="#f7964f" font-size="12">-V</text>
            </svg>
          </div>
          <div class="rules-box">
            <h4>📋 Caractéristiques de l'AC en France</h4>
            <ul>
              <li><strong>Fréquence :</strong> 50 Hz (50 cycles par seconde)</li>
              <li><strong>Tension efficace :</strong> 230 V</li>
              <li><strong>Tension de crête :</strong> 230 × √2 ≈ 325 V</li>
              <li><strong>Aux USA :</strong> 60 Hz, 120 V</li>
            </ul>
          </div>
          <p class="info-tip">⚡ Le courant du secteur change de direction <strong>100 fois par seconde</strong> (50 Hz = 50 allers-retours). On ne le voit pas car c'est beaucoup trop rapide.</p>
        `
      },
      {
        type: "lesson",
        title: "Pourquoi l'AC pour le réseau électrique ?",
        content: `
          <p>Historiquement, la "guerre des courants" (fin XIXe siècle) a opposé <strong>Edison (DC)</strong> à <strong>Tesla & Westinghouse (AC)</strong>. L'AC a gagné pour de bonnes raisons :</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔁</span>
              <div>
                <strong>Transformateurs</strong>
                <p>L'AC peut facilement changer de tension grâce aux transformateurs. On monte à 400 000 V pour le transport (moins de pertes), puis on redescend à 230 V chez vous.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🏭</span>
              <div>
                <strong>Moteurs AC</strong>
                <p>Les moteurs à induction (AC) sont plus simples, robustes et économiques que les moteurs DC.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📡</span>
              <div>
                <strong>Transport à longue distance</strong>
                <p>En AC, la montée en tension est facile → moins de pertes sur des milliers de km de câbles.</p>
              </div>
            </div>
          </div>
          <div class="analogy-box">
            <h4>🔄 Aujourd'hui : retour du DC ?</h4>
            <p>Avec les énergies renouvelables (solaire, éolien) et la voiture électrique, le courant continu à haute tension (HVDC) revient en force pour le transport longue distance !</p>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Tension efficace et tension de crête",
        content: `
          <p>Pour l'AC, on distingue deux notions de tension :</p>
          <div class="two-col">
            <div class="col-card">
              <h4>Tension de crête (V_max)</h4>
              <p>La valeur maximale atteinte par la sinusoïde.</p>
              <div class="formula-box"><span class="formula">V_max = V_eff × √2</span></div>
              <p>Pour le secteur : V_max = 230 × 1,414 ≈ <strong>325 V</strong></p>
            </div>
            <div class="col-card">
              <h4>Tension efficace (V_eff ou RMS)</h4>
              <p>La tension "équivalente DC" qui produirait le même effet thermique.</p>
              <div class="formula-box"><span class="formula">V_eff = V_max ÷ √2</span></div>
              <p>Ce qu'on lit sur les appareils et sur les voltmètres : <strong>230 V</strong></p>
            </div>
          </div>
          <p class="info-tip">🧮 La valeur efficace (RMS = Root Mean Square) est celle qu'on utilise pour tous les calculs de puissance en AC : P = V_eff × I_eff.</p>
        `
      }
    ],
    quiz: [
      {
        q: "Quelle est la fréquence du courant alternatif en France ?",
        choices: ["25 Hz", "50 Hz", "60 Hz", "100 Hz"],
        answer: 1,
        explanation: "En France (et en Europe), la fréquence du réseau est de 50 Hz. Aux États-Unis, c'est 60 Hz."
      },
      {
        q: "La tension de crête du secteur français (230 V efficaces) vaut environ :",
        choices: ["163 V", "230 V", "325 V", "460 V"],
        answer: 2,
        explanation: "V_max = 230 × √2 ≈ 230 × 1,414 ≈ 325 V. Les 230 V indiqués sont la valeur efficace (RMS)."
      },
      {
        q: "Pourquoi utilise-t-on l'AC pour transporter l'électricité sur de longues distances ?",
        choices: ["C'est moins cher à produire", "On peut facilement changer la tension avec des transformateurs", "L'AC ne produit pas d'effet Joule", "C'est plus sûr que le DC"],
        answer: 1,
        explanation: "L'AC permet de transformer facilement la tension. On monte à 400 000 V pour le transport (P_perte = R×I², donc moins de pertes), puis on redescend à 230 V."
      },
      {
        q: "Quel type de courant fournit une pile ?",
        choices: ["Courant alternatif (AC)", "Courant continu (DC)", "Les deux", "Ni l'un ni l'autre"],
        answer: 1,
        explanation: "Une pile produit un courant continu (DC) : les électrons circulent toujours dans le même sens."
      },
      {
        q: "Que fait un chargeur de téléphone au courant électrique ?",
        choices: ["Il transforme le DC en AC", "Il transforme l'AC en DC et abaisse la tension", "Il amplifie la tension", "Il ne fait rien, les téléphones utilisent l'AC"],
        answer: 1,
        explanation: "Un chargeur convertit l'AC 230V du secteur en DC basse tension (5V, 9V, 12V…) utilisable par l'électronique."
      }
    ]
  },

  {
    id: 6,
    icon: "🧩",
    title: "Les composants de base",
    subtitle: "Résistances, condensateurs, bobines, diodes",
    steps: [
      {
        type: "lesson",
        title: "La résistance",
        content: `
          <p>La <strong>résistance</strong> est le composant le plus simple. Elle s'oppose au passage du courant et dissipe l'énergie sous forme de chaleur.</p>
          <div class="component-card">
            <div class="comp-symbol">⊟</div>
            <div class="comp-info">
              <p><strong>Symbole :</strong> rectangle ou zigzag (américain)</p>
              <p><strong>Unité :</strong> Ohm (Ω)</p>
              <p><strong>Code couleur :</strong> anneaux de couleur indiquent la valeur</p>
            </div>
          </div>
          <p><strong>Utilisations :</strong></p>
          <ul>
            <li>Limiter le courant (ex: résistance de LED)</li>
            <li>Diviseur de tension</li>
            <li>Convertir un courant en tension</li>
            <li>Chauffage (résistance chauffante)</li>
          </ul>
          <div class="color-table">
            <div class="ct-header">Couleurs principales du code résistance</div>
            <div class="ct-row"><span class="ct-color" style="background:#000;color:#fff">Noir</span><span>0</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#8B4513;color:#fff">Brun</span><span>1</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#f44336;color:#fff">Rouge</span><span>2</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#ff9800;color:#000">Orange</span><span>3</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#ffeb3b;color:#000">Jaune</span><span>4</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#4caf50;color:#fff">Vert</span><span>5</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#2196f3;color:#fff">Bleu</span><span>6</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#9c27b0;color:#fff">Violet</span><span>7</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#9e9e9e;color:#fff">Gris</span><span>8</span></div>
            <div class="ct-row"><span class="ct-color" style="background:#fff;color:#000;border:1px solid #ccc">Blanc</span><span>9</span></div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Le condensateur",
        content: `
          <p>Le <strong>condensateur</strong> stocke de l'énergie électrique sous forme de champ électrique. Il se charge et se décharge rapidement.</p>
          <div class="component-card">
            <div class="comp-symbol">⊣⊢</div>
            <div class="comp-info">
              <p><strong>Symbole :</strong> deux traits parallèles (armatures)</p>
              <p><strong>Unité :</strong> Farad (F), souvent µF, nF, pF</p>
              <p><strong>Formule :</strong> Q = C × U</p>
            </div>
          </div>
          <p><strong>Comportement :</strong></p>
          <ul>
            <li>En <strong>DC</strong> : se charge puis bloque le courant (circuit ouvert)</li>
            <li>En <strong>AC</strong> : laisse passer le courant (plus la fréquence est haute, plus il laisse passer)</li>
          </ul>
          <p><strong>Utilisations :</strong></p>
          <ul>
            <li>Filtrage et lissage d'alimentation</li>
            <li>Couplage/découplage en électronique</li>
            <li>Compensation d'énergie réactive</li>
            <li>Flash d'appareil photo</li>
          </ul>
        `
      },
      {
        type: "lesson",
        title: "La bobine (inductance)",
        content: `
          <p>La <strong>bobine</strong> (ou inductance) stocke de l'énergie sous forme de champ magnétique. Elle s'oppose aux variations de courant.</p>
          <div class="component-card">
            <div class="comp-symbol">⌒⌒⌒</div>
            <div class="comp-info">
              <p><strong>Symbole :</strong> spirale ou demi-cercles</p>
              <p><strong>Unité :</strong> Henry (H), souvent mH, µH</p>
              <p><strong>Formule :</strong> U = L × dI/dt</p>
            </div>
          </div>
          <p><strong>Comportement :</strong></p>
          <ul>
            <li>En <strong>DC</strong> : laisse passer le courant (juste une résistance de fil)</li>
            <li>En <strong>AC</strong> : s'oppose au courant (plus la fréquence est haute, plus elle bloque)</li>
          </ul>
          <p><strong>Utilisations :</strong></p>
          <ul>
            <li>Filtres dans les alimentations</li>
            <li>Transformateurs</li>
            <li>Moteurs électriques</li>
            <li>Antennes radio</li>
          </ul>
          <p class="info-tip">⚡ La bobine est le "contraire" du condensateur : là où le condensateur bloque le DC et laisse passer l'AC, la bobine fait l'inverse.</p>
        `
      },
      {
        type: "lesson",
        title: "La diode et la LED",
        content: `
          <p>La <strong>diode</strong> ne laisse passer le courant que dans un seul sens (comme une valve à sens unique).</p>
          <div class="component-card">
            <div class="comp-symbol">▷|</div>
            <div class="comp-info">
              <p><strong>Symbole :</strong> triangle + barre</p>
              <p><strong>Tension de seuil :</strong> ≈0,7 V (silicium), ≈0,3 V (germanium)</p>
              <p><strong>Polarité :</strong> Anode (+) → Cathode (-)</p>
            </div>
          </div>
          <div class="two-col">
            <div class="col-card good">
              <h4>✅ Passante (sens direct)</h4>
              <p>Anode + positive → le courant passe, chute de ~0,7 V</p>
            </div>
            <div class="col-card bad">
              <h4>🚫 Bloquée (sens inverse)</h4>
              <p>Anode négative → aucun courant ne passe</p>
            </div>
          </div>
          <p><strong>La LED</strong> (Light Emitting Diode) est une diode qui émet de la lumière. Toujours mettre une résistance en série !</p>
          <div class="example-calc">
            <p><strong>Calcul résistance LED :</strong> LED rouge, V_led = 2V, I_led = 20 mA, alimentation 5V</p>
            <p>R = (V_alim - V_led) / I = (5 - 2) / 0,02 = <strong>150 Ω</strong></p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Quelle couleur représente le chiffre 4 dans le code couleur des résistances ?",
        choices: ["Vert", "Orange", "Jaune", "Bleu"],
        answer: 2,
        explanation: "Dans le code couleur des résistances : Noir=0, Brun=1, Rouge=2, Orange=3, Jaune=4, Vert=5..."
      },
      {
        q: "Comment se comporte un condensateur face à un courant continu (DC) stable ?",
        choices: ["Il laisse passer le courant en permanence", "Il se charge puis bloque le courant", "Il génère une tension", "Il chauffe"],
        answer: 1,
        explanation: "En DC : le condensateur se charge jusqu'à la tension d'alimentation, puis bloque tout courant (comme un circuit ouvert)."
      },
      {
        q: "Quelle est la 'tension de seuil' approximative d'une diode en silicium ?",
        choices: ["0 V", "0,3 V", "0,7 V", "1,4 V"],
        answer: 2,
        explanation: "La diode en silicium a une chute de tension d'environ 0,7 V quand elle conduit. Pour le germanium, c'est 0,3 V."
      },
      {
        q: "Pourquoi faut-il toujours une résistance en série avec une LED ?",
        choices: ["Pour l'allumer plus fort", "Pour limiter le courant et éviter de la griller", "Pour changer sa couleur", "Pour la protéger de la lumière"],
        answer: 1,
        explanation: "La LED n'est pas un composant ohmique : sans résistance, le courant augmente sans limite et la grille. La résistance limite le courant à la valeur nominale."
      },
      {
        q: "Une bobine s'oppose surtout au passage des courants :",
        choices: ["Continus (DC)", "Alternatifs à haute fréquence", "Très faibles", "À basse température"],
        answer: 1,
        explanation: "L'inductance réactive d'une bobine est proportionnelle à la fréquence : XL = 2π×f×L. Plus la fréquence est haute, plus la bobine bloque."
      }
    ]
  },

  {
    id: 7,
    icon: "🛡️",
    title: "Sécurité électrique",
    subtitle: "Travailler sans risque avec l'électricité",
    steps: [
      {
        type: "lesson",
        title: "Les dangers de l'électricité",
        content: `
          <div class="danger-banner">
            ⚠️ L'électricité peut tuer. En France, on compte environ 200 décès par électrocution par an.
          </div>
          <p>Les risques électriques sont de trois types :</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">⚡</span>
              <div>
                <strong>Électrocution / électrisation</strong>
                <p>Le courant traverse le corps humain. Dès <strong>10 mA</strong>, on ne peut plus lâcher. À <strong>30 mA</strong>, risque d'arrêt cardiaque. À <strong>100 mA</strong>, mort quasi-certaine.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔥</span>
              <div>
                <strong>Incendie électrique</strong>
                <p>Surcharge ou court-circuit → échauffement des fils → incendie. 30 000 incendies/an en France ont une origine électrique.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">💥</span>
              <div>
                <strong>Arc électrique</strong>
                <p>Un court-circuit peut créer un arc plasma à plus de 10 000°C. Extrêmement dangereux, même à distance.</p>
              </div>
            </div>
          </div>
          <p class="info-tip">🧠 La tension qui tue, c'est celle qui fait circuler assez de courant dans le corps. La résistance du corps humain varie de 1 000 à 100 000 Ω selon la peau (sèche vs mouillée).</p>
        `
      },
      {
        type: "lesson",
        title: "Les protections dans une installation",
        content: `
          <p>Une installation électrique moderne dispose de plusieurs protections complémentaires :</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔲</span>
              <div>
                <strong>Disjoncteur</strong>
                <p>Coupe le circuit en cas de surcharge ou court-circuit. Protège contre les <em>incendies</em>. Se réarme manuellement.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔆</span>
              <div>
                <strong>Fusible</strong>
                <p>Élément qui "fond" et coupe le circuit en cas de surcharge. Doit être remplacé après déclenchement. Utilisé dans les appareils.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🏠</span>
              <div>
                <strong>Différentiel (DDR)</strong>
                <p>Détecte les fuites de courant (courant qui part à la terre via un corps humain). Déclenche dès <strong>30 mA</strong>. Protège contre l'<em>électrocution</em>.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🌍</span>
              <div>
                <strong>La mise à la terre</strong>
                <p>Le fil vert/jaune. Relie les masses métalliques des appareils à la terre. Si un fil touche la carcasse, le courant part à la terre (déclenche le différentiel) plutôt que dans votre corps.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Les règles d'or",
        content: `
          <div class="rules-gold">
            <div class="rule-gold-item">
              <span class="rg-num">1</span>
              <div>
                <strong>Toujours couper avant d'intervenir</strong>
                <p>Coupez le disjoncteur ET vérifiez l'absence de tension avec un vérificateur de tension avant de toucher quoi que ce soit.</p>
              </div>
            </div>
            <div class="rule-gold-item">
              <span class="rg-num">2</span>
              <div>
                <strong>Condamner et consigner</strong>
                <p>Après avoir coupé, bloquez le disjoncteur (cadenas) et mettez une étiquette "Ne pas remettre sous tension" pour éviter qu'un collègue le remette.</p>
              </div>
            </div>
            <div class="rule-gold-item">
              <span class="rg-num">3</span>
              <div>
                <strong>Ne jamais travailler seul</strong>
                <p>Toujours être accompagné. En cas d'accident, quelqu'un peut appeler les secours immédiatement.</p>
              </div>
            </div>
            <div class="rule-gold-item">
              <span class="rg-num">4</span>
              <div>
                <strong>Utiliser des outils isolés</strong>
                <p>Outils avec manches isolés jusqu'à 1 000 V minimum pour les travaux électriques.</p>
              </div>
            </div>
            <div class="rule-gold-item">
              <span class="rg-num">5</span>
              <div>
                <strong>Se méfier de l'eau</strong>
                <p>L'eau conduit l'électricité. Ne jamais travailler dans un environnement humide sans précautions spéciales (matériel IP adapté).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Que faire en cas d'accident ?",
        content: `
          <div class="emergency-steps">
            <div class="emergency-step">
              <span class="em-icon">⚡</span>
              <div>
                <h4>1. NE PAS TOUCHER la victime</h4>
                <p>Si la victime est en contact avec une source électrique, vous seriez électrocuté à votre tour. C'est la règle n°1.</p>
              </div>
            </div>
            <div class="emergency-step">
              <span class="em-icon">🔌</span>
              <div>
                <h4>2. Couper l'alimentation</h4>
                <p>Disjoncteur, interrupteur, débrancher la prise. Seulement ALORS vous pouvez approcher.</p>
              </div>
            </div>
            <div class="emergency-step">
              <span class="em-icon">📞</span>
              <div>
                <h4>3. Appeler les secours : 15 ou 112</h4>
                <p>Décrivez ce qui s'est passé, l'état de la victime, votre localisation.</p>
              </div>
            </div>
            <div class="emergency-step">
              <span class="em-icon">❤️</span>
              <div>
                <h4>4. Pratiquer les gestes de premiers secours</h4>
                <p>Si la victime ne respire plus et n'a pas de pouls : massage cardiaque (100 compressions/min) et bouche-à-bouche en attendant les secours.</p>
              </div>
            </div>
          </div>
          <div class="danger-banner">
            📞 Numéros d'urgence : SAMU 15 • Pompiers 18 • Urgences européen 112
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "À partir de quel courant ne peut-on plus lâcher un conducteur électrique ?",
        choices: ["1 mA", "10 mA", "50 mA", "100 mA"],
        answer: 1,
        explanation: "Dès 10 mA, les muscles se contractent de façon incontrôlable et on ne peut plus lâcher. C'est pourquoi le différentiel à 30 mA est vital."
      },
      {
        q: "Quel appareil protège spécifiquement contre l'électrocution (contact avec un conducteur) ?",
        choices: ["Le fusible", "Le disjoncteur magnétothermique", "Le différentiel (DDR 30 mA)", "La mise à la terre seule"],
        answer: 2,
        explanation: "Le différentiel détecte les fuites de courant à la terre (via un corps humain) et coupe en moins de 30 ms. Le disjoncteur et le fusible protègent contre les surcharges/courts-circuits."
      },
      {
        q: "En cas d'électrocution d'une personne toujours en contact avec la source électrique, quelle est la première action ?",
        choices: ["Toucher la victime pour l'éloigner", "Appeler le 15 immédiatement", "Couper l'alimentation électrique", "Faire un massage cardiaque"],
        answer: 2,
        explanation: "Ne jamais toucher une victime encore en contact avec le courant — vous seriez électrocuté. La PREMIÈRE action est de couper l'alimentation."
      },
      {
        q: "À quoi sert le fil vert/jaune dans une installation électrique ?",
        choices: ["À alimenter les équipements 3 phases", "À la mise à la terre des masses métalliques", "À identifier la phase", "À transporter le neutre"],
        answer: 1,
        explanation: "Le fil vert/jaune est le conducteur de protection (PE = Protective Earth). Il relie les masses métalliques à la terre pour que le courant de défaut parte à la terre, pas dans le corps."
      },
      {
        q: "Quelle est la règle AVANT toute intervention sur une installation électrique ?",
        choices: ["Mettre des gants en caoutchouc", "Couper le courant ET vérifier l'absence de tension", "Travailler rapidement", "Désactiver le différentiel"],
        answer: 1,
        explanation: "Avant toute intervention : 1) Couper le disjoncteur, 2) Vérifier l'absence de tension avec un VAT (Vérificateur d'Absence de Tension). Les gants seuls ne suffisent pas."
      }
    ]
  }
];
