const container = document.querySelector('.container');
const inputPart = document.querySelector('.input-part');
const input = document.querySelector('.input');
const btn = document.querySelector('button');
const degrees = document.querySelector('.degrees');
const weatherDesc = document.querySelector('.weather');
const img = document.querySelector('img');
const city = document.querySelector('.city');
 
const key = '3b0d960db1ee1631819316ec35c3f3a3';
 
navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
   
     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
        .then(res => res.data)
        .then(body => {
            // Convertir la température en Kelvin en Celsius et afficher le résultat
            const tempInCelsius = Math.round(body.main.temp - 273.15); 
            degrees.textContent = `${tempInCelsius}°C`;
            weatherDesc.textContent = body.weather[0].description;
            city.textContent = `${body.name}, ${body.sys.country}`;
            img.src = `https://openweathermap.org/img/w/${body.weather[0].icon}.png`;
        })
        .catch(err => console.error(err));
});
 
 
 
// Ajoutez un écouteur d'événements au bouton de recherche
btn.addEventListener('click', function() {
    // Récupérez la valeur saisie par l'utilisateur dans l'input
    const cityName = input.value;
 
    // Effectuez une requête à l'API OpenWeatherMap pour obtenir les coordonnées de la ville
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`)
        .then(res => res.data)
        .then(body => {
        if (body.length > 0) {
                const latitude = body[0].lat;
                const longitude = body[0].lon;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
                    .then(res => res.data)
                    .then(body => {
                        const tempInCelsius = Math.round(body.main.temp - 273.15);
                        degrees.textContent = `${tempInCelsius}°C`;
                        weatherDesc.textContent = body.weather[0].description;
                        city.textContent = `${body.name}, ${body.sys.country}`;
                        img.src = `https://openweathermap.org/img/w/${body.weather[0].icon}.png`;
                    })
                    .catch(err => console.error(err));
            } else {
                alert('City not found');
            }
        })
        .catch(err => console.error(err));
});