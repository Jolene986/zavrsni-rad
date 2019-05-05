# zavrsni-rad
# tema:Biološki kviz

Biološki kviz je MERN stack aplikacija čija je svrha da na zanimljii i interaktvni način proveri vaše znanje iz biologije.
Poseduje dva režima težine lakši - bez vremenskog ograničenja, i teži sa vremenskim ograničenjem za odgovaranje na pitanja.
Takođe, kviz je podeljen na 3 kategorije u kojima korisnik može da testira svoje znanje: 

 1. Biljke - poznavanje faune
 2. Životinje - zanimljiva pitanja iz životinjkog sveta
 3. Čovek - anatomija ljudskog organizma i mnoge druge teme iz atropologije

Na početnoj strani se bira željena oblast jednostavnim klikom na željenu kategoriju. Takođe, pre započinjanja kviza, korisnik 
može pogledati detaljna uputstvga iz slide menija sa leve strane. 
Klikom na željenu oblast otvara se pop up gde korisnik bira željenu težinu kviza i unosi svoj nadimak i započinje kviz. 

Postoje 4 različitih tipova pitanja kroz koje će korisnik proći, bez obzira na izabranu kategoriju:
 1. Izbor između ponuđenih odgovora 
 2. Izbor između ponuđenih slika
 3. Drag pitanja - poređati niz po račnom redu
 4. Input pitanja - korisnik upisuje u input polje tačan odgovor
 
 Tokom kviza korisnik ima opcionu pomoć - Hint dugme (jedan hint po svakom pitanju). Korišćenjem hinta, korisnik umanjuje svoj ukupan rezultat
 za 25 procenata od vrednosti koju nosi dato pitanje. Ako se desi da korisnik osvoji negativan ukupan broj bodova, biće zabeleženi i prikazani
 kao da je osvojio 0 bodova. 
 Za korisnike koji su izabrali teži režim, pojaviće se i tajmer koji slikovito prikazuje preostalo vreme koji korisnik ima da završi 
 celokupan kviz. 
 
 Po završetku kviza pojaviće se pop up koji korisniku prikazuje broj osvojenih bodova, kao i opcije vraćanja na početak, opciju pogledaj 
 tačne odgovore (gde korisnik može saznati sve tačne odgovore za kategoriju koju je radio, kao i kratko objašnjenje svakog pitanja), i
 pogledaj rang listu.
 Na stranici rang lista pojavljuje se tabela iz baze na kojoj se prikazuju rangirani učesnici za datu oblast i težinu kviza. Korisnik 
 koji je radio kviz je vizuelno izdvojen na tabeli. Takođe, korisnik može pogledati i rang liste za druge oblasti, selektovanjem kategorije
 iz padajućeg menija. Sa ove strane je takođe moguće otići na stranicu sa tačnim odgovorima, vratiti se na početnu stranu ili pogledati stranu 
 Tvoji rezultati.
 Na strani Tvoji rezultati u tabeli su prikazane informacije iz Local Sorage-a (datum, oblast, težina kviza i broj bodova). 
 Informacije koje se ovim vidom prikazuju su vezane za nadimak korisnika koji je koristio. 
 Klikom na crveni X na tabeli, selektovani unos biće izbrisan iz Local Storage-a.
 
 Za izradu projekta korišćeni su: 
 Frontend: HTML, CSS, JavaScript, ReactJS, React Router, React Sortable HOC, Axios
 Backend: Node.js, Express.js, Mongoose, MongoDB (Atlas)
 
 
