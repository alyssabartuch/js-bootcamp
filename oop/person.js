// prototypal iheritance

const Person = function(fName, lName, age, likes = []) {
   this.firstName = fName;
   this.lastName = lName;
   this.age = age;
   this.likes = likes
}

Person.prototype.getBio = function() {
   let bio = `${this.firstName} is ${this.age}`;

   this.likes.forEach((like) =>{
      bio += ` ${this.firstName} likes ${like}.`
   })

   return bio
}

Person.prototype.setName = function(fullName) {
   const names = fullName.split(' ');
   this.firstName = names[0];
   this.lastName = names[1];
}

const me = new Person('alyssa', 'bartuch', 27, ['fiber arts', 'cats']);
// me.firstName = 'Paige'

me.getBio = function() {
   return 'this is fake'
}

me.setName('linda kondrat')
console.log(me.getBio());



const person2 = new Person('clancy', 'turner', 51);
console.log(person2.getBio());
