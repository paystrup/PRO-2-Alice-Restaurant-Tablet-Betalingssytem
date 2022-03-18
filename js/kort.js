// AOS Animate on scroll settings
AOS.init({
    duration: 850,
    once: true,
})

// Her leger vi at kortet er blevet accepteret, skal ikke vises i det endelige produkt ofc.
function kortAccepteret() {
    popup.style.display = "block";
}

// load funktion efter 1000ms, så der kan klikkes videre til næste side i prototypen
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(kortAccepteret, 1000)
});