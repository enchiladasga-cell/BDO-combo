// ══════════════════════════════════════════════════
//  BDO COMBO BUILDER — main.js
//  Estado global
// ══════════════════════════════════════════════════
let currentClass = 'maegu';
let currentSpec  = 'succession';
let activeFilter = 'all';
let combo        = [];
let savedCombos  = [];
let addonModalIndex = -1;
let pendingAddons   = [];

// Cargar guardados desde localStorage de forma segura
try {
  savedCombos = JSON.parse(localStorage.getItem('bdo_combos') || '[]');
} catch(e) { savedCombos = []; }

// ══════════════════════════════════════════════════
//  ADDONS (actualizados julio 2025 — parche PA)
// ══════════════════════════════════════════════════
const BDO_ADDONS = [
  // Daño ofensivo
  '⚔️ Critical Hit Rate +30%',
  '🔥 Critical Hit Damage +5%',
  '🔨 Down Attack Damage +5%',
  '🔨 Down Attack Damage +10%',
  '🌪️ Air Attack Damage +5%',
  '🌪️ Air Attack Damage +10%',
  '🔙 Back Attack Damage +5%',
  '🔙 Back Attack Damage +10%',
  // Reducción de defensa
  '🩸 Reducción Defensa Enemigo -10',
  '🩸 Reducción Defensa Enemigo -20',
  '🛑 Reducción Defensa Mágica -10',
  '🛑 Reducción Defensa Mágica -20',
  // Velocidad
  '⚡ Vel. Ataque +7%',
  '⚡ Vel. Ataque +10%',
  '🎯 Vel. Casteo +7%',
  '🎯 Vel. Casteo +10%',
  '🏃 Vel. Movimiento +7%',
  '🏃 Vel. Movimiento +10%',
  // Recuperación
  '❤️ Recuperación HP por golpe +20',
  '❤️ Recuperación HP por golpe +30',
  '💙 Recuperación MP/WP/SP +15',
  '💙 Recuperación MP/WP/SP +20',
  '💊 Recuperación HP al matar +50',
  '💊 Recuperación HP al matar +100',
  // Debuffs al enemigo
  '🐢 Vel. Movimiento Enemiga -10%',
  '🐢 Vel. Movimiento Enemiga -15%',
  '⛔ Vel. Ataque Enemiga -7%',
  '⛔ Vel. Ataque Enemiga -10%',
  // DOT
  '🩸 Sangrado (100 daño c/3s, 9s)',
  '🔥 Quemadura (100 daño c/3s, 9s)',
  '☠️ Veneno (100 daño c/3s, 9s)',
  '🤕 Dolor (100 daño c/3s, 9s)',
  // Resistencias
  '🛡️ Resistencia CC +10%',
  '🛡️ Resistencia CC +15%',
];

// ══════════════════════════════════════════════════
//  COLOREAR BOTONES XBOX (función reutilizable)
// ══════════════════════════════════════════════════
function colorXbox(text) {
  if (!text) return '';
  return text
    .replace(/LS↑/g, '<span style="color:#e2e8f0;font-weight:700">LS↑</span>')
    .replace(/LS↓/g, '<span style="color:#e2e8f0;font-weight:700">LS↓</span>')
    .replace(/LS←/g, '<span style="color:#e2e8f0;font-weight:700">LS←</span>')
    .replace(/LS→/g, '<span style="color:#e2e8f0;font-weight:700">LS→</span>')
    .replace(/LB/g, '<span style="color:#60a5fa;font-weight:700">LB</span>')
    .replace(/RB/g, '<span style="color:#fbbf24;font-weight:700">RB</span>')
    .replace(/LT/g, '<span style="color:#4ade80;font-weight:700">LT</span>')
    .replace(/RT/g, '<span style="color:#f472b6;font-weight:700">RT</span>')
    .replace(/\[A\]/g, '<span style="color:#4caf50;font-weight:700">[A]</span>')
    .replace(/\[B\]/g, '<span style="color:#f44336;font-weight:700">[B]</span>')
    .replace(/\[X\]/g, '<span style="color:#2196f3;font-weight:700">[X]</span>')
    .replace(/\[Y\]/g, '<span style="color:#ffc107;font-weight:700">[Y]</span>');
}

// ══════════════════════════════════════════════════
//  CAMBIO DE CLASE / SPEC
// ══════════════════════════════════════════════════
function changeClass() {
  currentClass = document.getElementById('class-select').value;
  clearCombo(true);
  filterSkills();
}

function setSpec(spec) {
  currentSpec = spec;
  document.getElementById('btn-suc').classList.toggle('active', spec === 'succession');
  document.getElementById('btn-awk').classList.toggle('active', spec === 'awakening');
  clearCombo(true);
  filterSkills();
}

// ══════════════════════════════════════════════════
//  FILTROS Y BÚSQUEDA
// ══════════════════════════════════════════════════
function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  const tagMap = { all:'t-all', sa:'t-sa', fg:'t-fg', ifr:'t-ifr', cc:'t-cc', buff:'t-buff' };
  const el = document.querySelector(`.tag.${tagMap[filter]}`);
  if (el) el.classList.add('active');
  filterSkills();
}

function filterSkills() {
  const container = document.getElementById('skill-list');
  const badge     = document.getElementById('skill-count');
  container.innerHTML = '';

  if (typeof D === 'undefined' || !D[currentClass]) {
    container.innerHTML = `<p style="color:#f87171;font-size:.82rem;padding:12px;">
      ⚠️ No se encontraron datos para <b>${currentClass}</b>.<br>
      Asegúrate de que el archivo <b>${currentClass}.js</b> esté cargado.
    </p>`;
    badge.textContent = 'E';
    return;
  }

  const skills = D[currentClass][currentSpec];
  if (!skills || skills.length === 0) {
    container.innerHTML = `<p style="color:#f87171;font-size:.82rem;padding:12px;">
      ⚠️ Sin habilidades para <b>${currentSpec}</b> en <b>${currentClass}</b>.
    </p>`;
    badge.textContent = '0';
    return;
  }

  const searchVal = document.getElementById('search-input').value.toLowerCase().trim();
  const fragment  = document.createDocumentFragment();
  let count = 0;

  skills.forEach(s => {
    if (searchVal && !s.nombre.toLowerCase().includes(searchVal)) return;

    const prot = (s.proteccion || '').toUpperCase();
    if (activeFilter === 'sa'   && !prot.includes('SA') && !prot.includes('SÚPER')) return;
    if (activeFilter === 'fg'   && !prot.includes('FG') && !prot.includes('GUARDIA')) return;
    if (activeFilter === 'ifr'  && !prot.includes('I-FRAME') && !prot.includes('INVENCIB')) return;
    if (activeFilter === 'cc'   && (!s.cc || s.cc === 'Ninguno')) return;
    if (activeFilter === 'buff' && (!s.buffs || s.buffs === 'Ninguno')) return;

    count++;
    const card = document.createElement('div');
    card.className = 'scard';
    card.onclick = () => addSkill(s);

    let badges = '';
    if (s.proteccion && s.proteccion !== 'Ninguna' && s.proteccion !== 'Pasiva') {
      const p = s.proteccion;
      const pClass = p.includes('SA') ? 'b-sa' : p.includes('FG') ? 'b-fg' : 'b-ifr';
      badges += `<span class="badge ${pClass}">${p}</span>`;
    }
    if (s.cc && s.cc !== 'Ninguno') {
      badges += `<span class="badge b-cc">${s.cc}</span>`;
    }
    if (s.buffs && s.buffs !== 'Ninguno') {
      badges += `<span class="badge b-buff">Buff</span>`;
    }

    card.innerHTML = `
      <span class="icon">${s.icon}</span>
      <div class="info">
        <div class="sname">${s.nombre}</div>
        <div class="smeta">${badges}</div>
      </div>
      <div class="xbox">${colorXbox(s.input_xbox)}</div>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
  badge.textContent = count;
}

// ══════════════════════════════════════════════════
//  COMBO — AGREGAR / ELIMINAR / UNDO / CLEAR
// ══════════════════════════════════════════════════
function addSkill(skill) {
  combo.push({ ...skill, addons: [] });
  renderTimeline();
}

function removeSkill(index) {
  combo.splice(index, 1);
  renderTimeline();
}

function undoLast() {
  combo.pop();
  renderTimeline();
}

function clearCombo(silent = false) {
  combo = [];
  renderTimeline();
  if (!silent) {
    const an = document.getElementById('analysis');
    if (an) an.style.display = 'none';
  }
}

// ══════════════════════════════════════════════════
//  TIMELINE + BOTONES XBOX EN GRANDE
// ══════════════════════════════════════════════════
function renderTimeline() {
  const tl    = document.getElementById('timeline');
  const count = document.getElementById('combo-count');
  count.textContent = combo.length;
  tl.innerHTML = '';

  if (combo.length === 0) {
    tl.innerHTML = '<span class="tempty">Vacío — toca una habilidad para agregarla</span>';
    renderXboxButtons();
    return;
  }

  combo.forEach((s, i) => {
    if (i > 0) {
      const arr = document.createElement('span');
      arr.className = 'arrow';
      arr.textContent = '→';
      tl.appendChild(arr);
    }

    const item = document.createElement('div');
    item.className = 'titem';

    if (s.proteccion) {
      const p = s.proteccion;
      if (p.includes('SA'))      item.style.borderColor = 'var(--sa)';
      else if (p.includes('FG')) item.style.borderColor = 'var(--fg)';
      else if (p.includes('I-Frame') || p.includes('Invencib')) item.style.borderColor = 'var(--ifr)';
    }

    const addonLabel = s.addons && s.addons.length > 0
      ? s.addons.join(' · ')
      : '+ Addon';

    item.innerHTML = `
      <button class="tdel" onclick="removeSkill(${i})">×</button>
      <span class="tname">${s.icon} ${s.nombre}</span>
      <span class="tadd" onclick="openAddonModal(${i})">${addonLabel}</span>
    `;
    tl.appendChild(item);
  });

  renderXboxButtons();
}

// ══════════════════════════════════════════════════
//  BOTONES XBOX EN GRANDE (línea naranja)
// ══════════════════════════════════════════════════
function renderXboxButtons() {
  // Eliminar línea anterior si existe
  const existing = document.getElementById('xbox-buttons-line');
  if (existing) existing.remove();

  if (combo.length === 0) return;

  const container = document.createElement('div');
  container.id = 'xbox-buttons-line';
  container.style.cssText = `
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 14px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 2px solid #ff8c00;
    border-radius: 12px;
    margin: 10px 0 0 0;
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  `;

  // Icono de gamepad
  const title = document.createElement('div');
  title.textContent = '🎮';
  title.style.cssText = 'font-size: 1.4rem; margin-right: 6px; flex-shrink: 0;';
  container.appendChild(title);

  combo.forEach((s, i) => {
    if (i > 0) {
      const arrow = document.createElement('span');
      arrow.textContent = '→';
      arrow.style.cssText = 'color: #ff8c00; font-size: 1.1rem; font-weight: bold; flex-shrink: 0; padding: 0 2px;';
      container.appendChild(arrow);
    }

    const btnGroup = document.createElement('div');
    btnGroup.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      flex-shrink: 0;
      min-width: 85px;
    `;

    // Botones Xbox formateados en grande usando colorXbox()
    const xboxDiv = document.createElement('div');
    xboxDiv.style.cssText = `
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 1rem;
      font-weight: 700;
      background: #0a0a0c;
      padding: 6px 10px;
      border-radius: 8px;
      border: 1px solid #29292e;
      white-space: nowrap;
    `;

    xboxDiv.innerHTML = colorXbox(s.input_xbox);

    // Nombre de la skill abajo
    const nameDiv = document.createElement('div');
    nameDiv.textContent = s.nombre.length > 12 ? s.nombre.substring(0, 12) + '...' : s.nombre;
    nameDiv.style.cssText = 'font-size: .62rem; color: #8d8d99; text-align: center; max-width: 90px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';

    btnGroup.appendChild(xboxDiv);
    btnGroup.appendChild(nameDiv);
    container.appendChild(btnGroup);
  });

  // Insertar después del timeline-wrap
  const timelineWrap = document.querySelector('.timeline-wrap');
  if (timelineWrap) {
    timelineWrap.parentNode.insertBefore(container, timelineWrap.nextSibling);
  }
}

// ══════════════════════════════════════════════════
//  MODAL ADDONS
// ══════════════════════════════════════════════════
function openAddonModal(index) {
  addonModalIndex = index;
  pendingAddons = [...(combo[index].addons || [])];

  document.getElementById('modal-skill-name').textContent = combo[index].nombre;

  const grid = document.getElementById('addon-grid');
  grid.innerHTML = '';
  BDO_ADDONS.forEach(addon => {
    const div = document.createElement('div');
    div.className = 'aopt' + (pendingAddons.includes(addon) ? ' selected' : '');
    div.textContent = addon;
    div.onclick = () => toggleAddon(addon, div);
    grid.appendChild(div);
  });

  document.getElementById('addon-modal').classList.add('active');
}

function toggleAddon(addon, el) {
  if (pendingAddons.includes(addon)) {
    pendingAddons = pendingAddons.filter(a => a !== addon);
    el.classList.remove('selected');
  } else {
    if (pendingAddons.length >= 2) {
      alert('Máximo 2 addons por habilidad.');
      return;
    }
    pendingAddons.push(addon);
    el.classList.add('selected');
  }
}

function applyAddons() {
  if (addonModalIndex >= 0) {
    combo[addonModalIndex].addons = [...pendingAddons];
    renderTimeline();
  }
  closeAddonModal();
}

function closeAddonModal() {
  document.getElementById('addon-modal').classList.remove('active');
  addonModalIndex = -1;
  pendingAddons = [];
}

// ══════════════════════════════════════════════════
//  ANÁLISIS DEL COMBO
// ══════════════════════════════════════════════════
function analyzeCombo() {
  if (combo.length === 0) {
    alert('Agrega al menos una habilidad al combo.');
    return;
  }

  const an = document.getElementById('analysis');
  const content = document.getElementById('analysis-content');
  an.style.display = 'block';

  const ccSkills     = combo.filter(s => s.cc && s.cc !== 'Ninguno');
  const saSkills     = combo.filter(s => s.proteccion && s.proteccion.includes('SA'));
  const fgSkills     = combo.filter(s => s.proteccion && s.proteccion.includes('FG'));
  const ifrSkills    = combo.filter(s => s.proteccion && (s.proteccion.includes('I-Frame') || s.proteccion.includes('Invencib')));
  const buffSkills   = combo.filter(s => s.buffs && s.buffs !== 'Ninguno');
  const noProtSkills = combo.filter(s => !s.proteccion || s.proteccion === 'Ninguna');
  const hasAddonAll  = combo.every(s => s.addons && s.addons.length > 0);

  const protLine = combo.map(s => {
    const p = s.proteccion || 'Ninguna';
    if (p.includes('SA'))      return `<span class="pblock p-sa">SA</span>`;
    if (p.includes('FG'))      return `<span class="pblock p-fg">FG</span>`;
    if (p.includes('I-Frame') || p.includes('Invencib')) return `<span class="pblock p-ifr">IF</span>`;
    return `<span class="pblock p-none">—</span>`;
  }).join(' ');

  let warnings = '';
  if (combo[0] && (!combo[0].proteccion || combo[0].proteccion === 'Ninguna')) {
    warnings += `<div class="warn">⚠️ La primera habilidad no tiene protección.</div>`;
  }
  for (let i = 0; i < combo.length - 1; i++) {
    const a = !combo[i].proteccion   || combo[i].proteccion   === 'Ninguna';
    const b = !combo[i+1].proteccion || combo[i+1].proteccion === 'Ninguna';
    if (a && b) {
      warnings += `<div class="warn">⚠️ 2 habilidades seguidas sin protección.</div>`;
    }
  }
  if (ccSkills.length === 0) {
    warnings += `<div class="warn">⚠️ Sin habilidades de CC.</div>`;
  }
  const hasApBuff = combo.some(s => s.buffs && (s.buffs.includes('AP') || s.buffs.includes('daño')));
  if (!hasApBuff) {
    warnings += `<div class="warn">💡 Sin buff de AP.</div>`;
  }
  if (!hasAddonAll) {
    warnings += `<div class="warn">💡 Algunas habilidades sin addons.</div>`;
  }
  if (combo.length > 10) {
    warnings += `<div class="warn">⚠️ Combo de ${combo.length} habilidades — muy largo.</div>`;
  }

  if (!warnings) {
    warnings = `<div class="ok">✅ Combo bien estructurado.</div>`;
  }

  content.innerHTML = `
    <div class="ablock">
      <h4>Cobertura de protección</h4>
      <div class="prot-line">${protLine}</div>
    </div>
    <div class="ablock">
      <h4>Resumen</h4>
      <ul class="alist">
        <li>🛡️ SA: <b>${saSkills.length}</b> — FG: <b>${fgSkills.length}</b> — I-Frame: <b>${ifrSkills.length}</b> — Sin prot.: <b>${noProtSkills.length}</b></li>
        <li>⚡ CC: <b>${ccSkills.length}</b> (${ccSkills.map(s=>s.cc).join(', ') || '—'})</li>
        <li>✨ Buffs: <b>${buffSkills.length}</b></li>
        <li>🔢 Longitud: <b>${combo.length} habilidades</b></li>
      </ul>
    </div>
    <div class="ablock">
      <h4>Addons</h4>
      <ul class="alist">
        ${combo.map(s => `<li>${s.icon} ${s.nombre}: ${s.addons && s.addons.length ? s.addons.join(' + ') : '<span style="color:var(--muted)">Sin addon</span>'}</li>`).join('')}
      </ul>
    </div>
    <div class="ablock">
      <h4>Diagnóstico</h4>
      ${warnings}
    </div>
  `;

  an.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ══════════════════════════════════════════════════
//  GUARDAR / CARGAR COMBOS
// ══════════════════════════════════════════════════
function saveCombo() {
  if (combo.length === 0) { alert('El combo está vacío.'); return; }
  const name = prompt(`Nombre para este combo (${currentClass} - ${currentSpec === 'succession' ? 'Sucesión' : 'Despertar'}):`);
  if (!name) return;

  savedCombos.push({
    name,
    clase: currentClass,
    spec: currentSpec,
    skills: [...combo],
    fecha: new Date().toLocaleDateString('es-ES')
  });

  try { localStorage.setItem('bdo_combos', JSON.stringify(savedCombos)); } catch(e) {}
  renderSaved();
}

function loadCombo(index) {
  const saved = savedCombos[index];
  if (!saved) return;

  if (saved.clase !== currentClass || saved.spec !== currentSpec) {
    currentClass = saved.clase;
    currentSpec  = saved.spec;
    document.getElementById('class-select').value = currentClass;
    document.getElementById('btn-suc').classList.toggle('active', currentSpec === 'succession');
    document.getElementById('btn-awk').classList.toggle('active', currentSpec === 'awakening');
    filterSkills();
  }

  combo = saved.skills.map(s => ({ ...s, addons: s.addons || [] }));
  renderTimeline();
}

function deleteCombo(index) {
  if (!confirm('¿Eliminar este combo?')) return;
  savedCombos.splice(index, 1);
  try { localStorage.setItem('bdo_combos', JSON.stringify(savedCombos)); } catch(e) {}
  renderSaved();
}

function renderSaved() {
  const sec  = document.getElementById('saved-section');
  const list = document.getElementById('saved-list');
  if (savedCombos.length === 0) { sec.style.display = 'none'; return; }
  sec.style.display = 'block';
  list.innerHTML = savedCombos.map((c, i) => `
    <div class="saved-item">
      <span>${c.name} <span style="color:var(--muted);font-size:.72rem">(${c.clase} · ${c.spec === 'succession' ? 'Suc' : 'Desp'} · ${c.fecha || ''})</span></span>
      <div class="sbtns">
        <button onclick="loadCombo(${i})">📂 Cargar</button>
        <button onclick="deleteCombo(${i})">🗑️</button>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════
//  EXPORTAR COMBO
// ══════════════════════════════════════════════════
function exportCombo() {
  if (combo.length === 0) { alert('El combo está vacío.'); return; }
  const specLabel = currentSpec === 'succession' ? 'Sucesión' : 'Despertar';
  const classLabel = currentClass.charAt(0).toUpperCase() + currentClass.slice(1);

  let text = `🎮 **${classLabel} — ${specLabel}**
`;
  text += `━━━━━━━━━━━━━━━━━━━━
`;
  combo.forEach((s, i) => {
    const prot = s.proteccion && s.proteccion !== 'Ninguna' ? `[${s.proteccion}]` : '';
    const cc = s.cc && s.cc !== 'Ninguno' ? `⚡${s.cc}` : '';
    const addons = s.addons && s.addons.length ? `
     Addons: ${s.addons.join(' + ')}` : '';
    text += `${i+1}. ${s.icon} **${s.nombre}** ${prot} ${cc}
   📲 ${s.input_xbox}${addons}
`;
  });
  text += `━━━━━━━━━━━━━━━━━━━━
`;
  text += `🔢 ${combo.length} habilidades · BDO Combo Builder`;

  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Combo copiado al portapapeles.');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:500px;height:300px;z-index:9999;padding:12px;background:#1e1e24;color:#e1e1e6;border:1px solid #ff4a4a;border-radius:8px;font-size:.8rem;';
    document.body.appendChild(ta);
    ta.select();
    alert('Selecciona el texto y cópialo manualmente.');
    setTimeout(() => ta.remove(), 10000);
  });
}

// ══════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  filterSkills();
  renderSaved();
});
