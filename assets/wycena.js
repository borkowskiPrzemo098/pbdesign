/* PBDesign — kalkulator wyceny strony (bez serwera; zapytanie przez e-mail) */
(() => {
  const form = document.getElementById('calc');
  if (!form) return;
  const $ = (s) => document.getElementById(s);
  const zl = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' zł';
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  const TYPES = [
    { id: 'wiz', name: 'Wizytówka', desc: 'Jedna strona', base: 1490, incl: 1, max: 1, days: [5, 7] },
    { id: 'lp', name: 'Landing page', desc: 'Pod kampanię', base: 990, incl: 1, max: 1, days: [4, 6] },
    { id: 'firma', name: 'Strona firmowa', desc: 'Z podstronami', base: 2990, incl: 8, max: 20, days: [10, 15] },
    { id: 'premium', name: 'Strona Premium', desc: 'Animacje, wideo, blog', base: 5490, incl: 15, max: 25, days: [15, 20], inc: ['blog', 'en', 'cms', 'rez'] }
  ];
  const EXTRAS = [
    { id: 'rez', name: 'Rezerwacje lub umawianie wizyt', price: 490, days: 2 },
    { id: 'blog', name: 'Blog z pierwszymi 3 artykułami', price: 690, days: 3 },
    { id: 'en', name: 'Wersja angielska', price: 790, days: 3 },
    { id: 'cms', name: 'Panel do samodzielnej edycji treści', price: 490, days: 2 },
    { id: 'foto', name: 'Dobór i obróbka zdjęć', price: 390, days: 1 },
    { id: 'logo', name: 'Logo i kolorystyka firmy', price: 990, days: 4 },
    { id: 'gmb', name: 'Konfiguracja wizytówki Google', price: 290, days: 1 },
    { id: 'ga', name: 'Statystyki bez cookies', price: 190, days: 0 }
  ];
  const TERMS = [
    { id: 'std', name: 'Standardowy', desc: 'Według harmonogramu', mult: 1 },
    { id: 'fast', name: 'Ekspresowy', desc: 'Około 40% krócej, +25% do ceny', mult: 1.25, speed: 1.65 }
  ];
  const CARE = [
    { id: 'none', name: 'Bez opieki', desc: 'Przekazujemy stronę', price: 0 },
    { id: 'start', name: 'Start', desc: 'Hosting, SSL, kopie', price: 49 },
    { id: 'std', name: 'Standard', desc: '+ 2 zmiany miesięcznie', price: 99 },
    { id: 'pro', name: 'Pro', desc: '+ raport SEO i zmiany bez limitu', price: 199 }
  ];
  const st = { type: 'firma', pages: 5, extras: new Set(['gmb']), term: 'std', care: 'std' };

  const opt = (group, o, checked, multi) => `<label class="copt"><input type="${multi ? 'checkbox' : 'radio'}" name="${group}" value="${o.id}" ${checked ? 'checked' : ''}><span class="copt__b"><b>${esc(o.name)}</b>${o.desc ? `<small>${esc(o.desc)}</small>` : ''}${o.priceLabel ? `<em>${o.priceLabel}</em>` : ''}</span></label>`;
  $('cType').innerHTML = TYPES.map((t) => opt('type', { ...t, priceLabel: 'od ' + zl(t.base) }, t.id === st.type)).join('');
  $('cExtras').innerHTML = EXTRAS.map((x) => opt('extra', { ...x, priceLabel: '+' + zl(x.price) }, st.extras.has(x.id), true)).join('');
  $('cTerm').innerHTML = TERMS.map((t) => opt('term', t, t.id === st.term)).join('');
  $('cCare').innerHTML = CARE.map((c) => opt('care', { ...c, priceLabel: c.price ? zl(c.price) + '/mies.' : '' }, c.id === st.care)).join('');

  const calc = () => {
    const t = TYPES.find((x) => x.id === st.type);
    const range = $('cPages');
    range.max = t.max; range.disabled = t.max === 1;
    if (st.pages > t.max) st.pages = t.max;
    if (t.max === 1) st.pages = 1;
    range.value = st.pages; $('cPagesOut').textContent = st.pages;
    const extraPages = Math.max(0, st.pages - t.incl);
    $('cPagesInfo').textContent = t.max === 1 ? 'Ten rodzaj strony to jedna rozbudowana strona z sekcjami.' : `W cenie ${t.incl} podstron. Każda kolejna: 290 zł.`;
    const lines = [[t.name, t.base]];
    if (extraPages) lines.push([`Dodatkowe podstrony × ${extraPages}`, extraPages * 290]);
    const inc = (x) => (t.inc || []).includes(x.id);
    EXTRAS.filter((x) => st.extras.has(x.id) && !inc(x)).forEach((x) => lines.push([x.name, x.price]));
    form.querySelectorAll('input[name=extra]').forEach((el) => { const x = EXTRAS.find((e) => e.id === el.value); const em = el.parentElement.querySelector('em'); em.textContent = inc(x) ? 'w cenie' : '+' + zl(x.price); el.disabled = inc(x); el.parentElement.classList.toggle('is-inc', inc(x)); });
    let sum = lines.reduce((a, [, v]) => a + v, 0);
    const term = TERMS.find((x) => x.id === st.term);
    if (term.mult > 1) { lines.push(['Termin ekspresowy (+25%)', sum * 0.25]); sum *= term.mult; }
    const days = t.days.map((d) => d + extraPages + EXTRAS.filter((x) => st.extras.has(x.id) && !inc(x)).reduce((a, x) => a + x.days, 0)).map((d) => Math.ceil(d / (term.speed || 1)));
    const care = CARE.find((x) => x.id === st.care);
    $('sPrice').textContent = `${zl(sum)} – ${zl(Math.round(sum * 1.15 / 10) * 10)}`;
    $('sPrice2').textContent = $('sPrice').textContent;
    $('sLines').innerHTML = lines.map(([n, v]) => `<li><span>${esc(n)}</span><b>${zl(v)}</b></li>`).join('');
    $('sTime').textContent = `${days[0]}–${days[1]} dni rob.`;
    $('sCare').textContent = care.price ? `${care.name}, ${zl(care.price)}/mies.` : 'bez opieki';
    return { t, lines, sum, days, care, term };
  };

  form.addEventListener('change', (e) => {
    const el = e.target;
    if (el.name === 'type') st.type = el.value;
    if (el.name === 'term') st.term = el.value;
    if (el.name === 'care') st.care = el.value;
    if (el.name === 'extra') el.checked ? st.extras.add(el.value) : st.extras.delete(el.value);
    calc();
  });
  $('cPages').addEventListener('input', (e) => { st.pages = +e.target.value; calc(); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const err = $('sErr'), name = $('fName').value.trim(), mail = $('fMail').value.trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(mail)) { err.hidden = false; err.textContent = !name ? 'Podaj imię, żebyśmy wiedzieli, jak się do Ciebie zwracać.' : 'Podaj poprawny adres e-mail, na który wyślemy wycenę.'; (!name ? $('fName') : $('fMail')).focus(); return; }
    err.hidden = true;
    const r = calc();
    const body = [
      `Dzień dobry, proszę o wycenę strony.`, '',
      `Rodzaj: ${r.t.name}`, `Podstrony: ${st.pages}`,
      `Dodatki: ${EXTRAS.filter((x) => st.extras.has(x.id)).map((x) => x.name).join(', ') || 'brak'}`,
      `Termin: ${r.term.name}`, `Opieka: ${r.care.name}`,
      `Orientacyjna cena z kalkulatora: ${$('sPrice').textContent} netto`, '',
      `Imię: ${name}`, `Firma: ${$('fFirm').value}`, `E-mail: ${mail}`, `Telefon: ${$('fTel').value}`,
      `Obecna strona / wizytówka: ${$('fUrl').value}`, '', $('fMsg').value
    ].join('\n');
    location.href = `mailto:pborkowski0301@gmail.com?subject=${encodeURIComponent('Wycena strony: ' + r.t.name)}&body=${encodeURIComponent(body)}`;
  });
  calc();
})();
