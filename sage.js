// ══════════════════════════════════════
//  SAGE — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Cestus de Arcana
//  Arma Despertar: Kyve (anillos de energía)
// ══════════════════════════════════════
D.sage = {

  succession: [
    {
      nombre: 'Fragmento del Tiempo',
      icon: '⏰',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 (15s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff de AP principal. Activar siempre al inicio del combo — no empezar sin este activo.'
    },
    {
      nombre: 'Prime: Colapso Temporal',
      icon: '💫',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'AoE amplia con knockdown. Skill de apertura ideal en PvE. Buena combinación con el buff de AP.'
    },
    {
      nombre: 'Teletransporte',
      icon: '🔀',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de movilidad instantánea. Herramienta esencial para escapar o reposicionarse en el pack.'
    },
    {
      nombre: 'Prime: Explosión de Energía',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [Y]',
      notas: 'Explosión en área con stun. Mayor daño de sucesión. Usar después de knockdown del pack.'
    },
    {
      nombre: 'Barrera Temporal',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +20 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa. Usar al recibir presión de múltiples monstruos o al entrar a packs pesados.'
    },
    {
      nombre: 'Prime: Filo del Tiempo',
      icon: '⚔️',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback + reducción defensa -20',
      input_xbox: 'LT + [X]',
      notas: 'Ataque de área amplio. Reduce defensa del enemigo. Usar antes del burst para maximizar daño.'
    },
    {
      nombre: 'Prime: Paradoja Cuántica',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [X]',
      notas: 'Skill de relleno con stun. Encadenar en el combo para mantener el CC y el daño activos.'
    },
    {
      nombre: 'Pulso Dimensional',
      icon: '🔮',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción vel. ataque -7%',
      input_xbox: 'RB + [X]',
      notas: 'Proyectil de largo alcance. Debuff de velocidad de ataque. Bueno para iniciar desde distancia.'
    },
    {
      nombre: 'Flow: Eco Temporal',
      icon: '🔄',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun extendido',
      input_xbox: 'RB + [Y] (Flow)',
      notas: 'Flow de Explosión de Energía. Encadenar inmediatamente tras la explosión para extender el stun.'
    },
    {
      nombre: 'Absolute: Colapso Temporal',
      icon: '💫💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -10',
      input_xbox: 'LT + RT (Absolute)',
      notas: 'Versión absoluta con reducción de defensa adicional. Mayor área de efecto que la versión base.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Fractura del Espacio',
      icon: '🌌',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill más importante de despertar. Buff AP alto + knockdown de área. SIEMPRE iniciar con esta.'
    },
    {
      nombre: 'Prime: Colapso Dimensional',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción defensa -20',
      input_xbox: 'RB + [A]',
      notas: 'Mayor daño de la rotación de despertar. Stun + reducción de defensa masiva. Usar tras knockdown.'
    },
    {
      nombre: 'Portal de Escape',
      icon: '🚪',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de emergencia. Usar cuando seas rodeado o para reposicionamiento entre packs.'
    },
    {
      nombre: 'Regeneración Temporal',
      icon: '🔄',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +25 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Recuperación de HP por golpe. Sostenibilidad en grindeo largo sin pociones de HP.'
    },
    {
      nombre: 'Prime: Singularidad',
      icon: '🌑',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [X]',
      notas: 'Ataque de punto singular con enorme daño. Rematador de combo. Gran daño single-target.'
    },
    {
      nombre: 'Campo de Fuerza',
      icon: '🔵',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +25 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa. Escudo temporal mientras se ejecuta el burst principal.'
    },
    {
      nombre: 'Prime: Corte Cuántico',
      icon: '✂️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [B]',
      notas: 'Ataque rápido con stun. Buen daño de relleno entre cooldowns de las skills principales.'
    },
    {
      nombre: 'Desgarro Dimensional',
      icon: '🌠',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback + reducción defensa -10',
      input_xbox: 'RB + [X]',
      notas: 'AoE de knockback con reducción de defensa. Usar para agrupar monstruos y debuffear antes del burst.'
    },
  ]
};
