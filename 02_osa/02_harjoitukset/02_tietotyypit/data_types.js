/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 38;
let name = "Lalaa";
let isStudent = True;
let hobbies = [
  "tanssi", 
  "judo",
  "jousiammunta"
];

let info = { schoolName: "Koulu", grade: 5};

console.log(age);
console.log(name);
console.log(isStudent);
console.log(hobbies);
console.log(info);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof hobbies);
console.log(typeof info);
