// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const myEvent = {
  name: 'Birthday Party',
  guestList: ['Kevin', 'Jaz', 'Will'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach((guest) => console.log(guest + ' is attending ' + this.name));
  },
};

myEvent.printGuestList();
