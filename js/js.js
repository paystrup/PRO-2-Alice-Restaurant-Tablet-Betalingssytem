// AOS Animate on scroll settings
AOS.init({
  duration: 850,
  once: true,
})

// Select language
menuSprog.addEventListener('click', function() {


})


// Angiver hvilket bord der bestilles til via. skærmen, er indsat i bestillingsmenuen (bestilling.html)
fetch('json/bordnr.json').then(response => {
  return response.json();
}).then(data => {
  // Arbejd med data herunder
  console.log(data.bordnumre[0]);

  // hent bordnr fra fetched json
  menuBordID.innerHTML = `
  <p> Bord nr. ${data.bordnumre[0].bordID} </p>
  `
}).catch(err => {
  // Do something for an error here
});


// Findes også i json/menukort.json - som self. kan fetches ind.. https://api.jsonbin.io/b/622e8c76a703bb67492a986f
let menu = `{
    "menu": [
      {
        "id": 1,
        "titel": "Tatar af kalv",
        "beskrivelse": "Lækker australsk wagyu, årstidens urter",
        "pris": 110,
        "ret": "forret",
        "foto": "tatar.png"
      },
      {
        "id": 2,
        "titel": "Kammusling Ceviche",
        "beskrivelse": "Kammusling vendt med chili, agurk, æble, frisk lime, ørredrogn, aromatisk koriander.",
        "pris": 120,
        "ret": "forret",
        "foto": "ceviche.png"
      },
      {
        "id": 3,
        "titel": "Bruscetta",
        "beskrivelse": "Bruscetta med hjemmebagt brød, san marzano tomater og hjemmedyrket hvidløg.",
        "pris": 80,
        "ret": "forret",
        "foto": "bruscetta.png"
      },
      {
        "id": 4,
        "titel": "Grillet Carpaccio",
        "beskrivelse": "Grillet italiensk carpaccio, drysset med parmesan, citron, peber og lækker olivenolie.",
        "pris": 110,
        "ret": "forret",
        "foto": "carpaccio.png"
      },
      {
        "id": 5,
        "titel": "Helleflynder",
        "beskrivelse": "Norsk helleflynder, asiatisk inspireret sauce, syltede bøgehatte, broccolini, sprøde chips.",
        "pris": 150,
        "ret": "hovedret",
        "foto": "helleflynder.png"
      },
      {
        "id": 6,
        "titel": "Bøf Wellington",
        "beskrivelse": "Oksemørbrad, dijonsennep, duxelles af svampe, parmaskinke, butterdej.",
        "pris": 200,
        "ret": "hovedret",
        "foto": "wellington.png"
      },
      {
        "id": 7,
        "titel": "Pasta Carbonara",
        "beskrivelse": "Lavet af frisk pasta, hjemmedyrkede æg og guanciale samt masser af frisk peber.",
        "pris": 100,
        "ret": "hovedret",
        "foto": "carbonara.png"
      },
      {
        "id": 8,
        "titel": "Boef Stroganoff",
        "beskrivelse": "Okseinderlår, vilde svampe, skalotteløg, dansk bacon og masser af fløde.",
        "pris": 120,
        "ret": "hovedret",
        "foto": "stroganoff.png"
      },
      {
        "id": 9,
        "titel": "Creme Brulée",
        "beskrivelse": "Klassisk creme brulée, saltkaramel, friske bær.",
        "pris": 80,
        "ret": "dessert",
        "foto": "brulee.png"
      },
      {
        "id": 10,
        "titel": "Havtorn Is",
        "beskrivelse": "Havtorn Is, hjemmelavet havtorn marmelade, vaffel.",
        "pris": 80,
        "ret": "dessert",
        "foto": "is.png"
      },
      {
        "id": 11,
        "titel": "Rabarber Sorbet",
        "beskrivelse": "Sorbet af hjemmedyrkede rabarber. Serveres med en sprød karamelknas.",
        "pris": 70,
        "ret": "dessert",
        "foto": "sorbet.png"
      },
      {
        "id": 12,
        "titel": "Osteplatte",
        "beskrivelse": "En platte af lækker ost fra Frankrig, Italien og Holland. Serveres med hjemmelavede kiks og marmelade.",
        "pris": 110,
        "ret": "dessert",
        "foto": "oste.png"
      },
      {
        "id": 13,
        "titel": "Kroketter",
        "beskrivelse": "Svinebryst, brunet smørmayo, Gammel Knas.",
        "pris": 50,
        "ret": "tilbehor",
        "foto": "kroketter.png"
      },
      {
        "id": 14,
        "titel": "Foccasia",
        "beskrivelse": "Hjemmebagt foccasia med oliven og havssalt.",
        "pris": 40,
        "ret": "tilbehor",
        "foto": "foccasia.png"
      },
      {
        "id": 15,
        "titel": "Flute",
        "beskrivelse": "Hjemmebagt flute. Serveres med valgfri dyppelse.",
        "pris": 40,
        "ret": "tilbehor",
        "foto": "flute.png"
      },
      {
        "id": 16,
        "titel": "Trøffel Fries",
        "beskrivelse": "Frisk estragon, havsalt, friskrevel trøffel, bernaisemayo. Serveres med valgfri dyppelse.",
        "pris": 50,
        "ret": "tilbehor",
        "foto": "fries.png"
      },
      {
        "id": 17,
        "titel": "Orangevin",
        "beskrivelse": "Et glas lækker naturlig orangevin fra Frankrig.",
        "pris": 80,
        "ret": "drikkevare",
        "foto": "orangevin.png"
      },
      {
        "id": 18,
        "titel": "Husets Rødvin",
        "beskrivelse": "Et glas af husets rødvin. Biodynamisk, rund og dejlig.",
        "pris": 80,
        "ret": "drikkevare",
        "foto": "rodvin.png"
      },
      {
        "id": 19,
        "titel": "Husets Hvidvin",
        "beskrivelse": "Et glas af husets hvidvin. Lavet med kærlighed i Frankrig. Frisk, frugtig og lækker.",
        "pris": 80,
        "ret": "drikkevare",
        "foto": "hvidvin.png"
      },
      {
        "id": 20,
        "titel": "Øko Cola",
        "beskrivelse": "En forfriskende krydret cola. Der er tilsat bygmalt for at opnå en flot mørkgylden farve og afrundet smag.",
        "pris": 25,
        "ret": "drikkevare",
        "foto": "cola.png"
      },
      {
        "id": 21,
        "titel": "Øko Rabarberbrus",
        "beskrivelse": "Naturfrisk økologisk Rabarberbrus. Intet siger sommer og sol som rabarber. ",
        "pris": 25,
        "ret": "drikkevare",
        "foto": "rabarberbrus.png"
      }
    ]
}`;

// parse så vi kan bruge data ovenfra
const aliceMenu = JSON.parse(menu);
console.log( aliceMenu.menu[1].titel )

// load forretter by default ved DOM load
window.addEventListener('DOMContentLoaded', (event) => {
  
  menuForretter.classList.add("menuItemHighlighted")

  produkterHeader.innerHTML = `
        <h2>Forretter</h2>
        <hr>
    `

    for (let i=0; i<aliceMenu.menu.length; i++){
        if ( aliceMenu.menu[i].ret == 'forret' )  {
          produkter.innerHTML += `
          <div class="produktContainer">
            <div class="produktContainerText">
                <div class="produktContainerTextHeader">
                    <h3> ${aliceMenu.menu[i].titel} </h3>
                    <h4> ${aliceMenu.menu[i].pris} kr. </h4>
                </div>

                <div>
                    <p> ${aliceMenu.menu[i].beskrivelse} </p>
                </div>

                <div class="produktContainerTextButtons">
                  <button type="button" onclick="addToBasket(
                    '${aliceMenu.menu[i].titel}',
                    '${aliceMenu.menu[i].pris}'
                  )">Tilføj</button>
                </div>
            </div>

            <div class="produktContainerPic">
            <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
            </div>

          </div>
          `
        } 
    }
});

//eventListener - til klik på menu underpunkter -> forloop gennem menukort -> hvis ret = underpunkt, så indsættes html i produkter og vises
menuForretter.addEventListener('click', function(){

    // loop igennem menupunkter, har de tilføjet highligt class, så fjernes den
    for (let i=0; i<menuSamlet.children.length; i++){
      let child = menuSamlet.children[i];
      if (child.classList.contains("menuItemHighlighted")) {
        child.classList.remove("menuItemHighlighted")
      } 
    }

    // tilføj highlight til nuværende menupunkt
    menuForretter.classList.add("menuItemHighlighted")
    
    produkter.innerHTML = ""

    produkterHeader.innerHTML = `
        <h2>Forretter</h2>
        <hr>
    `

    for (let i=0; i<aliceMenu.menu.length; i++){
        if ( aliceMenu.menu[i].ret == 'forret' )  {
          produkter.innerHTML += `
          <div class="produktContainer">
            <div class="produktContainerText">
                <div class="produktContainerTextHeader">
                    <h3> ${aliceMenu.menu[i].titel} </h3>
                    <h4> ${aliceMenu.menu[i].pris} kr. </h4>
                </div>

                <div>
                    <p> ${aliceMenu.menu[i].beskrivelse} </p>
                </div>

                <div class="produktContainerTextButtons">
                  <button type="button" onclick="addToBasket(
                    '${aliceMenu.menu[i].titel}',
                    '${aliceMenu.menu[i].pris}'
                  )">Tilføj</button>
                </div>
            </div>

            <div class="produktContainerPic">
            <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
            </div>

          </div>
          `
        } 
    }
})


// klik hovedretter
menuHovedretter.addEventListener('click', function(){

    // loop igennem menupunkter, har de tilføjet highligt class, så fjernes den
    for (let i=0; i<menuSamlet.children.length; i++){
      let child = menuSamlet.children[i];
      if (child.classList.contains("menuItemHighlighted")) {
        child.classList.remove("menuItemHighlighted")
      } 
    }

    // tilføj highlight til nuværende menupunkt
    menuHovedretter.classList.add("menuItemHighlighted")

    // reset 
    produkter.innerHTML = ""

    produkterHeader.innerHTML = `
        <h2>Hovedretter</h2>
        <hr>
    `

    for (let i=0; i<aliceMenu.menu.length; i++){
        if ( aliceMenu.menu[i].ret == 'hovedret' )  {
          produkter.innerHTML += `
          <div class="produktContainer">
            <div class="produktContainerText">
                <div class="produktContainerTextHeader">
                    <h3> ${aliceMenu.menu[i].titel} </h3>
                    <h4> ${aliceMenu.menu[i].pris} kr. </h4>
                </div>

                <div>
                    <p> ${aliceMenu.menu[i].beskrivelse} </p>
                </div>

                <div class="produktContainerTextButtons">
                  <button type="button" onclick="addToBasket(
                    '${aliceMenu.menu[i].titel}',
                    '${aliceMenu.menu[i].pris}'
                  )">Tilføj</button>
                </div>
            </div>

            <div class="produktContainerPic">
            <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
            </div>

          </div>
          `
        } 
    }
})

// klik desserter
menuDesserter.addEventListener('click', function(){

  // loop igennem menupunkter, har de tilføjet highligt class, så fjernes den
  for (let i=0; i<menuSamlet.children.length; i++){
    let child = menuSamlet.children[i];
    if (child.classList.contains("menuItemHighlighted")) {
      child.classList.remove("menuItemHighlighted")
    } 
  }

  // tilføj highlight til nuværende menupunkt
  menuDesserter.classList.add("menuItemHighlighted")

  produkter.innerHTML = ""

  produkterHeader.innerHTML = `
      <h2>Desserter</h2>
      <hr>
  `

  for (let i=0; i<aliceMenu.menu.length; i++){
      if ( aliceMenu.menu[i].ret == 'dessert' )  {
        produkter.innerHTML += `
        <div class="produktContainer">
          <div class="produktContainerText">
              <div class="produktContainerTextHeader">
                  <h3> ${aliceMenu.menu[i].titel} </h3>
                  <h4> ${aliceMenu.menu[i].pris} kr. </h4>
              </div>

              <div>
                  <p> ${aliceMenu.menu[i].beskrivelse} </p>
              </div>

              <div class="produktContainerTextButtons">
                <button type="button" onclick="addToBasket(
                  '${aliceMenu.menu[i].titel}',
                  '${aliceMenu.menu[i].pris}'
                )">Tilføj</button>
              </div>
          </div>

          <div class="produktContainerPic">
          <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
          </div>

        </div>
        `
      } 
  }
})

// klik tilbehør
menuTilbehor.addEventListener('click', function(){

  // loop igennem menupunkter, har de tilføjet highligt class, så fjernes den
  for (let i=0; i<menuSamlet.children.length; i++){
    let child = menuSamlet.children[i];
    if (child.classList.contains("menuItemHighlighted")) {
      child.classList.remove("menuItemHighlighted")
    } 
  }

  // tilføj highlight til nuværende menupunkt
  menuTilbehor.classList.add("menuItemHighlighted")

  produkter.innerHTML = ""

  produkterHeader.innerHTML = `
      <h2>Tilbehør</h2>
      <hr>
  `

  for (let i=0; i<aliceMenu.menu.length; i++){
      if ( aliceMenu.menu[i].ret == 'tilbehor' )  {
        produkter.innerHTML += `
        <div class="produktContainer">
          <div class="produktContainerText">
              <div class="produktContainerTextHeader">
                  <h3> ${aliceMenu.menu[i].titel} </h3>
                  <h4> ${aliceMenu.menu[i].pris} kr. </h4>
              </div>

              <div>
                  <p> ${aliceMenu.menu[i].beskrivelse} </p>
              </div>

              <div class="produktContainerTextButtons">
                <button type="button" onclick="addToBasket(
                  '${aliceMenu.menu[i].titel}',
                  '${aliceMenu.menu[i].pris}'
                  )">Tilføj</button>
              </div>
          </div>

          <div class="produktContainerPic">
          <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
          </div>

        </div>
        `
      } 
  }
})



// klik drikkevarer
menuDrikkevarer.addEventListener('click', function(){

  // loop igennem menupunkter, har de tilføjet highligt class, så fjernes den
  for (let i=0; i<menuSamlet.children.length; i++){
    let child = menuSamlet.children[i];
    if (child.classList.contains("menuItemHighlighted")) {
      child.classList.remove("menuItemHighlighted")
    } 
  }

  // tilføj highlight til nuværende menupunkt
  menuDrikkevarer.classList.add("menuItemHighlighted")

  produkter.innerHTML = ""

  produkterHeader.innerHTML = `
      <h2>Drikkevarer</h2>
      <hr>
  `

  for (let i=0; i<aliceMenu.menu.length; i++){
      if ( aliceMenu.menu[i].ret == 'drikkevare' )  {
        produkter.innerHTML += `
        <div id="produktContainer" class="produktContainer">
          <div class="produktContainerText">
              <div class="produktContainerTextHeader">
                  <h3 id="menuTitel"> ${aliceMenu.menu[i].titel} </h3>
                  <h4 id="menuPris"> ${aliceMenu.menu[i].pris} kr. </h4>
              </div>

              <div>
                  <p> ${aliceMenu.menu[i].beskrivelse} </p>
              </div>

              <div class="produktContainerTextButtons">
              <button type="button" onclick="addToBasket(
                '${aliceMenu.menu[i].titel}',
                '${aliceMenu.menu[i].pris}'
                )">Tilføj</button>
              </div>
          </div>

          <div class="produktContainerPic">
          <img src="media/${aliceMenu.menu[i].foto}" alt="${aliceMenu.menu[i].titel}">
          </div>

        </div>
        `
      } 
  }
})

// kurv start amount
let amount = 0
sum.innerHTML = amount // vis summen i div'en

// add order til ordrelist
function addToBasket(order, price, i) {
  // lav liste
  ordersList.innerHTML += 
  '<li class="orderItem">' + ' <button onclick="this.parentNode.remove();amount-='+ parseInt(price) +';sum.innerHTML=amount">X</button> '
  + order + ' ' +  price + ' kr.' + '</li>'
  
  // opdater 'amount'
  amount += parseInt( price ) // convert string til number
  sum.innerHTML = amount + ' kr.';

  // sessionStorage - save data in the session
  localStorage.setItem("yourOrders", orders.innerHTML)
  console.log(localStorage.getItem("yourOrders"))
}

// Betal knap gemmer også i localStorage, så det ikke kun er + knap (ellers vises det ikke i ordren senere)
gemOrdreKnap.addEventListener('click', function(){
  localStorage.setItem("yourOrders", orders.innerHTML)
  console.log(localStorage.getItem("yourOrders"))
})






