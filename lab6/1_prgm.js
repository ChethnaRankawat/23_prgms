async function getTemperature() {
  const cityName = document.getElementById('city_name').value;
  
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }
}

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},in&appid=e6c902fd57afd902b375024eb9d7c7d9&units=metric`;


fetch(apiURL)
  .then(response => response.json())  
  .then(data => {
   
    const tableBody = document.querySelector('#weather-table tbody');

    const cityName = data.name;
    const temperature = data.main.temp;  
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;  


    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cityName}</td>
      <td>${temperature} °C</td>
      <td>${humidity} %</td>
      <td>${weatherDescription}</td>
    `;

   
    tableBody.appendChild(row);
  })
  .catch(error => console.error('Error fetching weather data:', error));
