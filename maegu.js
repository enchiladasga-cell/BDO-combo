// ══════════════════════════════════════
//  MAEGU — Sucesión y Despertar
//  Botones Xbox: LB/RB = modificadores
//  LT=Shift | LB=Q | RT=F | RB=E
//  [A]=Espacio [B]=S+skill [X]=W+skill [Y]=skill
// ══════════════════════════════════════
D.maegu = {

  succession: [
    {
      nombre: 'Garras Desnudas',
      icon: '🦊',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Invoca clon / debuff evasión',
      debuffs: 'Ninguno',
      input_xbox: 'LS← / LS→ + [Y]',
      notas: 'Skill de entrada clave. Invoca clon y aplica debuff de evasión al enemigo. Cancela en Prime: Espíritu Engañoso.'
    },
    {
      nombre: 'Prime: Espíritu Engañoso',
      icon: '👻',
      proteccion: 'SA',
      cc: 'Atrapamiento',
      buffs: 'Ninguno',
      debuffs: 'Atrapamiento',
      input_xbox: 'LB + [Y]',
      notas: 'CC principal de sucesión. Cancela animación con RS↑ para moverse.'
    },
    {
      nombre: 'Giro Espiritual',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'Buen daño en área. Usar después de inmovilizar pack.'
    },
    {
      nombre: 'Prime: Paso del Espíritu',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Buff de evasión',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Reposicionamiento con I-Frame. Cancela en Giro Espiritual para SA instantánea.'
    },
    {
      nombre: 'Vuelo del Zorro',
      icon: '🦅',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'Buff AP +10',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [Y]',
      notas: 'Buff de AP importante. Usar al inicio del combo para amplificar el daño.'
    },
    {
      nombre: 'Tormenta de Abanicos',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [X]',
      notas: 'Buen daño en área con stun. Úsala para rematar pack caído.'
    },
    {
      nombre: 'Vuelta de Zorro',
      icon: '🔄',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + [Y]',
      notas: 'Movimiento hacia atrás con FG. Útil para salir de situaciones peligrosas.'
    },
    {
      nombre: 'Abanico Fantasmal',
      icon: '🪩',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + [X]',
      notas: 'Knockback amplio. Usar para agrupar o separar enemigos.'
    },
    {
      nombre: 'Intercambio con Clon',
      icon: '🔀',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Reposicionamiento',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [B]',
      notas: 'Teletransporte al clon con I-Frame instantáneo. Clon debe estar activo.'
    },
    {
      nombre: 'Lágrima del Alma',
      icon: '💧',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LS↑ + LB',
      notas: 'Habilidad de largo alcance. Buena para iniciar desde lejos.'
    },
  ],

  awakening: [
    {
      nombre: 'Rapsodia Giratoria',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Activa Spiritforged',
      debuffs: 'Ninguno',
      input_xbox: 'LT + RT',
      notas: 'Skill de apertura. Activa estado Spiritforged que potencia skills siguientes. Usar x2 cancela el estado.'
    },
    {
      nombre: 'Danza de los Espíritus',
      icon: '💃',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Buff daño crítico (Spiritforged)',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [A]',
      notas: 'CC principal de despertar. Usar dentro de Spiritforged para bonus de crítico.'
    },
    {
      nombre: 'Abanico de Zorro Dorado',
      icon: '🌟',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [X]',
      notas: 'Daño alto + stun. Skill de daño principal en despertar.'
    },
    {
      nombre: 'Paso de Espíritu',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Buff velocidad',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Evasión con I-Frame. Cancela animaciones largas. Sale del estado Spiritforged.'
    },
    {
      nombre: 'Mariposa de Fuego',
      icon: '🦋',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción DP',
      input_xbox: 'LT + [B]',
      notas: 'Aplica reducción de DP al enemigo. Usar antes del burst principal.'
    },
    {
      nombre: 'Explosión Zorruna',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'RB + [Y]',
      notas: 'Daño en área grande. Ideal para limpiar packs agrupados.'
    },
    {
      nombre: 'Vuelo del Abanico',
      icon: '🏹',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'Buff AP',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [Y]',
      notas: 'Buff de AP. Usar al inicio de rotación.'
    },
  ]
};
