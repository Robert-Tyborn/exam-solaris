const BASE_URL =  'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/'

async function getSolarisBodies() {
    let resp = await fetch(`${BASE_URL}/bodies`, {
        method: "GET",
        headers: {"x-zocom": "solaris-1Cqgm3S6nlMechWO"},
    });
    const data = await resp.json()
}
const data = getSolarisBodies()

console.log(data)