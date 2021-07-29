// //////QUERY SELECTORS///////////////////////
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');



// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);


// ///////EVENT HANDLERS //////////////////////
function changeStudyColor(){
  event.preventDefault();
  studyBtn.classList.toggle('study-button-active');
};

function changeMeditateColor(){
  event.preventDefault();
  meditateBtn.classList.toggle('meditate-button-active');
};

function changeExerciseColor(){
  event.preventDefault();
  exerciseBtn.classList.toggle('exercise-button-active');
}
