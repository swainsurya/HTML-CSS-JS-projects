let form = document.querySelector(".weatherForm");
let cityname = document.querySelector(".cityName");
let apiKey = "9bee67c35ee12d59827a27378ba6ce27";
let card = document.querySelector(".card");
let container = document.querySelector(".container");
let error = document.querySelector(".error");

form.addEventListener("submit", e => {
    let city = "";
    e.preventDefault();
    city = cityname.value;
    getWeatherData(city);
})

let getWeatherData = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let respone = await fetch(url);
    let data = await respone.json();
    displayWeatherData(data);
}

let displayWeatherData = (data) => {
    card.classList.add("displayNone");
    if (data.cod === "404") {
        error.classList.remove("displayNone");
        }
        else {
        error.classList.add("displayNone");
            
        let tempK = data.main.temp;
        let humidity = data.main.humidity;
        let desc = data.weather[0].description;
        let id = data.weather[0].id;

        let tempC = tempK - 273.15;

        let name = document.querySelector(".citynameDisplay");
        let tempEl = document.querySelector(".temp");
        let humidityEl = document.querySelector(".humidity");
        let tempdescEl = document.querySelector(".weatherDesc");
        let emojiEl = document.querySelector(".weatherEmoji");

        name.textContent = cityname.value.toUpperCase();
        tempEl.innerHTML = `Temp- ${Math.ceil(tempC)}<sup>0</sup>C`;
        humidityEl.textContent = `Humidity- ${humidity}`;
        tempdescEl.textContent = `Desc- ${desc}`;
        emojiEl.textContent = getEmoji(id);

        card.classList.remove("displayNone");
    }
}

let getEmoji = (id) => {
    if (id >= 200 && id < 300) {
        return "⚡";
    }
    else if (id >= 300 && id < 400) {
        return "🌂";
    }
    else if (id >= 500 && id < 600) {
        return "☔";
    }
    else if (id >= 600 && id < 700) {
        return "⛄";
    }
    else if (id >= 700 && id < 800) {
        return "🌀";
    }
    else if (id == 800) {
        return "🔅";
    }
    else {
        return "⛅";
    }
}
