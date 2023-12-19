// За допомогою ajax-запиту вивести погоду
//
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19
//
//q=XXX - місто, для якого показати погоду
// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - значок, де 10d код іконки
// http://openweathermap.org/img/w/10d.png

// ======================================================================

// const xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', true);
//
// function renderWeather(data) {
//     const name = data.name;
//     const temp = data.main.temp;
//     const pressure = data.main.pressure;
//     const description = data.weather[0].description;
//     const humidity = data.main.humidity;
//     const speed = data.wind.speed;
//     const deg = data.wind.deg;
//     const icon = data.weather[0].icon;
//
//     document.querySelector('.weather__city').innerHTML = `Місто ${name}`;
//     document.querySelector('.weather__temperature').innerHTML = `Температура ${temp}°C`;
//     document.querySelector('.weather__pressure').innerHTML = `Тиск ${pressure} мм рт.ст.`;
//     document.querySelector('.weather__description').innerHTML = `Опис ${description}`;
//     document.querySelector('.weather__humidity').innerHTML = `Вологість ${humidity}%`;
//     document.querySelector('.weather__speed').innerHTML = `Швидкість вітру ${speed} м/с`;
//     document.querySelector('.weather__deg').innerHTML = `Напрям ${deg}°`;
//     document.querySelector('.weather__icon').innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">`;
// }
//
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const data = JSON.parse(xhr.responseText);
//
//         renderWeather(data);
//     }
// };
//
// xhr.send();

// ======================================================================

function fetchWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => renderWeather(data))
        .catch(error => console.error('Fetching error:', error));
}

function renderWeather(data) {
    const { name, main: { temp, pressure, humidity }, weather, wind: { speed, deg } } = data;
    const description = weather[0].description;
    const icon = weather[0].icon;

    document.querySelector('.weather__city').innerHTML = `Місто: ${name}`;
    document.querySelector('.weather__temperature').innerHTML = `Температура: ${temp}°C`;
    document.querySelector('.weather__pressure').innerHTML = `Тиск: ${pressure} мм рт.ст.`;
    document.querySelector('.weather__description').innerHTML = `Опис: ${description}`;
    document.querySelector('.weather__humidity').innerHTML = `Вологість: ${humidity}%`;
    document.querySelector('.weather__speed').innerHTML = `Швидкість вітру: ${speed} м/с`;
    document.querySelector('.weather__deg').innerHTML = `Напрям: ${deg}°`;
    document.querySelector('.weather__icon').innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">`;
}

fetchWeather('ODESA');
