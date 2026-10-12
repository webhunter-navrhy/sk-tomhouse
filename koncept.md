# Koncept – TomHouse s. r. o. (zemné práce, dlažba, požičovňa), 12. 10. 2026

Podklad: odpoveď klienta na prvú ukážku (UID 9709): rekonštrukcie preč, dôraz na zemné a výkopové práce,
zámkovú dlažbu a prenájom techniky; tmavé pozadie sa mu páči. Vlastné fotky zatiaľ neposlal → ilustračné
fotky z Unsplash (zdroje foto/zdroje.txt), web je postavený tak, aby ich šlo 1:1 vymeniť.

## Tri koncepty
1. **Rez terénom** – stránka je priečny rez pozemkom: zhora zámková dlažba, pod ňou lôžko, štrkový podklad
   a rastlá zemina; každá vrstva je jedna služba (dlažba → podklad a hutnenie → výkop). Tmavá zem = tmavé
   pozadie, ktoré chce klient.
2. **Výdajňa požičovne** – web ako tabuľa pri výdajnom okienku: stroje a náradie ako visačky s hmotnosťou,
   služby ako „čo si s tým urobíte“.
3. **Stavebný denník** – zápis jedného dvora od výkopu po hotovú dlažbu, deň po dni.

## Výber: 1 + visačky z 2 v sekcii požičovne
Rez terénom spája všetky tri jeho činnosti jedným príbehom (vykopať → podložiť → zhutniť → vydláždiť)
a prirodzene nesie tmavé pozadie (zem), ktoré si klient výslovne pochválil. Je to tmavý web s opodstatnením
v obore a v prianí klienta, nie „tmavý luxus“: žiadna zlatá, akcent je tehlovo-oranžová farba ílu/výstražnej
farby strojov. Denník (3) potrebuje skutočné fotky z jednej zákazky, ktoré nemáme.
Požičovňa (jeho reálne čísla 60 / 160 / 280 / 400 kg, bagre 1 / 2 / 3,5 t) je druhý signature moment:
hmotnosti ako stĺpce v mierke, nie karty s ikonami.

## Skladba sekcií
1. Hlavička: názov firmy textom vľavo (logo nemá), navigácia Práce · Požičovňa · Kontakt, telefón vpravo.
2. Úvod: veľká fotka bagra vo výkope, h1 „Zemné práce, dlažba a požičovňa techniky“, Bohunice / Ilava,
   dve akcie (dopyt, požičovňa). Spodný okraj úvodu = horná hrana rezu.
3. **Rez terénom (signature 1):** SVG/CSS vrstvy (dlažba, lôžko, štrkodrvina, zemina) s popisnými čiarami;
   každá vrstva odkazuje na blok služby. Pri scrolle sa vrstvy postupne „uložia“ (CSS view timeline,
   bez pinningu).
4. Služby po vrstvách: Zemné a výkopové práce (fotka) / Zámková dlažba (fotka) / Autodoprava a odvoz zeminy.
   Striedanie fotka vľavo / vpravo, nie tri rovnaké karty.
5. **Požičovňa (signature 2):** svetlejší pás (piesok) – vibračné dosky 60–400 kg ako stĺpce v mierke,
   pech, rezačky; vedľa toho stroje s obsluhou: bagre 1 / 2 / 3,5 t, nakladač, autodoprava.
   Bez cien (nemáme ich), s výzvou „opýtajte sa na voľný termín“.
6. Dopyt s fotkou pozemku + kontakt + mapa Bohunice.
7. Pätička: IČO, adresa, konateľ.

## Písmo, farby, fotky
- Oswald 500 (verzálky v nadpisoch, prestrkanie +0,02) + Public Sans 400/600. Obe v teste háčkov OK
  (typografia.md, 10. 10.). Oswald v registri zatiaľ nebol, posledné weby: Archivo 800, Schibsted, Young Serif.
- Farby: zem #14120f, tmavá hlina #1f1b16, text #efe9df, piesok #d9c9a8 (svetlý pás požičovne),
  akcent íl #e2672c (len tlačidlá, popisné čiary, čísla hmotností).
- Fotky: ilustračné Unsplash, jednotná gradácia (mierne stlmené, teplé), bez nápisov a cudzích
  log na strojoch kde sa dá. Na webe pruh „fotky sú ilustračné, nahradíme Vašimi“ (návrh).

## Zakázané vzory
- Tmavé pozadie nie je vzor zo zoznamu, ale je to výnimka zo „svetlého defaultu“: zdôvodnenie vyššie
  (klient ho chce, obor = zem).
- Čísla 60 / 160 / 280 / 400 kg a 1 / 2 / 3,5 t nie sú „štatistiky s countermi“: sú to parametre
  strojov od klienta, bez animovaného počítania.
- Žiadne marquee, zrno, 01/02/03, pilulková navigácia, polaroidy.

## Porovnanie
- Schválené: SK účtovníctvo v2 (jeden jasný princíp), Náborový web (foto-led, veľké písmo) → berieme
  foto-led úvod a jeden nápad naprieč stránkou.
- Odmietnuté: „tmavý luxus“ (Zábranský, Auren) → bez zlatej, bez serifu, akcent ílový; „Dielňa“ SK stavba
  (z hlavy, bez fotiek) → fotky nesú stránku.
- Posledné weby v registri: Calibra (mapa trasy, Archivo), SPS Trans (vzorkovník, Young Serif), HaK
  (protokol, Schibsted) → iná skladba aj písmo.
