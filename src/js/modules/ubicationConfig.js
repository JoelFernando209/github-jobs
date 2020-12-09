import { setJobsProcess } from './setJobs.js';

let filters = [];

export const setFilterFromArr = obj => {
  if(obj.length <= 0) {
    return;
  }
  
  if(filters.includes('Full Time')) {
    setJobsProcess(filterCheckbox('Full Time', obj, 'type'))
  } else {
    setJobsProcess(obj);
  }
}

export const setObjCheckbox = (checkboxVal, element, obj, prop) => {
  let eventHandler = false;

  return () => {
    if(element.checked) {
      eventHandler = true;
      filters.push(checkboxVal);
      
      const filterArr = filterCheckbox(checkboxVal, obj, prop);
      setJobsProcess(filterArr);
      
    } else {
      eventHandler = false;
      filters = filters.filter(item => item !== checkboxVal)
      setJobsProcess(obj);
      
      console.log(filters);
    }
  }
}

export const filterCheckbox = (checkboxVal, arr, prop) => {
  return arr.filter(item => item[prop] === checkboxVal || item[prop].includes(checkboxVal));
}