'use strict';

/* ============================================================
   1. City data — "City|Country|IANA zone"
   ============================================================ */
const CITY_SRC = `
Abidjan|Ivory Coast|Africa/Abidjan;Abu Dhabi|United Arab Emirates|Asia/Dubai;Accra|Ghana|Africa/Accra;Addis Ababa|Ethiopia|Africa/Addis_Ababa;Adelaide|Australia|Australia/Adelaide;Algiers|Algeria|Africa/Algiers;Almaty|Kazakhstan|Asia/Almaty;Amman|Jordan|Asia/Amman;Amsterdam|Netherlands|Europe/Amsterdam;Anchorage|United States|America/Anchorage;Ankara|Turkey|Europe/Istanbul;Asunción|Paraguay|America/Asuncion;Athens|Greece|Europe/Athens;Auckland|New Zealand|Pacific/Auckland;Baghdad|Iraq|Asia/Baghdad;Baku|Azerbaijan|Asia/Baku;Bali|Indonesia|Asia/Makassar;Bamako|Mali|Africa/Bamako;Bangalore|India|Asia/Kolkata;Bangkok|Thailand|Asia/Bangkok;Barcelona|Spain|Europe/Madrid;Beijing|China|Asia/Shanghai;Beirut|Lebanon|Asia/Beirut;Belgrade|Serbia|Europe/Belgrade;Berlin|Germany|Europe/Berlin;Bern|Switzerland|Europe/Zurich;Bogotá|Colombia|America/Bogota;Boston|United States|America/New_York;Brasília|Brazil|America/Sao_Paulo;Bratislava|Slovakia|Europe/Bratislava;Brisbane|Australia|Australia/Brisbane;Brussels|Belgium|Europe/Brussels;Bucharest|Romania|Europe/Bucharest;Budapest|Hungary|Europe/Budapest;Buenos Aires|Argentina|America/Argentina/Buenos_Aires;Cairo|Egypt|Africa/Cairo;Calgary|Canada|America/Edmonton;Canberra|Australia|Australia/Sydney;Cape Town|South Africa|Africa/Johannesburg;Caracas|Venezuela|America/Caracas;Casablanca|Morocco|Africa/Casablanca;Chennai|India|Asia/Kolkata;Chicago|United States|America/Chicago;Chişinău|Moldova|Europe/Chisinau;Colombo|Sri Lanka|Asia/Colombo;Copenhagen|Denmark|Europe/Copenhagen;Dakar|Senegal|Africa/Dakar;Dallas|United States|America/Chicago;Damascus|Syria|Asia/Damascus;Dar es Salaam|Tanzania|Africa/Dar_es_Salaam;Denver|United States|America/Denver;Dhaka|Bangladesh|Asia/Dhaka;Doha|Qatar|Asia/Qatar;Douala|Cameroon|Africa/Douala;Dubai|United Arab Emirates|Asia/Dubai;Dublin|Ireland|Europe/Dublin;Durban|South Africa|Africa/Johannesburg;Edinburgh|United Kingdom|Europe/London;Edmonton|Canada|America/Edmonton;Frankfurt|Germany|Europe/Berlin;Georgetown|Guyana|America/Guyana;Guatemala City|Guatemala|America/Guatemala;Guangzhou|China|Asia/Shanghai;Halifax|Canada|America/Halifax;Hanoi|Vietnam|Asia/Ho_Chi_Minh;Harare|Zimbabwe|Africa/Harare;Havana|Cuba|America/Havana;Helsinki|Finland|Europe/Helsinki;Ho Chi Minh City|Vietnam|Asia/Ho_Chi_Minh;Hong Kong|Hong Kong|Asia/Hong_Kong;Honolulu|United States|Pacific/Honolulu;Houston|United States|America/Chicago;Hyderabad|India|Asia/Kolkata;Islamabad|Pakistan|Asia/Karachi;Istanbul|Turkey|Europe/Istanbul;Jakarta|Indonesia|Asia/Jakarta;Jerusalem|Israel|Asia/Jerusalem;Johannesburg|South Africa|Africa/Johannesburg;Kabul|Afghanistan|Asia/Kabul;Kampala|Uganda|Africa/Kampala;Kano|Nigeria|Africa/Lagos;Karachi|Pakistan|Asia/Karachi;Kathmandu|Nepal|Asia/Kathmandu;Khartoum|Sudan|Africa/Khartoum;Kigali|Rwanda|Africa/Kigali;Kingston|Jamaica|America/Jamaica;Kinshasa|DR Congo|Africa/Kinshasa;Kolkata|India|Asia/Kolkata;Kuala Lumpur|Malaysia|Asia/Kuala_Lumpur;Kuwait City|Kuwait|Asia/Kuwait;Kyiv|Ukraine|Europe/Kyiv;Kyoto|Japan|Asia/Tokyo;Lagos|Nigeria|Africa/Lagos;Lahore|Pakistan|Asia/Karachi;La Paz|Bolivia|America/La_Paz;Las Vegas|United States|America/Los_Angeles;Libreville|Gabon|Africa/Libreville;Lima|Peru|America/Lima;Lisbon|Portugal|Europe/Lisbon;Ljubljana|Slovenia|Europe/Ljubljana;London|United Kingdom|Europe/London;Los Angeles|United States|America/Los_Angeles;Luanda|Angola|Africa/Luanda;Lusaka|Zambia|Africa/Lusaka;Luxembourg|Luxembourg|Europe/Luxembourg;Madrid|Spain|Europe/Madrid;Malé|Maldives|Indian/Maldives;Managua|Nicaragua|America/Managua;Manama|Bahrain|Asia/Bahrain;Manila|Philippines|Asia/Manila;Maputo|Mozambique|Africa/Maputo;Marrakesh|Morocco|Africa/Casablanca;Melbourne|Australia|Australia/Melbourne;Mexico City|Mexico|America/Mexico_City;Miami|United States|America/New_York;Milan|Italy|Europe/Rome;Minneapolis|United States|America/Chicago;Minsk|Belarus|Europe/Minsk;Mogadishu|Somalia|Africa/Mogadishu;Monaco|Monaco|Europe/Monaco;Monrovia|Liberia|Africa/Monrovia;Monterrey|Mexico|America/Monterrey;Montevideo|Uruguay|America/Montevideo;Montréal|Canada|America/Toronto;Moscow|Russia|Europe/Moscow;Mumbai|India|Asia/Kolkata;Munich|Germany|Europe/Berlin;Muscat|Oman|Asia/Muscat;Nairobi|Kenya|Africa/Nairobi;Naples|Italy|Europe/Rome;New Delhi|India|Asia/Kolkata;New Orleans|United States|America/Chicago;New York|United States|America/New_York;Nicosia|Cyprus|Asia/Nicosia;Niamey|Niger|Africa/Niamey;Nouakchott|Mauritania|Africa/Nouakchott;Novosibirsk|Russia|Asia/Novosibirsk;Nuuk|Greenland|America/Nuuk;Osaka|Japan|Asia/Tokyo;Oslo|Norway|Europe/Oslo;Ottawa|Canada|America/Toronto;Ouagadougou|Burkina Faso|Africa/Ouagadougou;Panama City|Panama|America/Panama;Papeete|French Polynesia|Pacific/Tahiti;Paramaribo|Suriname|America/Paramaribo;Paris|France|Europe/Paris;Perth|Australia|Australia/Perth;Philadelphia|United States|America/New_York;Phnom Penh|Cambodia|Asia/Phnom_Penh;Phoenix|United States|America/Phoenix;Port Harcourt|Nigeria|Africa/Lagos;Port Louis|Mauritius|Indian/Mauritius;Port Moresby|Papua New Guinea|Pacific/Port_Moresby;Port of Spain|Trinidad and Tobago|America/Port_of_Spain;Porto|Portugal|Europe/Lisbon;Prague|Czechia|Europe/Prague;Pretoria|South Africa|Africa/Johannesburg;Pyongyang|North Korea|Asia/Pyongyang;Quito|Ecuador|America/Guayaquil;Rabat|Morocco|Africa/Casablanca;Reykjavík|Iceland|Atlantic/Reykjavik;Riga|Latvia|Europe/Riga;Rio de Janeiro|Brazil|America/Sao_Paulo;Riyadh|Saudi Arabia|Asia/Riyadh;Rome|Italy|Europe/Rome;Salvador|Brazil|America/Bahia;San Francisco|United States|America/Los_Angeles;San José|Costa Rica|America/Costa_Rica;San Juan|Puerto Rico|America/Puerto_Rico;San Salvador|El Salvador|America/El_Salvador;Santiago|Chile|America/Santiago;Santo Domingo|Dominican Republic|America/Santo_Domingo;São Paulo|Brazil|America/Sao_Paulo;Sapporo|Japan|Asia/Tokyo;Sarajevo|Bosnia and Herzegovina|Europe/Sarajevo;Seattle|United States|America/Los_Angeles;Seoul|South Korea|Asia/Seoul;Shanghai|China|Asia/Shanghai;Shenzhen|China|Asia/Shanghai;Singapore|Singapore|Asia/Singapore;Skopje|North Macedonia|Europe/Skopje;Sofia|Bulgaria|Europe/Sofia;St Petersburg|Russia|Europe/Moscow;Stockholm|Sweden|Europe/Stockholm;Suva|Fiji|Pacific/Fiji;Sydney|Australia|Australia/Sydney;Taipei|Taiwan|Asia/Taipei;Tallinn|Estonia|Europe/Tallinn;Tashkent|Uzbekistan|Asia/Tashkent;Tbilisi|Georgia|Asia/Tbilisi;Tegucigalpa|Honduras|America/Tegucigalpa;Tehran|Iran|Asia/Tehran;Tel Aviv|Israel|Asia/Jerusalem;Thimphu|Bhutan|Asia/Thimphu;Tirana|Albania|Europe/Tirane;Tokyo|Japan|Asia/Tokyo;Toronto|Canada|America/Toronto;Tripoli|Libya|Africa/Tripoli;Tunis|Tunisia|Africa/Tunis;Ulaanbaatar|Mongolia|Asia/Ulaanbaatar;Vancouver|Canada|America/Vancouver;Vienna|Austria|Europe/Vienna;Vientiane|Laos|Asia/Vientiane;Vilnius|Lithuania|Europe/Vilnius;Warsaw|Poland|Europe/Warsaw;Washington|United States|America/New_York;Wellington|New Zealand|Pacific/Auckland;Windhoek|Namibia|Africa/Windhoek;Winnipeg|Canada|America/Winnipeg;Yangon|Myanmar|Asia/Yangon;Yaoundé|Cameroon|Africa/Douala;Yerevan|Armenia|Asia/Yerevan;Zagreb|Croatia|Europe/Zagreb;Zürich|Switzerland|Europe/Zurich
`;

const CITIES = CITY_SRC.trim().split(';').map(row => {
  const [city, country, tz] = row.trim().split('|');
  return { city, country, tz, key: city + '|' + tz, search: (city + ' ' + country).toLowerCase() };
});

/* Strip accents so "Sao Paulo" finds "São Paulo". */
const fold = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
CITIES.forEach(c => { c.search = fold(c.city + ' ' + c.country); });

/* ============================================================
   2. Time helpers — all zone maths goes through Intl, so DST
      is handled by the platform rather than by us.
   ============================================================ */
const partsCache = new Map();
function zoneFormatter(tz) {
  let f = partsCache.get(tz);
  if (!f) {
    f = new Intl.DateTimeFormat('en-GB', {
      timeZone: tz, hourCycle: 'h23',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    partsCache.set(tz, f);
  }
  return f;
}

function zoneParts(tz, date) {
  const out = {};
  for (const p of zoneFormatter(tz).formatToParts(date)) {
    if (p.type !== 'literal') out[p.type] = +p.value;
  }
  out.ymd = `${out.year}-${String(out.month).padStart(2,'0')}-${String(out.day).padStart(2,'0')}`;
  return out;
}

/* Offset from UTC, in minutes, at this instant. */
function offsetMinutes(tz, date) {
  const p = zoneParts(tz, date);
  const asUTC = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return Math.round((asUTC - Math.floor(date.getTime() / 1000) * 1000) / 60000);
}

function formatOffset(mins) {
  const sign = mins < 0 ? '−' : '+';
  const a = Math.abs(mins);
  const h = Math.floor(a / 60), m = a % 60;
  return `UTC${sign}${h}${m ? ':' + String(m).padStart(2, '0') : ''}`;
}

function formatDelta(mins) {
  if (mins === 0) return 'same time';
  const a = Math.abs(mins);
  const h = Math.floor(a / 60), m = a % 60;
  const span = (h ? h + 'h' : '') + (m ? (h ? ' ' : '') + m + 'm' : '');
  return `${mins > 0 ? '+' : '−'}${span} ${mins > 0 ? 'ahead' : 'behind'}`;
}

const pad = n => String(n).padStart(2, '0');
const isNight = h => h < 6 || h >= 19;

/* Does the browser want a 12-hour clock? Ask Intl rather than guess. */
const USES_12H = (() => {
  const opts = new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).resolvedOptions();
  return opts.hour12 === true || (opts.hourCycle || '').startsWith('h1');
})();
function display12(h) {
  const hr = h % 12 === 0 ? 12 : h % 12;
  return { h: hr, mer: h < 12 ? 'AM' : 'PM' };
}

const LOCAL_TZ = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
const LOCAL_LABEL = (() => {
  const match = CITIES.find(c => c.tz === LOCAL_TZ);
  if (match) return `${match.city}, ${match.country}`;
  return LOCAL_TZ.split('/').pop().replace(/_/g, ' ');
})();

const dateLong = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: LOCAL_TZ
});

/* ============================================================
   3. State — held in memory only, for this session.
   ============================================================ */
const SEED = ['New York','London','Lagos','Paris','Dubai','Mumbai','Shanghai','Tokyo','Sydney','São Paulo','Los Angeles','Moscow'];

const state = {
  cities: SEED.map(n => CITIES.find(c => c.city === n)).filter(Boolean),
  theme: 'dark',
  view: null,          // {year, month} shown in the calendar
  picked: null,        // {year, month, day} selected date
  highlight: -1        // active row in the search results
};

const el = id => document.getElementById(id);
const grid = el('grid');

/* ============================================================
   4. Hero
   ============================================================ */
const SKY_BANDS = [
  { until: 5,  a: '#0B1030', b: '#232B63' },   // deep night
  { until: 7,  a: '#43285C', b: '#C4603F' },   // dawn
  { until: 10, a: '#2F68A6', b: '#86BCE4' },   // morning
  { until: 16, a: '#2E7BC4', b: '#A6D6F2' },   // midday
  { until: 18, a: '#43689F', b: '#E3A75F' },   // late afternoon
  { until: 20, a: '#6B3A6E', b: '#E8734A' },   // sunset
  { until: 24, a: '#141A3A', b: '#2A2F63' }    // night again
];

function paintSky(hour, minute) {
  // Blend between the two neighbouring bands so the colour creeps
  // across the hour rather than jumping at the boundary.
  let i = SKY_BANDS.findIndex(b => hour < b.until);
  if (i < 0) i = SKY_BANDS.length - 1;
  const band = SKY_BANDS[i];
  const next = SKY_BANDS[(i + 1) % SKY_BANDS.length];
  const start = i === 0 ? 0 : SKY_BANDS[i - 1].until;
  const t = Math.min(1, Math.max(0, ((hour + minute / 60) - start) / (band.until - start)));
  const ease = t * t * (3 - 2 * t) * 0.55;   // never fully reach the next band
  const sky = el('sky');
  sky.style.setProperty('--sky-a', `color-mix(in oklab, ${band.a} ${(1 - ease) * 100}%, ${next.a})`);
  sky.style.setProperty('--sky-b', `color-mix(in oklab, ${band.b} ${(1 - ease) * 100}%, ${next.b})`);
}

let lastHeroDay = '';
function renderHero(now) {
  const p = zoneParts(LOCAL_TZ, now);
  let hourText = pad(p.hour);
  if (USES_12H) {
    const d = display12(p.hour);
    hourText = String(d.h);
    el('hMer').hidden = false;
    el('hMer').textContent = d.mer;
  }
  el('hHour').textContent = hourText;
  el('hMin').textContent = pad(p.minute);
  el('hSec').textContent = pad(p.second);

  if (p.ymd !== lastHeroDay) {
    lastHeroDay = p.ymd;
    el('heroDate').textContent = dateLong.format(now);
    const off = offsetMinutes(LOCAL_TZ, now);
    el('heroPlace').innerHTML =
      `${LOCAL_LABEL}<span class="dot">·</span>${formatOffset(off)}`;
    el('tzFoot').textContent = `${LOCAL_TZ} · ${formatOffset(off)}`;
    el('heroSr').textContent = `Local time in ${LOCAL_LABEL}. ${dateLong.format(now)}.`;
    renderCalendar();   // the "today" highlight may have moved
  }
  if (p.second === 0 || !paintSky.done) { paintSky(p.hour, p.minute); paintSky.done = true; }
}

/* ============================================================
   5. City cards
   ============================================================ */
function faceSVG() {
  let ticks = '';
  for (let i = 0; i < 12; i++) {
    const a = (i * 30) * Math.PI / 180;
    const x1 = 50 + Math.sin(a) * 39, y1 = 50 - Math.cos(a) * 39;
    const x2 = 50 + Math.sin(a) * 43, y2 = 50 - Math.cos(a) * 43;
    ticks += `<line class="tick" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
  }
  return `<svg class="face" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="dial" cx="50" cy="50" r="46"/>${ticks}
    <line class="hand hh" x1="50" y1="50" x2="50" y2="27"/>
    <line class="hand mh" x1="50" y1="50" x2="50" y2="17"/>
    <line class="hand sh" x1="50" y1="56" x2="50" y2="14"/>
    <circle class="pin" cx="50" cy="50" r="2.4"/>
  </svg>`;
}

const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.8v2.2M12 19v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.8 12H5M19 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" stroke-linecap="round"/></svg>';
const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 13A8.5 8.5 0 1 1 11 3.5 6.6 6.6 0 0 0 20.5 13z" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function buildCard(c, index) {
  const li = document.createElement('li');
  li.className = 'card';
  li.dataset.key = c.key;
  li.draggable = true;
  li.tabIndex = 0;
  li.style.animationDelay = (index * 50) + 'ms';
  li.setAttribute('aria-roledescription', 'Reorderable city');
  li.innerHTML = `
    <div class="grip" aria-hidden="true"></div>
    <button class="icon-btn" type="button" data-remove aria-label="Remove ${c.city}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
    </button>
    <div class="card-head">
      <div class="card-name">
        <h3>${c.city}</h3>
        <p>${c.country}</p>
      </div>
      <span class="phase" data-phase aria-hidden="true"></span>
    </div>
    <div class="card-body">
      ${faceSVG()}
      <div class="card-time">
        <div class="clock-line num">
          <span class="hm" data-hm>--:--</span>
          <span class="ss" data-ss>--</span>
          <span class="mer" data-mer hidden></span>
        </div>
        <p class="card-meta num"><span class="day" data-day></span><span class="sep">·</span><span data-delta></span></p>
      </div>
    </div>
    <span class="sr-only" data-sr></span>`;
  return li;
}

function renderGrid() {
  grid.innerHTML = '';
  if (!state.cities.length) {
    grid.innerHTML = '<li class="empty-grid">No cities yet. Search above to add one.</li>';
  } else {
    state.cities.forEach((c, i) => grid.appendChild(buildCard(c, i)));
  }
  el('hint').textContent = state.cities.length
    ? `${state.cities.length} ${state.cities.length === 1 ? 'city' : 'cities'} · ${CITIES.length} available to add`
    : '';
  tick();
}

function paintCards(now) {
  const localOff = offsetMinutes(LOCAL_TZ, now);
  const localYmd = zoneParts(LOCAL_TZ, now).ymd;

  for (const node of grid.children) {
    const c = state.cities.find(x => x.key === node.dataset.key);
    if (!c) continue;
    const p = zoneParts(c.tz, now);

    let hm = `${pad(p.hour)}:${pad(p.minute)}`;
    const mer = node.querySelector('[data-mer]');
    if (USES_12H) {
      const d = display12(p.hour);
      hm = `${d.h}:${pad(p.minute)}`;
      mer.hidden = false; mer.textContent = d.mer;
    }
    node.querySelector('[data-hm]').textContent = hm;
    node.querySelector('[data-ss]').textContent = pad(p.second);

    // Which calendar day is it there, relative to here?
    const diffDays = Math.round(
      (Date.parse(p.ymd + 'T00:00:00Z') - Date.parse(localYmd + 'T00:00:00Z')) / 86400000
    );
    const dayEl = node.querySelector('[data-day]');
    dayEl.textContent = diffDays === 0 ? 'Today' : diffDays > 0 ? 'Tomorrow' : 'Yesterday';
    dayEl.classList.toggle('shift', diffDays !== 0);

    const delta = offsetMinutes(c.tz, now) - localOff;
    node.querySelector('[data-delta]').textContent = formatDelta(delta);

    const night = isNight(p.hour);
    node.classList.toggle('is-night', night);
    const phase = node.querySelector('[data-phase]');
    if (phase.dataset.state !== String(night)) {
      phase.dataset.state = String(night);
      phase.innerHTML = night ? MOON : SUN;
    }

    // Analog hands.
    const sDeg = p.second * 6;
    const mDeg = p.minute * 6 + p.second * 0.1;
    const hDeg = (p.hour % 12) * 30 + p.minute * 0.5;
    node.querySelector('.sh').setAttribute('transform', `rotate(${sDeg})`);
    node.querySelector('.mh').setAttribute('transform', `rotate(${mDeg})`);
    node.querySelector('.hh').setAttribute('transform', `rotate(${hDeg})`);

    if (p.second === 0 || !node.dataset.said) {
      node.dataset.said = '1';
      node.querySelector('[data-sr]').textContent =
        `${c.city}, ${c.country}. ${hm}${USES_12H ? ' ' + display12(p.hour).mer : ''}, ${dayEl.textContent.toLowerCase()}, ${formatDelta(delta)}.`;
    }
  }
}

/* ---- add / remove / reorder ---- */
function addCity(c) {
  if (state.cities.some(x => x.key === c.key)) return;
  state.cities.push(c);
  renderGrid();
  requestAnimationFrame(() => {
    const node = grid.querySelector(`[data-key="${CSS.escape(c.key)}"]`);
    if (node) node.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}

function removeCity(key) {
  const i = state.cities.findIndex(c => c.key === key);
  if (i < 0) return;
  state.cities.splice(i, 1);
  renderGrid();
  const next = grid.children[Math.min(i, grid.children.length - 1)];
  if (next && next.tabIndex === 0) next.focus();
}

function moveCity(key, dir) {
  const i = state.cities.findIndex(c => c.key === key);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= state.cities.length) return;
  [state.cities[i], state.cities[j]] = [state.cities[j], state.cities[i]];
  renderGrid();
  const node = grid.querySelector(`[data-key="${CSS.escape(key)}"]`);
  if (node) node.focus();
}

grid.addEventListener('click', e => {
  const btn = e.target.closest('[data-remove]');
  if (btn) removeCity(btn.closest('.card').dataset.key);
});

grid.addEventListener('keydown', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    e.preventDefault();
    moveCity(card.dataset.key, e.key === 'ArrowRight' ? 1 : -1);
  } else if ((e.key === 'Delete' || e.key === 'Backspace') && e.target === card) {
    e.preventDefault();
    removeCity(card.dataset.key);
  }
});

let dragKey = null;
grid.addEventListener('dragstart', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  dragKey = card.dataset.key;
  card.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', dragKey);
});
grid.addEventListener('dragover', e => {
  if (!dragKey) return;
  e.preventDefault();
  const over = e.target.closest('.card');
  grid.querySelectorAll('.drop-target').forEach(n => n.classList.remove('drop-target'));
  if (over && over.dataset.key !== dragKey) over.classList.add('drop-target');
});
grid.addEventListener('drop', e => {
  e.preventDefault();
  const over = e.target.closest('.card');
  if (!dragKey || !over || over.dataset.key === dragKey) return;
  const from = state.cities.findIndex(c => c.key === dragKey);
  const to = state.cities.findIndex(c => c.key === over.dataset.key);
  const [moved] = state.cities.splice(from, 1);
  state.cities.splice(to, 0, moved);
  dragKey = null;
  renderGrid();
});
grid.addEventListener('dragend', () => {
  dragKey = null;
  grid.querySelectorAll('.dragging, .drop-target').forEach(n => n.classList.remove('dragging', 'drop-target'));
});

/* ============================================================
   6. Search
   ============================================================ */
const input = el('cityInput'), results = el('results');

function closeResults() {
  results.hidden = true;
  results.innerHTML = '';
  state.highlight = -1;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
}

function renderResults() {
  const q = fold(input.value.trim());
  if (!q) return closeResults();

  const chosen = new Set(state.cities.map(c => c.key));
  const hits = CITIES
    .filter(c => c.search.includes(q) && !chosen.has(c.key))
    .sort((a, b) => a.search.indexOf(q) - b.search.indexOf(q) || a.city.localeCompare(b.city))
    .slice(0, 8);

  results.hidden = false;
  input.setAttribute('aria-expanded', 'true');

  if (!hits.length) {
    results.innerHTML = '<li class="empty">Nothing matches that. Try a country, or a larger nearby city.</li>';
    state.highlight = -1;
    return;
  }

  const now = new Date();
  results.innerHTML = hits.map((c, i) => `
    <li role="option" id="opt${i}" aria-selected="${i === state.highlight}">
      <button type="button" data-key="${c.key}">
        <span>${c.city}</span><small>${c.country}</small>
        <span class="off num">${formatOffset(offsetMinutes(c.tz, now))}</span>
      </button>
    </li>`).join('');

  if (state.highlight >= hits.length) state.highlight = hits.length - 1;
  if (state.highlight >= 0) input.setAttribute('aria-activedescendant', 'opt' + state.highlight);
}

function pick(i) {
  const btn = results.querySelectorAll('button')[i];
  if (!btn) return;
  const c = CITIES.find(x => x.key === btn.dataset.key);
  if (c) addCity(c);
  input.value = '';
  closeResults();
}

input.addEventListener('input', () => { state.highlight = -1; renderResults(); });
input.addEventListener('keydown', e => {
  const n = results.querySelectorAll('button').length;
  if (e.key === 'ArrowDown' && n) {
    e.preventDefault(); state.highlight = (state.highlight + 1) % n; renderResults();
  } else if (e.key === 'ArrowUp' && n) {
    e.preventDefault(); state.highlight = (state.highlight - 1 + n) % n; renderResults();
  } else if (e.key === 'Enter') {
    e.preventDefault(); pick(state.highlight >= 0 ? state.highlight : 0);
  } else if (e.key === 'Escape') {
    input.value = ''; closeResults();
  }
});
results.addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const c = CITIES.find(x => x.key === btn.dataset.key);
  if (c) addCity(c);
  input.value = '';
  closeResults();
  input.focus();
});
document.addEventListener('click', e => {
  if (!e.target.closest('.finder')) closeResults();
});

/* ============================================================
   7. Calendar
   ============================================================ */
const WEEKDAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const monthYear = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' });
const fullDate  = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

function isoWeek(y, m, d) {
  const t = new Date(Date.UTC(y, m, d));
  const dayNum = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - dayNum);
  const jan1 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - jan1) / 86400000 + 1) / 7);
}
const isLeap = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const daysInYear = y => isLeap(y) ? 366 : 365;
function dayOfYear(y, m, d) {
  return Math.round((Date.UTC(y, m, d) - Date.UTC(y, 0, 1)) / 86400000) + 1;
}
function todayHere() {
  const p = zoneParts(LOCAL_TZ, new Date());
  return { year: p.year, month: p.month - 1, day: p.day };
}

function renderCalHead() {
  el('calHead').innerHTML =
    '<th class="wk-head" scope="col"><span class="sr-only">Week</span>Wk</th>' +
    WEEKDAYS.map(d => `<th scope="col" title="${d}day">${d}</th>`).join('');
}

function renderCalendar() {
  const today = todayHere();
  if (!state.view) state.view = { year: today.year, month: today.month };
  if (!state.picked) state.picked = { ...today };

  const { year, month } = state.view;
  el('calTitle').innerHTML =
    `<b>${monthYear.format(new Date(year, month, 1)).split(' ')[0]}</b> <span>${year}</span>`;

  // Monday-first grid, padded with the neighbouring months.
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - lead);

  let html = '';
  for (let w = 0; w < 6; w++) {
    const rowStart = new Date(start.getFullYear(), start.getMonth(), start.getDate() + w * 7);
    // Stop early if a sixth row would show nothing from this month.
    if (w === 5 && rowStart.getMonth() !== month && rowStart > new Date(year, month + 1, 0)) break;

    html += `<tr><td class="wk num">${isoWeek(rowStart.getFullYear(), rowStart.getMonth(), rowStart.getDate())}</td>`;
    for (let d = 0; d < 7; d++) {
      const cur = new Date(rowStart.getFullYear(), rowStart.getMonth(), rowStart.getDate() + d);
      const y = cur.getFullYear(), m = cur.getMonth(), day = cur.getDate();
      const cls = ['day-btn'];
      if (m !== month) cls.push('out');
      if (d >= 5) cls.push('weekend');
      const isToday = y === today.year && m === today.month && day === today.day;
      if (isToday) cls.push('today');
      const p = state.picked;
      if (p && y === p.year && m === p.month && day === p.day) cls.push('picked');
      html += `<td><button type="button" class="${cls.join(' ')}" data-y="${y}" data-m="${m}" data-d="${day}"
        aria-label="${fullDate.format(cur)}${isToday ? ', today' : ''}"
        aria-current="${isToday ? 'date' : 'false'}"><span class="num">${day}</span></button></td>`;
    }
    html += '</tr>';
  }
  el('calBody').innerHTML = html;
  renderDetail();
}

function renderDetail() {
  const p = state.picked;
  if (!p) return;
  const date = new Date(p.year, p.month, p.day);
  const today = todayHere();
  const doy = dayOfYear(p.year, p.month, p.day);
  const total = daysInYear(p.year);
  const left = total - doy;

  const diff = Math.round(
    (Date.UTC(p.year, p.month, p.day) - Date.UTC(today.year, today.month, today.day)) / 86400000
  );
  let rel;
  if (diff === 0) rel = 'Today';
  else if (diff === 1) rel = 'Tomorrow';
  else if (diff === -1) rel = 'Yesterday';
  else if (diff > 0) rel = `In ${diff} days`;
  else rel = `${Math.abs(diff)} days ago`;

  el('detail').innerHTML = `
    <h3>${fullDate.format(date)}</h3>
    <p class="rel">${rel}</p>
    <dl>
      <div class="row"><dt>Day of year</dt><dd class="num">${doy} of ${total}</dd></div>
      <div class="row"><dt>Days remaining</dt><dd class="num">${left}</dd></div>
      <div class="row"><dt>Week number</dt><dd class="num">W${isoWeek(p.year, p.month, p.day)}</dd></div>
      <div class="row"><dt>Quarter</dt><dd class="num">Q${Math.floor(p.month / 3) + 1}</dd></div>
    </dl>
    <div class="bar-track" role="img" aria-label="${Math.round(doy / total * 100)} per cent through ${p.year}">
      <div class="bar-fill" style="width:${(doy / total * 100).toFixed(1)}%"></div>
    </div>
    <p class="bar-label num">${(doy / total * 100).toFixed(1)}% through ${p.year}</p>`;
}

el('calBody').addEventListener('click', e => {
  const b = e.target.closest('.day-btn');
  if (!b) return;
  state.picked = { year: +b.dataset.y, month: +b.dataset.m, day: +b.dataset.d };
  if (state.picked.month !== state.view.month || state.picked.year !== state.view.year) {
    state.view = { year: state.picked.year, month: state.picked.month };
  }
  renderCalendar();
});

function shiftMonth(delta) {
  const d = new Date(state.view.year, state.view.month + delta, 1);
  state.view = { year: d.getFullYear(), month: d.getMonth() };
  renderCalendar();
}
el('prevMonth').addEventListener('click', () => shiftMonth(-1));
el('nextMonth').addEventListener('click', () => shiftMonth(1));
el('prevYear').addEventListener('click', () => shiftMonth(-12));
el('nextYear').addEventListener('click', () => shiftMonth(12));
el('todayBtn').addEventListener('click', () => {
  const t = todayHere();
  state.view = { year: t.year, month: t.month };
  state.picked = { ...t };
  renderCalendar();
});

/* ============================================================
   8. Theme
   ============================================================ */
el('themeBtn').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = state.theme;
  el('themeBtn').setAttribute('aria-pressed', String(state.theme === 'light'));
  el('themeLabel').textContent = state.theme === 'dark' ? 'Switch to light' : 'Switch to dark';
});

/* ============================================================
   9. One heartbeat for the whole page
   ============================================================ */
function tick() {
  const now = new Date();
  renderHero(now);
  paintCards(now);
}

function startClock() {
  tick();
  // Wait out the remainder of the current second so every clock on
  // the page flips together, on the second, from here on.
  setTimeout(() => {
    tick();
    setInterval(tick, 1000);
  }, 1000 - (Date.now() % 1000));
}

/* Coming back from a background tab: resync immediately. */
document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

renderCalHead();
renderGrid();
renderCalendar();
startClock();