// rest parameter take the rest of the arguments after teamName and coach
// here, become an array
const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(', ')} `);
};

printTeam('Liberty', 'Angkon', 'Jeff', 'Safwan', 'Rahul', 'Smith');
