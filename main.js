// //////QUERY SELECTORS///////////////////////
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');



// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);


// ///////EVENT HANDLERS //////////////////////
function changeStudyColor(){
  event.preventDefault();
  studyBtn.classList.toggle('study-button-active');
};

function changeMeditateColor(){
  event.preventDefault();
  meditateBtn.classList.toggle('meditate-button-active');
}
