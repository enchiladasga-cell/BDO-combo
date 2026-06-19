// ══════════════════════════════════════
//  STRIKER — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Guantelete
//  Arma Despertar: Gardbrace (clones)
// ══════════════════════════════════════
D.striker = {

  succession: [
    {
      nombre: 'Prime: Puño del Trueno',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LT + [Y]',
      notas: 'Ataque de entrada rápido con SA y stun. Cancela animación en Giro de Tornado para combo fluido.'
    },
    {
      nombre: 'Prime: Giro de Tornado',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [X]',
      notas: 'Spin attack 360° con SA. Knockdown en área. Skill de daño principal PvE en sucesión.'
    },
    {
      nombre: 'Rugido Interno',
      icon: '👊',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 (15s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff de AP esencial. Activar siempre al inicio del pull. Activa estado de poder interno.'
    },
    {
      nombre: 'Prime: Patada Orbital',
      icon: '🦵',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + RT',
      notas: 'Gran knockback de área. Ideal para agrupar monstruos dispersos hacia el centro del pack.'
    },
    {
      nombre: 'Dash Explosivo',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +20%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Principal evasión de Striker. I-Frame con boost de velocidad. Encadenar con skills de CC para combos rápidos.'
    },
    {
      nombre: 'Prime: Golpe de Montaña',
      icon: '⛰️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -20',
      input_xbox: 'RB + [Y]',
      notas: 'Golpe al suelo poderoso. Aplica reducción de defensa fuerte. Usar en enemigos ya en el suelo.'
    },
    {
      nombre: 'Prime: Combo Maestro',
      icon: '🥊',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [X]',
      notas: 'Serie de golpes rápidos con SA. Stun al final de la animación. Buen daño de relleno.'
    },
    {
      nombre: 'Ola de Energía',
      icon: '🌊',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'HP Regen +20 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [X]',
      notas: 'FG + regeneración de HP por golpe. Skill de sostenibilidad. Esencial en packs grandes sin pociones.'
    },
    {
      nombre: 'Flow: Ola Explosiva',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [X] (Flow)',
      notas: 'Flow de Giro de Tornado. Encadenar inmediatamente para añadir Knockdown extra y daño adicional.'
    },
    {
      nombre: 'Absolute: Puño del Trueno',
      icon: '⚡💥',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción vel. ataque -7%',
      input_xbox: 'LT + [Y] (Absolute)',
      notas: 'Versión absoluta con debuff adicional de velocidad de ataque. Mayor daño que la versión base.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Puño del Dragón',
      icon: '🐉',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill de apertura de despertar. Buff AP muy alto + knockdown. SIEMPRE iniciar rotación con esta.'
    },
    {
      nombre: 'Prime: Explosión de Ki',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [A]',
      notas: 'Mayor daño de la rotación de despertar. Liberación de Ki en área con stun. Usar tras knockdown.'
    },
    {
      nombre: 'Prime: Tormenta de Puños',
      icon: '👐',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción defensa -20',
      input_xbox: 'LB + [X]',
      notas: 'Combo rápido de golpes con SA. Aplica fuerte reducción de defensa. Usar antes del burst.'
    },
    {
      nombre: 'Paso del Viento',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Dash con I-Frame. Reposicionamiento esencial en despertar. Cancela animaciones largas.'
    },
    {
      nombre: 'Prime: Caída del Meteorito',
      icon: '☄️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [B]',
      notas: 'Ataque aéreo con knockdown. Iniciar con salto para empoderarla. Rematador de packs caídos.'
    },
    {
      nombre: 'Furia Interna',
      icon: '😤',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Vel. ataque +10% (10s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [X]',
      notas: 'Buff de velocidad de ataque. Usar al inicio del pull para mayor DPS durante toda la rotación.'
    },
    {
      nombre: 'Agarre del Dragón',
      icon: '🤜',
      proteccion: 'SA',
      cc: 'Agarre (Grab)',
      buffs: 'Ninguno',
      debuffs: 'Agarre + daño masivo',
      input_xbox: 'LB + [B]',
      notas: 'Skill de agarre única de despertar. CC no resistible. Muy efectiva en PvP y contra bosses.'
    },
    {
      nombre: 'Prime: Puño Final',
      icon: '🌑',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown masivo',
      input_xbox: 'RB + [B]',
      notas: 'Skill finalizadora de alta potencia. Mayor knockdown del kit de despertar. Usar al final del burst.'
    },
  ]
};
