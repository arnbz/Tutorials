let arr = ['Dhaka', 'Khulna', 'Chittagong'];

// the spread operator lets us spread an array as individual items
// it can be used to copy an array
let arrCopy = [...arr];
// adding element to first
arrCopy = ['Jessore', ...arrCopy];
// adding element to last
arrCopy = [...arrCopy, 'Rajshahi'];

const aFunc = function (...args) {
  console.log(args.join(', '));
};

// to pass all array items as individual arguments to functions
aFunc(...arrCopy);
