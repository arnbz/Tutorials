let restaurant = {
  name: 'Voot',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // 'this' is a keyword available within methods. It refers to the object the method is a part of. Object propeties
    // can be accessed using the keyword 'this'.
    let emptySeats = this.guestCapacity - this.guestCount;
    return emptySeats >= partySize;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));

let person = {
  name: 'Arnab Roy',
  age: 26,
  demonstrateThis: function () {
    console.log(this);
  },
};

person.demonstrateThis();
