import '../sass/main.scss';

const mainApplyInfo = document.querySelector('.main__apply-info');
const mainInfoTitle = document.querySelector('.main__info-title-text');
const mainTypeJob = document.querySelector('.main__type-job');
const mainInfoDate = document.querySelector('.main__info-date-text');
const mainInfoPortrait = document.querySelector('.main__info-job-portrait');
const mainInfoName = document.querySelector('.main__info-job-name');
const mainInfoUbication = document.querySelector('.main__info-ubication-text');
const mainInfoDesc = document.querySelector('.main__info-desc');
const title = document.querySelector('title');

const locationId = location.hash.replace('#', '');

export const setInfoJob = (appyInfo, descInfo, logoUrl, titleJob, jobType, jobDate, companyName, jobLocation) => {
  mainApplyInfo.innerHTML = appyInfo;
  mainInfoTitle.innerHTML = titleJob;
  mainTypeJob.innerHTML = jobType;
  mainInfoDate.innerHTML = jobDate.split(' ').slice(0, 3).join(' ');
  mainInfoPortrait.setAttribute('src', logoUrl);
  mainInfoName.innerHTML = companyName;
  mainInfoUbication.innerHTML = jobLocation;
  mainInfoDesc.innerHTML = descInfo;
  title.innerHTML = `Github Jobs | ${companyName} job in ${jobLocation}`
};

fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${locationId}.json`)
  .then(res => res.json())
  .then(obj => {
    setInfoJob(
      obj.how_to_apply,
      obj.description,
      obj.company_logo,
      obj.title, obj.type,
      obj.created_at,
      obj.company,
      obj.location
    );
  })