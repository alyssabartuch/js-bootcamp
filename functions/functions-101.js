// function - input ( argument(s) ), code, output ( return value)

let greetUser = function() {
  console.log('welcome user');
}

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;

  return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// challange area

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit) - 32) * (5/9);

  return celsius;
}

// test: 32 -> 0 ; 68 -> 20
let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

//print converted values
console.log(celsius1);
console.log(celsius2);
