// Class

// const car1 = {
//   brand: 'bmw',
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`${this.brand} is started`)
//   }
// }

// const car2 = {
//   brand: 'audi',
//   maxSpeed: 240,
//   startEngine() {
//     console.log(`${this.brand} is started`)
//   }
// }

// const bmw = createCar('bmw', 220)
// const audi = createCar('audi', 240)

// function createCar (brand, maxSpeed) {
//   const car = {
//     brand: brand,
//     maxSpeed: maxSpeed,
//     startEngine() {
//       console.log(`${this.brand} is started`)
//     }
//   }
//   return car
// }

// function startEngine() {
//   console.log(`${this.brand} is started`);
// }

// function Car(brand, maxSpeed) {
//   // {}
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
// }

// Car.prototype.startEngine = function () {
//   console.log(`${this.brand} is started`);
// };

// const car1 = new Car("bmw", 220);
// const car2 = new Car("audi", 240);

// car1.startEngine();
// // car2.startEngine();
// // console.log(car1.startEngine === car2.startEngine);

// console.log(car1);
// console.log(car2);

//-----------------------------

// class Car {
//   //{}
//   #brand;
//   constructor(brand, maxSpeed) {
//     // this.#model = "toyota";
//     this.#brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`${this.#brand} is started`);
//   }
//   // getBrand() {
//   //   return this.#brand;
//   // }
//   // setBrand(newBrand) {
//   //   if (newBrand.length < 3) {
//   //     throw new Error("bad brand");
//   //   }
//   //   this.#brand = newBrand;
//   // }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("bad brand");
//     }
//     this.#brand = newBrand;
//   }
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("audi", 240);

// car1.brand = "toyota";

// console.log(car1.brand);

// car1.startEngine();
// car2.startEngine();

// const a = car1.brand;
// console.log(a);

//-----------------------------

class Car {
  #brand;
  // #checkBrand
  constructor(brand, maxSpeed) {
    this.#brand = brand;
    this.maxSpeed = maxSpeed;
  }
  startEngine() {
    console.log(`${this.#brand} is started`);
  }
  #checkBrand(brand) {
    if (brand.length < 3) {
      throw new Error("bad brand");
    }
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#checkBrand(newBrand);
    this.#brand = newBrand;
  }
  static concatinationCars(instans1, instans2) {
    console.log(instans1, instans2);
  }
  static wheels = 4;
}

const car1 = new Car("bmw", 220);
const car2 = new Car("audi", 240);

// car1.brand = "b";
// console.log(car1.brand);
// console.log(car2);

// Car.concatinationCars(car1, car2);
// console.log(Car.wheels);

class SuperCar extends Car {
  constructor(brand, maxSpeed, canFly) {
    super(brand, maxSpeed); // {}
    // super();
    this.canFly = canFly;
  }
  showThis() {
    console.log(this);
  }
  superStartEngine() {
    super.startEngine();
    console.log("if can fly? ", this.canFly);
  }
}

const superCar = new SuperCar("superCar", 300, true);

// console.log(superCar);
superCar.superStartEngine();
