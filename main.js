// //////GLOBAL VARIABLES/////////////////////


// //////QUERY SELECTORS///////////////////////
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var minutesInput = document.querySelector('#minutes');


// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);
minutesInput.addEventListener('keydown', checkInvalidChars);


// ///////EVENT HANDLERS //////////////////////

function changeStudyColor(){
  event.preventDefault();
  studyBtn.classList.toggle('study-button-active');
  meditateBtn.classList.remove('meditate-button-active');
  exerciseBtn.classList.remove('exercise-button-active');
};

function changeMeditateColor(){
  event.preventDefault();
  meditateBtn.classList.toggle('meditate-button-active');
  studyBtn.classList.remove('study-button-active');
  exerciseBtn.classList.remove('exercise-button-active');
};

function changeExerciseColor(){
  event.preventDefault();
  exerciseBtn.classList.toggle('exercise-button-active');
  meditateBtn.classList.remove('meditate-button-active');
  studyBtn.classList.remove('study-button-active');
};

function checkInvalidChars(e){
  var invalidChars = ['e', '+', '-', '.'];
  if(invalidChars.includes(e.key)){
    e.preventDefault();
    console.log('it ran!!');
  }
}
