const getPuzzle = (wordCount, callback) => {

   const request = new XMLHttpRequest();

   request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
         const data = JSON.parse(e.target.responseText);
         callback(undefined, data.puzzle);
      } else if (e.target.readyState === 4) {
         callback('an error has taken place', undefined);
      }
   })

   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
   request.send();

}

// const getCountry = (countryCode, callback) => {
//
//    const countriesRequest = new XMLHttpRequest();
//
//    countriesRequest.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//
//          const countries = JSON.parse(e.target.response);
//          console.log(countries);
//          const country = countries.find((country) => countries.alpha2Code === country);
//          callback(undefined, country);
//       } else if (e.target.readyState === 4) {
//          callback('an error has taken place', undefined);
//       }
//    })
//
//    countriesRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
//    countriesRequest.send();
// }



const getCountry = (countryCode, callback) => {
   const countriesReq = new XMLHttpRequest();

   countriesReq.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {

         const countries = JSON.parse(e.target.response);
         const country = countries.find((country) => country.alpha2Code === countryCode);
         callback(undefined, country);
      } else if (e.target.readyState === 4) {
         callback('an error has taken place', undefined);
      }

   })

   countriesReq.open('GET', 'https://restcountries.eu/rest/v2/all');
   countriesReq.send();
}
