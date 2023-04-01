
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
                displayWeather.innerHTML = `
                    <img src="${weatherResponse.current.condition.icon}">
                    <h3>${weatherResponse.location.name} Weather: ${weatherResponse.current.condition.text}</h3>
                    <ul>
                        <li>Temperature: ${weatherResponse.current.temp_c}</li>
                        <li>Feels Like: ${weatherResponse.current.feelslike_c}</li>
                    </ul>
                `
            }
        };
    
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
            }
        };
    
        
        findWeather.setRequestHeader("X-RapidAPI-Key", "cd323733eemsh2260acaef042b68p173ddajsn26dd1647e98f");
        findWeather.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    
        findWeather.send();
    }
});

