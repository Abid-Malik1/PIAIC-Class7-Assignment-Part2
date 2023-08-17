"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertTemperaturesToCelsius(temperaturesCelsius) {
    var convertedTemperatures = [];
    var index = 0;
    while (index < temperaturesCelsius.length) {
        var celsius = temperaturesCelsius[index];
        var fahrenheit = celsiusToFahrenheit(celsius);
        convertedTemperatures.push(fahrenheit);
        index++;
    }
    return convertedTemperatures;
}
rl.question("Enter temperatures in Celsius (comma-separated): ", function (input) {
    rl.close();
    var temperaturesCelsius = input.split(",").map(function (temp) { return parseFloat(temp.trim()); });
    var convertedTemperatures = convertTemperaturesToCelsius(temperaturesCelsius);
    console.log("Converted temperatures in Fahrenheit:", convertedTemperatures);
});
