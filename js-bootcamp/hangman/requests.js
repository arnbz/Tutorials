const getPuzzle = async (wordCount) => {
  let response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  let data = await response.json();

  return data.puzzle;
};

// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         return new Error(response.status);
//       }
//     })
//     .then((data) => {
//       return data.puzzle;
//     });
// };
