const fetch = require("node-fetch");
module.exports = async () => {

  
let url =`https://api.polygon.io/v3/reference/tickers?ticker.gt=AD&active=true&sort=ticker&order=asc&limit=6&apiKey=${process.env.ELEVENTY_ENV}`;
// Make a request for a user with a given ID
return fetch(url)
  .then(res => res.json())
  .then(json => {
    return {
      results: json.results
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}