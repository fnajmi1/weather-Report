// script.js

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "YOUR_API_KEY";
    const city = "New Delhi";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").textContent = data.name;
            document.getElementById("date").textContent = new Date().toLocaleDateString();
            document.getElementById("temp-value").textContent = Math.round(data.main.temp);
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").textContent = `Wind: ${data.wind.speed} km/h`;
            document.getElementById("icon").src = `https://api.openweathermap.org/data/2.5/weather?q=London${data.weather[2].icon}.png`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});
