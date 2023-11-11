

const sun = document.getElementById('sun-el');
const mercury = document.getElementById('mercury-el');
const venus = document.getElementById('venus-el');
const earth = document.getElementById('earth-el');
const mars = document.getElementById('mars-el');
const jupiter = document.getElementById('jupiter-el');
const saturn = document.getElementById('saturn-el');
const uranus = document.getElementById('uranus-el');
const neptune = document.getElementById('neptune-el');
const modal = document.getElementById('modal-el');
const modalName = document.getElementById('planet-name');
const modalNameLatin = document.getElementById('planet-name-latin');
const modalInfo = document.getElementById('planet-info');
const modalCircumferenceTitle = document.getElementById('circumference-title');
const modalCircumferenceInfo = document.getElementById('circumference-info');
const modalDistansSunTitle = document.getElementById('distans-sun-title');
const modalDistansSunInfo = document.getElementById('distans-sun-info');
const modalTempMaxTitle = document.getElementById('temperature-max-title');
const modalTempMaxInfo = document.getElementById('temperature-max-info');
const modalTempMinTitle = document.getElementById('temperature-min-title');
const modalTempMinInfo = document.getElementById('temperature-min-info');
const modalMoonsTitle = document.getElementById('moons-title');
const modalMoonsInfo = document.getElementById('moons-info');

sun.addEventListener("click", () => {
    showModal(0)
});

mercury.addEventListener("click", () => {
    showModal(0)
});

venus.addEventListener("click", () => {
    showModal(0)
});

earth.addEventListener("click", () => {
    showModal(0)
});

mars.addEventListener("click", () => {
    showModal(0)
});

jupiter.addEventListener("click", () => {
    showModal(0)
});

saturn.addEventListener("click", () => {
    showModal(0)
});

uranus.addEventListener("click", () => {
    showModal(0)
});

neptune.addEventListener("click", () => {
    showModal(0)
});

const BASE_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/'

let bodies = [];

async function getSolarisBodies() {
  let resp = await fetch(`${BASE_URL}/bodies`, {
    method: "GET",
    headers: { "x-zocom": "solaris-1Cqgm3S6nlMechWO" },
  });

  const data = await resp.json()
  bodies = data.bodies;

}
getSolarisBodies().then(() => {
    console.log(bodies)
});









