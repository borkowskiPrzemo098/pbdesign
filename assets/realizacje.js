/* PBDesign — realizacje: podgląd stron bez wychodzenia z serwisu */
(() => {
  const list = document.getElementById('works');
  const dlg = document.getElementById('viewer');
  if (!list || !dlg) return;
  const W = [
    { id: 'ambra', name: 'AMBRA', type: 'Restauracja fine dining', tags: ['Menu degustacyjne', 'Rezerwacje', 'Galeria'] },
    { id: 'nikola', name: 'Salon Piękności Nikola', type: 'Salon kosmetyczny', tags: ['Cennik usług', 'Rezerwacja online', 'Opinie'] },
    { id: 'porcelana', name: 'PORCELANA', type: 'Klinika stomatologiczna', tags: ['Zabiegi i ceny', 'Proces leczenia', 'Zespół'] },
    { id: 'sygnatura', name: 'SYGNATURA', type: 'Kancelaria prawna', tags: ['Specjalizacje', 'Proces sprawy', 'Kontakt'] },
    { id: 'barber', name: 'SFM Barbershop', type: 'Barbershop', tags: ['Usługi', 'Cennik', 'Rezerwacje'] },
    { id: 'trzask', name: 'TRZASK', type: 'Palarnia kawy', tags: ['Oferta kaw', 'Sklep z ziarnami', 'Subskrypcja'] }
  ];
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  list.innerHTML = W.map((w, i) => `
    <button type="button" class="work" data-i="${i}" aria-label="Podgląd strony: ${esc(w.name)}">
      <span class="work__shot"><img src="assets/real/${w.id}-t.jpg" alt="" width="720" height="480" loading="lazy"><span class="work__open"><svg class="ic" aria-hidden="true"><use href="#i-seo"/></svg>Zobacz podgląd</span></span>
      <span class="work__body"><b>${esc(w.name)}</b><small>${esc(w.type)}</small><span class="work__tags">${w.tags.map((t) => `<em>${esc(t)}</em>`).join('')}</span></span>
    </button>`).join('');

  let cur = 0, dev = 'd';
  const $ = (id) => document.getElementById(id);
  const show = () => {
    const w = W[cur];
    $('vTitle').textContent = w.name; $('vType').textContent = w.type; $('vBar').textContent = w.name;
    const img = $('vImg'); img.alt = `Podgląd strony ${w.name} w wersji na ${dev === 'd' ? 'komputer' : 'telefon'}`;
    img.src = `assets/real/${w.id}-${dev}.jpg`;
    $('vFrame').className = 'viewer__frame viewer__frame--' + dev;
    $('vScroll').scrollTop = 0;
    dlg.querySelectorAll('[data-vdev]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.vdev === dev));
  };
  list.addEventListener('click', (e) => { const b = e.target.closest('.work'); if (!b) return; cur = +b.dataset.i; show(); dlg.showModal(); });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) return dlg.close();
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.vdev) { dev = b.dataset.vdev; show(); }
    if (b.dataset.vgo) { cur = (cur + +b.dataset.vgo + W.length) % W.length; show(); }
    if (b.hasAttribute('data-vclose')) dlg.close();
  });
  dlg.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { cur = (cur + 1) % W.length; show(); } if (e.key === 'ArrowLeft') { cur = (cur - 1 + W.length) % W.length; show(); } });
})();
