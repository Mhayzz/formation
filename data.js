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
  },

  {
    id: 8,
    icon: "🔄",
    title: "Les transformateurs",
    subtitle: "Changer la tension grâce à l'induction électromagnétique",
    steps: [
      {
        type: "lesson",
        title: "Principe de fonctionnement",
        content: `
          <p>Un <strong>transformateur</strong> convertit une tension AC en une autre tension AC, en exploitant l'<strong>induction électromagnétique</strong> découverte par Faraday.</p>
          <div class="analogy-box">
            <h4>⚙️ Comment ça marche ?</h4>
            <p>Un courant alternatif dans le <strong>bobinage primaire</strong> crée un champ magnétique variable dans un noyau de fer. Ce champ induit une tension dans le <strong>bobinage secondaire</strong>. Pas de contact électrique direct entre les deux circuits !</p>
          </div>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">📥</span>
              <div><strong>Primaire</strong><p>Le côté qui reçoit la tension d'entrée. N₁ spires.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📤</span>
              <div><strong>Noyau magnétique</strong><p>En fer feuilleté pour canaliser le flux magnétique avec un minimum de pertes.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📡</span>
              <div><strong>Secondaire</strong><p>Le côté qui délivre la tension de sortie. N₂ spires.</p></div>
            </div>
          </div>
          <p class="info-tip">⚠️ Un transformateur ne fonctionne qu'en <strong>courant alternatif</strong>. En courant continu, pas de variation de flux → pas d'induction → rien ne se passe (et la bobine primaire peut griller).</p>
        `
      },
      {
        type: "lesson",
        title: "La loi du transformateur idéal",
        content: `
          <p>La formule fondamentale du transformateur est appelée la <strong>loi des rapports de transformation</strong> :</p>
          <div class="formula-box big">
            <span class="formula">U₁/U₂ = N₁/N₂ = I₂/I₁</span>
          </div>
          <p>Où N₁ et N₂ sont le nombre de spires du primaire et du secondaire.</p>
          <div class="formulas-trio">
            <div class="formula-card">
              <span class="fc-title">Rapport de transformation</span>
              <span class="fc-formula">m = N₂/N₁ = U₂/U₁</span>
            </div>
            <div class="formula-card">
              <span class="fc-title">Élévateur (m &gt; 1)</span>
              <span class="fc-formula">N₂ &gt; N₁ → U₂ &gt; U₁</span>
            </div>
            <div class="formula-card">
              <span class="fc-title">Abaisseur (m &lt; 1)</span>
              <span class="fc-formula">N₂ &lt; N₁ → U₂ &lt; U₁</span>
            </div>
          </div>
          <div class="example-calc">
            <p><strong>Exemple :</strong> Transformateur 230 V → 12 V, N₁ = 460 spires</p>
            <p>N₂ = N₁ × (U₂/U₁) = 460 × (12/230) = <strong>24 spires</strong></p>
            <p>Si I₂ = 5 A → I₁ = I₂ × (N₂/N₁) = 5 × (24/460) = <strong>0,26 A</strong></p>
          </div>
          <p class="info-tip">💡 La puissance est conservée (transformateur idéal) : P₁ = P₂. Si la tension monte, le courant baisse dans la même proportion.</p>
        `
      },
      {
        type: "lesson",
        title: "Types de transformateurs",
        content: `
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">⚡</span>
              <div>
                <strong>Transformateurs de puissance (réseau)</strong>
                <p>Les géants du réseau électrique — de quelques kVA à plusieurs centaines de MVA. Ils élèvent la tension à 63 000, 225 000 ou 400 000 V pour le transport longue distance.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🏠</span>
              <div>
                <strong>Transformateurs de distribution</strong>
                <p>Ces boîtes grises sur les poteaux ou dans les armoires de rue. Ils abaissent de 20 000 V à 230/400 V pour alimenter les maisons et immeubles.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔌</span>
              <div>
                <strong>Transformateurs d'alimentation</strong>
                <p>Dans les chargeurs et alimentations : 230 V → 5 V, 12 V, 24 V… pour alimenter l'électronique.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📡</span>
              <div>
                <strong>Transformateurs de mesure (TI, TT)</strong>
                <p>Ramènent de très hautes tensions/courants à des valeurs mesurables en toute sécurité (5 A, 100 V).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Pertes et rendement",
        content: `
          <p>Un transformateur réel n'est pas parfait. Il présente deux types de pertes :</p>
          <div class="two-col">
            <div class="col-card bad">
              <h4>🌡️ Pertes fer (à vide)</h4>
              <p>Pertes dans le noyau magnétique, proportionnelles à la tension. Présentes même sans charge au secondaire.</p>
              <ul><li>Pertes par hystérésis</li><li>Courants de Foucault</li></ul>
            </div>
            <div class="col-card bad">
              <h4>🔥 Pertes cuivre (en charge)</h4>
              <p>Effet Joule dans les enroulements R × I². Augmentent avec le courant délivré.</p>
              <ul><li>P_cuivre = R₁I₁² + R₂I₂²</li></ul>
            </div>
          </div>
          <div class="formula-box">
            <span class="formula">η = P_sortie / P_entrée × 100%</span>
          </div>
          <p>Les transformateurs modernes ont un rendement excellent : <strong>97 à 99,5%</strong>. C'est l'une des machines les plus efficaces qui soit.</p>
          <div class="example-calc">
            <p><strong>Exemple :</strong> Transfo 1 kVA, pertes fer = 10 W, pertes cuivre = 15 W à pleine charge</p>
            <p>η = (1000 - 10 - 15) / 1000 × 100 = <strong>97,5%</strong></p>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Un transformateur fonctionne avec quel type de courant ?",
        choices: ["Courant continu uniquement", "Courant alternatif uniquement", "Les deux indifféremment", "Courant pulsé uniquement"],
        answer: 1,
        explanation: "Un transformateur nécessite un courant alternatif pour que le flux magnétique varie et induise une tension au secondaire. En DC, pas de variation → pas d'induction."
      },
      {
        q: "Un transformateur a N₁=500 spires et N₂=100 spires. Sa tension primaire est 230 V. Quelle est la tension secondaire ?",
        choices: ["1150 V", "46 V", "230 V", "2300 V"],
        answer: 1,
        explanation: "U₂ = U₁ × N₂/N₁ = 230 × 100/500 = 230 × 0,2 = 46 V. C'est un transformateur abaisseur (m = 0,2 < 1)."
      },
      {
        q: "Si un transformateur double la tension, que fait-il au courant (transformateur idéal) ?",
        choices: ["Il double aussi le courant", "Il divise le courant par 2", "Il ne change pas le courant", "Il annule le courant"],
        answer: 1,
        explanation: "La puissance est conservée : P = U × I. Si U double, I est divisé par 2 pour que P reste identique."
      },
      {
        q: "À quoi servent les transformateurs THT (très haute tension) sur le réseau électrique ?",
        choices: ["À produire de l'électricité", "À stocker l'énergie", "À élever la tension pour réduire les pertes lors du transport", "À convertir l'AC en DC"],
        answer: 2,
        explanation: "En élevant la tension (jusqu'à 400 000 V), le courant est très faible. Comme P_pertes = R × I², les pertes en ligne sont drastiquement réduites."
      },
      {
        q: "Les pertes 'fer' d'un transformateur sont dues à :",
        choices: ["L'effet Joule dans les bobinages", "L'hystérésis et les courants de Foucault dans le noyau", "Une mauvaise isolation", "La résistance des fils de connexion"],
        answer: 1,
        explanation: "Les pertes fer se produisent dans le noyau magnétique : pertes par hystérésis (réorientation des domaines magnétiques) et courants de Foucault (courants induits dans la masse de fer)."
      }
    ]
  },

  {
    id: 9,
    icon: "⚙️",
    title: "Moteurs et générateurs",
    subtitle: "Convertir l'énergie électrique en mécanique et vice-versa",
    steps: [
      {
        type: "lesson",
        title: "La force de Laplace",
        content: `
          <p>Un conducteur parcouru par un courant dans un champ magnétique subit une <strong>force mécanique</strong>. C'est la <strong>force de Laplace</strong>, le principe de base de tout moteur électrique.</p>
          <div class="formula-box big">
            <span class="formula">F = B × I × L</span>
          </div>
          <p>Où :</p>
          <ul>
            <li><strong>F</strong> = force en Newtons (N)</li>
            <li><strong>B</strong> = champ magnétique en Tesla (T)</li>
            <li><strong>I</strong> = courant en Ampères (A)</li>
            <li><strong>L</strong> = longueur du conducteur en mètres (m)</li>
          </ul>
          <div class="analogy-box">
            <h4>🧲 La règle des trois doigts</h4>
            <p>Tendez la main gauche : le <strong>pouce</strong> pointe dans le sens du courant, l'<strong>index</strong> dans le sens du champ magnétique (N→S), le <strong>majeur</strong> indique la direction de la force.</p>
          </div>
          <p class="info-tip">🔄 L'inverse est aussi vrai : si on impose le mouvement, un courant est généré (c'est le principe du générateur — loi de Lenz-Faraday).</p>
        `
      },
      {
        type: "lesson",
        title: "Le moteur à courant continu (DC)",
        content: `
          <p>Le <strong>moteur DC</strong> est le plus simple à comprendre. Il transforme le courant continu en rotation.</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🧲</span>
              <div><strong>Stator</strong><p>Partie fixe. Génère le champ magnétique (aimants permanents ou électro-aimants — inducteur).</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔄</span>
              <div><strong>Rotor (armature)</strong><p>Partie tournante. Bobinage parcouru par le courant. Subit la force de Laplace.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">⚡</span>
              <div><strong>Collecteur / balais</strong><p>Inversent le courant à chaque demi-tour pour que la force reste toujours dans le même sens de rotation.</p></div>
            </div>
          </div>
          <div class="two-col">
            <div class="col-card good">
              <h4>✅ Avantages DC</h4>
              <ul><li>Contrôle de vitesse simple</li><li>Fort couple au démarrage</li><li>Bon rendement à faible vitesse</li></ul>
            </div>
            <div class="col-card bad">
              <h4>⚠️ Inconvénients DC</h4>
              <ul><li>Balais s'usent (maintenance)</li><li>Génèrent des étincelles</li><li>Moins robuste que le moteur AC</li></ul>
            </div>
          </div>
          <p class="info-tip">🚗 Les moteurs DC sont très utilisés dans les voitures électriques (avec variation de vitesse électronique), les jouets, les perceuses sans fil.</p>
        `
      },
      {
        type: "lesson",
        title: "Le moteur à induction (AC)",
        content: `
          <p>Le <strong>moteur à induction</strong> (ou moteur asynchrone) est le moteur le plus répandu dans l'industrie. Il fonctionne en courant alternatif et n'a <strong>pas de contact glissant</strong>.</p>
          <div class="analogy-box">
            <h4>⚙️ Principe</h4>
            <p>Le courant alternatif dans le stator crée un <strong>champ magnétique tournant</strong>. Ce champ induit des courants dans le rotor (en cage d'écureuil), qui crée à son tour un champ magnétique. Les deux champs s'attirent, entraînant la rotation.</p>
          </div>
          <div class="rules-box">
            <h4>📋 Caractéristiques clés</h4>
            <ul>
              <li><strong>Vitesse synchrone :</strong> Ns = 60 × f / p (f = fréquence, p = nb de paires de pôles)</li>
              <li><strong>Glissement :</strong> le rotor tourne légèrement moins vite que le champ (3 à 5%)</li>
              <li><strong>Exemple :</strong> moteur 2 pôles à 50 Hz → Ns = 3000 tr/min, rotor ≈ 2850 tr/min</li>
            </ul>
          </div>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">🏭</span><span class="ex-label">Pompes industrielles</span></div>
            <div class="example-item"><span class="ex-val">❄️</span><span class="ex-label">Climatiseurs</span></div>
            <div class="example-item"><span class="ex-val">🌀</span><span class="ex-label">Ventilateurs</span></div>
            <div class="example-item"><span class="ex-val">🚂</span><span class="ex-label">Trains (TGV)</span></div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "L'alternateur et la dynamo",
        content: `
          <p>Un <strong>générateur</strong> fait l'inverse d'un moteur : il convertit l'énergie mécanique en énergie électrique.</p>
          <div class="two-col">
            <div class="col-card">
              <h4>⚡ Alternateur (AC)</h4>
              <p>Produit du courant alternatif. Un rotor magnétique tournant induit une tension sinusoïdale dans les bobines du stator.</p>
              <p><strong>Exemples :</strong> centrales électriques, alternateur de voiture, éoliennes.</p>
            </div>
            <div class="col-card">
              <h4>🔋 Dynamo (DC)</h4>
              <p>Produit du courant continu grâce à un collecteur. Même principe que l'alternateur mais avec redressement mécanique.</p>
              <p><strong>Exemples :</strong> ancienne dynamo de vélo, certains générateurs portables.</p>
            </div>
          </div>
          <div class="example-calc">
            <p><strong>Centrale nucléaire :</strong> La chaleur → vapeur → turbine à ~3000 tr/min → alternateur → 20 000 V → transformateur → 400 000 V pour le réseau.</p>
          </div>
          <p class="info-tip">🌬️ Les éoliennes modernes utilisent des alternateurs à aimants permanents qui peuvent fonctionner à basse vitesse (pas besoin de multiplicateur de vitesse).</p>
        `
      }
    ],
    quiz: [
      {
        q: "Quel est le principe de base d'un moteur électrique ?",
        choices: ["L'effet Joule", "La force de Laplace (courant dans champ magnétique)", "L'induction de Faraday seule", "L'effet piezoélectrique"],
        answer: 1,
        explanation: "Un moteur exploite la force de Laplace : F = B × I × L. Un conducteur parcouru par un courant dans un champ magnétique subit une force mécanique."
      },
      {
        q: "À quelle vitesse synchrone tourne un moteur AC 4 pôles (2 paires de pôles) à 50 Hz ?",
        choices: ["3000 tr/min", "1500 tr/min", "750 tr/min", "6000 tr/min"],
        answer: 1,
        explanation: "Ns = 60 × f / p = 60 × 50 / 2 = 1500 tr/min. Avec 2 paires de pôles, la vitesse synchrone est divisée par 2."
      },
      {
        q: "Pourquoi le moteur à induction est-il préféré dans l'industrie par rapport au moteur DC ?",
        choices: ["Il est plus rapide", "Il n'a pas de balais (pas de maintenance, très robuste)", "Il consomme moins à puissance égale", "Il peut fonctionner en DC"],
        answer: 1,
        explanation: "Le moteur à induction n'a pas de contacts glissants (balais/collecteur), il est donc beaucoup plus robuste, fiable et nécessite peu de maintenance."
      },
      {
        q: "Qu'est-ce qu'un alternateur ?",
        choices: ["Un moteur AC", "Un transformateur de courant", "Un générateur de courant alternatif", "Un redresseur de tension"],
        answer: 2,
        explanation: "Un alternateur convertit l'énergie mécanique en énergie électrique AC. C'est ce qu'on trouve dans les centrales électriques et les voitures."
      },
      {
        q: "Dans une centrale nucléaire, dans quel ordre se fait la conversion d'énergie ?",
        choices: ["Électrique → Thermique → Mécanique", "Nucléaire → Thermique → Mécanique → Électrique", "Mécanique → Nucléaire → Électrique", "Chimique → Électrique → Mécanique"],
        answer: 1,
        explanation: "Fission nucléaire → chaleur → vapeur (thermique) → turbine (mécanique) → alternateur (électrique). C'est une longue chaîne de conversions."
      }
    ]
  },

  {
    id: 10,
    icon: "📏",
    title: "Mesures et instrumentation",
    subtitle: "Utiliser correctement le multimètre et l'oscilloscope",
    steps: [
      {
        type: "lesson",
        title: "Le multimètre",
        content: `
          <p>Le <strong>multimètre</strong> (ou contrôleur universel) est l'outil indispensable de tout électricien ou électronicien. Il mesure tension, courant, résistance et plus encore.</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔴</span>
              <div><strong>Fil rouge → Borne V/Ω</strong><p>Pour les mesures de tension et résistance. Toujours branché sur "V Ω mA" sauf mesures de fort courant.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">⚫</span>
              <div><strong>Fil noir → Borne COM</strong><p>Référence commune (masse). Toujours branché sur "COM".</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🟡</span>
              <div><strong>Borne 10A (ou 20A)</strong><p>Pour mesurer des forts courants uniquement. Jamais de tension avec ce port !</p></div>
            </div>
          </div>
          <div class="rules-box">
            <h4>📋 Comment mesurer la tension ?</h4>
            <ul>
              <li>Sélectionner DC (⎓) ou AC (~) selon la source</li>
              <li>Choisir une plage supérieure à la tension attendue</li>
              <li>Brancher en <strong>parallèle</strong> avec le composant</li>
              <li>Lire la valeur affichée</li>
            </ul>
          </div>
          <p class="info-tip">⚠️ La mesure de courant se fait en SÉRIE, ce qui impose d'ouvrir le circuit. Erreur classique : brancher l'ampèremètre en parallèle = court-circuit immédiat !</p>
        `
      },
      {
        type: "lesson",
        title: "Mesures avec le multimètre",
        content: `
          <div class="two-col">
            <div class="col-card">
              <h4>🔌 Mesure de tension (V)</h4>
              <ul>
                <li>Fils sur V/Ω et COM</li>
                <li>Branché en <strong>parallèle</strong></li>
                <li>Très haute résistance interne (MΩ) → n'influence pas le circuit</li>
              </ul>
            </div>
            <div class="col-card">
              <h4>⚡ Mesure de courant (A)</h4>
              <ul>
                <li>Fils sur A et COM</li>
                <li>Branché en <strong>série</strong></li>
                <li>Très faible résistance interne (mΩ) → n'influence pas le circuit</li>
              </ul>
            </div>
          </div>
          <div class="two-col">
            <div class="col-card">
              <h4>🔶 Mesure de résistance (Ω)</h4>
              <ul>
                <li>Fils sur V/Ω et COM</li>
                <li>Composant <strong>hors circuit</strong> obligatoirement</li>
                <li>Le multimètre envoie un petit courant de test</li>
              </ul>
            </div>
            <div class="col-card">
              <h4>🔔 Continuité / diode</h4>
              <ul>
                <li>Mode bip : sonne si résistance &lt; ~50 Ω</li>
                <li>Vérifie qu'un fil est bien conducteur</li>
                <li>Teste le sens d'une diode</li>
              </ul>
            </div>
          </div>
          <div class="example-calc">
            <p><strong>Astuce :</strong> Toujours partir de la plage la plus haute et descendre. Si l'afficheur montre "1" ou "OL" (overload), augmentez la plage.</p>
          </div>
        `
      },
      {
        type: "lesson",
        title: "L'oscilloscope",
        content: `
          <p>L'<strong>oscilloscope</strong> affiche l'évolution de la tension au cours du temps. Il permet de "voir" les signaux électriques.</p>
          <div class="rules-box">
            <h4>📋 Les réglages principaux</h4>
            <ul>
              <li><strong>Axe Y (vertical) :</strong> tension, en V/div. Règle l'amplitude du signal.</li>
              <li><strong>Axe X (horizontal) :</strong> temps, en ms/div ou µs/div. Règle la base de temps.</li>
              <li><strong>Trigger :</strong> synchronise l'affichage pour stabiliser la courbe.</li>
              <li><strong>Sonde (×1 / ×10) :</strong> atténue le signal pour mesurer des hautes tensions.</li>
            </ul>
          </div>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">📊</span>
              <div><strong>Mesurer une fréquence</strong><p>Compter le nombre de divisions pour une période complète × la base de temps. f = 1/T.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📐</span>
              <div><strong>Mesurer une tension crête</strong><p>Mesurer la hauteur du signal en divisions × la valeur V/div.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">⏱</span>
              <div><strong>Mesurer un déphasage</strong><p>Comparer deux signaux sur deux voies : le décalage temporel indique le déphasage en degrés.</p></div>
            </div>
          </div>
          <p class="info-tip">💻 Il existe des oscilloscopes logiciels (PC + interface USB) très accessibles pour débuter, suffisants pour la plupart des besoins en électronique.</p>
        `
      },
      {
        type: "lesson",
        title: "Autres instruments de mesure",
        content: `
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔧</span>
              <div>
                <strong>Pince ampèremétrique</strong>
                <p>Mesure le courant AC sans ouvrir le circuit : on "pince" le fil. Indispensable pour les forts courants et les installations existantes.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🌡️</span>
              <div>
                <strong>Wattmètre</strong>
                <p>Mesure directement la puissance active (W) et parfois la puissance réactive (VAR). Utile pour l'analyse de consommation.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔍</span>
              <div>
                <strong>LCRmètre</strong>
                <p>Mesure précisément les inductances (L), condensateurs (C) et résistances (R). Idéal pour vérifier des composants électroniques.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🏠</span>
              <div>
                <strong>Vérificateur de tension (VAT)</strong>
                <p>Stylo ou tournevis testeur qui s'illumine/bipe en présence de tension. Indispensable avant toute intervention électrique.</p>
              </div>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "Comment doit-on brancher un voltmètre pour mesurer la tension aux bornes d'une résistance ?",
        choices: ["En série", "En parallèle", "Hors circuit", "N'importe comment"],
        answer: 1,
        explanation: "Le voltmètre (et le multimètre en mode tension) se branche en PARALLÈLE avec le composant. Sa très haute résistance interne (MΩ) évite de perturber le circuit."
      },
      {
        q: "Que se passe-t-il si on branche un ampèremètre en parallèle à la place d'en série ?",
        choices: ["Il mesure double", "Court-circuit immédiat (sa résistance est quasi nulle)", "Il grille la résistance", "Rien de spécial"],
        answer: 1,
        explanation: "L'ampèremètre a une résistance interne très faible (quelques mΩ). Branché en parallèle, il court-circuite le composant, provoquant un fort courant qui peut griller le fusible de protection ou le composant."
      },
      {
        q: "Sur l'oscilloscope, si la base de temps est réglée à 2 ms/div et qu'une période complète occupe 5 divisions, quelle est la fréquence ?",
        choices: ["5 Hz", "10 Hz", "100 Hz", "200 Hz"],
        answer: 2,
        explanation: "T = 5 div × 2 ms/div = 10 ms = 0,01 s. f = 1/T = 1/0,01 = 100 Hz."
      },
      {
        q: "Pour mesurer une résistance avec un multimètre, le composant doit être :",
        choices: ["Alimenté normalement", "Sous une tension de référence", "Hors circuit (non alimenté)", "En court-circuit"],
        answer: 2,
        explanation: "La mesure de résistance se fait hors circuit et sans alimentation. Le multimètre envoie son propre courant de test ; une tension extérieure fausserait la mesure ou endommagerait l'appareil."
      },
      {
        q: "La pince ampèremétrique permet de mesurer le courant :",
        choices: ["Sans ouvrir le circuit, en entourant le fil", "En coupant le fil et en insérant la pince", "En parallèle seulement", "Uniquement en DC"],
        answer: 0,
        explanation: "La pince ampèremétrique détecte le champ magnétique créé par le courant dans le fil. On 'pince' le fil sans le couper ni ouvrir le circuit — parfait pour les mesures en situation réelle."
      }
    ]
  },

  {
    id: 11,
    icon: "🏠",
    title: "Installation électrique domestique",
    subtitle: "Comprendre le câblage d'une maison",
    steps: [
      {
        type: "lesson",
        title: "Les fils et leur code couleur",
        content: `
          <p>Dans une installation électrique française, chaque fil a une couleur normalisée (norme NF C 15-100) :</p>
          <div class="recap-table">
            <div class="recap-row recap-header">
              <span>Couleur</span><span>Rôle</span><span>Symbole</span><span>Tension/Courant</span>
            </div>
            <div class="recap-row">
              <span><strong style="color:#ef4444">Rouge / Brun</strong></span><span>Phase (L)</span><span>L</span><span>230 V par rapport au neutre</span>
            </div>
            <div class="recap-row">
              <span><strong style="color:#9aa3c2">Bleu</strong></span><span>Neutre (N)</span><span>N</span><span>0 V de référence</span>
            </div>
            <div class="recap-row">
              <span><strong style="color:#22c55e">Vert/Jaune</strong></span><span>Terre (PE)</span><span>⏚</span><span>Sécurité, pas de courant normal</span>
            </div>
            <div class="recap-row">
              <span><strong style="color:#f59e0b">Noir / Gris</strong></span><span>Autres phases (3φ)</span><span>L2/L3</span><span>400 V entre phases</span>
            </div>
          </div>
          <div class="analogy-box">
            <h4>⚡ Phase vs Neutre</h4>
            <p>La <strong>phase</strong> est le fil "sous tension" (dangereux). Le <strong>neutre</strong> est le fil de retour (en théorie à 0 V). Le courant circule de la phase vers les appareils et revient par le neutre. La terre est là uniquement en cas de défaut.</p>
          </div>
          <p class="info-tip">🔴 Le fil de phase est LE fil dangereux. Toucher la phase à mains nues et être en contact avec la terre = électrocution. Toujours vérifier avec un VAT.</p>
        `
      },
      {
        type: "lesson",
        title: "Le tableau électrique",
        content: `
          <p>Le <strong>tableau de distribution</strong> (ou tableau électrique) est le centre névralgique de l'installation. Il regroupe toutes les protections.</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔲</span>
              <div>
                <strong>Disjoncteur général (AGCP)</strong>
                <p>Coupe toute l'installation. Calibré selon le contrat EDF (ex: 60 A triphasé). C'est lui qu'on trouve en bas ou en entrée de tableau.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🏠</span>
              <div>
                <strong>Interrupteur différentiel (DDR 30 mA)</strong>
                <p>Protège contre l'électrocution. Un par groupe de circuits. Déclenche si une fuite ≥ 30 mA est détectée.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">🔌</span>
              <div>
                <strong>Disjoncteurs de circuit</strong>
                <p>Un par circuit : éclairage 10 A, prises 16 A ou 20 A, four 32 A, lave-linge 20 A… Protègent contre les surcharges et courts-circuits.</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📊</span>
              <div>
                <strong>Compteur Linky</strong>
                <p>Mesure la consommation (kWh), transmet les données à distance, permet de modifier les options tarifaires sans déplacement.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Les circuits domestiques",
        content: `
          <p>La norme NF C 15-100 définit comment doivent être organisés les circuits dans une maison :</p>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">10 A</span><span class="ex-label">Éclairage (1,5 mm²)</span></div>
            <div class="example-item"><span class="ex-val">16 A</span><span class="ex-label">Prises (2,5 mm²)</span></div>
            <div class="example-item"><span class="ex-val">20 A</span><span class="ex-label">Lave-linge (2,5 mm²)</span></div>
            <div class="example-item"><span class="ex-val">32 A</span><span class="ex-label">Four / plaque (6 mm²)</span></div>
            <div class="example-item"><span class="ex-val">20-32 A</span><span class="ex-label">Chauffe-eau (2,5-6 mm²)</span></div>
            <div class="example-item"><span class="ex-val">32 A</span><span class="ex-label">Borne VE (6 mm²)</span></div>
          </div>
          <div class="rules-box">
            <h4>📋 Règles importantes NF C 15-100</h4>
            <ul>
              <li>Max <strong>8 points de lumière</strong> par circuit éclairage</li>
              <li>Max <strong>8 prises</strong> par circuit 16 A</li>
              <li>La salle de bain est divisée en <strong>volumes de protection</strong> (0, 1, 2)</li>
              <li>Le câble doit être dimensionné pour le disjoncteur : 1,5 mm² ↔ 10 A, 2,5 mm² ↔ 16-20 A, 6 mm² ↔ 32 A</li>
            </ul>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Câblage d'un interrupteur et d'une prise",
        content: `
          <p>Comprendre le câblage de base permet de réaliser soi-même de petits travaux (avec coupure de courant obligatoire !).</p>
          <div class="steps-numbered">
            <div class="step-n">
              <span class="step-num">1</span>
              <div><strong>Prise 2P+T (avec terre)</strong><p>3 fils : Phase (brun/rouge) → borne L, Neutre (bleu) → borne N, Terre (vert/jaune) → borne ⏚. La terre est la broche ronde centrale.</p></div>
            </div>
            <div class="step-n">
              <span class="step-num">2</span>
              <div><strong>Interrupteur simple</strong><p>L'interrupteur coupe toujours la <strong>phase</strong>, jamais le neutre. Câble arrivée : phase + neutre. Départ luminaire : phase commutée + neutre (direct).</p></div>
            </div>
            <div class="step-n">
              <span class="step-num">3</span>
              <div><strong>Va-et-vient (2 interrupteurs)</strong><p>Permet de commander un éclairage depuis 2 endroits. Nécessite un câble 3 fils (+ navettes) entre les deux interrupteurs.</p></div>
            </div>
          </div>
          <div class="danger-banner">
            ⚠️ Tout travail sur le tableau électrique doit être confié à un électricien qualifié. Pour les prises et interrupteurs : coupez le disjoncteur ET vérifiez l'absence de tension.
          </div>
        `
      }
    ],
    quiz: [
      {
        q: "De quelle couleur est le fil de phase dans une installation électrique française ?",
        choices: ["Bleu", "Vert/jaune", "Brun ou rouge", "Noir uniquement"],
        answer: 2,
        explanation: "Le fil de phase est brun (norme récente) ou rouge (ancienne norme). Le bleu est le neutre, vert/jaune est la terre."
      },
      {
        q: "À quoi sert l'interrupteur différentiel 30 mA dans un tableau électrique ?",
        choices: ["À protéger contre les surcharges des câbles", "À protéger les personnes contre l'électrocution", "À mesurer la consommation", "À couper toute l'installation"],
        answer: 1,
        explanation: "Le DDR 30 mA détecte les courants de fuite et coupe en moins de 30 ms. Il protège spécifiquement contre l'électrocution (les 30 mA sont en dessous du seuil mortel)."
      },
      {
        q: "Quelle section de câble doit-on utiliser pour un circuit prise 16 A ?",
        choices: ["0,75 mm²", "1,5 mm²", "2,5 mm²", "6 mm²"],
        answer: 2,
        explanation: "La norme NF C 15-100 impose : 1,5 mm² pour 10 A (éclairage), 2,5 mm² pour 16-20 A (prises), 6 mm² pour 32 A (four, borne VE)."
      },
      {
        q: "Un interrupteur doit toujours couper :",
        choices: ["Le neutre", "La terre", "La phase", "Les trois fils en même temps"],
        answer: 2,
        explanation: "L'interrupteur coupe TOUJOURS la phase. Si on coupait le neutre, l'appareil resterait sous tension (la phase toujours présente) — dangereux."
      },
      {
        q: "Combien de prises peut-on connecter au maximum sur un circuit 16 A (norme NF C 15-100) ?",
        choices: ["4 prises", "8 prises", "12 prises", "Illimité"],
        answer: 1,
        explanation: "La norme NF C 15-100 limite à 8 prises maximum par circuit 16 A avec câble 2,5 mm². Au-delà, il faut créer un nouveau circuit."
      }
    ]
  },

  {
    id: 12,
    icon: "🌱",
    title: "Énergies renouvelables & stockage",
    subtitle: "Solaire, éolien, batteries — l'électricité de demain",
    steps: [
      {
        type: "lesson",
        title: "Le panneau solaire photovoltaïque",
        content: `
          <p>Un <strong>panneau solaire photovoltaïque</strong> convertit la lumière (photons) directement en électricité grâce à l'<strong>effet photoélectrique</strong>.</p>
          <div class="analogy-box">
            <h4>☀️ Principe de l'effet PV</h4>
            <p>Quand un photon frappe une cellule en silicium, il libère un électron. En associant des couches de silicium dopé P et N, on crée un champ électrique qui oriente les électrons dans un seul sens → courant continu.</p>
          </div>
          <div class="examples-grid">
            <div class="example-item"><span class="ex-val">~400 Wc</span><span class="ex-label">Puissance crête d'un panneau standard</span></div>
            <div class="example-item"><span class="ex-val">18-22%</span><span class="ex-label">Rendement typique</span></div>
            <div class="example-item"><span class="ex-val">30-40 V</span><span class="ex-label">Tension en circuit ouvert</span></div>
            <div class="example-item"><span class="ex-val">25 ans</span><span class="ex-label">Durée de vie garantie</span></div>
          </div>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">⚡</span>
              <div><strong>Onduleur (inverter)</strong><p>Convertit le DC des panneaux en AC 230 V compatible réseau. C'est le cerveau de l'installation PV.</p></div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">📊</span>
              <div><strong>MPPT (Maximum Power Point Tracking)</strong><p>Algorithme dans l'onduleur qui optimise en permanence le point de fonctionnement pour extraire le maximum de puissance.</p></div>
            </div>
          </div>
        `
      },
      {
        type: "lesson",
        title: "L'éolienne",
        content: `
          <p>Une <strong>éolienne</strong> convertit l'énergie cinétique du vent en électricité via une turbine et un générateur.</p>
          <div class="formula-box">
            <span class="formula">P = ½ × ρ × A × v³ × Cp</span>
          </div>
          <p>La puissance est proportionnelle au <strong>cube de la vitesse du vent</strong> : doubler la vitesse → multiplier la puissance par 8 !</p>
          <div class="two-col">
            <div class="col-card">
              <h4>🌬️ Éoliennes terrestres</h4>
              <ul>
                <li>2 à 6 MW par machine</li>
                <li>Hub à 80-120 m de hauteur</li>
                <li>Rotors de 80-150 m de diamètre</li>
                <li>Coût : ~1,2 M€/MW</li>
              </ul>
            </div>
            <div class="col-card">
              <h4>🌊 Éoliennes offshore</h4>
              <ul>
                <li>8 à 15+ MW par machine</li>
                <li>Vents plus forts et réguliers</li>
                <li>Coût plus élevé mais productivité supérieure</li>
                <li>En plein développement en France</li>
              </ul>
            </div>
          </div>
          <p class="info-tip">🔄 La puissance maximale théoriquement extractible du vent est de 59,3% (limite de Betz). Les éoliennes modernes atteignent 40-50% de rendement réel.</p>
        `
      },
      {
        type: "lesson",
        title: "Les batteries et le stockage",
        content: `
          <p>Le <strong>stockage d'énergie</strong> est le défi majeur des énergies renouvelables (production variable → besoin de stocker les surplus).</p>
          <div class="limits-list">
            <div class="limit-item">
              <span class="limit-icon">🔋</span>
              <div>
                <strong>Batteries lithium-ion (Li-ion)</strong>
                <p>La technologie dominante. Haute densité d'énergie, longue durée de vie (2000+ cycles). Utilisées dans les voitures électriques (Tesla, etc.) et les systèmes résidentiels (Powerwall).</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">💧</span>
              <div>
                <strong>STEP (Station de Transfert d'Énergie par Pompage)</strong>
                <p>Pompe de l'eau en hauteur quand il y a excès d'électricité, la turbine quand on en a besoin. Le principal stockage à grande échelle en France (7 GW installés).</p>
              </div>
            </div>
            <div class="limit-item">
              <span class="limit-icon">💨</span>
              <div>
                <strong>Hydrogène vert (H₂)</strong>
                <p>Électrolyse de l'eau avec du courant renouvelable → H₂ stocké → reconverti en électricité via pile à combustible. Prometteuse mais rendement global ~30-40%.</p>
              </div>
            </div>
          </div>
          <div class="example-calc">
            <p><strong>Exemple installation solaire résidentielle :</strong></p>
            <p>6 panneaux × 400 Wc = 2 400 Wc · Production annuelle (région parisienne) ≈ 2400 × 1000 h = <strong>2 400 kWh/an</strong></p>
            <p>Consommation moyenne française : ~4 500 kWh/an → couvre ~53%</p>
          </div>
        `
      },
      {
        type: "lesson",
        title: "Bilan énergétique et mix électrique",
        content: `
          <p>La <strong>transition énergétique</strong> implique de comprendre comment l'électricité est produite et transportée à l'échelle nationale.</p>
          <div class="recap-table">
            <div class="recap-row recap-header">
              <span>Source</span><span>Part France (2024)</span><span>Type</span><span>Émissions CO₂</span>
            </div>
            <div class="recap-row">
              <span>Nucléaire</span><span>~70%</span><span>Pilotable</span><span>Très faibles</span>
            </div>
            <div class="recap-row">
              <span>Hydraulique</span><span>~12%</span><span>Semi-pilotable</span><span>Très faibles</span>
            </div>
            <div class="recap-row">
              <span>Éolien</span><span>~10%</span><span>Intermittent</span><span>Très faibles</span>
            </div>
            <div class="recap-row">
              <span>Solaire</span><span>~5%</span><span>Intermittent</span><span>Très faibles</span>
            </div>
            <div class="recap-row">
              <span>Thermique</span><span>~3%</span><span>Pilotable</span><span>Élevées</span>
            </div>
          </div>
          <p class="info-tip">🌍 La France a l'une des électricités les plus décarbonées d'Europe grâce au nucléaire et à l'hydraulique. L'empreinte carbone du kWh français est ~50 g CO₂/kWh vs ~400 g en Allemagne.</p>
        `
      }
    ],
    quiz: [
      {
        q: "Un panneau solaire photovoltaïque produit quel type de courant ?",
        choices: ["Courant alternatif (AC)", "Courant continu (DC)", "Les deux selon l'ensoleillement", "Courant pulsé"],
        answer: 1,
        explanation: "Un panneau PV produit du courant continu (DC). L'onduleur est nécessaire pour le convertir en AC 230V utilisable dans la maison ou injectab en réseau."
      },
      {
        q: "Si la vitesse du vent double, la puissance d'une éolienne est multipliée par :",
        choices: ["2", "4", "8", "16"],
        answer: 2,
        explanation: "La puissance est proportionnelle à v³ (cube de la vitesse). Si v double : P × 2³ = 8. C'est pourquoi l'emplacement d'une éolienne est crucial."
      },
      {
        q: "Quel est le principal mode de stockage d'énergie à grande échelle en France ?",
        choices: ["Batteries lithium-ion", "Hydrogène vert", "STEP (pompage-turbinage)", "Volants d'inertie"],
        answer: 2,
        explanation: "Les STEP (Stations de Transfert d'Énergie par Pompage) représentent ~7 GW en France, largement devant les batteries. On pompe l'eau en hauteur et on turbine à la demande."
      },
      {
        q: "Quelle est la part approximative du nucléaire dans la production électrique française ?",
        choices: ["30%", "50%", "70%", "90%"],
        answer: 2,
        explanation: "Le nucléaire représente environ 70% de la production électrique française, ce qui explique le faible contenu carbone de l'électricité française (~50 g CO₂/kWh)."
      },
      {
        q: "Le MPPT dans un onduleur solaire sert à :",
        choices: ["Mesurer la production en kWh", "Optimiser en permanence la puissance extraite des panneaux", "Protéger contre la foudre", "Réguler la tension de sortie à 230V"],
        answer: 1,
        explanation: "Le MPPT (Maximum Power Point Tracking) adapte continuellement le point de fonctionnement électrique des panneaux pour en tirer la puissance maximale, quelle que soit l'irradiation solaire."
      }
    ]
  }
];

// ===== GLOSSAIRE =====
const GLOSSARY = [
  { term: "Tension (U)", unit: "Volt (V)", def: "Différence de potentiel électrique entre deux points. C'est la « pression » qui pousse les électrons dans le circuit. Se mesure avec un voltmètre branché en parallèle." },
  { term: "Courant (I)", unit: "Ampère (A)", def: "Débit de charges électriques dans un conducteur. Se mesure avec un ampèremètre branché en série." },
  { term: "Résistance (R)", unit: "Ohm (Ω)", def: "Opposition d'un matériau au passage du courant électrique. Se mesure hors circuit avec un ohmmètre." },
  { term: "Loi d'Ohm", unit: "U = R × I", def: "Loi fondamentale reliant tension, résistance et courant dans un composant ohmique." },
  { term: "Puissance (P)", unit: "Watt (W)", def: "Énergie consommée ou produite par seconde. P = U × I = R × I² = U²/R." },
  { term: "Énergie (E)", unit: "Joule (J) / kWh", def: "Puissance multipliée par le temps : E = P × t. Facturée en kilowattheures (1 kWh = 3,6 millions de joules)." },
  { term: "Effet Joule", unit: "P = R × I²", def: "Transformation de l'énergie électrique en chaleur quand un courant traverse une résistance. Utile (radiateur) ou nuisible (pertes en ligne)." },
  { term: "Courant continu (DC)", unit: "—", def: "Courant qui circule toujours dans le même sens (piles, batteries, panneaux solaires, électronique)." },
  { term: "Courant alternatif (AC)", unit: "—", def: "Courant qui change périodiquement de sens. Le secteur français est en 230 V / 50 Hz." },
  { term: "Fréquence (f)", unit: "Hertz (Hz)", def: "Nombre de cycles par seconde d'un signal alternatif. 50 Hz en Europe, 60 Hz aux USA. f = 1/T." },
  { term: "Tension efficace (RMS)", unit: "Volt (V)", def: "Tension continue équivalente qui produirait le même effet thermique. V_eff = V_max / √2. Les 230 V du secteur sont une valeur efficace." },
  { term: "Circuit série", unit: "—", def: "Composants connectés bout à bout : courant identique partout, tensions et résistances s'additionnent." },
  { term: "Circuit parallèle", unit: "—", def: "Composants entre les deux mêmes points : tension identique, courants s'additionnent, résistance équivalente diminue." },
  { term: "Loi des nœuds", unit: "ΣI = 0", def: "1ère loi de Kirchhoff : en un nœud, la somme des courants entrants égale la somme des courants sortants." },
  { term: "Loi des mailles", unit: "ΣU = 0", def: "2ème loi de Kirchhoff : dans une boucle fermée, la somme algébrique des tensions est nulle." },
  { term: "Condensateur (C)", unit: "Farad (F)", def: "Composant qui stocke l'énergie sous forme de champ électrique. Bloque le DC, laisse passer l'AC. Q = C × U." },
  { term: "Bobine / Inductance (L)", unit: "Henry (H)", def: "Composant qui stocke l'énergie sous forme de champ magnétique. Laisse passer le DC, s'oppose à l'AC haute fréquence." },
  { term: "Diode", unit: "—", def: "Composant qui ne laisse passer le courant que dans un sens. Seuil ≈ 0,7 V (silicium)." },
  { term: "LED", unit: "—", def: "Diode électroluminescente : émet de la lumière quand elle conduit. Toujours l'associer à une résistance série." },
  { term: "Transformateur", unit: "U₁/U₂ = N₁/N₂", def: "Machine statique qui change la tension AC par induction électromagnétique. Rendement 97–99,5 %." },
  { term: "Force de Laplace", unit: "F = B × I × L", def: "Force subie par un conducteur parcouru par un courant dans un champ magnétique. Principe de base du moteur électrique." },
  { term: "Alternateur", unit: "—", def: "Générateur qui convertit l'énergie mécanique en électricité alternative (centrales, voitures, éoliennes)." },
  { term: "Moteur asynchrone", unit: "Ns = 60f/p", def: "Moteur AC à induction, sans balais, le plus répandu dans l'industrie. Le rotor tourne un peu moins vite que le champ tournant (glissement)." },
  { term: "Multimètre", unit: "—", def: "Instrument mesurant tension (parallèle), courant (série), résistance (hors circuit) et continuité." },
  { term: "Oscilloscope", unit: "—", def: "Instrument affichant la tension en fonction du temps. Permet de mesurer amplitude, période, fréquence et déphasage." },
  { term: "Phase (L)", unit: "fil brun/rouge", def: "Conducteur sous tension (230 V par rapport au neutre). C'est le fil dangereux." },
  { term: "Neutre (N)", unit: "fil bleu", def: "Conducteur de retour du courant, au potentiel proche de 0 V." },
  { term: "Terre (PE)", unit: "fil vert/jaune", def: "Conducteur de protection reliant les masses métalliques à la terre. Ne transporte du courant qu'en cas de défaut." },
  { term: "Disjoncteur", unit: "—", def: "Protection qui coupe le circuit en cas de surcharge ou court-circuit. Protège l'installation contre l'incendie." },
  { term: "Différentiel (DDR)", unit: "30 mA", def: "Protection qui détecte les fuites de courant à la terre et coupe en moins de 30 ms. Protège les personnes contre l'électrocution." },
  { term: "NF C 15-100", unit: "—", def: "Norme française régissant les installations électriques basse tension des bâtiments d'habitation." },
  { term: "Onduleur", unit: "—", def: "Convertisseur DC → AC. Indispensable pour injecter la production solaire sur le réseau 230 V." },
  { term: "MPPT", unit: "—", def: "Maximum Power Point Tracking : algorithme qui optimise en permanence la puissance extraite d'un panneau solaire." },
  { term: "kWh", unit: "kilowattheure", def: "Unité d'énergie de facturation : 1 000 W consommés pendant 1 heure. 1 kWh = 3 600 000 J." },
  { term: "Court-circuit", unit: "—", def: "Contact direct entre deux points de potentiels différents avec une résistance quasi nulle : courant très élevé, échauffement violent, danger d'incendie." },
  { term: "Impédance (Z)", unit: "Ohm (Ω)", def: "Résistance « généralisée » en courant alternatif, incluant les effets des condensateurs et bobines. Dépend de la fréquence." }
];
