let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
  console.log('account locked');
} else if (userRole === 'admin') {
  console.log('welcome admin');
} else {
  console.log('welcome');
}

//challenge area

let temp = 130;

if (temp <= 32) {
  console.log('its way too cold outside.');
} else if (temp >= 110) {
  console.log('its way too hot outside.');
} else {
  console.log('go ahead its nice outside.');
}
