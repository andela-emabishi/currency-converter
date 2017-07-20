import axios from 'axios';

export const getRate = async (currencyToConvertFrom, currencyToConvertTo) => {
  try {
    const res = await axios.get('http://api.fixer.io/latest?base=' + currencyToConvertFrom);
    return res.data.rates[currencyToConvertTo]
  } catch (error) { 
    throw error 
  }
};

export const getCurrencies = async () => {
  try {
    const data = await axios.get('http://api.fixer.io/latest');
    return data;
  } catch(error) {
    throw error
  }
};
