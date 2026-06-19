// ══════════════════════════════════════
//  WOOSA — Sucesión y Despertar
//  Hermana de Maegu. 
//  Sucesión: Swallowtail Fan + Do Stave
//  Despertar: Soul Tome + Calligraphy Brush (Charm)
//  Mecánica única: Storm Cloud, Rain's Thirst (Counter), Sagoonja, Enlightened
// ══════════════════════════════════════
D.woosa = {

  succession: [
    // ══════════════════════════════════════
    //  MOBILIDAD / I-FRAME
    // ══════════════════════════════════════
    {
      nombre: 'Yangban Step',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↑ + A',
      notas: 'Dash forward con I-Frame. Principal movilidad. Cancela en Fan Wall o Pummel para chain dash más rápido. Consume 150 stamina.'
    },
    {
      nombre: 'Flitting Step',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS←/→/↓ + A',
      notas: 'Dash lateral/trasero con I-Frame. Cancela en skills Sagoonja. Stamina: 250.'
    },
    {
      nombre: 'Butterfly Step',
      icon: '🦋',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Fall Damage immunity',
      debuffs: 'Ninguno',
      input_xbox: 'LB + A',
      notas: 'Salto largo con I-Frame. Ignora objetos. Extra leap manteniendo el botón. Inmune a daño por caída.'
    },
    {
      nombre: 'Chain: Flitting Step',
      icon: '💨',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS←/→/↓ + A (mantener)',
      notas: 'Extensión de Flitting Step. Segundo dash con I-Frame. Stamina: 250.'
    },

    // ══════════════════════════════════════
    //  DEFENSA / FORWARD GUARD
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Wingbeat',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Knockback (Attack 1) / Knockdown (Attack 2)',
      buffs: 'Ninguno',
      debuffs: 'Knockback → Knockdown',
      input_xbox: 'B (después de ciertas skills: SPACE)',
      notas: 'FG skill. Attack 1: knockback. Attack 2: knockdown. Se puede linger el FG presionando SPACE con delay. Combo con Sagoonja: Plum para ataque más rápido.'
    },
    {
      nombre: 'Fan Wall',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Y',
      notas: 'Block/Q skill. FG estático. Usar para cancelar movilidad y chain dash más rápido.'
    },
    {
      nombre: 'Absolute: Cloud Flower',
      icon: '☁️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Invoca Storm Cloud',
      debuffs: 'Ninguno',
      input_xbox: 'Quick Slot',
      notas: 'Hotbar only. Invoca Storm Cloud instantáneamente. Las nubes duran 15 segundos o hasta ser activadas.'
    },

    // ══════════════════════════════════════
    //  STORM CLOUD / BUFFS
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Thunderstroke',
      icon: '⛈️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Invoca Storm Cloud',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + B',
      notas: 'SA. Invoca Storm Cloud. Storm Cloud Effect: daño adicional cuando se usa con otras skills. Cancela starting animation con Cloudcarve, Sagoonja: Plum, Sagoonja: Orchid.'
    },
    {
      nombre: 'Prime: Cloudcarve',
      icon: '☁️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 (Attack 1) / Invoca Storm Cloud (Attack 2)',
      debuffs: 'Reducción DP -15 (Attack 2)',
      input_xbox: 'LS↓ + X',
      notas: 'SA. Attack 1: buff AP. Attack 2: invoca Storm Cloud + debuff DP. Cancela starting animation de Thunderstroke. Mantener F usa Fan Kick → Cloudcarve automáticamente.'
    },
    {
      nombre: 'Prime: Stormfall',
      icon: '🌩️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + Y',
      notas: 'SA. AoE amplio con lluvia y viento. Eficiente para farming. Storm Cloud Effect: daño adicional. Combo con otras skills para storm damage extra.'
    },
    {
      nombre: 'Flow: Stormbolt',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Auto (después de Cloudrise)',
      notas: 'Extensión de Cloudrise. Storm Cloud Effect: daño masivo. Usar después de invocar nubes.'
    },

    // ══════════════════════════════════════
    //  SAGOONJA SYSTEM (4 Flores)
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Sagoonja: Plum',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Stun',
      buffs: 'Ninguno',
      debuffs: 'Stun',
      input_xbox: 'LS↓ + RB',
      notas: 'SA. CC principal. Stun. Cancela starting animation con Flitting Step o Pummel. Pétalos de ciruelo visual. Combo con Wingbeat para ataque más rápido.'
    },
    {
      nombre: 'Prime: Sagoonja: Orchid',
      icon: '🌺',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LB + B',
      notas: 'SA. Knockdown. Cancela starting animation con Flitting Step o Pummel. Cancela en Sagoonja: Chrysanth y viceversa.'
    },
    {
      nombre: 'Prime: Sagoonja: Chrysanth',
      icon: '🌼',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LB + X',
      notas: 'SA. Knockdown. Cancela en Sagoonja: Orchid y viceversa. Max 7 hits.'
    },
    {
      nombre: 'Prime: Sagoonja: Bamboo',
      icon: '🎋',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown + Evasion Rate -4%',
      input_xbox: 'LS↑ + B',
      notas: 'SA. Knockdown + debuff evasión. Cancela en Bamboo-zled. Removido Critical Hit Rate buff en parche reciente.'
    },
    {
      nombre: 'Bamboo-zled',
      icon: '🎋',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'B (después de Sagoonja: Bamboo)',
      notas: 'SA. Extensión de Sagoonja: Bamboo. Knockdown. Usar inmediatamente después de Bamboo.'
    },

    // ══════════════════════════════════════
    //  BURST / DAÑO PRINCIPAL
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Cloudrise',
      icon: '☁️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↑ + RT',
      notas: 'SA. Burst principal. Storm Cloud Effect: daño masivo. Combo con Flow: Stormbolt. Starter PvE combo esencial.'
    },
    {
      nombre: 'Prime: Kaleidoscope Swirl',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB + X',
      notas: 'SA. Spin attack. Max 4 hits + 10 hits spin. Principal daño sostenido en PvE.'
    },
    {
      nombre: 'Prime: Fan Kick',
      icon: '👟',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'AP +15 (Attack 1)',
      debuffs: 'Reducción DP -15 (Attack 2)',
      input_xbox: 'X',
      notas: 'SA. Attack 1: buff AP. Attack 2: debuff DP. Mantener F usa Fan Kick → Cloudcarve automáticamente.'
    },
    {
      nombre: 'Prime: Flutter Kick',
      icon: '👟',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB',
      notas: 'SA. Skill base. Combo starter. 4 hits. Se cancela en otras skills.'
    },

    // ══════════════════════════════════════
    //  COUNTER / MECÁNICA ÚNICA
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Rain\'s Thirst',
      icon: '💧',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Damage Reduction 4s / Almacena daño recibido',
      debuffs: 'Refleja daño absorbido como True Damage',
      input_xbox: 'LS↓ + Y',
      notas: 'SA. Counter único de Woosa. Absorbe daño por 4s (true damage reflejado). Cancela early con iframes si HP baja. Usar con Butterfly Dream (+1000 HP) para maximizar. Daño absorbido se pierde si recibe CC.'
    },

    // ══════════════════════════════════════
    //  BUFFS / HOTBAR
    // ══════════════════════════════════════
    {
      nombre: 'Prime: Butterfly Dream',
      icon: '🦋',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'Max HP +1000 (E buff) / Skill Damage + / PvP Damage Reduction - (stack x4)',
      debuffs: 'Ninguno',
      input_xbox: 'Quick Slot',
      notas: 'Hotbar only. E buff. +1000 Max HP. Stack Enlightened hasta 4x (damage buff + PvP reduction). Extra damage a Wingbeat, Sagoonja: Plum, Cloudrise.'
    },
    {
      nombre: 'Enlightened',
      icon: '✨',
      proteccion: 'Pasiva',
      cc: 'Ninguno',
      buffs: 'Skill Damage + / PvP Damage Received - (stack x4)',
      debuffs: 'Ninguno',
      input_xbox: 'Pasiva',
      notas: 'Pasiva. Se activa con cada skill. Stack hasta 4x. Buff extra a Wingbeat, Sagoonja: Plum, Cloudrise. Almacena daño recibido como fuerza (max 5x) para daño fijo adicional.'
    },
    {
      nombre: 'Reinvigorate',
      icon: '💚',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'HP Regen / MP Regen',
      debuffs: 'Ninguno',
      input_xbox: 'Quick Slot (Rabam Lv.59)',
      notas: 'Hotbar only. Rabam skill. Regeneración HP/MP. Alternativa: Spring Blossom.'
    },
    {
      nombre: 'Spring Blossom',
      icon: '🌸',
      proteccion: 'Ninguna',
      cc: 'Ninguno',
      buffs: 'HP Regen grupal',
      debuffs: 'Ninguno',
      input_xbox: 'Quick Slot (Rabam Lv.59)',
      notas: 'Hotbar only. Rabam skill. Healing área. Alternativa a Reinvigorate. No stack con Bloodsari Flower (Awakening).'
    },

    // ══════════════════════════════════════
    //  UTILIDAD / EXTRA
    // ══════════════════════════════════════
    {
      nombre: 'Stave Strike',
      icon: '⚔️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'B',
      notas: 'SA. Knockdown. "Block jump" combo: Yangban Step → Tigerfly → Stave Strike.'
    },
    {
      nombre: 'Tigerfly',
      icon: '🐯',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB (después de ciertas skills)',
      notas: 'SA. Combo extender. Usar después de movilidad para protección forward.'
    },
    {
      nombre: 'Pummel',
      icon: '👊',
      proteccion: 'Ninguno (unprotected si se usa más de 1x)',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RT',
      notas: 'RMB skill. Cancela movilidad. Unprotected si se spamea. Usar con cuidado.'
    },
    {
      nombre: 'Cloudburst',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + Z (Rabam)',
      notas: 'SA. Rabam skill. Daño en área. Cancela starting animation de Sagoonja skills.'
    },
  ],

  awakening: [
    // ══════════════════════════════════════
    //  AWAKENING: Soul Tome + Calligraphy Brush
    //  NOTA: Woosa intercambia armas con Maegu (Charm/Soul Tome)
    // ══════════════════════════════════════

    // ══════════════════════════════════════
    //  MOBILIDAD / I-FRAME
    // ══════════════════════════════════════
    {
      nombre: 'Butterfly Step (Awakening)',
      icon: '🦋',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Fall Damage immunity',
      debuffs: 'Ninguno',
      input_xbox: 'LB + A',
      notas: 'I-Frame. Versión Awakening. Cae directo al suelo al final. Más lenta que Sucesión. Speed increase needed según feedback 2025.'
    },
    {
      nombre: 'Yangban Step (Awakening)',
      icon: '💨',
      proteccion: 'I-Frame / SA (segunda dash)',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↑ + A',
      notas: 'I-Frame. Dash con Soul Tome. Segunda dash cancela invincibility. Stamina: 250. Usar con Netherstrike para recovery.'
    },
    {
      nombre: 'Perilous Waltz',
      icon: '💃',
      proteccion: 'I-Frame',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + A (o Space)',
      notas: 'I-Frame. Evasión con muy poco stamina. Mejor que Flitting Step en algunos casos. Cuidado con accidental jump.'
    },
    {
      nombre: 'Netherstrike',
      icon: '⚡',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Recupera stamina',
      debuffs: 'Ninguno',
      input_xbox: 'LS↑ + RB',
      notas: 'SA. Recupera stamina mientras se usa. Mejor amigo de Awakening Woosa. Linger para recovery. Combo: Yangban → Netherstrike → Yangban.'
    },

    // ══════════════════════════════════════
    //  BUFFS / AURA
    // ══════════════════════════════════════
    {
      nombre: 'Lunar Serenade',
      icon: '🌙',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Buff AP +20 / Vel. ataque +10% / No stamina consumption (solicitado en 2025)',
      debuffs: 'Ninguno',
      input_xbox: 'LB + B',
      notas: 'SA. Buff principal de Awakening. AP + velocidad. Stamina consumption issue según feedback 2025. Debería tener no-stamina effect.'
    },
    {
      nombre: 'Netherblast',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'All AP +20 (10s) [removido en 2025]',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + RT',
      notas: 'SA. Buff AP removido en parche 2025. Ahora sin buff. Sari Flower detonation range solicitado.'
    },

    // ══════════════════════════════════════
    //  SARI FLOWERS / MINAS
    // ══════════════════════════════════════
    {
      nombre: 'Bloodbloom / Bloodsari Flower',
      icon: '🌹',
      proteccion: 'Ninguno',
      cc: 'Ninguno',
      buffs: 'HP Regen / DP buff (solicitado)',
      debuffs: 'Ninguno',
      input_xbox: 'X',
      notas: 'Sin protección. No cancelable. Healing área. Debería tener SA o FG según feedback 2025. No stack con Spring Blossom.'
    },
    {
      nombre: 'Bloom: Deluge',
      icon: '🌊',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB + X',
      notas: 'SA. Sari Flower. Spin attack. No cancelable. Debería tener SA durante todo el spin según feedback 2025.'
    },
    {
      nombre: 'Bloom: Scatter',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB + B',
      notas: 'SA. Sari Flower. Ranged detonation. Moonlit Blast detona from range.'
    },
    {
      nombre: 'Bloom: Petal Storm',
      icon: '🌪️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'RB + Y',
      notas: 'SA. Sari Flower. AoE masivo. Instant cast preferido.'
    },
    {
      nombre: 'Flow: Socheon Field',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Auto (extensión)',
      notas: 'SA. Bombas Sari. Explosion radius/duration solicitado en feedback 2025.'
    },
    {
      nombre: 'Moonlit Blast',
      icon: '🌙',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + RB',
      notas: 'SA. Detona Sari Flowers. Range detonation solicitado. Damage decrease si se detona desde lejos.'
    },

    // ══════════════════════════════════════
    //  DAÑO PRINCIPAL / CC
    // ══════════════════════════════════════
    {
      nombre: 'Mark of the Moon',
      icon: '🌙',
      proteccion: 'FG',
      cc: 'Stun (PvE) / Ninguno (PvP, Core slot)',
      buffs: 'Ninguno',
      debuffs: 'Stun (PvE)',
      input_xbox: 'LS↑ + X',
      notas: 'FG. Long cast. Stun removido en PvP 2025. Debería tener SA+FG según feedback. Core slot para CC en Flow: Death\'s Proclamation.'
    },
    {
      nombre: 'Flow: Death\'s Proclamation',
      icon: '💀',
      proteccion: 'SA',
      cc: 'Ninguno (Core CC solicitado)',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Auto (después de Mark of the Moon)',
      notas: 'SA. Extensión de Mark of the Moon. 6th Core slot solicitado para CC en PvP.'
    },
    {
      nombre: 'Sahee\'s Descent',
      icon: '⬇️',
      proteccion: 'SA',
      cc: 'Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockdown',
      input_xbox: 'LS↑ + Y',
      notas: 'SA. Knockdown. Explosión final. Cast speed solicitado en feedback 2025. Combo closer.'
    },
    {
      nombre: 'Soul Cleanse',
      icon: '✨',
      proteccion: 'I-Frame (lateral cada 5s) / SA',
      cc: 'Ninguno',
      buffs: 'Critical Hit Rate +50% [removido 2025]',
      debuffs: 'Ninguno',
      input_xbox: 'LS←/→ + B',
      notas: 'I-Frame lateral cada 5s. Stamina cost: 150. Critical buff removido en 2025. Cambia Pre-Awakening → Awakening.'
    },
    {
      nombre: 'Netherblast',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↓ + RT',
      notas: 'SA. Daño en área. Sari Flower detonation. All AP buff removido en 2025.'
    },

    // ══════════════════════════════════════
    //  CROSSOVER / PRE-AWAKENING
    // ══════════════════════════════════════
    {
      nombre: 'Stormfall (Crossover)',
      icon: '🌩️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LB + Y',
      notas: 'SA. Skill de Sucesión usable en Awakening. Storm Cloud. Chill out skill para stamina recovery.'
    },
    {
      nombre: 'Cloudrise (Crossover)',
      icon: '☁️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'LS↑ + RT',
      notas: 'SA. Skill de Sucesión usable en Awakening. Burst. Flow: Stormbolt disponible.'
    },
    {
      nombre: 'Wingbeat (Crossover)',
      icon: '🛡️',
      proteccion: 'FG',
      cc: 'Knockback / Knockdown',
      buffs: 'Ninguno',
      debuffs: 'Knockback → Knockdown',
      input_xbox: 'B',
      notas: 'FG. Skill de Sucesión usable en Awakening. Block jump combo disponible.'
    },

    // ══════════════════════════════════════
    //  RABAM / EXTRA
    // ══════════════════════════════════════
    {
      nombre: 'Kaleidoscope Flower',
      icon: '🌸',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Rabam',
      notas: 'SA. Rabam skill. Daño en área.'
    },
    {
      nombre: 'Chrysanth Swirl',
      icon: '🌼',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Rabam',
      notas: 'SA. Rabam skill. Spin attack.'
    },
    {
      nombre: 'Inkstroke',
      icon: '✒️',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Rabam',
      notas: 'SA. Rabam skill. Proyectil de tinta.'
    },
    {
      nombre: 'Cloud Burst',
      icon: '💥',
      proteccion: 'SA',
      cc: 'Ninguno',
      buffs: 'Ninguno',
      debuffs: 'Ninguno',
      input_xbox: 'Rabam',
      notas: 'SA. Rabam skill. Explosión nube.'
    },
  ]
};
