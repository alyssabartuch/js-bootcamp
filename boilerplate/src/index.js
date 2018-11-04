// REST parameter
const calculateAverage = (thing, ...numbers) => {
   //return (numOne + numTwo)/2
   let sum = 0;
   numbers.forEach((num) => sum += num)
   const average = sum / numbers.length

   return `the average ${thing} is ${average}`
}

console.log(calculateAverage('grade', 0, 100, 88, 64));


const printTeam = (teamName, coach, ...players) => {
   console.log(`Team: ${teamName}`);
   console.log(`Coach: ${coach}`);
   console.log(`Players: ${players.join(', ')}`);
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
