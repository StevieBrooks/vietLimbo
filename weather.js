
const city = document.querySelector('.city');
const weatherToday = document.querySelector('.weather-today');
const weather3Day = document.querySelector('.weather-3day');
const submit = document.querySelector('.submit');
const displayWeather = document.querySelector('.display-weather');

// sort city list alphabetically!

submit.addEventListener('click', () => {
    if(city.value.length > 0 && weatherToday.checked) {
        console.log(city.value);
        const cityChoice = city.value;
    
        const findWeather = new XMLHttpRequest();
    
        findWeather.open("GET", `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityChoice}`);
    
        findWeather.onload = function() {
            if (this.status == 200) {
                const weatherResponse = JSON.parse(this.responseText);
                console.log(weatherResponse);
                // make function to toggle between degrees c/f
                displayWeather.innerHTML = `
                    <img src="${weatherResponse.current.condition.icon}">
                    <h3>${weatherResponse.location.name} Weather: ${weatherResponse.current.condition.text}</h3>
                    <ul>
                        <li>Local Time: ${weatherResponse.location.localtime}</li>
                        <li>Timezone: ${weatherResponse.location.tz_id}</li>
                    </ul>
                    <h5>Weather Data:</h5>
                    <ul>
                        <li>Temperature: ${weatherResponse.current.temp_c}</li>
                        <li>Feels Like: ${weatherResponse.current.feelslike_c}</li>
                        <li>Humidity: ${weatherResponse.current.humidity}</li>
                        <li>Precipitation (mm): ${weatherResponse.current.precip_mm}</li>
                        <li>Wind Direction: ${weatherResponse.current.wind_dir}</li>
                        <li>Wind Speed (mph): ${weatherResponse.current.wind_mph}</li>
                        <li>UV: ${weatherResponse.current.uv}</li>
                    </ul>
                `
            }
        };
        // stick in friendly hint random generator - eg. sunny - 'perfect beach weather'
    
        findWeather.setRequestHeader("X-RapidAPI-Key", "cd323733eemsh2260acaef042b68p173ddajsn26dd1647e98f");
        findWeather.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    
        findWeather.send();
    }
});

submit.addEventListener('click', () => {
    if(city.value.length > 0 && weather3Day.checked) {
        console.log(city.value);
        const cityChoice = city.value;
    
        const findWeather = new XMLHttpRequest();
    
        findWeather.open("GET", `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityChoice}&days=3`);
    
        findWeather.onload = function() {
            if (this.status == 200) {
                const weatherResponse = JSON.parse(this.responseText);
                console.log(weatherResponse);
                displayWeather.innerHTML = `
                <ul>
                    <li>Local Time: ${weatherResponse.location.localtime}</li>
                    <li>Timezone: ${weatherResponse.location.tz_id}</li>
                </ul>
                <div class="forecast-card">
                    <h5>Today: ${weatherResponse.forecast.forecastday[0].date}</h5>
                    <img src="${weatherResponse.forecast.forecastday[0].day.condition.icon}">
                    <p>${weatherResponse.forecast.forecastday[0].day.condition.text}</p>
                    <ul>
                        <li>Avg Temp: ${weatherResponse.forecast.forecastday[0].day.avgtemp_c}</li>
                        <li>Avg Visibility: ${weatherResponse.forecast.forecastday[0].day.avgvis_miles}</li>
                        <li>Precipitation (mm): ${weatherResponse.forecast.forecastday[0].day.totalprecip_mm}</li>
                        <li>Wind Speed (mph): ${weatherResponse.forecast.forecastday[0].day.maxwind_mph}</li>
                        <li>UV: ${weatherResponse.forecast.forecastday[0].day.uv}</li>
                    </ul>
                    <button class="hour-button">Hourly Forecast</button>
                </div>
                <div class="forecast-card">
                    <h5>Tomorrow: ${weatherResponse.forecast.forecastday[1].date}</h5>
                    <img src="${weatherResponse.forecast.forecastday[1].day.condition.icon}">
                    <p>${weatherResponse.forecast.forecastday[1].day.condition.text}</p>
                    <ul>
                        <li>Avg Temp: ${weatherResponse.forecast.forecastday[1].day.avgtemp_c}</li>
                        <li>Avg Visibility: ${weatherResponse.forecast.forecastday[1].day.avgvis_miles}</li>
                        <li>Precipitation (mm): ${weatherResponse.forecast.forecastday[1].day.totalprecip_mm}</li>
                        <li>Wind Speed (mph): ${weatherResponse.forecast.forecastday[1].day.maxwind_mph}</li>
                        <li>UV: ${weatherResponse.forecast.forecastday[1].day.uv}</li>
                    </ul>
                    <button class="hour-button">Hourly Forecast</button>
                </div>
                <div class="forecast-card">
                    <h5>Day After: ${weatherResponse.forecast.forecastday[2].date}</h5>
                    <img src="${weatherResponse.forecast.forecastday[2].day.condition.icon}">
                    <p>${weatherResponse.forecast.forecastday[2].day.condition.text}</p>
                    <ul>
                        <li>Avg Temp: ${weatherResponse.forecast.forecastday[2].day.avgtemp_c}</li>
                        <li>Avg Visibility: ${weatherResponse.forecast.forecastday[2].day.avgvis_miles}</li>
                        <li>Precipitation (mm): ${weatherResponse.forecast.forecastday[2].day.totalprecip_mm}</li>
                        <li>Wind Speed (mph): ${weatherResponse.forecast.forecastday[2].day.maxwind_mph}</li>
                        <li>UV: ${weatherResponse.forecast.forecastday[2].day.uv}</li>
                    </ul>
                    <button class="hour-button">Hourly Forecast</button>
                </div>
                `
            }
        };
    
        
        findWeather.setRequestHeader("X-RapidAPI-Key", "cd323733eemsh2260acaef042b68p173ddajsn26dd1647e98f");
        findWeather.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    
        findWeather.send();
    }
});

