// ══════════════════════════════════════
//  MYSTIC — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Cestus (puños)
//  Arma Despertar: Cestus de Mar
// ══════════════════════════════════════
D.mystic = {

  succession: [
    {
      nombre: 'Prime: Golpe del Dragón de Mar',
      icon: '🌊',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [Y]',
      notas: 'Skill de entrada con SA y knockdown. Excelente para abrir packs en PvE. Base de la rotación.'
    },
    {
      nombre: 'Prime: Presa del Kraken',
      icon: '🐙',
      proteccion: 'SA',
      cc: 'Agarre (Grab)',
      buffs: 'Ninguno',
      debuffs: 'Agarre + daño masivo',
      input_xbox: 'RB + [X]',
      notas: 'Grab único de sucesión. CC no resistible. Muy efectivo en PvP y contra jefes de zona.'
    },
    {
      nombre: 'Danza Espiritual',
      icon: '💫',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +20 / Vel. ataque +7%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff doble de HP regen y velocidad de ataque. Clave para sostenibilidad sin pociones.'
    },
    {
      nombre: 'Prime: Golpe de Mariposa',
      icon: '🦋',
      proteccion: 'FG',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + RT',
      notas: 'FG durante el cast. Knockback amplio en área. Útil para controlar grupos de monstruos.'
    },
    {
      nombre: 'Paso de Brisa',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Principal movilidad de Mystic. I-Frame limpio. Encadenar con Presa del Kraken para grab rápido.'
    },
    {
      nombre: 'Prime: Pecho de Tortuga',
      icon: '🐢',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [X]',
      notas: 'Golpe frontal con stun instantáneo. Usar para CC rápido después de agrupar el pack.'
    },
    {
      nombre: 'Prime: Garra del Tigre',
      icon: '🐯',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -20',
      input_xbox: 'RB + [Y]',
      notas: 'Ataque descendente con SA. Reducción de defensa al impactar. Usar antes del burst principal.'
    },
    {
      nombre: 'Vórtice Marino',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [X]',
      notas: 'AoE grande de relleno. Usar entre cooldowns de las skills de CC para no perder tiempo.'
    },
    {
      nombre: 'Flow: Pecho de Tortuga',
      icon: '🐢💥',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun extendido',
      input_xbox: 'LB + [X] (Flow)',
      notas: 'Flow de Pecho de Tortuga. Encadenar inmediatamente para extender el stun y añadir daño extra.'
    },
    {
      nombre: 'Absolute: Golpe del Dragón de Mar',
      icon: '🌊💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -10',
      input_xbox: 'LT + [Y] (Absolute)',
      notas: 'Versión absoluta con reducción de defensa adicional. Mayor área y daño que la versión base.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Ola del Océano',
      icon: '🌊',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +20 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill de apertura de despertar. Buff AP + knockdown masivo. SIEMPRE iniciar rotación con esta.'
    },
    {
      nombre: 'Prime: Torbellino Acuático',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción vel. movimiento -10%',
      input_xbox: 'RB + [A]',
      notas: 'Mayor daño de la rotación de despertar. Stun + debuff de velocidad. Usar tras el knockdown.'
    },
    {
      nombre: 'Espíritu del Mar',
      icon: '🐬',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +30 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Regeneración alta de HP. Esencial para grindeo largo sin depender de pociones.'
    },
    {
      nombre: 'Corriente de Corales',
      icon: '🪸',
      proteccion: 'FG',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + [B]',
      notas: 'FG con knockback. Control de monstruos que se acercan mientras se ejecutan otras habilidades.'
    },
    {
      nombre: 'Paso del Delfín',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de movilidad. Principal herramienta de reposicionamiento de despertar.'
    },
    {
      nombre: 'Prime: Puño del Océano',
      icon: '💪',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [X]',
      notas: 'Golpe directo de alto daño con SA. Rematador de pack caído. Gran daño single-target.'
    },
    {
      nombre: 'Agarre del Mar (Grab)',
      icon: '🐙',
      proteccion: 'SA',
      cc: 'Agarre (Grab)',
      buffs: 'Ninguno',
      debuffs: 'Agarre + daño masivo',
      input_xbox: 'LB + [B]',
      notas: 'Grab de despertar. CC no resistible. Útil en PvP y contra jefes. Diferente al grab de sucesión.'
    },
    {
      nombre: 'Absolute: Ola del Océano (Core)',
      icon: '🌊🌑',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 mejorado',
      debuffs: 'Knockdown masivo',
      input_xbox: 'LT + RT (Core)',
      notas: 'Core skill: mayor buff de AP y área de knockdown más grande que la versión normal.'
    },
  ]
};
