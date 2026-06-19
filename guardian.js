// ══════════════════════════════════════
//  GUARDIAN — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Hacha + Escudo
//  Arma Despertar: Jordun (alabarda)
// ══════════════════════════════════════
D.guardian = {

  succession: [
    {
      nombre: 'Prime: Golpe de Hacha',
      icon: '🪓',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [Y]',
      notas: 'Skill de entrada principal. SA sólida + knockdown amplio. Muy fiable para abrir packs en PvE.'
    },
    {
      nombre: 'Prime: Carga de la Bestia',
      icon: '🦁',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LT + [X]',
      notas: 'Avance rápido con SA y stun al impacto. Excelente para cerrar distancia con el pack en PvE.'
    },
    {
      nombre: 'Ira Primordial',
      icon: '🔥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 (15s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff de AP esencial. Activar siempre al inicio del pull para maximizar el daño del burst.'
    },
    {
      nombre: 'Prime: Barrido Girasol',
      icon: '☀️',
      proteccion: 'FG',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'AoE 360° con FG durante el cast. Knockdown en toda el área. Skill de limpieza de packs.'
    },
    {
      nombre: 'Salto de Venganza',
      icon: '⬆️',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Salto con I-Frame. Reposicionamiento rápido y esquiva de habilidades de área enemigas.'
    },
    {
      nombre: 'Prime: Tormenta de Acero',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción vel. movimiento -10%',
      input_xbox: 'RB + [X]',
      notas: 'Daño sostenido en área. Aplica debuff de velocidad. Buena skill de relleno entre CDs.'
    },
    {
      nombre: 'Prime: Impacto Sísmico',
      icon: '💢',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + [B]',
      notas: 'Golpe al suelo. Knockdown de área frontal. Excelente para rematar enemigos ya caídos.'
    },
    {
      nombre: 'Escudo Divino',
      icon: '🛡️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +20 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Buff defensivo temporal. Usar al entrar a packs con mucho daño o en zonas de endgame.'
    },
    {
      nombre: 'Prime: Giro de Hacha',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LS← + [Y]',
      notas: 'Giro de 360° con knockback. Útil para agrupar monstruos dispersos y resetear el pack.'
    },
    {
      nombre: 'Rugido de la Bestia',
      icon: '😤',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Vel. ataque +10%',
      debuffs: 'Stun',
      input_xbox: 'LB + [B]',
      notas: 'Stun rápido + buff de velocidad de ataque. Usar para iniciar rotación con mayor DPS.'
    },
    {
      nombre: 'Absolute: Golpe de Hacha',
      icon: '🪓💥',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -10',
      input_xbox: 'RB + [Y] (Absolute)',
      notas: 'Versión absoluta. Añade reducción de defensa al knockdown. Mayor daño que la versión normal.'
    },
  ],

  awakening: [
    {
      nombre: 'Descenso de la Guardiana',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +20 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill más importante de despertar. SA + buff AP alto + knockdown de área. SIEMPRE iniciar con esta.'
    },
    {
      nombre: 'Glorious Advance',
      icon: '🌩️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción defensa -20',
      input_xbox: 'LB + [X]',
      notas: 'FG durante el avance. Aplica fuerte reducción de defensa. Usar antes del burst para amplificar daño.'
    },
    {
      nombre: 'Llama de la Ira',
      icon: '🔥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Quemadura (100 daño c/3s)',
      input_xbox: 'LB + [Y]',
      notas: 'Aplica quemadura DOT. Buen daño sostenido para packs grandes. Usa en combinación con el burst.'
    },
    {
      nombre: 'Salto Divino',
      icon: '✨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Movilidad con I-Frame. Esencial para reposicionarse entre packs o esquivar burst enemigo.'
    },
    {
      nombre: 'God Incinerator',
      icon: '☁️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + Quemadura',
      input_xbox: 'LT + [B]',
      notas: 'Golpe vertical de alto daño. Knockdown + DOT de quemadura. Rematador de pack caído.'
    },
    {
      nombre: 'Escudo Sagrado',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +30 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [X]',
      notas: 'FG + buff de defensa alto. Usar mientras se castean skills largas en zonas de endgame.'
    },
    {
      nombre: 'Searing Fang',
      icon: '🌊',
      proteccion: 'SA',
      cc: 'Bound',
      buffs: 'Ninguno',
      debuffs: 'Bound',
      input_xbox: 'RB + [X]',
      notas: 'Skill de área con Bound (CC especial). Útil para inmovilizar packs mientras se ejecuta el burst.'
    },
    {
      nombre: 'Absolute: Descenso (Core)',
      icon: '🌑',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +25 mejorado',
      debuffs: 'Knockdown masivo',
      input_xbox: 'LT + RT (Core)',
      notas: 'Core skill de Descenso de la Guardiana. Buff de AP más alto y área de knockdown mayor.'
    },
  ]
};
