const getPuzzle = (wordCount) => {
   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
      if (response.status === 200) {
         return response.json();
      } else {
         throw new Error('unable to fetch code');
      }
   }).then((data) => {
      return data.puzzle;
   })
}



const getCountry = (countryCode) => {
   return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
      if (response.status === 200) {
         return response.json()
      } else {
         throw new Error('an error has taken place')
      }
   }).then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
   })
}



// const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
//    const countriesReq = new XMLHttpRequest();
//
//    countriesReq.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//
//          const countries = JSON.parse(e.target.response);
//          const country = countries.find((country) => country.alpha2Code === countryCode);
//          resolve(country);
//       } else if (e.target.readyState === 4) {
//          reject('an error has taken place');
//       }
//
//    })
//
//    countriesReq.open('GET', 'https://restcountries.eu/rest/v2/all');
//    countriesReq.send();
// })
