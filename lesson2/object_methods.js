// we can define a object with properties

// let me = {
//   firstName: 'Forrest',
//   lastName: 'Klausmeier',
// }


// or we can add properties later
let me = {};
me.firstName = 'Forrest';
me.lastName = 'Klausmeier';

// global window object execution context
function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let friend = {
  firstName: 'Arturo',
  lastName: 'Malto-Meal',
}

let mother = {
  firstName: 'Maria',
  lastName: 'Klausmeier',
}

let father = {
  firstName: 'Charles',
  lastName: 'Klausmeier',
}

// fullName(friend);
// fullName(mother);
// fullName(father);

let people = [];
people.push(me, friend, mother, father);

// global window object execution context

// function rollCall(collection) {
//   let length;
//   let i;
//   for (i = 0, length = collection.length; i < length; i += 1) {
//     fullName(collection[i]);
//   }
// }

// improvement
function rollCall(collection) {
  collection.forEach(fullName);
}

// rollCall(people);


// further improvements
// our functions now have people as their default execution context

people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;

    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
            index = i;
        }
    });

    return index;
  }, 

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }
    
    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  getOccupation: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    console.log(this.collection[existingPersonId].occupation)
  },

  changeName: function(person, newName) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let oldName = this.collection[this.getIndex(person)];
    oldName.firstName = newName.firstName;
    oldName.lastName = newName.lastName;
  }
}

// people.rollCall();

let newPerson = {
  firstName: 'Letitia',
  lastName: 'James',
}

people.add(newPerson);
people.rollCall();

// console.log(people.getIndex(newPerson));
// people.remove(newPerson); // 4
// console.log(people.getIndex(newPerson));

// console.log(people.getIndex(friend));
// people.remove({firstName: 'Arturo', lastName: 'Malto-Meal'}); // 1
// console.log(people.getIndex(friend));

newPerson.occupation = 'lawyer';
people.update(newPerson);
// people.getOccupation(newPerson); // lawyer

people.changeName(newPerson, {firstName: 'Ari', lastName: 'Melber'});
people.rollCall();
