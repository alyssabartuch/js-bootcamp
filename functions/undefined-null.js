 // (undefined for variables)
let name;

name = 'alyssa';

if (name === undefined) {
  //undefined
  //console.log(name);
  console.log('please provide a name');
} else {
  console.log(name);
}

//undefined for function argument(s) or function return value

let square = function(num) {
  //undefined
  console.log(num);
}

let result = square();

//undefined
console.log(result);



//  null as assigned value 
let age = 26;
age = null;

console.log(age);
