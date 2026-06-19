// ══════════════════════════════════════
//  WOOSA — Sucesión y Despertar
//  Actualizado: junio 2026
//  Hermana de Maegu. Arma Sucesión: Binyeo Knife
//  Arma Despertar: Charm (intercambiado con Maegu)
// ══════════════════════════════════════
D.woosa = {

  succession: [
    {
      nombre: 'Prime: Ventarrón Espiritual',
      icon: '🌬️',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + [Y]',
      notas: 'Skill de entrada con SA. Knockback amplio para agrupar o dispersar monstruos según necesites.'
    },
    {
      nombre: 'Prime: Baile Místico',
      icon: '💃',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'AP +15 (15s)',
      debuffs: 'Stun',
      input_xbox: 'LB + [Y]',
      notas: 'Buff de AP + stun simultáneo. Skill de apertura ideal — activa el buff mientras aplica CC.'
    },
    {
      nombre: 'Espíritu del Viento',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +20%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame con boost de velocidad alto. Principal movilidad de Woosa en sucesión.'
    },
    {
      nombre: 'Prime: Lluvia de Encanto',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [Y]',
      notas: 'AoE amplio con knockdown. Principal skill de daño en PvE. Usar con el pack ya agrupado.'
    },
    {
      nombre: 'Escudo del Espíritu',
      icon: '🌀',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +20 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa. Herramienta defensiva al recibir presión simultánea de varios monstruos.'
    },
    {
      nombre: 'Prime: Cuchilla Etérea',
      icon: '🗡️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción defensa -20',
      input_xbox: 'LT + RT',
      notas: 'Stun + reducción de defensa simultáneos. Usar antes del burst para maximizar el daño.'
    },
    {
      nombre: 'Torbellino del Alma',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +20 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [X]',
      notas: 'AoE de área con regen de HP por golpe. Skill de relleno con utilidad de sostenibilidad.'
    },
    {
      nombre: 'Flow: Viento Místico',
      icon: '🌬️💫',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback extendido',
      input_xbox: 'LT + [Y] (Flow)',
      notas: 'Flow de Ventarrón Espiritual. Encadenar inmediatamente para extender el knockback y añadir daño.'
    },
    {
      nombre: 'Absolute: Lluvia de Encanto',
      icon: '🌸💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -10',
      input_xbox: 'RB + [Y] (Absolute)',
      notas: 'Versión absoluta con reducción de defensa adicional. Mayor área y daño que la versión base.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Gran Tormenta Espiritual',
      icon: '⛈️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill más potente de despertar. Buff AP alto + knockdown masivo. SIEMPRE iniciar con esta.'
    },
    {
      nombre: 'Prime: Lluvia de Espíritus',
      icon: '🌧️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [A]',
      notas: 'AoE de mayor daño de despertar. Stun en toda el área. Usar tras el knockdown del pack.'
    },
    {
      nombre: 'Bendición Etérea',
      icon: '✨',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +30 / AP +15 (20s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Buff doble de HP y AP. Sostenibilidad y daño combinados. Usar al inicio de cada pull.'
    },
    {
      nombre: 'Destello del Viento',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame. Reposicionamiento rápido y cancelación de animaciones largas entre skills.'
    },
    {
      nombre: 'Barrera Espiritual',
      icon: '🔵',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +25 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa. Usar al iniciar packs con alta densidad de monstruos.'
    },
    {
      nombre: 'Prime: Golpe del Alma',
      icon: '💜',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -20',
      input_xbox: 'LT + [X]',
      notas: 'Golpe directo con reducción de defensa. Rematador de combo de despertar. Gran daño final.'
    },
    {
      nombre: 'Danza del Espíritu Eterno',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [B]',
      notas: 'Skill de stun rápido. Buen daño de relleno entre cooldowns de las skills principales.'
    },
  ]
};
