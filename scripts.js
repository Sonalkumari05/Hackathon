function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '28fb7defc405f3672ffe314417e8c0b9';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = document.getElementById('city-name');
            const temperature = document.getElementById('temperature');
            const weather = document.getElementById('weather');
            const humidity = document.getElementById('humidity');
            const windSpeed = document.getElementById('windspeed');

            cityName.textContent = data.name;
            temperature.textContent = data.main.temp;
            weather.textContent = data.weather[0].description;
            humidity.textContent = data.main.humidity;
            windSpeed.textContent = data.wind.speed;

            updateWeatherImage(data.weather[0].main);
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });
}

function updateWeatherImage(weatherCondition) {
    var weatherImageElement = document.getElementById('weather-image');

    if (weatherCondition === 'Clear') {
        weatherImageElement.src = 'clear.png';
    } else if (weatherCondition === 'Clouds') {
        weatherImageElement.src = 'clouds.png';
    }
    else if (weatherCondition === 'Rain')  {
        weatherImageElement.src = 'rain.png';
    }
    else if (weatherCondition === 'Drizzle')  {
        weatherImageElement.src = 'drizzle.png';
    }
    else if (weatherCondition === 'Mist')  {
        weatherImageElement.src = 'mist.png';
    }
    else if (weatherCondition === 'Snow')  {
        weatherImageElement.src = 'snow.png';
    }
}