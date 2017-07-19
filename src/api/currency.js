var axios = require('axios');

async function getRate(base) {
  data = await axios.get('http://api.fixer.io/latest?base=' + base)
  return data
}

getRate('USD').then(result => console.log(result))
getRate('USD').then(result => console.log(result))
getRate('USD').then(result => console.log(Object.keys(result.data.rates))) // Array of currency names