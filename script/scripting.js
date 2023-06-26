// Current Kelvin Temperature
// const kelvin = 293;

/* Changing the value of kelvin to 0 */
const kelvin = 0;

// Converting Kelvin to Celsius
const celsius = kelvin - 273;

// Fahrenheit Formula
// fahrenheit = celsius * (9/5) + 32

//Converting celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round Down The Fahrenheit
fahrenheit = Math.floor(fahrenheit);

// Using string interpolation to log the temperature in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
