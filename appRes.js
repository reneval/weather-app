const getCityUrl = cityId => `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f`
const CITIES_IDS = ['703448','2643743','5128638']
const render = cityData => {
    return `
    <div class="city-row">
        <div class="city-name">${cityData.name}</div>
        <div class="city-temp">
            <div class="city-temp-number">${cityData.main.temp}</div>
            <div class="city-temp-description">${cityData.weather[0].description}</div>
        </div>
         <img class="temp-icon" src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
    </div>`
}
Promise.all([...CITIES_IDS.map(id=> fetch(getCityUrl(id)))])
    .then(resp => Promise.all(resp.map(res => res.json())))
    .then(data => data.map(render).join(""))
    .then(html => document.getElementById("cities-weather").innerHTML = html)







