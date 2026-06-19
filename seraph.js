// ══════════════════════════════════════
//  SERAPH — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Celestial Spear
//  Arma Despertar: Celestial Bo Staff
// ══════════════════════════════════════
D.seraph = {

  succession: [
    {
      nombre: 'Prime: Golpe de Luz Sagrada',
      icon: '🌟',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'AP +15 (15s)',
      debuffs: 'Stun',
      input_xbox: 'LB + [Y]',
      notas: 'Skill de apertura de sucesión. Buff AP + stun en el mismo movimiento. SIEMPRE iniciar con esta.'
    },
    {
      nombre: 'Prime: Lanza Celestial',
      icon: '🏹',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [Y]',
      notas: 'Proyectil de largo alcance con knockdown. Ideal para iniciar desde lejos antes de entrar al pack.'
    },
    {
      nombre: 'Teletransporte de Luz',
      icon: '✨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de movilidad. Reposicionamiento instantáneo. Principal evasión de Seraph en sucesión.'
    },
    {
      nombre: 'Barrera Sagrada',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +25 / HP Regen +20 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff doble de defensa y HP regen. Principal herramienta defensiva de Seraph.'
    },
    {
      nombre: 'Prime: Explosión Divina',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -20',
      input_xbox: 'LT + RT',
      notas: 'AoE poderosa. Mayor daño de sucesión. Usar tras agrupar el pack. Reducción de defensa incluida.'
    },
    {
      nombre: 'Prime: Rayo Sagrado',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LT + [Y]',
      notas: 'Rayo de área con stun. Buen daño de relleno entre cooldowns de las skills principales.'
    },
    {
      nombre: 'Aura de Seraph',
      icon: '🔆',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +20 / Prob. Crítico +15% (20s)',
      debuffs: 'Ninguno',
      input_xbox: 'RB + [X]',
      notas: 'Buff de daño crítico + AP. Activar siempre que esté disponible al inicio del pull.'
    },
    {
      nombre: 'Prime: Caída de Luz',
      icon: '🌠',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + [X]',
      notas: 'Ataque descendente con knockback de área. Útil para reagrupar monstruos dispersos.'
    },
    {
      nombre: 'Flow: Destello Sagrado',
      icon: '✨💫',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun extendido',
      input_xbox: 'LT + [Y] (Flow)',
      notas: 'Flow de Rayo Sagrado. Encadenar inmediatamente para extender el stun y añadir daño adicional.'
    },
    {
      nombre: 'Absolute: Explosión Divina',
      icon: '💥🌟',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -30',
      input_xbox: 'LT + RT (Absolute)',
      notas: 'Versión absoluta con reducción de defensa mucho mayor. Mayor área de efecto y daño.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Juicio del Seraph',
      icon: '😇',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 / Prob. Crítico +20% (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'La skill más poderosa de despertar. Buff masivo AP+crítico + knockdown. SIEMPRE iniciar aquí.'
    },
    {
      nombre: 'Prime: Nova de Luz',
      icon: '💫',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción defensa -20',
      input_xbox: 'RB + [A]',
      notas: 'Mayor daño de la rotación de despertar. Stun + reducción de defensa simultánea. Usar tras knockdown.'
    },
    {
      nombre: 'Regeneración Divina',
      icon: '💚',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +35 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Mayor regen de HP de toda la clase. Esencial para grindeo largo sin depender de pociones.'
    },
    {
      nombre: 'Destello Sagrado',
      icon: '💡',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de escape. Reposicionamiento y cancelación de animaciones largas entre skills.'
    },
    {
      nombre: 'Escudo de Luz',
      icon: '🔰',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +30 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'Mayor buff de defensa de la clase. Usar al castear skills de canal largo en zonas de endgame.'
    },
    {
      nombre: 'Prime: Lanza de la Pureza',
      icon: '🏹',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [X]',
      notas: 'Proyectil de alto daño con knockdown. Excelente rematador a distancia del combo.'
    },
    {
      nombre: 'Tormenta Sagrada',
      icon: '🌩️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción vel. ataque -10%',
      input_xbox: 'LB + [B]',
      notas: 'Stun + debuff de velocidad de ataque. Usar en packs de monstruos rápidos para facilitar el grindeo.'
    },
    {
      nombre: 'Juicio Absoluto',
      icon: '⚔️✝️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown masivo + reducción defensa -20',
      input_xbox: 'RB + [X]',
      notas: 'Skill finalizadora de máximo daño. Knockdown masivo + reducción de defensa. Cierra el burst.'
    },
  ]
};
