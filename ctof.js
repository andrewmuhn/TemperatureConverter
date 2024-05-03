function onConvertToFahrenheit() {
    event.preventDefault();
    const celsius = document.getElementById('celsiusInput').value;
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheitResult').innerHTML = `${fahrenheit}ºF`;
}

window.onload = function() {
    document.getElementById('convertButtonToFahrenheit').addEventListener('click', onConvertToFahrenheit);
}