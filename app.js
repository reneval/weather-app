// Fetch Data
// ---
// App
// ----
// Render


const onResultReceved = (data)=> {
    XMLHttpRequest(url2, (data)=> {
        XMLHttpRequest(url, (data)=> {
            draw(data)


        })
    })
}
XMLHttpRequest(url,onResultReceved )



const api = () => {
 return fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f')
     .then(response=>response.json())
}

function app() {
    let cityData = []
    api()
        .then((data) => {
            cityData = data
            console.log(data)
        })
    render()
}


const city = {
    name: "Kyiv",
    description: "overcast clouds",
    "temp": 283.88,
    "icon": "10d"
}


function render() {
    document.getElementById("cities-weather").innerHTML = renderCity(city) + renderCity(city) + renderCity(city)
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




