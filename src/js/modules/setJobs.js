import { createProcess } from './globalFunctions.js';
import { mainJobsPages, mainJobs, loadingJobs } from '../index.js';
import { setInfoJob } from '../infoJob.js';

export const loopJobsObj = (obj) => {
  loadingJobs.style.display = 'none';
  document.querySelectorAll('.main__job').forEach(e => e.remove());
  
  obj.forEach(job => {
    setJob(job, mainJobs)
  })
}

const divideArr = arr => {
  const partsToBeDivided = Math.floor(arr.length / 4);
  const resArr = [];

  const chunkLength = Math.max(arr.length / partsToBeDivided, 1);
  
  for (var i = 0; i < partsToBeDivided; i++) {
    if(chunkLength * (i+1) <= arr.length) {
      resArr.push(arr.slice(chunkLength*i, chunkLength*(i+1)))
    }
  }
  
  return resArr;
}

const setJobsPages = (arr, initialVal = 0) => {
  mainJobsPages.innerHTML = '';
  
  arr.forEach((element, index) => {
    setJobPage(mainJobsPages, index+1, element);
  })
  
  return arr[initialVal];
}

const setJobPage = (parent, content, arrContent) => {
  const mainPageItem = document.createElement('div');
  const mainPageItemText = document.createTextNode(content);
  mainPageItem.className = 'main__page-item';
  
  mainPageItem.appendChild(mainPageItemText);
  
  mainPageItem.addEventListener('click', () => {
    loopJobsObj(arrContent);
    
    document.querySelectorAll('.main__page-item').forEach(item => {
      item.style.border = '1px solid rgba(128,128,128, .4)';
      item.style.color = 'black';
      item.style.backgroundColor = 'white';
    })
    
    mainPageItem.style.border = '1px solid #1E86FF';
    mainPageItem.style.color = 'white';
    mainPageItem.style.backgroundColor = '#1E86FF';
  })
  
  return parent.appendChild(mainPageItem);
}

const setJob = (obj, parentDom) => {
  const mainJobParent = document.createElement('div');
  mainJobParent.className = 'main__job';
  
  const mainImgJob = document.createElement('img');
  
  mainImgJob.setAttribute('src', obj.company_logo);
  mainImgJob.className = 'main__img-job';
  
  const mainInfoJob = document.createElement('div');
  mainInfoJob.className = 'main__info-job';
  
  const mainInfoEnterprise = document.createElement('span');
  const mainInfoEnterpriseText = document.createTextNode(obj.company);
  mainInfoEnterprise.className = 'main__enterprise';
  mainInfoEnterprise.appendChild(mainInfoEnterpriseText);
  
  const mainInfoRole = document.createElement('span');
  const mainInfoRoleText = document.createTextNode(obj.title);
  mainInfoRole.className = 'main__role-search';
  mainInfoRole.appendChild(mainInfoRoleText);
  
  const mainInfoType = document.createElement('span');
  const mainInfoTypeText = document.createTextNode(obj.type);
  mainInfoType.className = 'main__type-job';
  mainInfoType.appendChild(mainInfoTypeText);
  
  mainInfoJob.appendChild(mainInfoEnterprise);
  mainInfoJob.appendChild(mainInfoRole);
  mainInfoJob.appendChild(mainInfoType);
  
  const mainJobInfo = document.createElement('div');
  mainJobInfo.className = 'main__job-info';
  
  const mainUbicationJob = document.createElement('div');
  mainUbicationJob.className = 'main__ubication-job';
  
  const mainUbicationJobIcon = document.createElement('img');
  mainUbicationJobIcon.className = 'main__ubication-icon';
  mainUbicationJobIcon.setAttribute('src', 'img/earth-ouline.svg');
  mainUbicationJobIcon.setAttribute('alt', 'Ubication');
  
  const mainUbicationJobName = document.createElement('span');
  const mainUbicationJobNameText = document.createTextNode(obj.location)
  mainUbicationJobName.className = 'main__ubication-name';
  mainUbicationJobName.appendChild(mainUbicationJobNameText);
  
  const mainPublicationJob = document.createElement('div');
  mainPublicationJob.className = 'main__publication-job';
  
  const mainPublicationJobIcon = document.createElement('img');
  mainPublicationJobIcon.className = 'main__publication-icon';
  mainPublicationJobIcon.setAttribute('src', 'img/clock-recent.svg');
  mainPublicationJobIcon.setAttribute('alt', 'Publication Date');
  
  const mainPublicationJobName = document.createElement('span');
  const mainPublicationJobNameText = document.createTextNode(obj.created_at.split(' ').slice(0, 3).join(' '));
  mainPublicationJobName.className = 'main__publication-name';
  mainPublicationJobName.appendChild(mainPublicationJobNameText);
  
  mainUbicationJob.appendChild(mainUbicationJobIcon);
  mainUbicationJob.appendChild(mainUbicationJobName);
  
  mainPublicationJob.appendChild(mainPublicationJobIcon);
  mainPublicationJob.appendChild(mainPublicationJobName);
  
  mainJobInfo.appendChild(mainUbicationJob);
  mainJobInfo.appendChild(mainPublicationJob);
  
  mainJobParent.appendChild(mainImgJob);
  mainJobParent.appendChild(mainInfoJob);
  mainJobParent.appendChild(mainJobInfo);
  
  mainJobParent.addEventListener('click', () => {
    window.location.href = `http://localhost:8080/info-job.html#${obj.id}`;
  })
  
  parentDom.prepend(mainJobParent);
}

export const setJobsProcess = dataArr => createProcess(
  loopJobsObj,
  setJobsPages,
  divideArr
)(dataArr);