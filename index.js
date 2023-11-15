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
const closeModal = document.getElementById('close-modal');
const bodyElem = document.querySelector('body');
const modalName = document.getElementById('planet-name');
const modalNameLatin = document.getElementById('planet-name-latin');
const modalInfo = document.getElementById('planet-info');
const modalCircumferenceTitle = document.getElementById('circumference-title');
const modalCircumferenceInfo = document.getElementById('circumference-info');
const modalDistanceSunTitle = document.getElementById('distance-sun-title');
const modalDistanceSunInfo = document.getElementById('distance-sun-info');
const modalTempMaxTitle = document.getElementById('temperature-max-title');
const modalTempMaxInfo = document.getElementById('temperature-max-info');
const modalTempMinTitle = document.getElementById('temperature-min-title');
const modalTempMinInfo = document.getElementById('temperature-min-info');
const modalMoonsTitle = document.getElementById('moons-title');
const modalMoonsInfo = document.getElementById('moons-info');

sun.addEventListener("click", () => {
    fetchDataAndShowModal(0);
});
mercury.addEventListener("click", () => {
    fetchDataAndShowModal(1);
});
venus.addEventListener("click", () => {
    fetchDataAndShowModal(2);
});
earth.addEventListener("click", () => {
    fetchDataAndShowModal(3);
});
mars.addEventListener("click", () => {
    fetchDataAndShowModal(4);
});
jupiter.addEventListener("click", () => {
    fetchDataAndShowModal(5);
});
saturn.addEventListener("click", () => {
    fetchDataAndShowModal(6);
});
uranus.addEventListener("click", () => {
    fetchDataAndShowModal(7);
});
neptune.addEventListener("click", () => {
    fetchDataAndShowModal(8);
});

const BASE_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/';

//Calls fetchApiKey function and declares variable apiKey 
fetchApiKey().then(key => {
  apiKey = key;
  console.log("Got API key: " + apiKey);
}).catch(error => {
  console.error("Error fetching key:", error);
});

//Fetches an API KEY
async function fetchApiKey() {
  const url = `${BASE_URL}keys`;
  try {
    const resp = await fetch(url, { method: "POST" });
    if (resp.ok) {
      const data = await resp.json();
      return data.key;
    } else {
      console.error("Error:", resp.status);
    }
  } catch (error) {
    console.error("Error fetching key:", error);
  }
};

//Fetches data from the API using the API KEY and URL
async function fetchData(key) {
    console.log("Reveived API key as parameter: " + key);
    const resp = await fetch(`${BASE_URL}/bodies`, {
      method: "GET",
      headers: {
        "x-zocom": key,
      }
    });
  
    if (resp.ok) {
      return resp.json();
    } else {
      console.error("Error fetching data:", resp.status);
      return [];
    }
  };
 
//On planet click, calls fetchData function and declares variable planetsData with the data returned
//then calls showModal function using the index parameteer (planetInfo)
function fetchDataAndShowModal(planetInfo) {
    fetchData(apiKey)
        .then(data => {
            planetsData = data.bodies;
            showModal(planetInfo);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};
//Receives the indexposition of a planet clicked to get data from the object in the array we get from the API, 
//and shows this objects data in the modal
function showModal(planetInfo) {
    let planet = planetsData[planetInfo];
    modalName.textContent = planet.name;
    modalNameLatin.textContent = planet.latinName + ' (latin)';
    modalInfo.textContent = planet.desc;
    modalCircumferenceTitle.textContent = 'OMKRETS';
    modalCircumferenceInfo.textContent = planet.circumference + ' km';
    modalDistanceSunTitle.textContent = 'KM FRÅN SOLEN';
    modalDistanceSunInfo.textContent = planet.distance + ' km';
    modalTempMaxTitle.textContent = 'MAX TEMPERATUR (dag)';
    modalTempMaxInfo.textContent = planet.temp.day + 'C';
    modalTempMinTitle.textContent = 'MIN TEMPERATUR (natt)'
    modalTempMinInfo.textContent = planet.temp.night + 'C';
    modalMoonsTitle.textContent = 'MÅNAR';
    modalMoonsInfo.textContent = planet.moons.join(", ");
    modal.style.display = "block";
    document.addEventListener("keydown", closeModalOnEscape);
    console.log(planetsData, planet);
};

//Closes the modal by clicking the X-button in the modal's top right corner
closeModal.addEventListener('click', () => {
     modal.style.display = 'none';
});

//Closes the modal using double click from the mouse anywhere in the screen
bodyElem.addEventListener('dblclick', (event) => {
    modal.style.display = 'none';
});

//Closes the modal using input from the ESC and SPACE buttons
function closeModalOnEscape(event) {
    if (event.key === "Escape" || event.key === " ") {
      modal.style.display = "none";
    };
  };
 