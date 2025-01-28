const apiKey = 'e6c902fd57afd902b375024eb9d7c7d9';  // Replace with your actual API key

// Function to get current weather data
async function getWeatherData() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    // Fetching current weather data
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();

    // If the city is not found
    if (data.cod !== 200) {
        alert(data.message);
        return;
    }

    // Displaying current weather details
    displayCurrentWeather(data);
    getForecastData(city);  // Call to fetch forecast
}

// Function to display current weather details
function displayCurrentWeather(data) {
    const currentWeatherDiv = document.getElementById('current-weather');
    const weatherDetails = `
        <p>City: ${data.name}</p>
        <p>Min Temp: ${data.main.temp_min}°C</p>
        <p>Max Temp: ${data.main.temp_max}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    currentWeatherDiv.innerHTML = weatherDetails;
}

// Function to get and display the 5-day forecast data
async function getForecastData(city) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastTable = document.getElementById('forecast-table').getElementsByTagName('tbody')[0];
    forecastTable.innerHTML = '';  // Clear previous forecast

    data.list.forEach((forecast, index) => {
        if (index % 8 === 0) {  // Get forecast for every 24 hours (8 data points = 24 hours)
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            const row = forecastTable.insertRow();
            row.insertCell(0).textContent = date;
            row.insertCell(1).textContent = `${forecast.main.temp}°C`;
        }
    });
}
