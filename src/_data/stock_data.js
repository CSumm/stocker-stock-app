const fetch = require("node-fetch");
module.exports = async () => {

  
let url =`https://api.polygon.io/v1/open-close/AAPL/2021-07-02?adjusted=true&apiKey=${process.env.POLYGON_KEY}`;
// Make a request for a user with a given ID
return fetch(url)
  .then(res => res.json())
  .then(json => {
    return {
      sym: json.symbol,
      from: json.from,
      open: json.open,
      close: json.close
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

