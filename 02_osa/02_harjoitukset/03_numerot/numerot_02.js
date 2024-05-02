// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


function fahrenheitToCelsius(fahrenheit) {
  return 1.0*((Fahrenheit - 32) * 5/9);
}

// Ja sama nuolifunktiona
fahrenheitToCelsius = fahrenheit => 1.0*((Fahrenheit - 32) * 5/9);

// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
