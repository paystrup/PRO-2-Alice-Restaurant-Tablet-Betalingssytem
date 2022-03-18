AOS.init({
  duration: 850,
  once: true,
})

// Angiver hvilket bord der bestilles til via. skærmen, er indsat i bestillingsmenuen (bestilling.html)
fetch('json/bordnr.json').then(response => {
    return response.json();
  }).then(data => {
    // Arbejd med JSON data herunder
    console.log(data.bordnumre[0].bordID);
  
    ditbord.innerHTML = `
    <p> Velbekomme. Køkkenet forbereder din mad med det samme, så tag endelig plads ved <strong> bord nr. ${data.bordnumre[0].bordID}!</strong></p>
    `
  }).catch(err => {
    // Do something for an error here
});

// Random ordrenr generator til prototypen - 5 cifre
let mitOrdreNr = '<p>Ordre nr:' + ' ' + (Math.floor(Math.random() * 90000) + 10000) + '</p>';
console.log(mitOrdreNr);

ordrenr.innerHTML = mitOrdreNr

// redirect tilbage til start efter timer (6000ms), kan irl. kobles op til idletimer for brugeren af skærmen
setTimeout(function () {
  window.location.href = "index.html"; 
}, 6000); 

  