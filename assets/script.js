const apiKey = '8f2126d969ed7632e1abebe4121c44a9';

// search bar and button document elements
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');

// main card document elements
const mainTemp = document.getElementById('mainTemp');
const mainWind = document.getElementById('mainWind');
const mainHumidity = document.getElementById('mainHumidity');
const mainName = document.getElementById('mainName');
const mainEmoji = document.getElementById('mainEmoji');

// day one card document elements
const day1Date = document.getElementById('dayOneDate');
const day1Emoji = document.getElementById('dayOneEmoji');
const day1Temp = document.getElementById('dayOneTemp');
const day1Wind = document.getElementById('dayOneWind');
const day1Humidity = document.getElementById('dayOneHumidity');

// day two card document elements
const day2Date = document.getElementById('dayTwoDate');
const day2Emoji = document.getElementById('dayTwoEmoji');
const day2Temp = document.getElementById('dayTwoTemp');
const day2Wind = document.getElementById('dayTwoWind');
const day2Humidity = document.getElementById('dayTwoHumidity');

// day three card document elements
const day3Date = document.getElementById('dayThreeDate');
const day3Emoji = document.getElementById('dayThreeEmoji');
const day3Temp = document.getElementById('dayThreeTemp');
const day3Wind = document.getElementById('dayThreeWind');
const day3Humidity = document.getElementById('dayThreeHumidity');

// day four card document elements
const day4Date = document.getElementById('dayFourDate');
const day4Emoji = document.getElementById('dayFourEmoji');
const day4Temp = document.getElementById('dayFourTemp');
const day4Wind = document.getElementById('dayFourWind');
const day4Humidity = document.getElementById('dayFourHumidity');

// day five card document elements
const day5Date = document.getElementById('dayFiveDate');
const day5Emoji = document.getElementById('dayFiveEmoji');
const day5Temp = document.getElementById('dayFiveTemp');
const day5Wind = document.getElementById('dayFiveWind');
const day5Humidity = document.getElementById('dayFiveHumidity');

// history div document element
const historyEl = document.getElementById('history-div');

// function to fetch the weather api using the url parameter, then call the setAll function
function getweather(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setAll(data);
        })
};

// fetches data from the city api, then uses the fetched information to create a url for getweather, and subsequently calls getweather with the new url
function getCity(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`;
            getweather(weatherUrl);
        })
};

// function to populate the main card with api data
function setMain(weather) {
    mainName.textContent = weather.city.name;
    mainEmoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`);
    mainTemp.textContent = `Temp: ${weather.list[0].main.temp}°F`;
    mainWind.textContent = `Wind: ${weather.list[0].wind.speed} MPH`
    mainHumidity.textContent = `Humidity: ${weather.list[0].main.humidity} %`
};

// function to populate the day one forecast card with api data
function setOne(weather) {
    const date = weather.list[0].dt_txt.toString();
    day1Date.textContent = date.slice(0, 10);
    day1Emoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`);
    day1Temp.textContent = `Temp: ${weather.list[0].main.temp} °F`;
    day1Wind.textContent = `Wind: ${weather.list[0].wind.speed} MPH`;
    day1Humidity.textContent = `Humidity: ${weather.list[0].main.humidity} %`;
};

// function to populate the day two forecast card with api data
function setTwo(weather) {
    const date = weather.list[7].dt_txt.toString();
    day2Date.textContent = date.slice(0, 10);
    day2Emoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[7].weather[0].icon}@2x.png`);
    day2Temp.textContent = `Temp: ${weather.list[7].main.temp} °F`;
    day2Wind.textContent = `Wind: ${weather.list[7].wind.speed} MPH`;
    day2Humidity.textContent = `Humidity: ${weather.list[7].main.humidity} %`;
};

// function to populate the day three forecast card with api data
function setThree(weather) {
    const date = weather.list[15].dt_txt.toString();
    day3Date.textContent = date.slice(0, 10);
    day3Emoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[15].weather[0].icon}@2x.png`);
    day3Temp.textContent = `Temp: ${weather.list[15].main.temp} °F`;
    day3Wind.textContent = `Wind: ${weather.list[15].wind.speed} MPH`;
    day3Humidity.textContent = `Humidity: ${weather.list[15].main.humidity} %`;
};

// function to populate the day four forecast card with api data
function setFour(weather) {
    const date = weather.list[23].dt_txt.toString();
    day4Date.textContent = date.slice(0, 10);
    day4Emoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[23].weather[0].icon}@2x.png`);
    day4Temp.textContent = `Temp: ${weather.list[23].main.temp} °F`;
    day4Wind.textContent = `Wind: ${weather.list[23].wind.speed} MPH`;
    day4Humidity.textContent = `Humidity: ${weather.list[23].main.humidity} %`;
};

// function to populate the day five forecast card with api data
function setFive(weather) {
    const date = weather.list[31].dt_txt.toString();
    day5Date.textContent = date.slice(0, 10);
    day5Emoji.setAttribute("src", `https://openweathermap.org/img/wn/${weather.list[31].weather[0].icon}@2x.png`);
    day5Temp.textContent = `Temp: ${weather.list[31].main.temp} °F`;
    day5Wind.textContent = `Wind: ${weather.list[31].wind.speed} MPH`;
    day5Humidity.textContent = `Humidity: ${weather.list[31].main.humidity} %`;
};

// function that calls all of the set functions.
function setAll(weather) {
    setMain(weather);
    setOne(weather);
    setTwo(weather);
    setThree(weather);
    setFour(weather);
    setFive(weather);
};

// checks if local storage has existing information and then adds to History_List accordingly
function addHistory() {
    let historyArr;
    const localHistory = JSON.parse(localStorage.getItem("History_List"));
    if(!localHistory) {
        historyArr = [];
        historyArr.push(searchBar.value);
        localStorage.setItem("History_List", JSON.stringify(historyArr));
        renderHistory(historyArr);
    } else {
        if(localHistory.length >= 5) {
            historyArr = localHistory;
            historyArr.push(searchBar.value);
            historyArr.shift();
            localStorage.setItem("History_List", JSON.stringify(historyArr));
            renderHistory(historyArr);
        } else {
            historyArr = localHistory;
            historyArr.push(searchBar.value);
            localStorage.setItem("History_List", JSON.stringify(historyArr));
            renderHistory(historyArr);
        }  
    }
};

// creates history buttons and appends them to the historyEl
function renderHistory(arr) {
    historyEl.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let history = arr[i];
        let historyBtn = document.createElement("button");
        historyBtn.textContent = history;
        historyEl.appendChild(historyBtn);
    }
};

// event listener for the search button to create a url for getCity, calls getCity, calls addHistory, and then clears the search bar
searchBtn.addEventListener("click", function(event) {
    event.preventDefault;
    const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=${apiKey}`;
    getCity(cityUrl);
    addHistory();
    searchBar.value = "";
});
// event listener for the history buttons that gets the textcontent of the clicked button and calls getCity with a newly made url
historyEl.addEventListener("click", function(event) {
    const button = event.target;

    if (button.matches("button") === true) {
        const text = button.textContent;
        const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=5&appid=${apiKey}`;
        getCity(cityUrl);
    }
})

// lines to render history buttons on load
const initialHistory = JSON.parse(localStorage.getItem("History_List"));
renderHistory(initialHistory);