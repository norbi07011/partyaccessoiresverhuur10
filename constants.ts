import { Product, Package, MediaItem } from './types';

// Language and translation types
export type LanguageCode = 'pl' | 'nl';

export interface Language {
    // Navigation
    'nav.packages': string;
    'nav.products': string;
    'nav.planner': string;
    'nav.mascots': string;
    'nav.media': string;
    'nav.permits': string;
    'nav.calendar': string;
    'nav.faq': string;
    'nav.reviews': string;
    'nav.contact': string;
    
    // Hero section
    'hero.title': string;
    'hero.sub': string;
    'hero.cta': string;
    
    // Contact
    'contact.title': string;
    'contact.send': string;
    'contact.wa': string;
    
    // Calendar
    'calendar.chosen': string;
    
    // Media
    'media.title': string;
    'media.subtitle': string;
    'media.tab.videos': string;
    'media.tab.photos': string;
    'media.tab.embeds': string;
    
    // Mascots
    'mascots.title': string;
    
    // Footer
    'footer.links.title': string;
    
    // Why Us
    'why.fast': string;
    'why.fastDesc': string;
    'why.price': string;
    'why.priceDesc': string;
    'why.gear': string;
    'why.gearDesc': string;
    
    // Reviews
    'reviews.title': string;
    
    // Planner
    'planner.title': string;
    'planner.subtitle': string;
    'planner.comingSoon': string;
    'planner.eventType.label': string;
    'planner.eventType.birthday': string;
    'planner.eventType.anniversary': string;
    'planner.eventType.kids': string;
    'planner.eventType.corporate': string;
    'planner.guests.label': string;
    'planner.budget.label': string;
    'planner.vibe.label': string;
    'planner.vibe.placeholder': string;
    'planner.loading': string;
    'planner.button': string;
    'planner.getStarted': string;
    'planner.error': string;
    'planner.results.recommendations': string;
    'planner.results.decorations': string;
    'planner.results.activities': string;
    'planner.results.timeline': string;
    
    // Permits
    'permits.title': string;
    'permits.subtitle': string;
    'permits.dh.title': string;
    'permits.dh.desc': string;
    'permits.dh.cta': string;
    'permits.dh.melding.title': string;
    'permits.dh.melding.step1': string;
    'permits.dh.melding.step2': string;
    'permits.dh.melding.step3': string;
    'permits.dh.melding.cta': string;
    'permits.wl.title': string;
    'permits.wl.desc': string;
    'permits.wl.step1': string;
    'permits.wl.step2': string;
    'permits.wl.step3': string;
    'permits.wl.cta': string;
    'permits.cta.micro': string;
}

// Translation data
export const L10N: Record<LanguageCode, Language> = {
    pl: {
        // Navigation
        'nav.packages': 'Pakiety',
        'nav.products': 'Produkty',
        'nav.planner': 'Planner',
        'nav.mascots': 'Mascotki',
        'nav.media': 'Galeria',
        'nav.permits': 'Pozwolenia',
        'nav.calendar': 'Kalendarz',
        'nav.faq': 'FAQ',
        'nav.reviews': 'Opinie',
        'nav.contact': 'Kontakt',
        
        // Hero section
        'hero.title': 'Party Accessoires Verhuur',
        'hero.sub': 'Wszystko dla Twojej idealnej imprezy',
        'hero.cta': 'Zobacz ofertę',
        
        // Contact
        'contact.title': 'Skontaktuj się z nami',
        'contact.send': 'Wyślij wiadomość',
        'contact.wa': 'WhatsApp',
        
        // Calendar
        'calendar.chosen': 'Wybrany termin',
        
        // Media
        'media.title': 'Galeria',
        'media.subtitle': 'Zobacz nasze atrakcje w akcji',
        'media.tab.videos': 'Filmy',
        'media.tab.photos': 'Zdjęcia',
        'media.tab.embeds': 'YouTube',
        
        // Mascots
        'mascots.title': 'Nasze Atrakcje',
        
        // Footer
        'footer.links.title': 'Nawigacja',
        
        // Why Us
        'why.fast': 'Szybka dostawa',
        'why.fastDesc': 'Błyskawiczna realizacja zamówień',
        'why.price': 'Najlepsze ceny',
        'why.priceDesc': 'Konkurencyjne stawki na rynku',
        'why.gear': 'Profesjonalny sprzęt',
        'why.gearDesc': 'Najwyższej jakości atrakcje',
        
        // Reviews
        'reviews.title': 'Opinie klientów',
        
        // Planner
        'planner.title': 'AI Event Planner',
        'planner.subtitle': 'Zaplanuj idealną imprezę z pomocą sztucznej inteligencji',
        'planner.comingSoon': 'Wkrótce',
        'planner.eventType.label': 'Typ wydarzenia',
        'planner.eventType.birthday': 'Urodziny',
        'planner.eventType.anniversary': 'Rocznica',
        'planner.eventType.kids': 'Impreza dla dzieci',
        'planner.eventType.corporate': 'Spotkanie firmowe',
        'planner.guests.label': 'Liczba gości',
        'planner.budget.label': 'Budżet',
        'planner.vibe.label': 'Klimat imprezy',
        'planner.vibe.placeholder': 'np. elegancka, szalona, relaksująca...',
        'planner.loading': 'Generuję plan...',
        'planner.button': 'Wygeneruj plan imprezy',
        'planner.getStarted': 'Wypełnij formularz, aby otrzymać spersonalizowany plan imprezy',
        'planner.error': 'Wystąpił błąd. Spróbuj ponownie.',
        'planner.results.recommendations': 'Rekomendowane produkty',
        'planner.results.decorations': 'Pomysły na dekoracje',
        'planner.results.activities': 'Sugerowane aktywności',
        'planner.results.timeline': 'Harmonogram wydarzenia',
        
        // Permits
        'permits.title': 'Pozwolenia na imprezy',
        'permits.subtitle': 'Wszystko co musisz wiedzieć o pozwoleniach',
        'permits.dh.title': 'Den Haag',
        'permits.dh.desc': 'Informacje o pozwoleniach w Hadze',
        'permits.dh.cta': 'Złóż wniosek',
        'permits.dh.melding.title': 'Melding wydarzenia',
        'permits.dh.melding.step1': 'Wypełnij formularz online',
        'permits.dh.melding.step2': 'Załącz wymagane dokumenty',
        'permits.dh.melding.step3': 'Poczekaj na potwierdzenie',
        'permits.dh.melding.cta': 'Złóż melding',
        'permits.wl.title': 'Westland',
        'permits.wl.desc': 'Informacje o pozwoleniach w Westland',
        'permits.wl.step1': 'Skontaktuj się z urzędem',
        'permits.wl.step2': 'Przygotuj dokumentację',
        'permits.wl.step3': 'Złóż wniosek',
        'permits.wl.cta': 'Więcej informacji',
        'permits.cta.micro': 'Kliknij aby przejść do strony urzędu'
    },
    nl: {
        // Navigation
        'nav.packages': 'Pakketten',
        'nav.products': 'Producten',
        'nav.planner': 'Planner',
        'nav.mascots': 'Mascottes',
        'nav.media': 'Galerij',
        'nav.permits': 'Vergunningen',
        'nav.calendar': 'Kalender',
        'nav.faq': 'FAQ',
        'nav.reviews': 'Reviews',
        'nav.contact': 'Contact',
        
        // Hero section
        'hero.title': 'Party Accessoires Verhuur',
        'hero.sub': 'Alles voor je perfecte feest',
        'hero.cta': 'Bekijk aanbod',
        
        // Contact
        'contact.title': 'Neem contact op',
        'contact.send': 'Verstuur bericht',
        'contact.wa': 'WhatsApp',
        
        // Calendar
        'calendar.chosen': 'Gekozen datum',
        
        // Media
        'media.title': 'Galerij',
        'media.subtitle': 'Bekijk onze attracties in actie',
        'media.tab.videos': 'Video\'s',
        'media.tab.photos': 'Foto\'s',
        'media.tab.embeds': 'YouTube',
        
        // Mascots
        'mascots.title': 'Onze Attracties',
        
        // Footer
        'footer.links.title': 'Navigatie',
        
        // Why Us
        'why.fast': 'Snelle levering',
        'why.fastDesc': 'Bliksemsnelle orderverwerking',
        'why.price': 'Beste prijzen',
        'why.priceDesc': 'Concurrerende tarieven',
        'why.gear': 'Professionele apparatuur',
        'why.gearDesc': 'Hoogwaardige attracties',
        
        // Reviews
        'reviews.title': 'Klantbeoordelingen',
        
        // Planner
        'planner.title': 'AI Event Planner',
        'planner.subtitle': 'Plan je perfecte feest met kunstmatige intelligentie',
        'planner.comingSoon': 'Binnenkort',
        'planner.eventType.label': 'Type evenement',
        'planner.eventType.birthday': 'Verjaardag',
        'planner.eventType.anniversary': 'Jubileum',
        'planner.eventType.kids': 'Kinderfeest',
        'planner.eventType.corporate': 'Bedrijfsfeest',
        'planner.guests.label': 'Aantal gasten',
        'planner.budget.label': 'Budget',
        'planner.vibe.label': 'Sfeer',
        'planner.vibe.placeholder': 'bijv. elegant, wild, ontspannen...',
        'planner.loading': 'Plan genereren...',
        'planner.button': 'Genereer feestplan',
        'planner.getStarted': 'Vul het formulier in voor een gepersonaliseerd feestplan',
        'planner.error': 'Er is een fout opgetreden. Probeer opnieuw.',
        'planner.results.recommendations': 'Aanbevolen producten',
        'planner.results.decorations': 'Decoratie ideeën',
        'planner.results.activities': 'Voorgestelde activiteiten',
        'planner.results.timeline': 'Evenement tijdlijn',
        
        // Permits
        'permits.title': 'Feest vergunningen',
        'permits.subtitle': 'Alles wat je moet weten over vergunningen',
        'permits.dh.title': 'Den Haag',
        'permits.dh.desc': 'Informatie over vergunningen in Den Haag',
        'permits.dh.cta': 'Dien aanvraag in',
        'permits.dh.melding.title': 'Evenement melding',
        'permits.dh.melding.step1': 'Vul online formulier in',
        'permits.dh.melding.step2': 'Voeg vereiste documenten toe',
        'permits.dh.melding.step3': 'Wacht op bevestiging',
        'permits.dh.melding.cta': 'Dien melding in',
        'permits.wl.title': 'Westland',
        'permits.wl.desc': 'Informatie over vergunningen in Westland',
        'permits.wl.step1': 'Neem contact op met gemeente',
        'permits.wl.step2': 'Bereid documentatie voor',
        'permits.wl.step3': 'Dien aanvraag in',
        'permits.wl.cta': 'Meer informatie',
        'permits.cta.micro': 'Klik om naar gemeente website te gaan'
    }
};

export const PRODUCTS: Product[] = [
  {
    id:'tent', 
    name:'Opblaasbare feesttent met accessoires', 
    img:'/images/IMPREZOWE NAMIOT LED,.jpg', 
    priceOld:400, 
    price:275, 
    sale:true, 
    product:'Namiot LED',
    description: 'Zmień swój ogród w epickie centrum imprezy! Nasz namiot LED z oświetleniem, nagłośnieniem i wytwornicą dymu to gwarancja niezapomnianych wrażeń. Idealny na urodziny, rocznice, wesela i inne okazje.',
    gallery: [
      '/images/IMPREZOWE NAMIOT LED,.jpg',
      '/images/Opblaasbare feesttent met accessoires.jpg',
      '/images/Opblaasbare feesttent met accessoires (2).jpg',
      '/images/Opblaasbare feesttent met accessoires (3).jpg',
      '/images/Opblaasbare feesttent met accessoires (4).jpg',
      '/images/Opblaasbare feesttent met accessoires (5).jpg',
      '/images/Opblaasbare feesttent met accessoires (6).jpg',
      '/images/Opblaasbare feesttent met accessoires (7).jpg',
      '/images/partini-tentini.jpg',
      '/images/jblini-trututini.jpg',
    ]
  },
  {
    id:'cotton', 
    name:'Zelfbediening suikerspinmachine', 
    img:'/images/suikerspini-gangusinii.jpg', 
    price:100, 
    sale:false, 
    product:'Suikerspin Gangusini',
    description: 'Słodka atrakcja dla małych i dużych! Nasza maszyna do waty cukrowej jest prosta w obsłudze i zawsze wywołuje uśmiech. Dostarczymy wszystko, czego potrzebujesz, by kręcić kolorowe chmury słodkości na Twojej imprezie.',
    gallery: [
      '/images/suikerspini-gangusinii.jpg',
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
      '/images/popcornini-boefini.jpg',
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
      '/images/champanini-schuimni.jpg',
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
      '/images/foto-bossini-clickolini.jpg',
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
    description: 'Zapewnij swoim gościom idealnie schłodzone napoje! Nasz stylowy bar z chłodziarką do beczek to profesjonalne rozwiązanie, które podniesie rangę każdej imprezy. (Butla CO₂ nie wchodzi w cenę)',
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
      '/images/clownini-blaasinii.jpg',
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
      '/images/krokodilo-glijbaanino.jpg',
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
        img: '/images/partini-tentini.jpg',
        popular: false,
        name_pl: 'Standaardpakket',
        name_nl: 'Standaardpakket',
        description_pl: 'Wszystko, czego potrzebujesz, by rozkręcić imprezę: namiot LED, JBL speaker + karaoke, oświetlenie, dym i dwa stoły barowe. Idealny start, który tworzy klimat profesjonalnej zabawy.',
        description_nl: 'Alles wat je nodig hebt voor een topfeest: LED tent, JBL speaker + karaoke, verlichting, rookmachine en twee barktafels. De perfecte basis voor een professionele party.',
        features_pl: ['Namiot LED', 'JBL Speaker + Karaoke', 'Oświetlenie & Dym', 'dwa stoły barowe'],
        features_nl: ['LED Tent', 'JBL Speaker + Karaoke', 'Verlichting & Rookmachine', 'twee barktafels'],
    },
    // ...pozostałe pakiety
];

// WhatsApp phone number for contact links
export const PHONE_WA = '+31616170799';

// Mascots for rotating gallery
export const MASCOTS = [
    {
        name: 'Namiot LED',
        img: '/images/IMPREZOWE NAMIOT LED,.jpg',
        alt: 'Opblaasbare feesttent met LED verlichting',
        subtitle: 'Magiczny namiot z oświetleniem LED'
    },
    {
        name: 'Suikerspin Gangusini',
        img: '/images/suikerspini-gangusinii.jpg',
        alt: 'Suikerspinmachine voor feesten',
        subtitle: 'Wata cukrowa na każdej imprezie'
    },
    {
        name: 'Popcorni Boefini',
        img: '/images/POPCORNMACHINE.jpg',
        alt: 'Popcornmachine voor evenementen',
        subtitle: 'Świeży popcorn prosto z maszyny'
    },
    {
        name: 'Piana Party',
        img: '/images/Schuimparty-machine.jpg',
        alt: 'Schuimparty-machine',
        subtitle: 'Piankowe szaleństwo dla wszystkich'
    },
    {
        name: 'Fotobudka',
        img: '/images/Fotoshoot op evenement.jpg',
        alt: 'Fotoshoot op evenement',
        subtitle: 'Uchwyć najlepsze momenty'
    },
    {
        name: '360 Booth',
        img: '/images/Fotohokje 360°.png',
        alt: 'Fotohokje 360 graden',
        subtitle: 'Spektakularne filmy w 360°'
    },
    {
        name: 'Bar + Lodówka',
        img: '/images/KLEINE BAR MET BIERFUSTKOELER.jpg',
        alt: 'Kleine bar met bierfustkoeler',
        subtitle: 'Profesjonalny bar z chłodziarką'
    },
    {
        name: 'Krokodilo Glijbaanino',
        img: '/images/Opblaasbare krokodil waterglijbaan.jpg',
        alt: 'Opblaasbare krokodil waterglijbaan',
        subtitle: 'Gigantyczna wodna przygoda'
    }
];

// Media data for the media library
export const MEDIA_DATA = {
    videos: [
        {
            src: '/videos/tent-setup.mp4',
            poster: '/images/IMPREZOWE NAMIOT LED,.jpg',
            title: 'Namiot LED Setup',
            product: 'Namiot LED',
            lang: 'PL' as const,
            alt: 'Video pokazuje proces montażu namiotu LED'
        },
        {
            src: '/videos/party-overview.mp4',
            poster: '/images/partini-tentini.jpg',
            title: 'Party Overview',
            product: 'Kompletny pakiet',
            lang: 'PL' as const,
            alt: 'Przegląd imprezy z namiotem i akcesoriami'
        }
    ],
    photos: [
        {
            src: '/images/IMPREZOWE NAMIOT LED,.jpg',
            title: 'Namiot LED w akcji',
            product: 'Namiot LED',
            lang: 'PL' as const,
            alt: 'Namiot LED oświetlający imprezę'
        },
        {
            src: '/images/partini-tentini.jpg',
            title: 'Kompletna impreza',
            product: 'Pakiet standardowy',
            lang: 'PL' as const,
            alt: 'Pełny zestaw imprezowy'
        },
        {
            src: '/images/suikerspini-gangusinii.jpg',
            title: 'Maszyna do waty cukrowej',
            product: 'Suikerspin Gangusini',
            lang: 'PL' as const,
            alt: 'Kolorowa wata cukrowa'
        },
        {
            src: '/images/POPCORNMACHINE.jpg',
            title: 'Wózek z popcornem',
            product: 'Popcorni Boefini',
            lang: 'PL' as const,
            alt: 'Świeży popcorn na imprezie'
        }
    ],
    embeds: [
        {
            url: 'https://www.youtube.com/embed/example1',
            title: 'Party Tent Demo',
            product: 'Namiot LED',
            lang: 'NL' as const,
            alt: 'YouTube video demonstratie van party tent'
        }
    ]
};

// Chatbot Q&A data
export const BOT_QA = [
    {
        k: /termin|data|kiedy|dostępny|wolny/i,
        a: 'Sprawdź dostępne terminy w sekcji Kalendarz na stronie lub napisz do mnie na WhatsApp - szybko ustalimy datę!'
    },
    {
        k: /cena|koszt|ile|płacić|zapłacić/i,
        a: 'Ceny znajdziesz w sekcji Produkty i Pakiety. Oferujemy konkurencyjne stawki i możliwość negocjacji przy większych zamówieniach.'
    },
    {
        k: /dostawa|transport|dostarczenie/i,
        a: 'Dostarczamy i odbieramy sprzęt bezpłatnie w okolicy Den Haag i Westland. Montaż i instruktaż w cenie!'
    },
    {
        k: /namiot|tent/i,
        a: 'Nasz namiot LED to hit! Opblaasowy, z kolorowym oświetleniem LED, idealny na każdą okazję. Zobacz więcej w galerii!'
    },
    {
        k: /wata|cotton|suiker/i,
        a: 'Maszyna do waty cukrowej to gwarancja słodkiej zabawy! Kolorowa wata na żywo robi furorę wśród gości.'
    },
    {
        k: /popcorn/i,
        a: 'Wózek z popcornem dodaje kinowego klimatu każdej imprezie. Świeży, ciepły popcorn pachnie jak prawdziwa zabawa!'
    },
    {
        k: /piana|foam|schuim/i,
        a: 'Piankowe szaleństwo! Nasza wytwornica piany to idealna atrakcja na letnie imprezy. Bezpieczna dla dzieci!'
    },
    {
        k: /foto|photo|zdjęcia/i,
        a: 'Mamy fotobudkę i 360° booth! Fotobudka z rekwizytami, 360° booth z slowmo - idealne na pamiątkowe filmiki!'
    },
    {
        k: /bar|piwo|beer/i,
        a: 'Bar z chłodziarką do beczek - profesjonalne rozwiązanie na dorosłe imprezy. (Butla CO₂ osobno)'
    },
    {
        k: /dzieci|kids|springkussen|dmuchany/i,
        a: 'Dla dzieci mamy dmuchany zamek ze zjeżdżalnią i gigantycznego krokodyla wodnego! Gwarancja szczęśliwych dzieciaków!'
    },
    {
        k: /contact|kontakt|telefon/i,
        a: 'Najszybszy kontakt przez WhatsApp: +31616170799 lub wypełnij formularz kontaktowy na stronie!'
    },
    {
        k: /pozwolenie|permit|melding/i,
        a: 'W sekcji Pozwolenia znajdziesz wszystkie informacje o meldingach w Den Haag i Westland. Pomoże Ci załatwić formalności!'
    }
];