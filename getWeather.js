function getWeather() {
  const apiKey = "cd1083e4bf6533d3862f369998e056df";
  const location = document.getElementById("cityInput").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weather-info");
  weatherInfoDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

 document.getElementById("#getWeatherBtn").addEventListener("click" , function(){
weather.search()
 });


