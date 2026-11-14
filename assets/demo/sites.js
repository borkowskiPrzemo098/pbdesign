/* FASADA demo — 3 fikcyjne firmy. Każdy tekst ma odwołania do faktów F.. */
window.FASADA_DEMO = [
  {
    id: 'kawiarnia', icon: 'i-cup', photo: 'assets/biz-kawiarnia.jpg',
    src: 'Wizytówka Google: Kawowy Kąt, Poznań', domain: 'kawowykat.pl',
    name: 'Kawowy Kąt', type: 'Kawiarnia specialty', city: 'Poznań',
    facts: [
      { id: 'f1', label: 'Nazwa', value: 'Kawowy Kąt', src: 'Wizytówka Google' },
      { id: 'f2', label: 'Adres', value: 'ul. Kraszewskiego 12, Poznań (Jeżyce)', src: 'Wizytówka Google' },
      { id: 'f3', label: 'Godziny', value: 'codziennie 7:30–19:00', src: 'Wizytówka Google' },
      { id: 'f4', label: 'Telefon', value: '+48 600 100 200', src: 'Wizytówka Google' },
      { id: 'f5', label: 'Kawa', value: 'ziarna z polskich palarni, zmieniane co miesiąc', src: 'Instagram, opis profilu' },
      { id: 'f6', label: 'Metody', value: 'espresso, drip, aeropress', src: 'Menu (zdjęcie na wizytówce)' },
      { id: 'f7', label: 'Opinie', value: '4,8 / 5 z 312 opinii', src: 'Wizytówka Google' },
      { id: 'f8', label: 'Śniadania', value: 'do 13:00', src: 'Menu' },
      { id: 'f9', label: 'Ciasta', value: 'z własnej pracowni', src: 'Opinie klientów (powtarza się 27 razy)' },
      { id: 'f10', label: 'Udogodnienia', value: 'Wi-Fi, przyjazne psom, ogródek latem', src: 'Wizytówka Google, atrybuty' },
      { id: 'f11', label: 'Od kiedy', value: '2019', src: 'Wywiad o firmie' },
      { id: 'f12', label: 'Ziarna na wynos', value: 'sprzedaż paczek 250 g', src: 'Instagram' }
    ],
    missing: ['Ceny w menu (zdjęcie menu jest nieczytelne)', 'Zdjęcia zespołu', 'Czy przyjmujecie rezerwacje grup'],
    brief: {
      persona: 'Mieszkańcy Jeżyc i osoby pracujące zdalnie, 25–45 lat, szukają dobrej kawy i miejsca na spokojny poranek',
      goal: 'Przyciągnąć nowych gości z Google Maps i wyszukiwań „kawiarnia Jeżyce”',
      promise: ['Kawa z polskich palarni, parzona przy Tobie', 'f5,f6'],
      proofs: [['4,8 z 312 opinii w Google', 'f7'], ['Ciasta z własnej pracowni', 'f9'], ['Otwarte codziennie od 7:30', 'f3']],
      objections: [['„Czy znajdę miejsce do pracy?”', 'Wi-Fi i spokojne poranki', 'f10'], ['„Czy mogę przyjść z psem?”', 'Tak, kawiarnia jest przyjazna psom', 'f10']],
      cta: 'Zobacz menu i jak dojechać',
      tone: 'Ciepły, na „Ty”, krótkie zdania, bez kawowego żargonu'
    },
    structure: [
      ['Hero', 'Obietnica, godziny otwarcia i przycisk „Zobacz menu”', 'f3,f5'],
      ['Nasza kawa', 'Polskie palarnie, metody parzenia, ziarna na wynos', 'f5,f6,f12'],
      ['Menu', 'Kawa, śniadania do 13:00, ciasta z własnej pracowni', 'f8,f9'],
      ['Opinie', '3 cytaty z Google i średnia ocen', 'f7'],
      ['Odwiedź nas', 'Mapa, adres, godziny, udogodnienia', 'f2,f3,f10'],
      ['Stopka', 'Telefon, Instagram, dane firmy', 'f4']
    ],
    copy: {
      kicker: 'Specialty coffee · Poznań, Jeżyce',
      h1: 'Kawa z polskich palarni, parzona przy Tobie.', h1f: 'f5,f6',
      lead: 'Otwarte codziennie od 7:30. Śniadania do 13:00, ciasta z własnej pracowni i spokojne miejsce na poranną kawę.', leadf: 'f3,f8,f9',
      cta1: 'Zobacz menu', cta2: 'Jak dojechać',
      stats: [['4,8 ★', '312 opinii w Google', 'f7'], ['7:30–19:00', 'codziennie', 'f3'], ['od 2019', 'na Jeżycach', 'f11']],
      sections: [
        ['Nasza kawa', 'Co miesiąc wybieramy ziarna z innej polskiej palarni. Parzymy je jako espresso, drip albo w aeropressie. Ulubione ziarna kupisz też na wynos w paczkach 250 g.', 'f5,f6,f12'],
        ['Śniadania i ciasta', 'Śniadania podajemy do 13:00. Ciasta pieczemy we własnej pracowni, a goście najczęściej wspominają je w opiniach.', 'f8,f9'],
        ['Odwiedź nas', 'ul. Kraszewskiego 12 na Jeżycach. Mamy Wi-Fi, ogródek latem, a psy są u nas mile widziane.', 'f2,f10']
      ],
      services: [['Espresso i kawy mleczne', 'f6'], ['Drip i aeropress', 'f6'], ['Śniadania do 13:00', 'f8'], ['Ciasta z własnej pracowni', 'f9']],
      faq: [['Czy można pracować w kawiarni?', 'Tak, mamy Wi-Fi.', 'f10'], ['Czy można przyjść z psem?', 'Tak, psy są mile widziane.', 'f10'], ['Do której są śniadania?', 'Do 13:00.', 'f8']]
    },
    themes: [
      { id: 'cieply', name: 'Ciepły i rzemieślniczy', why: 'Drewno i zieleń ze zdjęć lokalu, szeryfowe nagłówki jak na tablicy menu.', bg: '#F7F1E8', ink: '#2A1F17', accent: '#2F5D46', soft: '#E9DFCF', head: 'Newsreader', body: 'Satoshi', r: '10px' },
      { id: 'nowoczesny', name: 'Nowoczesny i jasny', why: 'Dużo światła, czysty układ dla osób, które szukają miejsca do pracy.', bg: '#FBFBFD', ink: '#14161A', accent: '#0E7C66', soft: '#EAF8F2', head: 'Satoshi', body: 'Satoshi', r: '22px' },
      { id: 'odwazny', name: 'Odważny i miejski', why: 'Mocna typografia i kontrast dla młodszych gości z Instagrama.', bg: '#141210', ink: '#F5EFE6', accent: '#E8A04B', soft: '#26221E', head: 'Bricolage Grotesque', body: 'Satoshi', r: '4px' }
    ],
    seo: { title: 'Kawowy Kąt — kawiarnia specialty na Jeżycach, Poznań', desc: 'Kawa z polskich palarni, śniadania do 13:00 i ciasta z własnej pracowni. Otwarte codziennie 7:30–19:00, ul. Kraszewskiego 12, Poznań.', keywords: ['kawiarnia Jeżyce', 'kawiarnia Poznań', 'specialty coffee Poznań', 'śniadania Jeżyce'], schema: 'CafeOrCoffeeShop' }
  },
  {
    id: 'fizjo', icon: 'i-people', photo: 'assets/biz-fizjo.jpg',
    src: 'Stara strona: gabinetprosto-demo.pl', domain: 'gabinetprosto.pl',
    name: 'Gabinet Prosto', type: 'Fizjoterapia', city: 'Gdańsk',
    facts: [
      { id: 'f1', label: 'Nazwa', value: 'Gabinet Fizjoterapii Prosto', src: 'Stara strona' },
      { id: 'f2', label: 'Adres', value: 'ul. Grunwaldzka 48/2, Gdańsk Wrzeszcz', src: 'Wizytówka Google' },
      { id: 'f3', label: 'Godziny', value: 'pon.–pt. 8:00–20:00, sob. 9:00–14:00', src: 'Wizytówka Google' },
      { id: 'f4', label: 'Zespół', value: '3 fizjoterapeutów', src: 'Stara strona, zakładka Zespół' },
      { id: 'f5', label: 'Specjalizacje', value: 'kręgosłup, urazy sportowe, rehabilitacja po zabiegach', src: 'Stara strona' },
      { id: 'f6', label: 'Pierwsza wizyta', value: '60 min, diagnostyka i plan terapii', src: 'Stara strona, cennik' },
      { id: 'f7', label: 'Cena pierwszej wizyty', value: '220 zł', src: 'Stara strona, cennik' },
      { id: 'f8', label: 'Opinie', value: '5,0 / 5 z 148 opinii', src: 'Wizytówka Google' },
      { id: 'f9', label: 'Rezerwacja', value: 'online przez Booksy', src: 'Link na wizytówce' },
      { id: 'f10', label: 'Kwalifikacje', value: 'prawo wykonywania zawodu fizjoterapeuty (KIF)', src: 'Wywiad o firmie' },
      { id: 'f11', label: 'Dojazd', value: '2 min od przystanku tramwajowego Miszewskiego', src: 'Wywiad o firmie' },
      { id: 'f12', label: 'Parking', value: 'bezpłatny dla pacjentów', src: 'Opinie klientów' }
    ],
    missing: ['Zdjęcia i imiona fizjoterapeutów', 'Czy współpracujecie z NFZ (zakładamy: nie)', 'Cennik kolejnych wizyt'],
    brief: {
      persona: 'Osoby 30–60 lat z bólem kręgosłupa lub po urazie; często pracują przy biurku albo uprawiają sport amatorsko',
      goal: 'Więcej rezerwacji pierwszej wizyty online',
      promise: ['Najpierw diagnoza, potem plan, który rozumiesz', 'f6'],
      proofs: [['5,0 z 148 opinii', 'f8'], ['Pierwsza wizyta 60 min z diagnostyką', 'f6'], ['3 fizjoterapeutów z prawem wykonywania zawodu', 'f4,f10']],
      objections: [['„Ile to kosztuje?”', 'Pierwsza wizyta 220 zł, cena podana wprost', 'f7'], ['„Nie mam czasu”', 'Otwarte do 20:00 i w soboty, rezerwacja online', 'f3,f9']],
      cta: 'Umów pierwszą wizytę',
      tone: 'Spokojny, ekspercki, ale bez medycznego żargonu; na „Ty”'
    },
    structure: [
      ['Hero', 'Obietnica, cena pierwszej wizyty i przycisk rezerwacji', 'f6,f7,f9'],
      ['Z czym pomagamy', 'Kręgosłup, urazy sportowe, rehabilitacja po zabiegach', 'f5'],
      ['Jak wygląda pierwsza wizyta', '3 kroki: wywiad, badanie, plan terapii', 'f6'],
      ['Zespół', '3 fizjoterapeutów (zdjęcia do uzupełnienia)', 'f4,f10'],
      ['Opinie', 'Średnia 5,0 i cytaty pacjentów', 'f8'],
      ['Cennik i kontakt', 'Cena, godziny, dojazd, parking', 'f2,f3,f7,f11,f12']
    ],
    copy: {
      kicker: 'Fizjoterapia · Gdańsk Wrzeszcz',
      h1: 'Najpierw diagnoza. Potem plan, który rozumiesz.', h1f: 'f6',
      lead: 'Pierwsza wizyta trwa 60 minut: badamy, wyjaśniamy przyczynę bólu i układamy plan terapii. Otwarte do 20:00 i w soboty.', leadf: 'f3,f6',
      cta1: 'Umów pierwszą wizytę', cta2: 'Zobacz cennik',
      stats: [['5,0 ★', '148 opinii w Google', 'f8'], ['220 zł', 'pierwsza wizyta, 60 min', 'f6,f7'], ['3', 'fizjoterapeutów', 'f4']],
      sections: [
        ['Z czym pomagamy', 'Bóle kręgosłupa, urazy sportowe i rehabilitacja po zabiegach. Każdą terapię zaczynamy od dokładnego badania.', 'f5,f6'],
        ['Pierwsza wizyta', 'Rozmawiamy, badamy i wyjaśniamy, skąd bierze się problem. Wychodzisz z planem terapii i ćwiczeniami do domu.', 'f6'],
        ['Jak do nas trafić', 'ul. Grunwaldzka 48/2, 2 minuty od przystanku Miszewskiego. Dla pacjentów parking jest bezpłatny.', 'f2,f11,f12']
      ],
      services: [['Terapia kręgosłupa', 'f5'], ['Urazy sportowe', 'f5'], ['Rehabilitacja po zabiegach', 'f5'], ['Pierwsza wizyta z diagnostyką', 'f6']],
      faq: [['Ile kosztuje pierwsza wizyta?', '220 zł, trwa 60 minut.', 'f7,f6'], ['Jak się umówić?', 'Online przez Booksy albo telefonicznie.', 'f9'], ['Czy jest parking?', 'Tak, bezpłatny dla pacjentów.', 'f12']]
    },
    themes: [
      { id: 'spokojny', name: 'Spokojny i kliniczny', why: 'Biel, jasne drewno i zieleń ze zdjęć gabinetu budują zaufanie.', bg: '#F8FAF8', ink: '#16201C', accent: '#2E6B57', soft: '#E3EEE9', head: 'Satoshi', body: 'Satoshi', r: '18px' },
      { id: 'ekspercki', name: 'Ekspercki i elegancki', why: 'Szeryfowe nagłówki podkreślają wiedzę i spokój.', bg: '#FFFFFF', ink: '#1B2230', accent: '#2C4C7A', soft: '#E6ECF5', head: 'Newsreader', body: 'Satoshi', r: '8px' },
      { id: 'sportowy', name: 'Dynamiczny i sportowy', why: 'Dla pacjentów po urazach sportowych: energia i kontrast.', bg: '#0F1A17', ink: '#EEF5F1', accent: '#7BE0B0', soft: '#1C2B26', head: 'Bricolage Grotesque', body: 'Satoshi', r: '14px' }
    ],
    seo: { title: 'Fizjoterapia Gdańsk Wrzeszcz — Gabinet Prosto | pierwsza wizyta 60 min', desc: 'Fizjoterapia kręgosłupa, urazów sportowych i rehabilitacja po zabiegach. Pierwsza wizyta 60 min z diagnostyką, 220 zł. Otwarte do 20:00 i w soboty.', keywords: ['fizjoterapia Gdańsk', 'fizjoterapeuta Wrzeszcz', 'rehabilitacja kręgosłupa Gdańsk', 'urazy sportowe Gdańsk'], schema: 'Physiotherapy' }
  },
  {
    id: 'remonty', icon: 'i-build', photo: 'assets/biz-remonty.jpg',
    src: 'Profil Facebook: Remonty Dąbek', domain: 'remontydabek.pl',
    name: 'Remonty Dąbek', type: 'Firma remontowa', city: 'Wrocław',
    facts: [
      { id: 'f1', label: 'Nazwa', value: 'Remonty Dąbek', src: 'Profil Facebook' },
      { id: 'f2', label: 'Obszar', value: 'Wrocław i okolice do 30 km', src: 'Profil Facebook, informacje' },
      { id: 'f3', label: 'Zakres', value: 'remonty mieszkań pod klucz, łazienki, wykończenia', src: 'Profil Facebook' },
      { id: 'f4', label: 'Doświadczenie', value: 'od 2012 roku', src: 'Wywiad o firmie' },
      { id: 'f5', label: 'Realizacje', value: 'ponad 180 mieszkań', src: 'Wywiad o firmie' },
      { id: 'f6', label: 'Gwarancja', value: '24 miesiące na wykonane prace', src: 'Wywiad o firmie' },
      { id: 'f7', label: 'Wycena', value: 'bezpłatna, po oględzinach', src: 'Profil Facebook' },
      { id: 'f8', label: 'Opinie', value: '4,9 / 5 z 86 rekomendacji', src: 'Profil Facebook' },
      { id: 'f9', label: 'Ekipa', value: 'własna, 6 osób', src: 'Wywiad o firmie' },
      { id: 'f10', label: 'Harmonogram', value: 'pisemny, z etapami i terminami', src: 'Wywiad o firmie' },
      { id: 'f11', label: 'Kontakt', value: '+48 700 300 400', src: 'Profil Facebook' },
      { id: 'f12', label: 'Zdjęcia', value: '40 zdjęć realizacji przed i po', src: 'Profil Facebook, albumy' }
    ],
    missing: ['Przykładowe ceny lub widełki za m²', 'Czy wystawiacie fakturę VAT 8%', 'Nazwiska osób w ekipie'],
    brief: {
      persona: 'Właściciele nowych lub kupionych mieszkań we Wrocławiu, 28–50 lat, boją się opóźnień i ukrytych kosztów',
      goal: 'Zapytania o bezpłatną wycenę z formularza i telefonu',
      promise: ['Remont pod klucz z harmonogramem na piśmie', 'f3,f10'],
      proofs: [['Ponad 180 wyremontowanych mieszkań', 'f5'], ['24 miesiące gwarancji', 'f6'], ['4,9 z 86 rekomendacji', 'f8']],
      objections: [['„Czy zdążycie na czas?”', 'Pisemny harmonogram z etapami i terminami', 'f10'], ['„Ile to będzie kosztować?”', 'Bezpłatna wycena po oględzinach', 'f7']],
      cta: 'Zamów bezpłatną wycenę',
      tone: 'Konkretny, rzeczowy, budzący zaufanie; na „Ty”'
    },
    structure: [
      ['Hero', 'Obietnica, gwarancja i przycisk wyceny', 'f3,f6,f7'],
      ['Zakres prac', 'Mieszkania pod klucz, łazienki, wykończenia', 'f3'],
      ['Jak pracujemy', 'Oględziny, wycena, harmonogram, odbiór', 'f7,f10'],
      ['Realizacje', 'Galeria przed i po (40 zdjęć z Facebooka)', 'f12'],
      ['Opinie', 'Rekomendacje klientów', 'f8'],
      ['Wycena', 'Formularz, telefon, obszar działania', 'f2,f11']
    ],
    copy: {
      kicker: 'Remonty mieszkań · Wrocław i okolice',
      h1: 'Remont pod klucz z harmonogramem na piśmie.', h1f: 'f3,f10',
      lead: 'Od 2012 roku wyremontowaliśmy ponad 180 mieszkań we Wrocławiu. Pracuje u nas własna ekipa, a na prace dajemy 24 miesiące gwarancji.', leadf: 'f4,f5,f6,f9',
      cta1: 'Zamów bezpłatną wycenę', cta2: 'Zobacz realizacje',
      stats: [['180+', 'wyremontowanych mieszkań', 'f5'], ['24 mies.', 'gwarancji na prace', 'f6'], ['4,9 ★', '86 rekomendacji', 'f8']],
      sections: [
        ['Zakres prac', 'Remonty mieszkań pod klucz, łazienki i wykończenia. Zajmujemy się całością, od skucia płytek po montaż oświetlenia.', 'f3'],
        ['Jak pracujemy', 'Przyjeżdżamy na oględziny i przygotowujemy bezpłatną wycenę. Przed startem dostajesz harmonogram z etapami i terminami.', 'f7,f10'],
        ['Gdzie działamy', 'Wrocław i okolice do 30 km. Zadzwoń albo wypełnij formularz, oddzwonimy z terminem oględzin.', 'f2,f11']
      ],
      services: [['Remont mieszkania pod klucz', 'f3'], ['Łazienki', 'f3'], ['Wykończenia', 'f3'], ['Bezpłatna wycena', 'f7']],
      faq: [['Czy wycena jest płatna?', 'Nie, jest bezpłatna po oględzinach.', 'f7'], ['Jaka jest gwarancja?', '24 miesiące na wykonane prace.', 'f6'], ['Gdzie działacie?', 'Wrocław i okolice do 30 km.', 'f2']]
    },
    themes: [
      { id: 'solidny', name: 'Solidny i konkretny', why: 'Ciemny grafit i ciepły dąb ze zdjęć realizacji, mocne liczby.', bg: '#F5F3EF', ink: '#1C1C1A', accent: '#B8692E', soft: '#ECE6DC', head: 'Bricolage Grotesque', body: 'Satoshi', r: '6px' },
      { id: 'jasny', name: 'Jasny i nowoczesny', why: 'Biel i dąb jak w wykończonych wnętrzach, spokojny układ.', bg: '#FFFFFF', ink: '#15181B', accent: '#3A5F4F', soft: '#EEF2EF', head: 'Satoshi', body: 'Satoshi', r: '20px' },
      { id: 'premium', name: 'Premium', why: 'Dla klientów wykończeń wyższego standardu: szeryf i dużo powietrza.', bg: '#11110F', ink: '#F2EEE7', accent: '#C9A46A', soft: '#22211D', head: 'Newsreader', body: 'Satoshi', r: '2px' }
    ],
    seo: { title: 'Remonty mieszkań Wrocław pod klucz — Remonty Dąbek | 24 mies. gwarancji', desc: 'Remonty mieszkań pod klucz, łazienki i wykończenia we Wrocławiu. Ponad 180 realizacji, własna ekipa, harmonogram na piśmie i bezpłatna wycena.', keywords: ['remonty mieszkań Wrocław', 'remont łazienki Wrocław', 'wykończenia wnętrz Wrocław', 'remont pod klucz Wrocław'], schema: 'HomeAndConstructionBusiness' }
  }
];
