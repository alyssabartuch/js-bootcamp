// logical and operator (&&) - true if both sides are true. otherwise false.
// logical or operator (||) - true if at least one side is true. otherwise false.

let temp = 505;

if (temp >= 60 && temp <= 90) {
  console.log('its really nice outside.');
} else if (temp <= 0 || temp >= 120) {
    console.log('its dangerous to go outside.');
} else {
  console.log('its just whatever outside.');
}

// challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// all vegan - only offer vegan dishes
// at least one vegan - offer vegan and non vegan
// neither vegan - offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('only offer vegan menu options.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('offer some vegan options as well.');
} else {
  console.log('offer anything on the menu.');
}
