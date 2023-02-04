// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }


function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`)
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.')
      } else {
        items.forEach(item => {
          console.log(item);
        });
      }
    },

    remove(item) {
      let position = items.indexOf(item);

      if (position !== -1) {
        items.splice(position, 1);
        console.log(`${item} removed!`)
      }
    },
  };
}


let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
