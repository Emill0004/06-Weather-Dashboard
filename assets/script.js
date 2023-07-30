const apiKey = '8f2126d969ed7632e1abebe4121c44a9'
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const mainTemp = document.getElementById('mainTemp');
const mainWind = document.getElementById('mainWind');
const mainHumidity = document.getElementById('mainHumidity');
const mainName = document.getElementById('mainName');
const mainDate = document.getElementById('mainDate');
const mainEmoji = document.getElementById('mainEmoji');

const day1Date = document.getElementById('dayOneDate');
const day1Emoji = document.getElementById('dayOneEmoji');
const day1Temp = document.getElementById('dayOneTemp');
const day1Wind = document.getElementById('dayOneWind');
const day1Humidity = document.getElementById('dayOneHumidity');

const day2Date = document.getElementById('dayTwoDate');
const day2Emoji = document.getElementById('dayTwoEmoji');
const day2Temp = document.getElementById('dayTwoTemp');
const day2Wind = document.getElementById('dayTwoWind');
const day2Humidity = document.getElementById('dayTwoHumidity');

const day3Date = document.getElementById('dayThreeDate');
const day3Emoji = document.getElementById('dayThreeEmoji');
const day3Temp = document.getElementById('dayThreeTemp');
const day3Wind = document.getElementById('dayThreeWind');
const day3Humidity = document.getElementById('dayThreeHumidity');

const day4Date = document.getElementById('dayFourDate');
const day4Emoji = document.getElementById('dayFourEmoji');
const day4Temp = document.getElementById('dayFourTemp');
const day4Wind = document.getElementById('dayFourWind');
const day4Humidity = document.getElementById('dayFourHumidity');

const day5Date = document.getElementById('dayFiveDate');
const day5Emoji = document.getElementById('dayFiveEmoji');
const day5Temp = document.getElementById('dayFiveTemp');
const day5Wind = document.getElementById('dayFiveWind');
const day5Humidity = document.getElementById('dayFiveHumidity');




function getweather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            weatherData = data;
            localStorage.setItem("Weather_Info", JSON.stringify(weatherData));
            console.log(weatherData);

            setAll(weatherData);
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
            console.log(cityData);

            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData[0].lat}&lon=${cityData[0].lon}&appid=${apiKey}&units=imperial`;
            getweather(weatherUrl);
        })
}

function setMain(weather) {
    mainName.textContent = weather.city.name;
    const date = weather.list[0].dt_txt.toString();
    mainDate.textContent = date.slice(0, 10);
    mainTemp.textContent = `Temp: ${weather.list[0].main.temp}°F`;
    mainWind.textContent = `Wind: ${weather.list[0].wind.speed} MPH`
    mainHumidity.textContent = `Humidity: ${weather.list[0].main.humidity} %`
}

function setOne(weather) {
    const date = weather.list[0].dt_txt.toString();
    day1Date.textContent = date.slice(0, 10);
    day1Emoji.textContent = ``;
    day1Temp.textContent = `Temp: ${weather.list[0].main.temp} °F`;
    day1Wind.textContent = `Wind: ${weather.list[0].wind.speed} MPH`;
    day1Humidity.textContent = `Humidity: ${weather.list[0].main.humidity} %`;
}

function setTwo(weather) {
    const date = weather.list[7].dt_txt.toString();
    day2Date.textContent = date.slice(0, 10);
    day2Emoji.textContent = ``;
    day2Temp.textContent = `Temp: ${weather.list[7].main.temp} °F`;
    day2Wind.textContent = `Wind: ${weather.list[7].wind.speed} MPH`;
    day2Humidity.textContent = `Humidity: ${weather.list[7].main.humidity} %`;
}

function setThree(weather) {
    const date = weather.list[15].dt_txt.toString();
    day3Date.textContent = date.slice(0, 10);
    day3Emoji.textContent = ``;
    day3Temp.textContent = `Temp: ${weather.list[15].main.temp} °F`;
    day3Wind.textContent = `Wind: ${weather.list[15].wind.speed} MPH`;
    day3Humidity.textContent = `Humidity: ${weather.list[15].main.humidity} %`;
}

function setFour(weather) {
    const date = weather.list[23].dt_txt.toString();
    day4Date.textContent = date.slice(0, 10);
    day4Emoji.textContent = ``;
    day4Temp.textContent = `Temp: ${weather.list[23].main.temp} °F`;
    day4Wind.textContent = `Wind: ${weather.list[23].wind.speed} MPH`;
    day4Humidity.textContent = `Humidity: ${weather.list[23].main.humidity} %`;
}

function setFive(weather) {
    const date = weather.list[31].dt_txt.toString();
    day5Date.textContent = date.slice(0, 10);
    day5Emoji.textContent = ``;
    day5Temp.textContent = `Temp: ${weather.list[31].main.temp} °F`;
    day5Wind.textContent = `Wind: ${weather.list[31].wind.speed} MPH`;
    day5Humidity.textContent = `Humidity: ${weather.list[31].main.humidity} %`;
}

function setAll(weather) {
    setMain(weather);
    setOne(weather);
    setTwo(weather);
    setThree(weather);
    setFour(weather);
    setFive(weather);
}

searchBtn.addEventListener("click", function(event) {
    event.preventDefault;
    const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=${apiKey}`;
    getCity(cityUrl);
    searchBar.value = "";
})

/*
TODOS:
populate the data in index.html
*/