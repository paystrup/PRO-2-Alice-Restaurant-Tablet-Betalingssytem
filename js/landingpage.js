// Alert til visitor om opløsning etc.

function getResolution() {
    alert("Prototypen bør ses i 4k portrait mode 2160 x 3840. Din skærmstørrelse er pt. : " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
}

document.addEventListener("DOMContentLoaded", () => {
    getResolution();
});

// GSAP til animationer på frontsiden når den genindlæses
// her defineres gsap timeline og globale settings
let tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: 0.5}})

// animation af clippaths, opacity etc. så elementet vises, CTA kommer forskudt
tl.to('.logotop', { opacity: 1, y: 0, duration: 0.5})
tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})
tl.to('.landingcta', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1})

// API integration fra api.openweathermap.org - data over Aarhus
fetch("https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=8b54b7e60b7f6a8cff52734f0a34c50b").then(response => {
    return response.json();
}).then(data => {

    // Work with JSON data here
    console.log(data); // show what's in the json

    //formattering af grader, fjern komma med toFixed
    var tempData = data.main.temp
    let tempCalc = tempData.toFixed(1)
    
    vejrInfo1.innerHTML = `
        <div class="weatherInfo">
        <marquee width="2160px" direction="right" scrollamount="50"> Velkommen til Alices Restaurant. ${data.name}, ${data.sys.country}. Vejret lige nu er ${tempCalc}&deg</marquee>
        </div>
    `

}).catch(err => {
    // Besked ved error
    console.log('There was an error: ' + err);
});