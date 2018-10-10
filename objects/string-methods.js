let name = '  alyssa bartuch ';

// length property
console.log(name.length);

// convert to upper case
console.log(name.toUpperCase());

// convert to lower case
console.log(name.toLowerCase());

// includes method
let password = 'abc123password098';
//let password = 'abc123fds098';
console.log(password.includes('password'));


// trim method
console.log(name.trim());

// challange area

let isValidPassword = function(password) {
  return (password.length > 8) && !(password.includes('password'))
}

console.log(isValidPassword('fds'));
console.log(isValidPassword('ffdsgs432ds'));
console.log(isValidPassword('fdpasswords'));
