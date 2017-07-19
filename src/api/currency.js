var axios = require('axios');

// export async function getRate(base) {
//   const data = await axios.get('http://api.fixer.io/latest?base=' + base)
//   return data
// };

export default async function getCurrencies() {
  const data = await axios.get('http://api.fixer.io/latest')
  return data;
};

// getRate('USD').then(result => console.log(result))
// getRate('USD').then(result => console.log(result))
// getRate('USD').then(result => console.log(Object.keys(result.data.rates))) // Array of currency names
