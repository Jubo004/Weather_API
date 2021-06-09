// API Keys and API base 
const apiKey = '78afb09dec647f997e7eb3fad72b2f1a'
const apiBase = 'https://api.openweathermap.org/data/2.5/weather'
// Function For Search City By API 
const getWeatherInfo = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

// Client Input generate
const searchWeather = document.getElementById('searchWeather')
searchWeather.addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value;
    getWeatherInfo(locationInput)
})
// collecting data from form and converted into weather data
const updateUI = data => {
    document.getElementById('showLocation').innerText = data.name || "Unknown Location";
    document.getElementById('degree').innerText = data.main.temp;
    document.getElementById('weatherStatus').innerText = data.weather[0].main
    document.getElementById('weatherPNG').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    document.getElementById('locationInput').value = "";
}
getWeatherInfo('Dhaka')
