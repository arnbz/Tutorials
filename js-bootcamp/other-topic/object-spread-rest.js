let jeans = {
  brand: 'Levis',
  color: 'Dark Blue',
};

// copying an object using object spread syntax
let jeansCopy = {
  // adding new properties
  discount: 'false',
  ...jeans,
};

// discount will have the discount property from jeansCopy,
// otherProps will be another object with brand and color properties
let { discount, ...otherProps } = jeansCopy;
