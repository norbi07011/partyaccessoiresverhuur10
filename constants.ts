import { Product, Package, MediaItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id:'tent', 
    name:'Opblaasbare feesttent met accessoires', 
    img:'/images/IMPREZOWE NAMIOT LED,.jpg', 
    priceOld:400, 
    price:275, 
    sale:true, 
    product:'Namiot LED',
    description: 'Zmień swój ogród w epickie centrum imprezy! Nasz namiot LED z oświetleniem, nagłośnieniem i wytwornicą dymu to gwarancja niezapomnianych wrażeń. Idealny na urodziny, rocznice i spotkania z przyjaciómi.',
    gallery: [
      '/images/IMPREZOWE NAMIOT LED,.jpg',
      '/images/Opblaasbare feesttent met accessoires.jpg',
      '/images/Opblaasbare feesttent met accessoires (2).jpg',
      '/images/Opblaasbare feesttent met accessoires (3).jpg',
      '/images/Opblaasbare feesttent met accessoires (4).jpg',
      '/images/Opblaasbare feesttent met accessoires (5).jpg',
      '/images/Opblaasbare feesttent met accessoires (6).jpg',
      '/images/Opblaasbare feesttent met accessoires (7).jpg',
      '/images/partini-tentini.jpg.jpg',
      '/images/jblini-trututini.jpg.jpg',
    ]
  },
  {
    id:'cotton', 
    name:'Zelfbediening suikerspinmachine', 
    img:'/images/suikerspini-gangusinii.jpg.jpg', 
    price:100, 
    sale:false, 
    product:'Suikerspin Gangusini',
    description: 'Słodka atrakcja dla małych i dużych! Nasza maszyna do waty cukrowej jest prosta w obsłudze i zawsze wywołuje uśmiech. Dostarczymy wszystko, czego potrzebujesz, by kręcić puszyste chmurki szczęścia.',
    gallery: [
      '/images/suikerspini-gangusinii.jpg.jpg',
    ]
  },
  {
    id:'popcorn', 
    name:'POPCORNMACHINE', 
    img:'/images/POPCORNMACHINE.jpg', 
    price:50, 
    sale:false, 
    product:'Popcorni Boefini',
    description: 'Zapach świeżego popcornu to zapach dobrej zabawy! Nasz profesjonalny wózek do popcornu nada Twojej imprezie kinowego klimatu i zaspokoi apetyt każdego gościa.',
    gallery: [
      '/images/POPCORNMACHINE.jpg',
      '/images/popcornini-boefini.jpg.jpg',
    ]
  },
  {
    id:'foam', 
    name:'Schuimparty-machine', 
    img:'/images/Schuimparty-machine.jpg', 
    price:150, 
    sale:false, 
    product:'Piana party',
    description: 'Gotowi na piankowe szaleństwo? Nasza wytwornica piany to hit każdej letniej imprezy. Bezpieczna dla dzieci, gwarantuje godziny świetnej zabawy i ochłody.',
    gallery: [
      '/images/Schuimparty-machine.jpg',
      '/images/champanini-schuimni.jpg.jpg',
    ]
  },
  {
    id:'photo', 
    name:'Fotoshoot op evenement', 
    img:'/images/Fotoshoot op evenement.jpg', 
    price:150, 
    sale:false, 
    product:'Fotobudka',
    description: 'Uchwyć najlepsze momenty! Nasza fotobudka z zabawnymi rekwizytami to świetny sposób na integrację gości i stworzenie pamiątki na lata. Zdjęcia drukowane na miejscu!',
    gallery: [
      '/images/Fotoshoot op evenement.jpg',
      '/images/foto-bossini-clickolini.jpg.jpg',
    ]
  },
  {
    id:'booth360', 
    name:'Fotohokje 360°', 
    img:'/images/Fotohokje 360°.png', 
    price:150, 
    sale:false, 
    product:'360 booth',
    description: 'Wejdź na wyższy poziom imprezowych filmów! Nasza platforma 360° nagrywa spektakularne klipy w zwolnionym tempie, którymi goście mogą od razu dzielić się w social media.',
    gallery: [
      '/images/Fotohokje 360°.png',
    ]
  },
  {
    id:'bar', 
    name:'KLEINE BAR MET BIERFUSTKOELER', 
    img:'/images/KLEINE BAR MET BIERFUSTKOELER.jpg', 
    price:50, 
    sale:false, 
    product:'Bar + Lodówka',
    description: 'Zapewnij swoim gościom idealnie schłodzone napoje! Nasz stylowy bar z chłodziarką do beczek to profesjonalne rozwiązanie, które podniesie rangę każdej imprezy. (Butla CO₂ nie jest wliczona w cenę).',
    gallery: [
      '/images/KLEINE BAR MET BIERFUSTKOELER.jpg',
    ]
  },

  {
    id:'castle', 
    name:'Springkussen met glijbaan', 
    img:'/images/Springkussen met glijbaan.jpg', 
    price:120, 
    sale:false, 
    product:'Dmuchaniec',
    description: 'Wielki dmuchany zamek ze zjeżdżalnią to gwarancja dobrej zabawy dla najmłodszych gości. Bezpieczny, stabilny i kolorowy - idealny element na imprezę dla dzieci.',
    gallery: [
      '/images/Springkussen met glijbaan.jpg',
      '/images/Springkussen met glijbaan (2).jpg',
      '/images/clownini-blaasinii.jpg.jpg',
    ]
  },
  {
    id:'gator', 
    name:'Opblaasbare krokodil: waterglijbaan', 
    img:'/images/Opblaasbare krokodil waterglijbaan.jpg', 
    price:200, 
    sale:false, 
    product:'Krokodilo Glijbaanino',
    description: 'Gigantyczna dawka emocji! Wodna zjeżdżalnia w kształcie krokodyla to idealna ochłoda i atrakcja na upalne dni. Kto odważy się zjechać prosto do paszczy bestii?',
    gallery: [
      '/images/Opblaasbare krokodil waterglijbaan.jpg',
      '/images/Opblaasbare krokodil waterglijbaan (2).jpg',
      '/images/Opblaasbare krokodil waterglijbaan (3).jpg',
      '/images/Opblaasbare krokodil waterglijbaan.png',
      '/images/krokodilo-glijbaanino.jpg.jpg',
    ]
  },
  {
    id:'bubble',
    name:'BUBBELMACHINE',
    img:'/images/BUBBELMACHINE.jpg',
    price:15,
    sale:false,
    product: 'Wytwornica baniek',
    description: 'Stwórz magiczną atmosferę tysiącami baniek mydlanych! Nasza wytwornica to prosty sposób, by dodać uroku każdej uroczystości, od urodzin dzieci po wesela.',
    gallery: [
      '/images/BUBBELMACHINE.jpg',
    ]
  }
];

export const PACKAGES: Package[] = [
    {
        id: 'pkg-standard',
        name: 'Standaardpakket',
        price: 275,
        priceOld: 400,
        img: '/images/partini-tentini.jpg.jpg',
        popular: false,
        name_pl: 'Standaardpakket',
        name_nl: 'Standaardpakket',
  description_pl: 'Wszystko, czego potrzebujesz, by rozkręcić imprezę: namiot LED, JBL speaker + karaoke, oświetlenie, dym i dwa stoły barowe. Idealny start, który tworzy klimat profesjonalnej imprezy.',
        description_nl: 'Alles wat je nodig hebt voor een topfeest: LED tent, JBL speaker + karaoke, verlichting, rookmachine en cocktailbars. De perfecte basis voor een professionele party.',
  features_pl: ['Namiot LED', 'JBL Speaker + Karaoke', 'Oświetlenie & Dym', 'Dwa stoły barowe'],
        features_nl: ['LED Tent', 'JBL Speaker + Karaoke', 'Verlichting & Rookmachine', 'Cocktailbars'],
    },
    {
        id: 'pkg-extended',
        name: 'Uitgebreid Pakket',
        price: 400,
        priceOld: 600,
        img: '/images/clownini-blaasinii.jpg.jpg',
        popular: true,
        name_pl: 'Uitgebreid Pakket',
        name_nl: 'Uitgebreid Pakket',
        description_pl: 'Wszystko ze Standaard + atrakcje dla dzieci – dmuchańce, suikerspin, popcorn. Kompletny pakiet rodzinny, gdzie dorośli imprezują, a dzieci mają swoje szaleństwo.',
        description_nl: 'Alles van het Standaard pakket + kinderattracties – springkussen, suikerspin, popcorn. Het complete familiepakket: feest voor de ouders, fun voor de kids.',
        features_pl: ['Wszystko ze Standaard', 'Atrakcje dla dzieci (dmuchańce)', 'Maszyna do waty cukrowej', 'Maszyna do popcornu'],
        features_nl: ['Alles van Standaardpakket', 'Kinderattracties (springkussen)', 'Suikerspinmachine', 'Popcornmachine'],
    }
];

export const MASCOTS = [
    { name: 'Don Tentini Patronini', img: '/images/don-tentini-patronini.jpg.jpg', characterImg: '/assets/char/don_tentini_patronini.png', alt: 'Don Tentini Patronini', subtitle: 'Szef • Organizacja' },
    { name: 'Partini Tentini', img: '/images/partini-tentini.jpg.jpg', characterImg: '/assets/char/partini_tentini.png', alt: 'Partini Tentini — Namiot LED', subtitle: 'Namiot LED • Patrol' },
    { name: 'Krokodilo Glijbaanino', img: '/images/krokodilo-glijbaanino.jpg.jpg', characterImg: '/assets/char/krokodilo_glijbaanino.png', alt: 'Krokodilo Glijbaanino — Zjeżdżalnia', subtitle: 'Zjeżdżalnia • Woda' },
    { name: 'JBLini Trututinini', img: '/images/jblini-trututini.jpg.jpg', characterImg: '/assets/char/jblini_trututini.png', alt: 'JBLini Trututinini — Głośnik + Karaoke', subtitle: 'Głośnik • Karaoke' },
    { name: 'Suikerspin Gangusini', img: '/images/suikerspini-gangusinii.jpg.jpg', characterImg: '/assets/char/suikerspini_gangusini.png', alt: 'Suikerspin Gangusini — Wata cukrowa', subtitle: 'Wata cukrowa • Słodycze' },
    { name: 'Champanini Schuimni', img: '/images/champanini-schuimni.jpg.jpg', characterImg: '/assets/char/champanini_schuimni.png', alt: 'Champanini Schuimni — Piana', subtitle: 'Piana Party • Zabawa' },
    { name: 'Clownini Blaasini', img: '/images/clownini-blaasinii.jpg.jpg', characterImg: '/assets/char/clownini_blaasini.png', alt: 'Clownini Blaasini — Zamek', subtitle: 'Zamek • Skakanie' },
    { name: 'Popcorini Boefini', img: '/images/popcornini-boefini.jpg.jpg', characterImg: '/assets/char/popcorini_boefini.png', alt: 'Popcorini Boefini — Popcorn', subtitle: 'Popcorn • Przekąski' },
    { name: 'Foto-Bossini Clickolini', img: '/images/foto-bossini-clickolini.jpg.jpg', characterImg: '/assets/char/foto_bossini_clickolini.png', alt: 'Foto-Bossini Clickolini — Fotobudka', subtitle: 'Fotobudka • Zdjęcia' }
];

export const PHONE_WA = '+31633387724';
export const VAT_RATE = 0.21;

export const L10N = {
  pl: {
    "nav.packages":"Pakiety","nav.products":"Produkty","nav.planner":"Planer AI","nav.mascots":"Maskotki","nav.media":"Media","nav.permits":"Zezwolenia","nav.contact":"Kontakt","nav.cart":"Koszyk",
    "hero.title":"Najlepsze atrakcje na Twoją imprezę","hero.sub":"WYNAJMIJ NAJLEPSZE ATRAKCJE IMPREZOWE: NAMIOT LED, DMUCHAŃCE, FOTOBUDKA 360°, POPCORN I WATA. OBSŁUGUJEMY WESTLAND / DEN HAAG +25 KM. REZERWACJA W 1 KLIK!","cta.bookNow":"Zarezerwuj już teraz","cta.whatsappNow":"Napisz do mnie na WhatsAppie",
    "why.lead":"Oferujemy nie tylko wynajem; dostarczamy kompletną imprezową obsługę.", "why.fast":"Szybka dostawa","why.fastDesc":"Westland / Haga i okolice. Dostawa + montaż.",
    "why.price":"Najlepsze ceny", "why.priceDesc":"Proste pakiety, zero ukrytych kosztów.", "why.gear":"Niezawodny sprzęt","why.gearDesc":"Regularny serwis i zapas akcesoriów.",
    "why.ontime":"Zawsze na czas","why.ontimeDesc":"Gwarancja punktualności.","why.team":"Doświadczony zespół","why.teamDesc":"Doradzimy konfigurację pod Twój event.",
    "why.support":"Wsparcie 24/7","why.supportDesc":"Telefon/WhatsApp podczas wydarzenia.","why.foot":"Wybierz atrakcje i zarezerwuj termin w kilka klików.",
    "packages.title":"Wybierz idealny pakiet", "packages.subtitle":"Każdy pakiet można w pełni dostosować do Twoich potrzeb!", "packages.popular":"POPULARNY", "packages.select":"Wybierz Pakiet", "packages.vat_info":"+ VAT",
    "products.title":"Oferta / Produkty","products.hint":"Kliknij zdjęcie, by zobaczyć galerię. Przewijaj w poziomie na telefonie.",
    "planner.title": "Planer Imprez AI", "planner.subtitle": "Nie masz pomysłu? Opisz swoje potrzeby, a nasz asystent AI przygotuje gotowy plan imprezy!", "planner.comingSoon": "Wkrótce dostępne!", "planner.eventType.label": "Rodzaj imprezy", "planner.eventType.birthday": "Urodziny", "planner.eventType.anniversary": "Rocznica", "planner.eventType.kids": "Impreza dla dzieci", "planner.eventType.corporate": "Spotkanie firmowe", "planner.guests.label": "Liczba gości", "planner.budget.label": "Budżet", "planner.vibe.label": "Klimat / Motyw przewodni", "planner.vibe.placeholder": "np. eleganckie przyjęcie, luźny grill, impreza w stylu lat 80.", "planner.button": "✨ Wygeneruj Plan", "planner.loading": "Myślimy...", "planner.error": "Coś poszło nie tak. Spróbuj ponownie później.", "planner.getStarted": "Wypełnij formularz, aby wygenerować plan imprezy.", "planner.results.products": "Rekomendowane produkty", "planner.results.decorations": "Pomysły na dekoracje", "planner.results.activities": "Propozycje aktywności", "planner.results.timeline": "Harmonogram",
    "mascots.title": "Mascotte Crew",
    "media.title": "Media Library", "media.subtitle": "Wideo, zdjęcia i embedowane shorty.",
    "media.tab.videos": "🎬 Wideo", "media.tab.photos": "🖼️ Zdjęcia", "media.tab.embeds": "🔗 Embeds",
    "permits.title": "Zezwolenia & Dofinansowania", "permits.tab.denhaag": "Den Haag", "permits.tab.westland": "Westland",
    "permits.dh.subsidie.title": "Dofinansowanie małych imprez publicznych", "permits.dh.subsidie.badge": "Tylko dla instytucji", "permits.dh.subsidie.step1": "Sprawdź kryteria kwalifikacyjne", "permits.dh.subsidie.step2": "Przygotuj budżet i opis projektu", "permits.dh.subsidie.step3": "Złóż wniosek przez portal online", "permits.dh.subsidie.cta": "Otwórz formularz",
    "permits.dh.melding.title": "Zgłoszenie małego wydarzenia", "permits.dh.melding.step1": "Podaj termin i dokładny adres", "permits.dh.melding.step2": "Określ maks. wielkość i poziom hałasu", "permits.dh.melding.step3": "Wyślij zgłoszenie online", "permits.dh.melding.cta": "Zgłoś wydarzenie",
    "permits.wl.title": "Zgłoszenie lub zezwolenie na imprezę", "permits.wl.desc": "Małe wydarzenia: obowiązek zgłoszenia. Duże: wymagane zezwolenie.", "permits.wl.step1": "Sprawdź typ wydarzenia (małe/duże)", "permits.wl.step2": "Przygotuj plan bezpieczeństwa i logistyki", "permits.wl.step3": "Złóż wniosek przez portal gminy", "permits.wl.cta": "Instrukcja i wniosek",
    "permits.cta.micro": "Otwiera stronę urzędu",
    "calendar.title": "Kalendarz rezerwacji", "calendar.date": "Data", "calendar.time": "Godzina", "calendar.chosen": "Wybrany termin", "calendar.confirm": "Potwierdź termin", "calendar.wa": "Rezerwuj przez WhatsApp", "calendar.info": "Godziny pracy: 08:00–23:00 (+ bufory). Integracja z Google Calendar.",
    "faq.title": "FAQ",
    "reviews.title": "Opinie / Recenzje Google",
    "map.title": "Mapa / Dojazd", "map.subtitle": "Obsługujemy Westland i Den Haag + dojazd do 25 km od strefy podstawowej.", "map.cta": "Wyznacz spodziewany", "map.legend.base": "Strefa podstawowa", "map.legend.extended": "Dojazd +25 km",
    "contact.title": "Kontakt", "contact.send": "Wyślij i zarezerwuj", "contact.wa": "Napisz na WhatsApp",
    "footer.links.title": "Linki", "footer.contact.title": "Dane", "footer.terms": "Regulamin", "footer.privacy": "Polityka prywatności", "footer.returns": "Zwroty", "footer.disclaimer.title": "Uwaga", "footer.disclaimer.text": "Przy każdym pakiecie wymagana jest kaucja w wysokości 300 €. Zostanie ona w pełni zwrócona po zakończeniu wydarzenia, pod warunkiem zwrotu wszystkich wypożyczonych przedmiotów w dobrym stanie."
  },
  nl: {
    "nav.packages":"Pakketten","nav.products":"Producten","nav.planner":"AI Event Planner","nav.mascots":"Mascotte Crew","nav.media":"Media","nav.permits":"Vergunningen","nav.contact":"Contact","nav.cart":"Winkelwagen",
    "hero.title":"De beste attracties voor jouw feest","hero.sub":"HUUR DE BESTE FEESTATTRACTIES: LED TENT, SPRINGKUSSENS, PHOTOBOOTH 360°, POPCORN EN SUIKERSPIN. WIJ BEDIENEN WESTLAND / DEN HAAG +25 KM. RESERVEREN IN 1 KLIK!","cta.bookNow":"Reserveer nu","cta.whatsappNow":"Chat met ons op WhatsApp",
    "why.lead":"Wij bieden meer dan alleen verhuur; wij leveren een complete ervaring.","why.fast":"Snelle bezorging","why.fastDesc":"Westland/Den Haag e.o. Levering + opbouw.",
    "why.price":"Beste prijzen","why.priceDesc":"Eerlijke pakketten, geen verborgen kosten.","why.gear":"Betrouwbare apparatuur","why.gearDesc":"Regelmatig onderhoud en reserve-onderdelen.",
    "why.ontime":"Altijd op tijd","why.ontimeDesc":"Stipt en betrouwbaar.","why.team":"Ervaren team","why.teamDesc":"We denken mee met jouw event.",
    "why.support":"Technische support 24/7","why.supportDesc":"Hulp via telefoon/WhatsApp tijdens het event.","why.foot":"Kies attracties en reserveer in enkele klikken.",
    "packages.title":"Kies het perfecte pakket", "packages.subtitle":"Volledig aanpasbaar naar jouw wensen!", "packages.popular":"POPULAIR", "packages.select":"Selecteer Pakket", "packages.vat_info":"excl. BTW",
    "products.title":"Aanbod / Producten","products.hint":"Klik op de foto voor de galerij. Veeg links/rechts op mobiel.",
    "planner.title": "AI Event Planner", "planner.subtitle": "Geen idee? Beschrijf je wensen en onze AI-assistent stelt een compleet evenementenplan op!", "planner.comingSoon": "Binnenkort beschikbaar!", "planner.eventType.label": "Soort evenement", "planner.eventType.birthday": "Verjaardag", "planner.eventType.anniversary": "Jubileum", "planner.eventType.kids": "Kinderfeestje", "planner.eventType.corporate": "Bedrijfsevenement", "planner.guests.label": "Aantal gasten", "planner.budget.label": "Budget", "planner.vibe.label": "Sfeer / Thema", "planner.vibe.placeholder": "bijv. elegant feest, relaxte barbecue, jaren 80-feest", "planner.button": "✨ Genereer Plan", "planner.loading": "Aan het denken...", "planner.error": "Er is iets misgegaan. Probeer het later opnieuw.", "planner.getStarted": "Vul het formulier in om een evenementenplan te genereren.", "planner.results.products": "Aanbevolen producten", "planner.results.decorations": "Decoratie-ideeën", "planner.results.activities": "Activiteitensuggesties", "planner.results.timeline": "Tijdschema",
    "mascots.title": "Mascotte Crew",
    "media.title": "Media Library", "media.subtitle": "Video's, foto's en embedded shorts.",
    "media.tab.videos": "🎬 Video's", "media.tab.photos": "🖼️ Foto's", "media.tab.embeds": "🔗 Embeds",
    "permits.title": "Vergunningen & Subsidies", "permits.tab.denhaag": "Den Haag", "permits.tab.westland": "Westland",
    "permits.dh.subsidie.title": "Subsidie kleine publieksevenementen", "permits.dh.subsidie.badge": "Alleen voor instellingen", "permits.dh.subsidie.step1": "Controleer de criteria", "permits.dh.subsidie.step2": "Verzamel budget en beschrijving", "permits.dh.subsidie.step3": "Dien de aanvraag online in", "permits.dh.subsidie.cta": "Open formulier",
    "permits.dh.melding.title": "Meld klein evenement", "permits.dh.melding.step1": "Geef datum en adres op", "permits.dh.melding.step2": "Specificeer max. grootte/geluid", "permits.dh.melding.step3": "Verstuur de melding", "permits.dh.melding.cta": "Meld evenement",
    "permits.wl.title": "Melden of vergunning evenement", "permits.wl.desc": "Kleine evenementen: meldplicht. Grote: vergunning vereist.", "permits.wl.step1": "Controleer het type (klein/groot)", "permits.wl.step2": "Bereid een veiligheidsplan voor", "permits.wl.step3": "Dien online in via de gemeente", "permits.wl.cta": "Instructie & aanvraag",
    "permits.cta.micro": "Opent website van de gemeente",
    "calendar.title": "Reserveringskalender", "calendar.date": "Datum", "calendar.time": "Tijd", "calendar.chosen": "Gekozen datum", "calendar.confirm": "Bevestig datum", "calendar.wa": "Reserveer via WhatsApp", "calendar.info": "Openingstijden: 08:00–23:00 (+ buffers). Google Calendar integratie.",
    "faq.title": "FAQ",
    "reviews.title": "Recensies / Google Reviews",
    "map.title": "Kaart / Route", "map.subtitle": "Wij bedienen Westland en Den Haag + reizen tot 25 km vanaf de basiszone.", "map.cta": "Route plannen", "map.legend.base": "Basiszone", "map.legend.extended": "Reis +25 km",
    "contact.title": "Contact", "contact.send": "Verstuur en reserveer", "contact.wa": "Schrijf op WhatsApp",
    "footer.links.title": "Links", "footer.contact.title": "Gegevens", "footer.terms": "Algemene voorwaarden", "footer.privacy": "Privacybeleid", "footer.returns": "Retourneren", "footer.disclaimer.title": "Let op", "footer.disclaimer.text": "Bij elk pakket wordt een borg van €300 gevraagd. Deze wordt volledig terugbetaald na afloop van het evenement, mits alle gehuurde spullen in goede staat worden teruggebracht."
  }
};

export const MEDIA_DATA: { videos: MediaItem[], photos: MediaItem[], embeds: MediaItem[] } = {
  videos: [
    { 
      src: '/videos/Impreza w namiocie LED    PL .NL.mp4', 
      poster: '/images/Opblaasbare feesttent met accessoires.jpg', 
      title: 'Impreza w namiocie LED', 
      product: 'Namiot LED', 
      lang: 'PL' 
    },
    { 
      src: '/videos/Impreza w namiocie LED    PL .NL.mp4', 
      poster: '/images/Opblaasbare feesttent met accessoires.jpg', 
      title: 'Feest in LED-tent', 
      product: 'LED Tent', 
      lang: 'NL' 
    },
    { 
      src: '/videos/Dzieci na dmuchańcu  PL.mp4', 
      poster: '/images/Springkussen met glijbaan.jpg', 
      title: 'Dzieci na dmuchańcu', 
      product: 'Dmuchaniec', 
      lang: 'PL' 
    },
    {
      src: '/videos/Gang Pluszaków PL.mp4',
      poster: '/images/partini-tentini.jpg.jpg',
      title: 'Gang Pluszaków',
      product: 'Maskotki',
      lang: 'PL'
    },
    { 
      src: '/videos/Darmowa impreza sąsiedzka den haag PL.mp4', 
      poster: '/images/partini-tentini.jpg.jpg', 
      title: 'Darmowa impreza sąsiedzka w Den Haag', 
      product: 'Pakiet rozszerzony', 
      lang: 'PL' 
    },
    { 
      src: '/videos/Buurtfeest NL.mp4', 
      poster: '/images/partini-tentini.jpg.jpg', 
      title: 'Buurtfeest', 
      product: 'Uitgebreid Pakket', 
      lang: 'NL' 
    },
    { 
      src: '/videos/Suikerspinmachine. Binnenkort verkrijgbaar.  NL.mp4', 
      poster: '/images/suikerspini-gangusinii.jpg.jpg', 
      title: 'Suikerspinmachine. Binnenkort verkrijgbaar.', 
      product: 'Suikerspin Gangusini', 
      lang: 'NL' 
    },
    { 
      src: '/videos/Reklama firmowa PL .NL.mp4', 
      poster: '/images/IMPREZOWE NAMIOT LED,.jpg', 
      title: 'Reklama firmowa', 
      product: 'Wszystkie atrakcje', 
      lang: 'PL' 
    },
    { 
      src: '/videos/Reklama firmowa PL .NL.mp4', 
      poster: '/images/IMPREZOWE NAMIOT LED,.jpg', 
      title: 'Bedrijfsreclame', 
      product: 'Alle attracties', 
      lang: 'NL' 
    },
  ],
  photos: [
    { src: '/images/Fotoshoot op evenement.jpg', title: 'Uśmiechnięta para w fotobudce', alt: 'Uśmiechnięta para w fotobudce', product: 'Fotobudka', lang: 'PL' },
    { src: '/images/Zdjęcie WhatsApp 2025-08-22 o 02.47.35_2f3c747a.jpg', title: 'Wata cukrowa z bliska', alt: 'Wata cukrowa z bliska', product: 'Suikerspin Gangusini', lang: 'NL' },
    { src: '/images/Zdjęcie WhatsApp 2025-08-22 o 02.47.35_5f507318.jpg', title: 'Platforma 360 w akcji', alt: 'Platforma 360 w akcji', product: '360 booth', lang: 'PL' },
  ],
  embeds: [
    { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Oficjalny aftermovie', product: 'Namiot LED', lang: 'PL' }
  ]
};

export const BOT_QA: { k: RegExp, a: string }[] = [
    {
        k: /termin|data|kiedy|wolne/i,
        a: 'Wszystkie dostępne terminy możesz sprawdzić w naszym kalendarzu rezerwacji. Przejdź do sekcji "Kalendarz", aby wybrać datę i godzinę.'
    },
    {
        k: /cena|koszt|ile/i,
        a: 'Ceny naszych produktów i pakietów znajdziesz w sekcjach "Oferta" oraz "Pakiety". Wszystkie ceny są przejrzyste!'
    },
    {
        k: /dostawa|dowóz|dojazd|transport/i,
        a: 'Tak, dowozimy sprzęt na terenie Westland / Den Haag i w promieniu 25 km. Montaż jest wliczony w usługę. Więcej szczegółów na mapie.'
    },
    {
        k: /hej|cześć|dzień dobry/i,
        a: 'Cześć! W czym mogę pomóc? Zapytaj o ceny, terminy lub dostawę.'
    }
];

export type Language = typeof L10N.pl;
export type LanguageCode = keyof typeof L10N;