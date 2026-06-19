// ══════════════════════════════════════
//  WITCH — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Staff (bastón)
//  Arma Despertar: Aad Sphera (orbe)
// ══════════════════════════════════════
D.witch = {

  succession: [
    {
      nombre: 'Prime: Rayo de Tormenta',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LT + [Y]',
      notas: 'Hechizo eléctrico con stun de área. Skill de inicio de combo principal en sucesión.'
    },
    {
      nombre: 'Prime: Meteoro',
      icon: '☄️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [Y]',
      notas: 'Mayor daño de sucesión. Knockdown masivo de área. Usar con el pack ya agrupado y stunneado.'
    },
    {
      nombre: 'Teletransporte Mágico',
      icon: '🔀',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de movilidad. Permite reposicionarse sin recibir daño durante el cast de hechizos.'
    },
    {
      nombre: 'Aura de Poder',
      icon: '✨',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +20 / Vel. casteo +10% (30s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff doble esencial. Activar siempre al inicio — dura 30 segundos. Base del daño de Witch.'
    },
    {
      nombre: 'Prime: Torrente Helado',
      icon: '❄️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Lentitud severa -15%',
      input_xbox: 'LT + [X]',
      notas: 'Ralentiza severamente al pack. Usar para controlar grupos grandes y facilitar el posicionamiento.'
    },
    {
      nombre: 'Escudo Arcano',
      icon: '🔵',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +20 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa. Usar al castear spells largos en packs peligrosos de endgame.'
    },
    {
      nombre: 'Prime: Explosión de Tierra',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LB + [X]',
      notas: 'AoE de tierra con knockdown amplio. Usar tras pull de monstruos para derribar todo el pack.'
    },
    {
      nombre: 'Prime: Cadena de Relámpagos',
      icon: '🌩️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [X]',
      notas: 'Rayo que rebota entre enemigos cercanos. Excelente en packs densos. Gran daño por bounce.'
    },
    {
      nombre: 'Sanación Arcana',
      icon: '💚',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'HP Regen +30 (auto)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [A]',
      notas: 'Regeneración de HP. Uso en solitario para sostenibilidad entre packs. No tiene protección.'
    },
    {
      nombre: 'Absolute: Meteoro',
      icon: '☄️💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + quemadura (100 daño c/3s)',
      input_xbox: 'RB + [Y] (Absolute)',
      notas: 'Versión absoluta del Meteoro. Añade quemadura DOT. Mayor daño y área de efecto.'
    },
    {
      nombre: 'Prime: Tornado',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LS↑ + RB',
      notas: 'Tornados de viento con knockback amplio. Skill icónica de Witch. Buena para reagrupar monstruos.'
    },
  ],

  awakening: [
    {
      nombre: 'Nova de Energía',
      icon: '💫',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +20 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill de apertura de despertar. AoE enorme + buff AP. SIEMPRE iniciar rotación con esta.'
    },
    {
      nombre: 'Prime: Lluvia de Meteoritos',
      icon: '🌧️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [A]',
      notas: 'Mayor daño de la rotación de despertar. AoE masivo con stun. Usar tras el knockdown del pack.'
    },
    {
      nombre: 'Tormenta Eléctrica',
      icon: '⛈️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción defensa -20',
      input_xbox: 'LB + [X]',
      notas: 'AoE eléctrico que aplica reducción de defensa. Usar antes del burst principal para amplificar daño.'
    },
    {
      nombre: 'Parpadeo Arcano',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de escape. Usar cuando el pack supere a la Witch o para cancelar animaciones largas.'
    },
    {
      nombre: 'Ventisca',
      icon: '❄️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Lentitud severa -15%',
      input_xbox: 'LT + [X]',
      notas: 'Control de área masivo. Lentitud severa que facilita posicionarse y rematar el pack caído.'
    },
    {
      nombre: 'Barrera Mágica',
      icon: '🔮',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +30 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa alto. Usar mientras se castean hechizos pesados en zonas de alto riesgo.'
    },
    {
      nombre: 'Llamarada Arcana',
      icon: '🔥',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback + quemadura (100 daño c/3s)',
      input_xbox: 'LT + [Y]',
      notas: 'Knockback + DOT de quemadura. Útil para packs con monstruos resistentes. Buen daño sostenido.'
    },
    {
      nombre: 'Lightning Storm',
      icon: '🌩️⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [X]',
      notas: 'Skill icónica de Witch despertar. Gran área eléctrica con stun. Alta prioridad en la rotación.'
    },
  ]
};
