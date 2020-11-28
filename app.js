const inputValue = document.querySelector('.inputValue');
const submitBtn = document.querySelector('.submitBtn');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc-text');
const fahrBtn = document.querySelector('.fahrenheitBtn');
const celBtn = document.querySelector('.celsiusBtn');
const apiKey = 'e4126a1a739a67f892548a061bb2fb22';

submitBtn.addEventListener('click', () => {
    fetchApi();
    if (!celBtn.classList.contains('active')) {
        celBtn.classList.add('active');
    } else {
        celBtn.classList.remove('active')
    }


})

function fetchApi() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const kelvin = data.main.temp.toFixed(0);
            const celsius = kelvin - 273.15;
            const fahrenheit = kelvin * 1.8 - 459.67;
            const descInfo = data.weather[0].description;

            city.innerHTML = data.name;
            temp.innerHTML = `${celsius.toFixed(0)} °C`
            desc.innerHTML = descInfo;
        })
        .catch(err => alert('City not found'))
}