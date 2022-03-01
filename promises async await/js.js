let promise = fetchCity()
async function coordinates(city) { let result = await fetch(`https://geocode.xyz/${city}?json=1`); }
if (response.ok) {
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
async function fetchCity(){
    const response = await fetch(`https://geocode.xyz/omaha?json=1`);

    const data = await response.json();
    console.log(data.latt, data.longt);
}

fetchCity();