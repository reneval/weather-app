Promise.all([
    fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f'),
    fetch('http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f'),
    fetch('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f'),
])
    .then(resp => Promise.all(resp.map(res => res.json())))
    .then(data => data.map(render).join(""))
    .then(html => document.getElementById("cities-weather").innerHTML = html)


const render = cityData => {
    return `
    <div class="city-row">
        <div class="city-name">${cityData.name}</div>
        <div class="city-temp">
            <div class="city-temp-number">${cityData.main.temp}</div>
            <div class="city-temp-description">${cityData.weather[0].description}</div>
        </div>
        <div class="temp-icon">
            <img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
        </div>
    </div>`
}






