/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
        if no other principles are applied, this is the default unless strict mode is being used.
* 2. Strict Mode
        prevents window binding from breaking code, but will return undefined.
* 3. Implicit Binding
        applies automatically to objects with methods only. Found to the left of the dot.
* 4. Explicit Binding
        We explicitily tell the JS Engine to point to a value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// 'use strict';

// function car() {
//   console.log(this.vroom);
// }

// car();
// const vroom = '🏎';

// Principle 2

// code example for Implicit Binding

// let myCar = {
//   name: 'Herby',
//   sound: '🏎 vrroooom',
//   car: function() {
//     console.log(this.sound);
//   }
// }

// myCar.car();

// Principle 3

// code example for New Binding

// function car() {
//   console.log(this.sound);
// }

// let myCar = {
//   name: 'Herby',
//   sound: '🏎 vrroooom',
// };

// myNewWhip = car.bind(myCar);

// myNewWhip();

// Principle 4

// code example for Explicit Binding

function car() {
  console.log(this.sound);
}

let myCar = {
  name: 'Herby',
  sound: '🏎 vrroooom'
};

car.call(myCar);
