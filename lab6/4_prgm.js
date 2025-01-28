const apiKey = 'e6c902fd57afd902b375024eb9d7c7d9'; 
let tempChart;

async function getTemperature() {
  const cityName = document.getElementById('city-name').value;
  
  if (!cityName) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},in&appid=${apiKey}&units=metric`);

    const data = await response.json();
    const temperatures = getTemperaturesForNextFiveTimes(data);
    updateChart(temperatures);
  } catch (err) {
    alert(err.message);
    console.error("Error fetching data: ", err);
  }
}

// Extract temperature data for the next 5 forecasted times
function getTemperaturesForNextFiveTimes(data) {
  const temperatures = [];
  
  // We can assume the data.list contains weather forecasts every 3 hours
  // Extracting temperatures for the first 5 times
  for (let i = 0; i < 5; i++) {
    temperatures.push(data.list[i].main.temp);
  }
  
  return temperatures;
}

function updateChart(temperatures) {
  const ctx = document.getElementById('temperatureChart');

  tempChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // X-axis labels for times
      datasets: [{
        label: 'Temperature (°C)',
        data: temperatures, // Temperature data
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
