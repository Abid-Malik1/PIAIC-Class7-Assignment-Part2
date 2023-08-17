import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

function convertTemperaturesToCelsius(temperaturesCelsius: number[]): number[] {
  let convertedTemperatures: number[] = [];
  let index = 0;

  while (index < temperaturesCelsius.length) {
    let celsius = temperaturesCelsius[index];
    let fahrenheit = celsiusToFahrenheit(celsius);
    convertedTemperatures.push(fahrenheit);
    index++;
  }

  return convertedTemperatures;
}

rl.question("Enter temperatures in Celsius (comma-separated): ", (input) => {
  rl.close();

  let temperaturesCelsius = input.split(",").map(temp => parseFloat(temp.trim()));
  let convertedTemperatures = convertTemperaturesToCelsius(temperaturesCelsius);

  console.log("Converted temperatures in Fahrenheit:", convertedTemperatures);
});
