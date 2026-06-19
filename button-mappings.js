// ══════════════════════════════════════════════════════════
//  MAPEADOR DE BOTONES POR CLASE
//  Permite que cada clase tenga inputs customizados
//  Sin depender de main.js
// ══════════════════════════════════════════════════════════

const BUTTON_MAPPINGS = {
  // Mapeo global por defecto (Xbox)
  global: {
    A: '[A]',
    B: '[B]',
    X: '[X]',
    Y: '[Y]',
    LT: 'LT',
    LB: 'LB',
    RT: 'RT',
    RB: 'RB',
  },

  // Mapeos específicos por clase (OPCIONAL)
  // Si una clase no está aquí, usa el mapeo global
  maegu: {
    // Hereda de global, pero puede sobrescribir específicos si es necesario
  },
  guardian: {
    // Hereda de global
  },
  striker: {
    // Hereda de global
  },
  mystic: {
    // Hereda de global
  },
  sage: {
    // Hereda de global
  },
  witch: {
    // Hereda de global
  },
  valkyrie: {
    // Hereda de global
  },
  woosa: {
    // Hereda de global
  },
  seraph: {
    // Hereda de global
  },
};

/**
 * Obtener el mapeo de botones para una clase
 * @param {string} className - Nombre de la clase (ej: 'maegu')
 * @returns {object} Mapeo de botones
 */
function getButtonMapping(className) {
  const classMap = BUTTON_MAPPINGS[className] || {};
  return { ...BUTTON_MAPPINGS.global, ...classMap };
}
