// ══════════════════════════════════════
//  VALKYRIE — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Espada + Escudo
//  Arma Despertar: Lancia (lanza sagrada)
// ══════════════════════════════════════
D.valkyrie = {

  succession: [
    {
      nombre: 'Prime: Carga Sagrada',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LT + [Y]',
      notas: 'Skill de entrada principal con SA y stun al impactar. Cierra distancia rápidamente con el pack.'
    },
    {
      nombre: 'Prime: Golpe Divino',
      icon: '✨',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [Y]',
      notas: 'Golpe de escudo poderoso. Knockdown en área frontal amplia. Skill de apertura secundaria.'
    },
    {
      nombre: 'Bendición de la Luz',
      icon: '🌟',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 / HP Regen +20 (20s)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [Y]',
      notas: 'Buff doble de AP y regen de HP. Activar al inicio de cada pull para mantener el bonus.'
    },
    {
      nombre: 'Escudo de la Fe',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +25 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + buff de defensa alto. Principal herramienta defensiva. Usar al recibir daño pesado.'
    },
    {
      nombre: 'Paso Celestial',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de reposicionamiento. Principal movilidad de Valkyrie en sucesión.'
    },
    {
      nombre: 'Prime: Torbellino de Espada',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + RT',
      notas: 'Spin 360° con knockback masivo. Usar para agrupar monstruos dispersos o limpiar área.'
    },
    {
      nombre: 'Prime: Juicio Sagrado',
      icon: '⚖️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción defensa -20',
      input_xbox: 'LB + [X]',
      notas: 'Stun + reducción de defensa. Usar antes del burst para maximizar el daño del combo.'
    },
    {
      nombre: 'Prime: Ira de la Valquiria',
      icon: '💢',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [X]',
      notas: 'Serie de golpes rápidos con knockdown final. Buen daño sostenido. Skill de relleno entre CDs.'
    },
    {
      nombre: 'Tribunal Divino',
      icon: '🔱',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + quemadura (100 daño c/3s)',
      input_xbox: 'RB + [B]',
      notas: 'Stun con DOT de quemadura. Buen daño sostenido combinado. Usar para rematar packs caídos.'
    },
    {
      nombre: 'Absolute: Carga Sagrada',
      icon: '⚡💥',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción defensa -10',
      input_xbox: 'LT + [Y] (Absolute)',
      notas: 'Versión absoluta con reducción de defensa adicional. Mayor alcance y daño que la versión base.'
    },
  ],

  awakening: [
    {
      nombre: 'Prime: Descenso del Ángel',
      icon: '😇',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'AP +20 / Toda Defensa +15 (15s)',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Skill más fuerte de despertar. Buff doble AP+DP + knockdown. SIEMPRE iniciar rotación con esta.'
    },
    {
      nombre: 'Prime: Espada de la Luz',
      icon: '⚔️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [A]',
      notas: 'Principal skill de daño de despertar. Stun en área amplia. Usar tras el knockdown del pack.'
    },
    {
      nombre: 'Aura Divina',
      icon: '🌠',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'HP Regen +30 por golpe',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [X]',
      notas: 'Regeneración alta de HP por golpe. Sostenibilidad para grindeo largo sin pociones de HP.'
    },
    {
      nombre: 'Vuelo Celestial',
      icon: '🕊️',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'I-Frame de movilidad. Reposicionamiento rápido entre packs o para cancelar animaciones.'
    },
    {
      nombre: 'Escudo Angelical',
      icon: '🔰',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Toda Defensa +30 (5s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [B]',
      notas: 'FG + mayor buff de defensa. Usar al castear skills largas o en zonas de alto riesgo.'
    },
    {
      nombre: 'Prime: Golpe Divino Despertar',
      icon: '💫',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + reducción defensa -20',
      input_xbox: 'LT + [X]',
      notas: 'Ataque descendente de alto daño. Reducción de defensa al impactar. Rematador de packs caídos.'
    },
    {
      nombre: 'Espada Sagrada Final',
      icon: '✝️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun + reducción vel. movimiento -10%',
      input_xbox: 'RB + [X]',
      notas: 'Skill finalizadora de despertar. Stun masivo + debuff de velocidad. Gran daño de área.'
    },
  ]
};
