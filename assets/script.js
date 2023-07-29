const apiKey = '8f2126d969ed7632e1abebe4121c44a9'
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');

function getweather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherData = data;
            localStorage.setItem("Weather_Info", JSON.stringify(weatherData));
            console.log(weatherData);
        })
};

function getCity(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityData = data;
            localStorage.setItem("City_Info", JSON.stringify(cityData));

            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData[0].lat}&lon=${cityData[0].lon}&appid=${apiKey}`;
            getweather(weatherUrl);
        })
}

searchBtn.addEventListener("click", function(event) {
    event.preventDefault;
    const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=1&appid=${apiKey}`;
    getCity(cityUrl);
})

/*
TODOS:
populate the data in index.html
*/