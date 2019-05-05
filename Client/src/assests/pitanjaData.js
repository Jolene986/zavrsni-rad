let pitanja = [
    
    {
        id: 1,
        tip:"success",
        tipKviza: '',
        pitanje: '',
        ponudjeniOdg: [
            '',
            '',
            '',
            ''
        ],
        tacanOdg : '',
        vrednost: 4,
        hint: '',
       obj: ''
    },
    {
        id: 2,
        tip:"warning",
        tipKviza: '',
        pitanje: '',
        ponudjeniOdg: [
            '',
            '',
            '',
            ''
        ],
        tacanOdg : '',
        vrednost: 8,
        hint: '',
       obj: ''
    },
    {
        id: 3,
        tip:"danger",
        tipKviza: '',
        pitanje: '',
        tacanOdg : '',
        vrednost: 24,
        hint: '',
       obj: ''
    },
    {
        id: 4,
        tip:"info",
        tipKviza: '',
        pitanje: '',
        ponudjeniOdg: [
            '',
            '',
            '',
            ''
        ],
        tacanOdg : '',
        vrednost: 24,
        hint: '',
       obj: ''
    },
    {
        id: 11,
        tip:"success",
        tipKviza: 'čovek',
        pitanje: 'Naziv najpoznatijeg fosila vrste Australopitekus afarensis, prelazne forme između čoveka i majmuna je:',
        ponudjeniOdg: [
            'Jenny',
            'Lusi',
            'Aurora',
            'Jordan'
        ],
        tacanOdg : 'Lusi',
        vrednost: 4,
        hint: 'Futuristički film u kome glavnu ulogu tumači Scarlett Johansson',
       obj: 'Lusi je naziv najpoznatijeg fosila vrste Australopitekus afarensis, prelazne forme između čoveka i majmuna. Pronađen je 1974. godine i predstavlja jedan od najkompletnijih fosila jer je očuvano čak 40% skeleta. Većina drugih fosila sastoji se od neuporedivo manjeg dela skeleta, često samo od jedne ili svega nekoliko kostiju.'
    },{
        id: 12,
        tip:"success",
        tipKviza: 'životinje',
        pitanje: 'Koji od sledećih sisara nosi jaja?',
        ponudjeniOdg: [
            'Kengur',
            'Kljunar',
            'Morska krava',
            'Delfin'
        ],
        tacanOdg : 'Kljunar',
        vrednost: 4,
        hint: 'Osim što nosi jaja ima još nekih sličnosti sa pticama',
       obj: 'Kljunar ima osobine sisara, ptica i riba. Kljunar potiče od životinje koja je potekla iz praistorijskog vremena nastanaka planete Zemlje. Kljunar živi isključivo u Australiji.Ženka kljunara hrani mlade svojim mlekom dok pliva kada mleko ispušta u vodu koje mladunci piju prateći majku na malom odsojanju. Kljunar ima rožnati kljun sličnan kljunu patki i katke noge sa prstima koji su spojeni opnom. Spljošnati rep na zadnjem delu tela, kljunar koristi kao krmu pri plivanju u vodi. I na posletku, kljunar ima glavnu osobinu ptica jer ženka nosi jaja iz koga se nakon perioda inkubacije izlegu mladunci. '
    },
    {
        id: 13,
        tip:"success",
        tipKviza: 'biljke',
        pitanje: 'Koja je najveća biljka na planeti?',
        ponudjeniOdg: [
            'Sekvoja',
            'Baobab',
            'Ginko Biloba',
            'Fikus'
        ],
        tacanOdg : 'Sekvoja',
        vrednost: 4,
        hint: 'Nije fikus i zove se General Sherman',
       obj: 'Dzinovska Sekvoja koja raste samo u Sijera Nevadi, Kalifornija je najveće drvo na svetu. Najveći živi primerak je general Šerman, koji se nalazi u Sekvoja Nacionalnom Parku visoka je 83.8 m i ima oko 1500 kubnih metara zapremine.'
    },
    {
        id: 21,
        tip:"warning",
        tipKviza: 'životinje',
        pitanje: 'Izbaci uljeza!',
        ponudjeniOdg: [
            '1',
            '2',
            '3',
            '4'
        ],
        tacanOdg : 'slika1',
        vrednost: 8,
        hint: 'Voda mi nije bitna, više volim sunce!',
       obj: 'Na slikama su prikazani: aksolotl, geko, žaba i salamander. Geko je gmizavac a ostali pripadaju vodozemcima.'
    },
    {
        id: 22,
        tip:"warning",
        tipKviza: 'biljke',
        pitanje: 'Izbaci Uljeza!',
        ponudjeniOdg: [
            '5',
            '6',
            '7',
            '8'
        ],
        tacanOdg : 'slika2',
        vrednost: 8,
        hint: '... jedna na dan i ne moraš kod lekara',
       obj: 'iako ista familija Rosaceae šljiva, badem i breskva pripadaju rodu Prunus, dok jabuka pripada rodu Malus '
    },
    {
        id: 23,
        tip:"warning",
        tipKviza: 'čovek',
        pitanje: 'Izbaci uljeza!',
        ponudjeniOdg: [
            '9',
            '10',
            '11',
            '12'
        ],
        tacanOdg : 'slika0',
        vrednost: 8,
        hint: 'Biljke su zelene!',
       obj: 'Na slikama su pretstavljene ćelijske organele: hloroplast, ribozom, endoplazmatični retikulum i mitohondrija. Hloroplasti su organele biljne ćelije zadužene za fotosintezu i ne mogu se naću u životinjskoj ćeliji.'
    },
    {
        id: 31,
        tip:"danger",
        tipKviza: 'biljke',
        pitanje: 'Kako se zove zeleni pigment smešteni u hloroplastima biljaka ?',
        tacanOdg : 'hlorofil',
        vrednost: 24,
        hint: 'gr. chloros= zelen i phyllon = list',
       obj: 'Hlorofili (gr. chloros= zelen i phyllon = list) su zeleni pigmenti smešteni na tilakoidima hloroplasta gde učestvuju u procesu fotosinteze kao sakupljači svetlosti (tzv. solarne antene) i fotoelektrični transformatori.'
    },
    {
        id: 32,
        tip:"danger",
        tipKviza: 'čovek',
        pitanje: 'Kako se zove geološka era koja je počela pre oko 65 miliona godina i traje i danas? ',
        tacanOdg : 'kenozoik',
        vrednost: 24,
        hint: ' Idoli pevaju: "Reci mi ........ nije za tebe, reci mi!"',
       obj: ' Kenozoik (od grčkih reči kainos = nov + zoe = život) je najmlađa od tri klasične geološke ere. Ona je zapoočela pre 65,5 miliona godina s kredsko-tercijarnim masovnim izumiranjem na kraju krede koje je označilo smrt posljednjih dinosaura na kraju mezozojskeere te traje i danas.'
    },
    {
        id: 33,
        tip:"danger",
        tipKviza: 'životinje',
        pitanje: 'Kako se zovu respiratiorni organi riba?',
        tacanOdg : 'škrge',
        vrednost: 24,
        hint: 'Imaju ih svi sportski automobili',
       obj: 'Škrge (branchia) kod vodenih kičmenjaka (riba i larvi vodozemaca) i beskičmenjaka funkcionišu kao respiratorni organi, dok se kod kopnenih kičmenjaka javljaju samo u toku embrionalnog razvića, a kasnije se redukuju.'
    },

    {
        id: 41,
        tip:"info",
        tipKviza: 'životinje',
        pitanje: 'Poređaj faze Mitoze  prema redosledu dešavanja',
        ponudjeniOdg: [
            "Citokinezis",
            "Metafaza",
            "Telofaza",
            "Profaza",
            "Anafaza"
        ],
        tacanOdg : 'Profaza,Metafaza,Anafaza,Telofaza,Citokinezis',
        vrednost: 16,
        hint: 'Potok mali anonimni tiho curi...',
       obj: 'Prema promenama u ćeliji mitoza se deli na sledeće faze:Profaza,Metafaza,Anafaza,Telofaza,Citokinezis. Među njima profaza traje najduže, a metafaza najkraće. Na samom početku mitoze hromozomi se uočavaju kao dugački konci, po čemu je i sama deoba dobila ime (grč. mitos = konac). Prve četiri faze obuhvataju podelu jedra (podela hromozoma), kariokinezu, dok je citokineza podela citoplazme.'
    },
    {
        id: 42,
        tip:"info",
        tipKviza: 'čovek',
        pitanje: 'poređaj stupnjeve embriogeneze(razvoj embriona) po redu',
        ponudjeniOdg: [
            'Gastrula',
            'Morula',
            'Zigot',
            'Blastula'
        ],
        tacanOdg : 'Zigot,Morula,Blastula,Gastrula',
        vrednost: 16,
        hint: 'Zec mali bube ganja',
       obj: 'Razvoj embriona počinje kada spermatozoid oplodi jaje, kada nastaje Zigot koji prolazi mnogo brazdanja da bi se razvila u kuglasta, dudolika grupa od 16 ćelija zvana Morula.Ona nastavlja da se deli i tek nakon formiranja šupljine okružene ćelijama  rani embrion postaje Blastula. Blastula prethodi formiranju Gastrule u kojoj se formiraju klicini listovi embriona.'
    },
    {
        id: 43,
        tip:"info",
        tipKviza: 'biljke',
        pitanje: 'Poređaj grupe biljaka po složenosti počevši od najprimitivnijih',
        ponudjeniOdg: [
            'Golosemenice',
            'Psilophyta',
            'Mahovine',
            'Paprati',
            'Skrivenosemenice'
        ],
        tacanOdg : 'Psilophyta,Mahovine,Paprati,Golosemenice,Skrivenosemenice',
        vrednost: 16,
        hint: 'Potok maleni potok golemi sledi...',
       obj: 'Psilophyta su prve biljke danas izumrle.Dalje idu Mahovine, a za njima Paprati koje se rezmnožavaju putem spora.Sledeće su Golosemenice razvijaju semena ali ona su gola(u ovu grupu spadaju Cikasi. Ginko i četinari).Najsavremenije su Skrivenosemenice- cvetnice.u ovu grupu spadaju najveći broj biljaka na planeti.'
    },
    {
        id: 14,
        tip:"success",
        tipKviza: 'biljke',
        pitanje: 'Kako se zove jedan makromolekul koji nastaje fotositezom?',
        ponudjeniOdg: [
            'Hijaluron',
            'Meluloza',
            'Kvasac',
            'Celuloza'
        ],
        tacanOdg : 'Celuloza',
        vrednost: 4,
        hint: 'vata je 100%',
       obj: 'Celuloza je prirodni makromolekul koji nastaje fotosintezom. Sastoji se od anhidrida glukoze empirijske formule (C6H10O5)n . Celuloza pripada grupi polisaharida koji predstavljaju do 80 % suve materije biljnog sveta, a među kojima je celuloza najznačajnija.'
    },
    {
        id: 15,
        tip:"success",
        tipKviza: 'životinje',
        pitanje: 'Koja je najveća ptica letačica na svetu',
        ponudjeniOdg: [
            'Noj',
            'Albatros',
            'Oro',
            'Kolibri'
        ],
        tacanOdg : 'Albatros',
        vrednost: 4,
        hint: 'Nije Oro',
       obj: 'Albatrosi (Diomedeidae) su najčešće ptice subpolarnih voda Antarktike, iako ih se može sresti u umjerenim, pa i u tropskim morima.Najveći među njima je albatros lutalica, koji može imati raspon krila i do 3,60 m. Manje vrste mogu imati raspon krila do 2,50 m.'
    },
    {
        id: 16,
        tip:"success",
        tipKviza: 'čovek',
        pitanje: 'Koliki je broj organa u ljudskom telu?',
        ponudjeniOdg: [
            '4',
            '184',
            '79',
            '42'
        ],
        tacanOdg : '79',
        vrednost: 4,
        hint: '26 * 2 * 3 / 2 + 3 - 2',
       obj: 'U principu se smatara da postoji 5 organa u ljudskom telu, zapravo ih je 79, uljučujući i mezenteru. Mozak, srce, pluća, jetra i bubrezi su vitalni organi, ali postoji još 74 organa koji učestvuju u čuvanju našeg zdravlja'
    },
    {
        id: 24,
        tip:"warning",
        tipKviza: 'čovek',
        pitanje: 'Ako je majka krvna grupa B a otac krvna grupa AB, koje krvne grupe ne može biti njihovo dete?',
        ponudjeniOdg: [
            '13',
            '14',
            '15',
            '16'
        ],
        tacanOdg : 'slika3',
        vrednost: 8,
        hint: 'Prema mnogim mišljenjima krug je najsavršeniji oblik.',
       obj: 'Dete od svakog roditelja nasljeđuje gen A, B ili 0. Gen A i gen B su dominantni, dok je gen 0 recesivan.Da bi dete moglo biti grupa O oba roditelja moraju nositi bar po jednu kopiju ovog gena'
    },
    {
        id: 25,
        tip:"warning",
        tipKviza: 'biljke',
        pitanje: 'Izbaci uljeza',
        ponudjeniOdg: [
            '17',
            '18',
            '19',
            '20'
        ],
        tacanOdg : 'slika3',
        vrednost: 8,
        hint: 'Kod nas ga ima u botaničkoj bašti',
       obj: 'Na slikama su prikazani hrast,lipa,javor i ginko. Ginko biloba ,jedini pretstavnik svoje vrste je zapravo golosemenica dok su ostale skrivenosemenice.'
    },
    {
        id: 26,
        tip:"warning",
        tipKviza: 'životinje',
        pitanje: 'Izbaci uljeza',
        ponudjeniOdg: [
            '21',
            '22',
            '23',
            '24'
        ],
        tacanOdg : 'slika0',
        vrednost: 8,
        hint: 'ko riba u vodi!',
       obj: 'Na slikama su prikazani raža, morska krava, delfin i beluga(kit).Raža je riba a ostali su vodeni sisari.'
    },
    
    ] 
    export default pitanja