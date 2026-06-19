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
//  Removidos: Daño a Monstruos, Precisión, DP directo, Evasión
//  Actualizados: DOT, velocidades, daño especial
// ══════════════════════════════════════════════════
const BDO_ADDONS = [
  // ── Daño ofensivo ──
  '💥 Prob. Crítico +20%',
  '💥 Prob. Crítico +30%',
  '🔥 Daño Crítico +3%',
  '🔥 Daño Crítico +5%',
  '🔨 Daño al Suelo +5%',
  '🔨 Daño al Suelo +10%',
  '🌪️ Daño Aéreo +5%',
  '🌪️ Daño Aéreo +10%',
  '🔙 Daño por la Espalda +5%',
  '🔙 Daño por la Espalda +10%',
  '🪓 Daño JcJ (Aventureros) +15',
  '🪓 Daño JcJ (Aventureros) +20',
  // ── Reducción de defensa ──
  '🩸 Reducción Defensa Enemigo -10',
  '🩸 Reducción Defensa Enemigo -20',
  '🛑 Reducción Defensa Mágica -10',
  '🛑 Reducción Defensa Mágica -20',
  // ── Velocidad ──
  '⚡ Vel. Ataque +7%',
  '⚡ Vel. Ataque +10%',
  '🎯 Vel. Casteo +7%',
  '🎯 Vel. Casteo +10%',
  '🏃 Vel. Movimiento +7%',
  '🏃 Vel. Movimiento +10%',
  // ── Recuperación ──
  '❤️ Recuperación HP por golpe +20',
  '❤️ Recuperación HP por golpe +30',
  '💙 Recuperación MP/WP/SP +15',
  '💙 Recuperación MP/WP/SP +20',
  '💊 Recuperación HP al matar +50',
  '💊 Recuperación HP al matar +100',
  // ── Debuffs al enemigo ──
  '🐢 Vel. Movimiento Enemiga -10%',
  '🐢 Vel. Movimiento Enemiga -15%',
  '⛔ Vel. Ataque Enemiga -7%',
  '⛔ Vel. Ataque Enemiga -10%',
  // ── DOT (actualizados a valores 2025) ──
  '🩸 Sangrado (100 daño c/3s, 9s)',
  '🔥 Quemadura (100 daño c/3s, 9s)',
  '☠️ Veneno (100 daño c/3s, 9s)',
  '🤕 Dolor (100 daño c/3s, 9s)',
  // ── Resistencias ──
  '🛡️ Resistencia CC +10%',
  '🛡️ Resistencia CC +15%',
];

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
    if (s.proteccion && s.proteccion !== 'Ninguna') {
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

    // Colorear botones Xbox en el input
    const colorInput = (str) => str
      .replace(/\[A\]/g, '<span class="btn-A">[A]</span>')
      .replace(/\[B\]/g, '<span class="btn-B">[B]</span>')
      .replace(/\[X\]/g, '<span class="btn-X">[X]</span>')
      .replace(/\[Y\]/g, '<span class="btn-Y">[Y]</span>');

    card.innerHTML = `
      <span class="icon">${s.icon}</span>
      <div class="info">
        <div class="sname">${s.nombre}</div>
        <div class="smeta">${badges}</div>
      </div>
      <div class="xbox">${colorInput(s.input_xbox || '')}</div>
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
//  TIMELINE
// ══════════════════════════════════════════════════
function renderTimeline() {
  const tl    = document.getElementById('timeline');
  const count = document.getElementById('combo-count');
  count.textContent = combo.length;
  tl.innerHTML = '';

  if (combo.length === 0) {
    tl.innerHTML = '<span class="tempty">Vacío — toca una habilidad para agregarla</span>';
    return;
  }

  const colorInput = (str) => (str || '')
    .replace(/\[A\]/g, '<span class="btn-A">[A]</span>')
    .replace(/\[B\]/g, '<span class="btn-B">[B]</span>')
    .replace(/\[X\]/g, '<span class="btn-X">[X]</span>')
    .replace(/\[Y\]/g, '<span class="btn-Y">[Y]</span>');

  combo.forEach((s, i) => {
    if (i > 0) {
      const arr = document.createElement('span');
      arr.className = 'arrow';
      arr.textContent = '→';
      tl.appendChild(arr);
    }

    const item = document.createElement('div');
    item.className = 'titem';

    // Color de borde según protección
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
      <span style="font-size:.6rem;color:var(--muted)">${colorInput(s.input_xbox || '')}</span>
      <span class="tadd" onclick="openAddonModal(${i})">${addonLabel}</span>
    `;
    tl.appendChild(item);
  });
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

  // Protección por skill (línea visual)
  const protLine = combo.map(s => {
    const p = s.proteccion || 'Ninguna';
    if (p.includes('SA'))      return `<span class="pblock p-sa">SA</span>`;
    if (p.includes('FG'))      return `<span class="pblock p-fg">FG</span>`;
    if (p.includes('I-Frame') || p.includes('Invencib')) return `<span class="pblock p-ifr">IF</span>`;
    return `<span class="pblock p-none">—</span>`;
  }).join(' ');

  let warnings = '';
  // Apertura sin protección
  if (combo[0] && (!combo[0].proteccion || combo[0].proteccion === 'Ninguna')) {
    warnings += `<div class="warn">⚠️ La primera habilidad no tiene protección — entrarás sin SA/FG al pack.</div>`;
  }
  // Dos o más skills sin protección seguidas
  for (let i = 0; i < combo.length - 1; i++) {
    const a = !combo[i].proteccion   || combo[i].proteccion   === 'Ninguna';
    const b = !combo[i+1].proteccion || combo[i+1].proteccion === 'Ninguna';
    if (a && b) {
      warnings += `<div class="warn">⚠️ "${combo[i].nombre}" → "${combo[i+1].nombre}" — 2 habilidades seguidas sin protección.</div>`;
    }
  }
  // Sin CC
  if (ccSkills.length === 0) {
    warnings += `<div class="warn">⚠️ El combo no tiene ninguna habilidad de CC (knockdown/stun). Considera agregar una.</div>`;
  }
  // Sin buff de AP
  const hasApBuff = combo.some(s => s.buffs && (s.buffs.includes('AP') || s.buffs.includes('daño')));
  if (!hasApBuff) {
    warnings += `<div class="warn">💡 Sin buff de AP en el combo — activa tu habilidad de buff antes del burst.</div>`;
  }
  // Addons incompletos
  if (!hasAddonAll) {
    warnings += `<div class="warn">💡 Algunas habilidades no tienen addons asignados. Toca "Addon" en cada skill del timeline.</div>`;
  }
  // Combo muy largo
  if (combo.length > 10) {
    warnings += `<div class="warn">⚠️ Combo de ${combo.length} habilidades — puede ser difícil de ejecutar. Los mejores loops PvE son de 5-8 skills.</div>`;
  }

  if (!warnings) {
    warnings = `<div class="ok">✅ Combo bien estructurado — protección cubierta, CC presente y buff activo.</div>`;
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
        <li>⚡ CC total: <b>${ccSkills.length}</b> (${ccSkills.map(s=>s.cc).join(', ') || '—'})</li>
        <li>✨ Buffs: <b>${buffSkills.length}</b> (${buffSkills.map(s=>s.nombre).join(', ') || '—'})</li>
        <li>🔢 Longitud del combo: <b>${combo.length} habilidades</b></li>
      </ul>
    </div>
    <div class="ablock">
      <h4>Addons asignados</h4>
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

  // Cambiar clase/spec si hace falta
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
  if (!confirm('¿Eliminar este combo guardado?')) return;
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
//  EXPORTAR COMBO COMO TEXTO (para Discord)
// ══════════════════════════════════════════════════
function exportCombo() {
  if (combo.length === 0) { alert('El combo está vacío.'); return; }
  const specLabel = currentSpec === 'succession' ? 'Sucesión' : 'Despertar';
  const classLabel = currentClass.charAt(0).toUpperCase() + currentClass.slice(1);

  let text = `🎮 **${classLabel} — ${specLabel}**\n`;
  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  combo.forEach((s, i) => {
    const prot = s.proteccion && s.proteccion !== 'Ninguna' ? `[${s.proteccion}]` : '';
    const cc   = s.cc && s.cc !== 'Ninguno' ? `⚡${s.cc}` : '';
    const addons = s.addons && s.addons.length ? `\n     Addons: ${s.addons.join(' + ')}` : '';
    text += `${i+1}. ${s.icon} **${s.nombre}** ${prot} ${cc}\n   📲 ${s.input_xbox}${addons}\n`;
  });
  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  text += `🔢 ${combo.length} habilidades · BDO Combo Builder`;

  // Copiar al portapapeles
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Combo copiado al portapapeles — listo para pegar en Discord.');
  }).catch(() => {
    // Fallback: mostrar en un textarea
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:500px;height:300px;z-index:9999;padding:12px;background:#1e1e24;color:#e1e1e6;border:1px solid #ff4a4a;border-radius:8px;font-size:.8rem;';
    document.body.appendChild(ta);
    ta.select();
    alert('Selecciona el texto y cópialo manualmente (Ctrl+C).');
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
