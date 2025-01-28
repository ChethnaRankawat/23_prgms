const apiKey = 'e6c902fd57afd902b375024eb9d7c7d9';  // Replace with your actual API key

// Function to fetch weather data for the given city
async function getWeatherData() {
    const city = document.getElementById('city').value;  // Get the city name from input
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    // OpenWeatherMap API URL to get current weather data for the given city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);  // Fetch the data
        const data = await response.json();  // Parse the response JSON

        // If the city is not found or an error occurs
        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        // Display weather details on the webpage
        displayWeatherDetails(data);
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
        console.error("Error:", error);
    }
}

// Function to display the weather details
function displayWeatherDetails(data) {
    const weatherDetailsDiv = document.getElementById('weather-details');

    // Construct weather details string
    const weatherInfo = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Min Temperature:</strong> ${data.main.temp_min}°C</p>
        <p><strong>Max Temperature:</strong> ${data.main.temp_max}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;
    
    // Set the inner HTML of the weather details div
    weatherDetailsDiv.innerHTML = weatherInfo;
}
