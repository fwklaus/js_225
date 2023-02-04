// let sedan = {
//   speed: 0,
//   rate: 8,

//   // accelerate: function() {
//   //   this.speed += this.rate;
//   // }

//   // syntactic sugar
//   accelerate() {
//     this.speed += this.rate;
//   }
// };

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);


function makeCar(rate, stopRate) {
  return {
    speed: 0,
    rate,
    stopRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.stopRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);