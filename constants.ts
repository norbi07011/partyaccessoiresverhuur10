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
]