const CITIES_IDS = {
    KYIV: '703448',
    LONDON: '2643743',
    NY: '5128638'
}

const mapApiDataToModel =(apiData =>{
    return {
        name: apiData.name,
        description: apiData.weather[0].description,
        temp: apiData.main.temp,
        icon: apiData.weather[0].icon
    }
})


const getCityUrl = (cityId) => {
    return `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=bf35cac91880cb98375230fb443a116f`
}

const getDataFromApi = () => {
    const kyivPromise = fetch(getCityUrl(CITIES_IDS.KYIV)).then(resp=>resp.json())
    const londonPromise = fetch(getCityUrl(CITIES_IDS.LONDON)).then(resp=>resp.json())
    const nyPromise = fetch(getCityUrl(CITIES_IDS.NY)).then(resp=>resp.json())
    return Promise.all([kyivPromise, londonPromise, nyPromise])
}

function app() {
    getDataFromApi()
        .then(cityDataArray=>cityDataArray.map(cityData=>mapApiDataToModel(cityData)))
        .then(citiesData=>render(citiesData))
}

// citiesData = Array[3]
function render(citiesData) {
    let html = ""

    citiesData.forEach(city=>{
      html = html + renderCity(city)
    })

    document.getElementById("cities-weather").innerHTML = html
}

function renderCity(city) {
    const iconUrl = `http://openweathermap.org/img/wn/${city.icon}@2x.png`
    return `
    <div class="city-row">
        <div class="city-name">${city.name}</div>
        <div class="city-temp">
            <div class="city-temp-number">${city.temp}</div>
            <div class="city-temp-description">${city.description}</div>
        </div>
        <div class="temp-icon">
            <img src="${iconUrl}">
        </div>
    </div>
`
}

app()




