function onConvertToCelsius() {
    event.preventDefault();
    const fahrenheit = document.getElementById('fahrenheitInput').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsiusResult').innerHTML = `${celsius}ºC`;
}

window.onload = function() {
    document.getElementById('convertButtonToCelsius').addEventListener('click', onConvertToCelsius);
}