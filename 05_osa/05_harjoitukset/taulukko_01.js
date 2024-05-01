// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
teamMembers.forEach(tulostaKonsoliin)

function tulostaKonsoliin (tulostettava) {
      console.log(tulostettava);
}


// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:

let ekajasen = teamMembers.shift();

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:

let vikajasen = teamMembers.pop();

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:

teamMembers.add("Aleksi");

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:

teamMembers.push("Lili");

ei lisäillä mitään Lindoja

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:

Array uusiTaulukko = teamMembers.map();

uusiTaulukko.shift();
uusiTaulukko.shift();

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

let miikanIndeksi = teamMembers.indexOf("Miikka");

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

let onkoJaakkoa = teamMembers.indexOf("Jaakko");

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:

let miikanIndeksi = teamMembers.indexOf("Miikka");

teamMembers.splice(miikanindeksi, 1, "Karoliina", "Bettina");

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

teamMembers.push("Hemmo");
let taulukko = []

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:

let kopioituTaulukko = teamMembers.slice(0);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:

teamMembers.concat(newMembers);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:

let jukanEsiintymät = []

teamMembers.forEach(jukanetsinta);

function jukanetsinta(item) {
  if (item == "Jukka") {
  jukanEsiintymat.push(item.index); tää indeksijuttu ei ehkä toimi, mut idiksenä on palauttaa listaan esiintymän indeksi eli lokaatio eikä itse esiintymää
  tai jukanEsiintymat.push(item);
  }}
// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

jasenetIsoilla = teamMembers.map(toUpperCase);

tai 

teamMembers.forEach(isoiksi);

function isoiksi(item) {
  item = item.toUpperCase;
}
