// Asynchronous function: callback
const asyncCallback = (num, callback) => {
  // dummy async
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Error: num is not of type number');
    }
  }, 2000);
};

// Callback hell
asyncCallback(2, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    asyncCallback(data, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});

// Asynchronous function: promise
const asyncPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof data === 'number'
        ? resolve(data * 2)
        : reject(new TypeError('Parameter must be of type "number"'));
    }, 2000);
  });

asyncPromise(2)
  .then((data) => asyncPromise(data))
  .then((data) => console.log(`From promise chain: ${data}`))
  .catch((error) => {
    console.log(error);
  });

// A call to '.then' returns a promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
})
  .then((data) => {
    return data * 2;
  })
  .then((data) => {
    console.log(`Test: ${data}`);
  });
