// global ( convertFahrenheitToCelsius, temp1, temp2 )
  // local ( fahrenheit, celsius )
    // local ( isFreezing )


let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit) - 32) * (5/9);

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
}

// test: 32 -> 0 ; 68 -> 20
let celsius1 = convertFahrenheitToCelsius(32);
let celsius2 = convertFahrenheitToCelsius(68);

//print converted values
console.log(celsius1);
console.log(celsius2);
