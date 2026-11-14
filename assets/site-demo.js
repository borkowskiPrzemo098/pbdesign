/* PBDesign — realizacje: przykładowe projekty z podglądem na żywo */
(() => {
  const app = document.getElementById('siteApp');
  const D = window.PBDesign_DEMO;
  if (!app || !D) return;
  const $ = (s) => app.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const len = (s) => [...String(s)].length;
  const cnt = (s, max) => `<span class="cc ${len(s) > max ? 'cc--bad' : ''}">${len(s)}/${max}</span>`;
  const H = (t, s) => `<h4 class="ob__h">${t}${s ? ` <small>${s}</small>` : ''}</h4>`;

  const fl = document.createElement('link'); fl.rel = 'stylesheet';
  fl.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Newsreader:opsz,wght@6..72,600;6..72,700&display=swap';
  document.head.appendChild(fl);

  let cur = D[0], tab = 'preview', theme = 0, device = 'desktop';

  const bizCard = (b) => `
    <div class="pc__img"><img src="${b.photo}" alt="${esc(b.name)}" width="1200" height="800"></div>
    <p class="pc__cat">${esc(b.type)} · ${esc(b.city)}</p>
    <h3>${esc(b.name)}</h3>
    <p class="pc__h">Cel strony</p><p class="pc__aud">${esc(b.brief.goal)}</p>
    <p class="pc__h">Zakres</p><ul class="pc__ben"><li>Strona główna i ${b.structure.length - 1} sekcji</li><li>Teksty i SEO lokalne</li><li>${b.themes.length} warianty projektu</li></ul>
    <p class="pc__src">Projekt koncepcyjny · ${esc(b.domain)}</p>`;

  const site = (b, t) => {
    const c = b.copy;
    const font = (n) => n === 'Satoshi' ? 'var(--f)' : `"${n}", Georgia, serif`;
    return `<div class="ws" style="--wb:${t.bg};--wi:${t.ink};--wa:${t.accent};--wsft:${t.soft};--wh:${font(t.head)};--wr:${t.r}">
      <div class="ws__nav"><b>${esc(b.name)}</b><span class="ws__links"><span>Oferta</span><span>O nas</span><span>Kontakt</span></span><em>${esc(c.cta1)}</em></div>
      <div class="ws__hero">
        <div class="ws__copy"><p class="ws__h">${esc(c.h1)}</p><p class="ws__p">${esc(c.lead)}</p>
          <div class="ws__cta"><span>${esc(c.cta1)}</span><span class="ws__ghost">${esc(c.cta2)}</span></div></div>
        <img src="${b.photo}" alt="" width="1200" height="800">
      </div>
      <div class="ws__stats">${c.stats.map(([v, l]) => `<div><b>${esc(v.replace(' ★', ' / 5'))}</b><small>${esc(l)}</small></div>`).join('')}</div>
      <div class="ws__sec">${c.sections.map(([h, p]) => `<article><p class="ws__sh">${esc(h)}</p><p>${esc(p)}</p></article>`).join('')}</div>
      <div class="ws__band"><p class="ws__sh">${esc(b.brief.cta)}</p><span>${esc(c.cta1)}</span></div>
      <div class="ws__foot"><b>${esc(b.name)}</b><small>${esc(b.facts.find((f) => f.label === 'Adres' || f.label === 'Obszar')?.value || '')}</small></div>
    </div>`;
  };

  const V = {
    preview: (b) => { const t = b.themes[theme]; return `
      <div class="ob__bar"><h3>Strona główna</h3><div class="ob__acts"><div class="seg" role="group" aria-label="Urządzenie"><button type="button" data-dev="desktop" aria-pressed="${device === 'desktop'}">Komputer</button><button type="button" data-dev="mobile" aria-pressed="${device === 'mobile'}">Telefon</button></div></div></div>
      <div class="themes" role="group" aria-label="Wariant projektu">${b.themes.map((x, i) => `<button type="button" class="theme ${i === theme ? 'is-on' : ''}" data-theme="${i}"><span class="theme__sw"><i style="background:${x.bg}"></i><i style="background:${x.ink}"></i><i style="background:${x.accent}"></i></span><b>${esc(x.name)}</b><small>${esc(x.head)} + ${esc(x.body)}</small></button>`).join('')}</div>
      <p class="ob__lead"><b>Założenie wariantu:</b> ${esc(t.why)}</p>
      <div class="wframe wframe--${device}"><div class="browser__bar"><i></i><i></i><i></i><span>${esc(b.domain)}</span></div><div class="wframe__in">${site(b, t)}</div></div>`; },
    about: (b) => { const r = b.brief; return `
      <div class="ob__bar"><h3>O projekcie</h3></div>
      <div class="brief">
        <div class="brief__hero"><p class="bvoice__k">Główny przekaz strony</p><p class="brief__promise">${esc(r.promise[0])}</p>
          <dl class="brief__meta"><div><dt>Cel</dt><dd>${esc(r.goal)}</dd></div><div><dt>Dla kogo</dt><dd>${esc(r.persona)}</dd></div><div><dt>Ton tekstów</dt><dd>${esc(r.tone)}</dd></div></dl></div>
        <section class="brief__box"><h4>Na czym opieramy zaufanie</h4><ul class="brief__list">${r.proofs.map(([t]) => `<li><span>${esc(t)}</span></li>`).join('')}</ul></section>
        <section class="brief__box"><h4>Odpowiedzi na wątpliwości klientów</h4>${r.objections.map(([o, a]) => `<p class="brief__obj"><b>${esc(o)}</b><span>→ ${esc(a)}</span></p>`).join('')}</section>
        <section class="brief__box brief__box--wide"><h4>Główny przycisk na stronie</h4><p><span class="mail__cta">${esc(r.cta)}</span></p></section>
      </div>`; },
    structure: (b) => `
      <div class="ob__bar"><h3>Układ strony głównej</h3></div>
      <p class="ob__lead">Kolejność sekcji prowadzi odwiedzającego od obietnicy, przez dowody, do kontaktu.</p>
      <ol class="smap">${b.structure.map(([h, p], i) => `<li><span class="smap__n">${i + 1}</span><div><b>${esc(h)}</b><p>${esc(p)}</p></div></li>`).join('')}</ol>`,
    seo: (b) => { const s = b.seo; return `
      <div class="ob__bar"><h3>SEO i widoczność w Google</h3></div>
      <div class="seo"><p class="seo__h">Podgląd w Google</p><p class="seo__t">${esc(s.title)}</p><p class="seo__u">${esc(b.domain)}</p><p class="seo__d">${esc(s.desc)}</p><p class="seo__c">Tytuł ${cnt(s.title, 70)} · Opis ${cnt(s.desc, 160)}</p></div>
      <div class="kw"><div>${H('Frazy, na które celujemy')}<p class="tags">${s.keywords.map((k) => `<span>${esc(k)}</span>`).join('')}</p></div>
      <div>${H('Co ustawiamy', 'dla Google i wyszukiwarek AI')}<ul class="lst"><li>Dane strukturalne: <b>${esc(s.schema)}</b></li><li>Adres, godziny i telefon zgodne z wizytówką Google</li><li>Średnia ocen i liczba opinii</li><li>Mapa witryny i plik robots.txt</li></ul></div></div>`; }
  };

  const render = () => { $('#sitePanel').innerHTML = V[tab](cur); app.querySelectorAll('.otabs [role=tab]').forEach((t) => t.setAttribute('aria-selected', t.dataset.tab === tab)); };
  const show = (b) => { cur = b; theme = 0; $('#siteBiz').innerHTML = bizCard(b); app.querySelectorAll('.dchip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.s === b.id)); render(); };
  app.addEventListener('click', (e) => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.s) { tab = 'preview'; show(D.find((b) => b.id === t.dataset.s)); return; }
    if (t.dataset.tab) { tab = t.dataset.tab; render(); return; }
    if (t.dataset.theme) { theme = +t.dataset.theme; render(); return; }
    if (t.dataset.dev) { device = t.dataset.dev; render(); }
  });
  show(D.find((b) => location.hash === '#' + b.id) || cur);
})();
