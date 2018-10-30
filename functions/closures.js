const createTipper = (baseTip) => {
   return (amount) => amount * baseTip
}

const tip25 = createTipper(.25);
console.log(tip25(35));

const tip20 = createTipper(.20);
console.log(tip20(35));

const tip15 = createTipper(.15);
console.log(tip15(35));




// EXAMPLE 1
// const myFunction = () => {
//    const message = 'this is my message'
//    const printMessage = () => {
//       console.log(message);
//    }
//    return printMessage;
// }
//
// const myPrintMsg = myFunction();
// myPrintMsg();





// EXAMPLE 2
// const createCounter = () => {
//    let count = 0;
//
//    return {
//       increment() {
//          count++;
//       },
//       decrement() {
//          count--;
//       },
//       get() {
//          return count;
//       }
//    }
// }
//
// const counter = createCounter();
//
// counter.increment();
// counter.decrement();
// counter.decrement();
//
// console.log(counter.get());





// EXAMPLE 3
// const createAdder = (a) => {
//    return (b) => {
//       return a + b;
//    }
// }
//
// const add10 = createAdder(10);
// console.log(add10(-2));
//
// console.log(add10(20));
//
// const add100 = createAdder(100);
// console.log(add100(-90));
