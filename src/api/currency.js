import axios from 'axios';

export const getRate = async (base) => {
  const data = await axios.get('http://api.fixer.io/latest?base=' + base);
  return data
};

export const getCurrencies = async () => {
  try {
    const data = await axios.get('http://api.fixer.io/latest');
    return data;
  } catch(error) {
    throw error
  }
};
