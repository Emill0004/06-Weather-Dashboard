const apiKey = '8f2126d969ed7632e1abebe4121c44a9'
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`
const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`

function getweather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            stockList = data.results;
            localStorage.setItem("Weather_Info", JSON.stringify(stockList));
            console.log(data);
        })
};

function getCity(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityCoord = data.results;
            console.log(data);
            console.log("lat: " + data[0].lat + " lon: " + data[0].lon);
        })
}

// getweather(weatherUrl);
getCity(cityUrl);

/*
TODOS:
Find the API for cities to lat/long
Connect the two APIs to enable user searches
populate the data in index.html
*/