import '../sass/main.scss';

import { setEventListener } from './modules/globalFunctions.js';
import { searchBarProcess } from './modules/searchBar.js';
import { loopJobsObj, setJobsProcess } from './modules/setJobs.js';
import { setObjCheckbox, filterCheckbox, setFilterFromArr } from './modules/ubicationConfig.js';

// DOM SELECTORS

const searchButton = document.querySelector('.search__button');
export const loadingJobs = document.querySelector('.loading');
export const mainJobs = document.querySelector('.main__jobs');
export const mainJobsPages = document.querySelector('.main__jobs-pages');
const locationSearchButton = document.querySelector('.main__location-btn');

const checkboxFulltime = document.querySelector('.main__fulltime');
const mainLocationOptions = document.querySelectorAll('.main__location-option');

//////////////////////////
// CODE

// To display all works when loaded
const dataObjSearch = searchBarProcess('')
                      .then(data => {
                        setFilterFromArr(data.reverse());
                        
                        setClickEvent(checkboxFulltime)(setObjCheckbox('Full Time', checkboxFulltime, data.reverse(), 'type'));
                      })
                      .catch(error => console.log('New error', error));

const setClickEvent = setEventListener('click');

setClickEvent(searchButton)(() => {
  const locationSearchInput = document.querySelector('.main__location-input');
  const searchInput = document.querySelector('.search__input')
  
  document.querySelectorAll('.main__job').forEach(e => e.remove());
  document.querySelectorAll('.main__page-item').forEach(e => e.remove());
  loadingJobs.style.display = 'block';
  
  const locationSearchInputValue = locationSearchInput.value;
  const searchInputValue = searchInput.value;
  
  const dataObjSearch = searchBarProcess(searchInputValue + '&location=' + locationSearchInputValue)
                        .then(data => {
                          setFilterFromArr(data.reverse());
                          
                          setClickEvent(checkboxFulltime)(setObjCheckbox('Full Time', checkboxFulltime, data.reverse()));
                          
                        })
                        .catch(error => console.log('New error', error));
                        
});

setClickEvent(locationSearchButton)(() => {
  const locationSearchInput = document.querySelector('.main__location-input');
  const searchInput = document.querySelector('.search__input')
  
  document.querySelectorAll('.main__job').forEach(e => e.remove());
  document.querySelectorAll('.main__page-item').forEach(e => e.remove());
  loadingJobs.style.display = 'block';
  
  const locationSearchInputValue = locationSearchInput.value;
  const searchInputValue = searchInput.value;
  
  const dataObjSearch = searchBarProcess(searchInputValue + '&location=' + locationSearchInputValue)
                        .then(data => {
                          setFilterFromArr(data.reverse());
                          
                          setClickEvent(checkboxFulltime)(setObjCheckbox('Full Time', checkboxFulltime, data.reverse()));
                          
                        })
                        .catch(error => console.log('New error', error));
                        
});