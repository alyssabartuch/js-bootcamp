// const square = (num) => num * num;
//
// const squareLong = (num) => {
//    return num * num;
// }
//
// console.log(square(5));

const people = [{
   name: 'andrew',
   age: 22
}, {
   name: 'alyssa',
   age: 27
}, {
   name: 'vinnie',
   age: 30
}];

// const under30 = people.filter(function(person) {
//    return person.age < 30;
// })
//
// const underThirty = people.filter((person) => person.age < 30)
//
// console.log(underThirty);

const person = people.find((person) => person.age === 22);

console.log(person.name);
