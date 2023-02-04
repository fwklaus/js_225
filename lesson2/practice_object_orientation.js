// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   setPrice(newPrice) {
//     if (newPrice > 0) {
//       this.price = newPrice;
//     } else {
//       console.log('Invalid Price')
//     }
//   },
//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   }
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   setPrice(newPrice) {
//     if (newPrice > 0) {
//       this.price = newPrice;
//     } else {
//       console.log('Invalid Price')
//     }
//   },
//   describe() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
// }

// function setPrice(product, newPrice) {
//   if (newPrice < 0) {
//     console.log('Invalid Price');
//     return;
//   }
//   product.price = newPrice;
// }

// setPrice(drill, -5); // Invalid Price

// function describeProduct(product) {
//   console.log(`Name: ${product.name}`);
//   console.log(`ID: ${product.id}`);
//   console.log(`Price: ${product.price}`);
//   console.log(`Stock: ${product.stock}`);
// }

// describeProduct(scissors);


// drill.describe(); // Price: 40
// // drill.setPrice(-5); // Invalid Price
// drill.setPrice(30);
// drill.describe(); // Price: 30


// scissors.describe(); // Price: 10
// scissors.setPrice(15);
// scissors.describe(); // Price: 15



function createProduct(id, name, stock, price) {
  return {
    id,
    name, 
    stock,
    price, 
    setPrice(newPrice) {
      if (newPrice > 0) {
        this.price = newPrice;
      } else {
        console.log('Invalid Price')
      }
    },
    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: ${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
scissors.describe();

let drill = createProduct(1, 'Cordless Drill', 15, 45);
drill.describe();

let stapler = createProduct(2, 'Swingline', 3, 25)
stapler.describe();

let desk = createProduct(3, 'IKEA', 5689, 256);
desk.describe();
