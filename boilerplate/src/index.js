const printTeam = (team, coach, ...players) => {
   console.log(`Team: ${team}`);
   console.log(`Coach: ${coach}`);
   console.log(`Players: ${players.join(', ')}`);
}

// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

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

let house = {
   bedrooms: 2,
   bathrooms: 1.5,
   yearBuilt: 2017
}

let newHouse = {
   basement: true,
   ...house,
   bedrooms: 3
}

console.log(house);
console.log(newHouse);


let person = {
   name: 'alyssa',
   age: 27
}

let location = {
   city: 'hudsonville',
   country: 'US'
}

let overview = {
   ...person,
   ...location
}

console.log(overview);
