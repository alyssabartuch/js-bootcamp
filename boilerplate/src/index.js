const printTeam = (team, coach, ...players) => {
   console.log(`Team: ${team}`);
   console.log(`Coach: ${coach}`);
   console.log(`Players: ${players.join(', ')}`);
}

const team = {
   name: 'Liberty',
   coach: 'Casey Penn',
   players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

// Spread Operator
printTeam(team.name, team.coach, ...team.players);

let cities = ['barcelona', 'cape town', 'bordeaux'];
cities = [...cities, 'santiago'];

// citiesCopy.push('santiago');
console.log(cities);
