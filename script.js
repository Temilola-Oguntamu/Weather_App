const button = document.getElementById('getWeatherBtn');

button.addEventListener("click" , getWeather);

function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (!cityName) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'cd1083e4bf6533d3862f369998e056df'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const city = data.name;
            const temperature = data.main.temp;
            const weatherCondition = data.weather[0].description;
            const weatherInfo = `City: ${city}, 
            Current Temperature: ${temperature}°C, 
            Weather: ${weatherCondition}`;
            document.getElementById('weatherInfo').innerText = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerText = `Error: ${error.message}`;
        });
    }