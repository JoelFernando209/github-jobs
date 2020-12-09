import { createProcess } from './globalFunctions.js';

export const searchBarProcess = strSearch => createProcess(
  setSearchFetch,
  formatStrToUrl
)(strSearch);

const formatStrToUrl = str => {
  return str.toLowerCase().replace(/ /g, '+');
}

const setSearchFetch = async strSearch => {
  try {
    const responseFetch = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${strSearch}`);
    const dataFetch = await responseFetch.json();
    
    return dataFetch;
    
  } catch(error) {
    console.log('An error has ocurred.', error);
  }
};