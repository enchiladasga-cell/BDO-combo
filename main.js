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
//  ADDONS (meta PvE 2025-2026)
// ══════════════════════════════════════════════════
const BDO_ADDONS = [
  // Daño ofensivo
  '⚔️ Daño a Monstruos +20',
  '⚔️ Daño a Monstruos +30',
  '🩸 Reducción DP Enemigo -15',
  '🩸 Reducción DP Enemigo -20',
  '💥 Prob. Crítico +20%',
  '💥 Prob. Crítico +30%',
  '🔥 Daño Crítico +3%',
  '🔥 Daño Crítico +5%',
  '🔪 Daño por la Espalda +3%',
  '🔪 Daño por la Espalda +5%',
  '🔨 Daño al Suelo +3%',
  '🔨 Daño al Suelo +5%',
  '🌪️ Daño Aéreo +3%',
  '🌪️ Daño Aéreo +5%',
  '🎯 Precisión +4%',
  '🎯 Precisión +5%',
  '🪓 Daño JvJ +15',
  '🪓 Daño JvJ +20',
  // Velocidad
  '⚡ Vel. Ataque/Casteo +7%',
  '⚡ Vel. Ataque/Casteo +10%',
  '🏃 Vel. Movimiento +7%',
  '🏃 Vel. Movimiento +10%',
  // Defensivo / Sostenibilidad
  '❤️ Recuperación HP +20',
  '❤️ Recuperación HP +30',
  '💙 Recuperación MP/WP/SP +15',
  '💙 Recuperación MP/WP/SP +20',
  '🛡️ DP +15',
  '🛡️ DP +20',
  '💨 Evasión +4%',
  '💨 Evasión +5%',
  // Debuffs al enemigo
  '📉 Evasión Enemiga -4%',
  '📉 Evasión Enemiga -5%',
  '🛑 Vel. Ataque Enemiga -7%',
  '🛑 Vel. Ataque Enemiga -10%',
  '🐢 Vel. Movimiento Enemiga -10%',
  '🐢 Vel. Movimiento Enemiga -15%',
  // DOT
  '🩸 Sangrado (50 daño c/3s)',
  '🔥 Quemadura (50 daño c/3s)',
  '☠️ Veneno (50 daño c/3s)',
  '🤕 Dolor (50 daño c/3s)',
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
  document.querySelectorAll('.tag').forEach(t => {
    t.classList.remove('active');
  });
  // Activar el tag correcto
  const tagMap = { all:'t-all', sa:'t-sa', fg:'t-fg', ifr:'t-ifr', cc:'t-cc', buff:'t-buff' };
  const el = document.querySelector(`.tag.${tagMap[filter]}`);
  if (el) el.classList.add('active');
  filterSkills();
}

function filterSkills() {
  const container = document.getElementById('skill-list');
  const badge     = document.getElementById('skill-count');
  container.innerHTML = '';

  // Verificar datos
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
    // Filtro de búsqueda
    if (searchVal && !s.nombre.toLowerCase().includes(searchVal)) return;

    // Filtro de tipo
    if (activeFilter === 'sa'   && !(s.proteccion?.includes('SA') || s.proteccion?.includes('Súper'))) return;
    if (activeFilter === 'fg'   && !(s.proteccion?.includes('FG') || s.proteccion?.includes('Guardia'))) return;
    if (activeFilter === 'ifr'  && !(s.proteccion?.includes('I-Frame') || s.proteccion?.includes('Invencibilidad'))) return;
    if (activeFilter === 'cc'   && (!s.cc || s.cc === 'Ninguno')) return;
    if (activeFilter === 'buff' && (!s.buffs || s.buffs === 'Ninguno')) return;

    count++;
    const card = document.createElement('div');
    card.className = 'scard';
    card.onclick = () => addSkill(s);

    // Badges
    let badges = '';
    if (s.proteccion && s.proteccion !== 'Ninguna') {
      const pClass = s.proteccion.includes('SA') ? 'b-sa' : s.proteccion.includes('FG') ? 'b-fg' : 'b-ifr';
      badges += `<span class="badge ${pClass}">${s.proteccion}</span>`;
    }
    if (s.cc && s.cc !== 'Ninguno') badges += `<span class="badge b-cc">CC</span>`;
    if (s.buffs && s.buffs !== 'Ninguno') badges += `<span class="badge b-buff">Buff</span>`;

    // Input Xbox formateado
    const xboxHtml = formatXbox(s.input_xbox || '');

    card.innerHTML = `
      <div class="icon">${s.icon || '⚔️'}</div>
      <div class="info">
        <div class="sname">${s.nombre}</div>
        <div class="smeta">${badges}</div>
      </div>
      <div class="xbox">${xboxHtml}</div>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);

  if (count === 0) {
    container.innerHTML = `<p style="color:var(--muted);font-size:.82rem;padding:12px;text-align:center;">
      Sin resultados${searchVal ? ` para "<b>${searchVal}</b>"` : ''}.
    </p>`;
  }
  badge.textContent = count;
}

// Colorea los botones Xbox en el texto
function formatXbox(text) {
  return text
    .replace(/\b(RB)\b/g, '<span style="color:#fbbf24;font-weight:700">RB</span>')
    .replace(/\b(LB)\b/g, '<span style="color:#60a5fa;font-weight:700">LB</span>')
    .replace(/\b(RT)\b/g, '<span style="color:#f472b6;font-weight:700">RT</span>')
    .replace(/\b(LT)\b/g, '<span style="color:#4ade80;font-weight:700">LT</span>')
    .replace(/\[A\]/g, '<span style="color:#4caf50;font-weight:700">A</span>')
    .replace(/\[B\]/g, '<span style="color:#f44336;font-weight:700">B</span>')
    .replace(/\[X\]/g, '<span style="color:#2196f3;font-weight:700">X</span>')
    .replace(/\[Y\]/g, '<span style="color:#ffc107;font-weight:700">Y</span>')
    .replace(/\b(RS↑|RS↓|RS←|RS→|RS)\b/g, '<span style="color:#e2e8f0;font-weight:700">$1</span>')
    .replace(/\b(LS↑|LS↓|LS←|LS→|LS)\b/g, '<span style="color:#cbd5e1;font-weight:700">$1</span>');
}

// ══════════════════════════════════════════════════
//  COMBO — añadir / quitar / limpiar
// ══════════════════════════════════════════════════
function addSkill(skill) {
  combo.push({ ...skill, addons: [] });
  renderCombo();
}

function removeSkill(idx) {
  combo.splice(idx, 1);
  renderCombo();
}

function undoLast() {
  combo.pop();
  renderCombo();
}

function clearCombo(silent = false) {
  combo = [];
  renderCombo();
  if (!silent) document.getElementById('analysis').style.display = 'none';
}

// ══════════════════════════════════════════════════
//  RENDER TIMELINE
// ══════════════════════════════════════════════════
function renderCombo() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = '';
  document.getElementById('combo-count').textContent = combo.length;

  if (combo.length === 0) {
    tl.innerHTML = '<span class="tempty">Vacío — toca una habilidad para agregarla</span>';
    return;
  }

  combo.forEach((s, i) => {
    if (i > 0) {
      const arr = document.createElement('span');
      arr.className = 'arrow';
      arr.textContent = '➔';
      tl.appendChild(arr);
    }

    const item = document.createElement('div');
    item.className = 'titem';

    const addonLabel = s.addons && s.addons.length > 0
      ? s.addons.map(a => a.split(' ').slice(0,2).join(' ')).join(' / ')
      : '+Addon';

    item.innerHTML = `
      <div class="tname">${s.icon || '⚔️'} ${s.nombre}</div>
      <div class="tadd" onclick="openAddonModal(${i}); event.stopPropagation();">💜 ${addonLabel}</div>
      <button class="tdel" onclick="removeSkill(${i}); event.stopPropagation();">×</button>
    `;
    tl.appendChild(item);
  });
}

// ══════════════════════════════════════════════════
//  ANÁLISIS DEL COMBO
// ══════════════════════════════════════════════════
function analyzeCombo() {
  if (combo.length === 0) return;

  const div = document.getElementById('analysis');
  const content = document.getElementById('analysis-content');
  div.style.display = 'block';

  const buffs = [];
  const debuffs = [];
  const protections = [];
  let unprotCC = false;

  combo.forEach(s => {
    if (s.buffs  && s.buffs  !== 'Ninguno') buffs.push(s.buffs);
    if (s.debuffs && s.debuffs !== 'Ninguno') debuffs.push(s.debuffs);
    if (s.addons && s.addons.length) s.addons.forEach(a => buffs.push(`Addon: ${a}`));
    protections.push(s.proteccion || 'Ninguna');
    if (s.cc && s.cc !== 'Ninguno' && (!s.proteccion || s.proteccion === 'Ninguna')) {
      unprotCC = true;
    }
  });

  const protHtml = protections.map(p => {
    const cls = p.includes('SA') ? 'p-sa' : p.includes('FG') ? 'p-fg' : (p.includes('I-Frame') || p.includes('Inv')) ? 'p-ifr' : 'p-none';
    const label = p === 'Ninguna' ? 'Sin prot.' : p.split(' ')[0];
    return `<span class="pblock ${cls}">${label}</span>`;
  }).join(' ➔ ');

  const warnMsg = unprotCC
    ? '<div class="warn">⚠️ Tienes CC sin protección — puedes ser interrumpido.</div>'
    : '<div class="ok">💪 Rotación de CC segura.</div>';

  content.innerHTML = `
    <div class="ablock">
      <h4>Buffs activos</h4>
      <ul class="alist">${buffs.length ? buffs.map(b=>`<li>${b}</li>`).join('') : '<li style="color:var(--muted)">Ninguno</li>'}</ul>
    </div>
    <div class="ablock">
      <h4>Debuffs aplicados</h4>
      <ul class="alist">${debuffs.length ? debuffs.map(d=>`<li>${d}</li>`).join('') : '<li style="color:var(--muted)">Ninguno</li>'}</ul>
    </div>
    <div class="ablock">
      <h4>Secuencia de protecciones</h4>
      <div class="prot-line">${protHtml}</div>
      ${warnMsg}
    </div>
  `;

  div.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// ══════════════════════════════════════════════════
//  MODAL DE ADDONS
// ══════════════════════════════════════════════════
function openAddonModal(idx) {
  addonModalIndex = idx;
  pendingAddons = [...(combo[idx].addons || [])];

  document.getElementById('modal-skill-name').textContent = combo[idx].nombre;
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
      alert('⚠️ Máximo 2 addons por habilidad (regla del juego).');
      return;
    }
    pendingAddons.push(addon);
    el.classList.add('selected');
  }
}

function applyAddons() {
  if (addonModalIndex >= 0) {
    combo[addonModalIndex].addons = [...pendingAddons];
    renderCombo();
  }
  closeAddonModal();
}

function closeAddonModal() {
  document.getElementById('addon-modal').classList.remove('active');
  addonModalIndex = -1;
  pendingAddons = [];
}

// Cerrar modal al tocar el overlay
document.getElementById('addon-modal').addEventListener('click', function(e) {
  if (e.target === this) closeAddonModal();
});

// ══════════════════════════════════════════════════
//  GUARDAR / CARGAR COMBOS
// ══════════════════════════════════════════════════
function saveCombo() {
  if (combo.length === 0) return;
  const name = prompt('Nombre para este combo:');
  if (!name || !name.trim()) return;

  savedCombos.push({
    name: name.trim(),
    class: currentClass,
    spec: currentSpec,
    skills: JSON.parse(JSON.stringify(combo)),
    date: new Date().toLocaleDateString('es-MX')
  });

  try { localStorage.setItem('bdo_combos', JSON.stringify(savedCombos)); } catch(e) {}
  renderSavedCombos();
}

function loadCombo(idx) {
  const c = savedCombos[idx];
  if (!c) return;
  currentClass = c.class;
  currentSpec  = c.spec;
  document.getElementById('class-select').value = currentClass;
  document.getElementById('btn-suc').classList.toggle('active', currentSpec === 'succession');
  document.getElementById('btn-awk').classList.toggle('active', currentSpec === 'awakening');
  combo = JSON.parse(JSON.stringify(c.skills));
  filterSkills();
  renderCombo();
  document.getElementById('analysis').style.display = 'none';
}

function deleteCombo(idx) {
  if (!confirm('¿Borrar este combo?')) return;
  savedCombos.splice(idx, 1);
  try { localStorage.setItem('bdo_combos', JSON.stringify(savedCombos)); } catch(e) {}
  renderSavedCombos();
}

function renderSavedCombos() {
  const section = document.getElementById('saved-section');
  const list    = document.getElementById('saved-list');
  if (!savedCombos.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = savedCombos.map((c, i) => `
    <div class="saved-item">
      <span>${c.name} <span style="color:var(--muted);font-size:.72rem">(${c.class.toUpperCase()} · ${c.spec === 'succession' ? 'Suc' : 'Awk'} · ${c.date || ''})</span></span>
      <div class="sbtns">
        <button onclick="loadCombo(${i})">📂</button>
        <button onclick="deleteCombo(${i})">🗑️</button>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  filterSkills();
  renderSavedCombos();
});
