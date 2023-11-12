

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
    showModal(1)
});

venus.addEventListener("click", () => {
    showModal(2)
});

earth.addEventListener("click", () => {
    showModal(3)
});

mars.addEventListener("click", () => {
    showModal(4)
});

jupiter.addEventListener("click", () => {
    showModal(5)
});

saturn.addEventListener("click", () => {
    showModal(6)
});

uranus.addEventListener("click", () => {
    showModal(7)
});

neptune.addEventListener("click", () => {
    showModal(8)
});

const BASE_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/'

async function fetchData() {
    const resp = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
      method: "GET",
      headers: {
        "x-zocom": "solaris-1Cqgm3S6nlMechWO"
      }
    });
  
    if (resp.ok) {
      return resp.json();
    } else {
      console.error("Error fetching data:", resp.status);
      return [];
      console.log()
    }
  };
  
  let planetsData = [];
  console.log(planetsData)

  
  fetchData()
    .then(data => {
      planetsData = data.bodies;
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  

  function showModal(planetInfo) {
      let planet = planetsData[planetInfo];
      console.log(planetsData)
      console.log(planet)
      modalName.textContent = planet.name;
      modalNameLatin.textContent = planet.latinName + ' (latin)';
      modalInfo.textContent = planet.desc;
      modalCircumferenceTitle.textContent = 'OMKRETS';
      modalCircumferenceInfo.textContent = planet.circumference + ' km';
      modalDistansSunTitle.textContent = 'KM FRÅN SOLEN';
      modalDistansSunInfo.textContent = planet.distance + ' km';
      modalTempMaxTitle.textContent = 'MAX TEMPERATUR (dag)';
      modalTempMaxInfo.textContent = planet.temp.day + 'C';
      modalTempMinTitle.textContent = 'MIN TEMPERATUR (natt)'
      modalTempMinInfo.textContent = planet.temp.night + 'C';
      modalMoonsTitle.textContent = 'MÅNAR'
      modalMoonsInfo.textContent = planet.moons;
      modal.style.display = "block";
  };
