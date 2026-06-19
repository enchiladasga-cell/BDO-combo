// ══════════════════════════════════════
//  MAEGU — Sucesión y Despertar
//  Actualizado: junio 2026
//  Arma Sucesión: Charm (Fox Spirit)
//  Arma Despertar: Foxtail Fan (dual)
//  Modificadores Xbox: LT=Shift | LB=Q | RT=F | RB=E
//  Botones: [A]=Espacio [B]=S [X]=W [Y]=skill base
// ══════════════════════════════════════
D.maegu = {

  succession: [
    {
      nombre: 'Garras Desnudas',
      icon: '🦊',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Invoca clon / debuff evasión',
      debuffs: 'Reducción evasión',
      input_xbox: 'LS← / LS→ + [Y]',
      notas: 'Skill de entrada clave. Invoca clon fantasmal y aplica debuff de evasión. Cancela animación en Prime: Espíritu Engañoso.'
    },
    {
      nombre: 'Prime: Espíritu Engañoso',
      icon: '👻',
      proteccion: 'SA',
      cc: 'Atrapamiento',
      buffs: 'Ninguno',
      debuffs: 'Atrapamiento',
      input_xbox: 'LB + [Y]',
      notas: 'CC principal de sucesión. Cancela animación con RS↑. Usa el clon para confundir al enemigo.'
    },
    {
      nombre: 'Prime: Giro Espiritual',
      icon: '🌀',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LT + RT',
      notas: 'AoE de área media. Knockdown al pack completo. Usar tras agrupar con Garras Desnudas.'
    },
    {
      nombre: 'Prime: Paso del Espíritu',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Buff evasión +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Reposicionamiento con I-Frame. Cancela en Giro Espiritual para encadenar SA inmediatamente.'
    },
    {
      nombre: 'Vuelo del Zorro',
      icon: '🦅',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'AP +10 (10s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [Y]',
      notas: 'Buff de AP esencial. Activar siempre al inicio del combo para amplificar el burst.'
    },
    {
      nombre: 'Prime: Tormenta de Abanicos',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [X]',
      notas: 'Buen daño AoE con stun. Usar para rematar pack caído o stunear al iniciar.'
    },
    {
      nombre: 'Vuelta de Zorro',
      icon: '🔄',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + [Y]',
      notas: 'Retroceso con FG. Útil para absorber golpes y reposicionarse ante packs peligrosos.'
    },
    {
      nombre: 'Prime: Abanico Fantasmal',
      icon: '🪩',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'LT + [X]',
      notas: 'Knockback de área amplia. Usar para reagrupar monstruos dispersos hacia el centro.'
    },
    {
      nombre: 'Intercambio con Clon',
      icon: '🔀',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Reposicionamiento',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [B]',
      notas: 'Teletransporte al clon con I-Frame. El clon debe estar activo (invocado con Garras Desnudas).'
    },
    {
      nombre: 'Lágrima del Alma',
      icon: '💧',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LS↑ + LB',
      notas: 'Skill de largo alcance. Buena para iniciar desde lejos antes de entrar al pack.'
    },
    {
      nombre: 'Flow: Alma del Zorro',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +5 adicional',
      debuffs: 'Ninguno',
      input_xbox: 'RB + [Y]',
      notas: 'Flow cancelación de Vuelo del Zorro. Encadenar inmediatamente después del buff para no perder tiempo.'
    },
    {
      nombre: 'Absolute: Garras Desnudas',
      icon: '🦊💥',
      proteccion: 'SA',
      cc: 'Atrapamiento',
      buffs: 'Clon mejorado',
      debuffs: 'Atrapamiento + reducción evasión',
      input_xbox: 'LS← / LS→ + [Y] (Absolute)',
      notas: 'Versión absoluta de Garras Desnudas. El clon invocado hace más daño y el debuff de evasión es mayor.'
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
      notas: 'Skill de apertura obligatoria. Activa estado Spiritforged que potencia las skills siguientes. Usar x2 cancela el estado.'
    },
    {
      nombre: 'Prime: Danza de los Espíritus',
      icon: '💃',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Daño crítico (dentro de Spiritforged)',
      debuffs: 'Knockdown',
      input_xbox: 'RB + [A]',
      notas: 'CC principal de despertar. Usar dentro de estado Spiritforged para el bonus de daño crítico.'
    },
    {
      nombre: 'Prime: Abanico de Zorro Dorado',
      icon: '🌟',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LB + [X]',
      notas: 'Skill de mayor daño en despertar. Stun amplio. Usar tras el knockdown del pack.'
    },
    {
      nombre: 'Prime: Paso de Espíritu',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Vel. movimiento +10%',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [A]',
      notas: 'Evasión con I-Frame. Cancela animaciones largas. Sale del estado Spiritforged — usarlo con cuidado.'
    },
    {
      nombre: 'Mariposa de Fuego',
      icon: '🦋',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Reducción defensa -20',
      input_xbox: 'LT + [B]',
      notas: 'FG + debuff de defensa. Usar antes del burst principal para amplificar el daño del equipo.'
    },
    {
      nombre: 'Prime: Explosión Zorruna',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Knockback',
      buffs: 'Ninguno',
      debuffs: 'Knockback',
      input_xbox: 'RB + [B]',
      notas: 'AoE grande con knockback. Ideal para limpiar packs agrupados o separar monstruos.'
    },
    {
      nombre: 'Vuelo del Abanico',
      icon: '🏹',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'AP +10 (10s)',
      debuffs: 'Ninguno',
      input_xbox: 'LT + [Y]',
      notas: 'Buff de AP. Activar al inicio de cada rotación para mantener el bonus activo.'
    },
    {
      nombre: 'Flow: Danza Eterna',
      icon: '🎭',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'RB + [X] (Flow)',
      notas: 'Flow de Abanico de Zorro Dorado. Encadenar inmediatamente para extender el stun y añadir daño extra.'
    },
    {
      nombre: 'Intercambio de Sombras',
      icon: '🔀',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Reposicionamiento',
      debuffs: 'Ninguno',
      input_xbox: 'LB + [B]',
      notas: 'Swap de posición con el clon de despertar. I-Frame durante el intercambio.'
    },
  ]
};
