// //////GLOBAL VARIABLES/////////////////////


// //////QUERY SELECTORS///////////////////////
var form = document.querySelector('.activity-form');
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var startActivityBtn = document.querySelector('#startBtn');
var goalInput = document.querySelector('#goal');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');
var errorMsg = document.querySelector('#errorMsg');



// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);
minutesInput.addEventListener('keydown', checkInvalidChars);
startActivityBtn.addEventListener('click', checkInputs);

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
};


function checkInputs() {
  event.preventDefault();
  if(studyBtn.classList.contains('study-button-active') === false
    && exerciseBtn.classList.contains('exercise-button-active') === false
    && meditateBtn.classList.contains('meditate-button-active') === false){
<<<<<<< HEAD
      errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A category is required`;
      errorMsg.style.visibility = 'visible';
  }else if(!goalInput.value) {
    errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A description is required`;
    errorMsg.style.visibility = 'visible';
  }else if(!minutesInput.value) {
    errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A minute is required`;
    errorMsg.style.visibility = 'visible';
  }else if(!secondsInput.value) {
    errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A second is required`;
=======
      errorMsg.innerText = "A Catagory is required"
      errorMsg.style.visibility = 'visible';
  }else if(!goalInput.value) {
    errorMsg.innerText = "A description is required"
    errorMsg.style.visibility = 'visible';
  }else if(!minutesInput.value) {
    errorMsg.innerText = 'A minute is required';
    errorMsg.style.visibility = 'visible';
  }else if(!secondsInput.value) {
    errorMsg.innerText = 'A second is required';
>>>>>>> c4666002b698ac0a1d7567f685918506616db01f
    errorMsg.style.visibility = 'visible';
  }else{
      errorMsg.style.visibility = 'hidden';
    }
  };
















// function startActivity(){
//   event.preventDefault();
//   checkActiveBtn();
//   checkInputs();
// }


// function checkInputs() {
//   event.preventDefault();
//   if(!goalInput.value) {
//     errorMsg.style.visibility = 'visible';
//   } else if(!minutesInput.value) {
//     errorMsg.innerText = 'A minute is required';
//     errorMsg.style.visibility = 'visible';
//   } else if(!secondsInput.value) {
//     errorMsg.innerText = 'A second is required';
//     errorMsg.style.visibility = 'visible';
//   } else {
//     errorMsg.style.visibility = 'hidden';
//     }
//   }
//
//
//   function checkActiveBtn() {
//     // event.preventDefault();
//     if (studyBtn.classList.contains('study-button-active')
//     || exerciseBtn.classList.contains('exercise-button-active')
//     || meditateBtn.classList.contains('meditate-button-active')) {
//         errorMsg.style.visibility = 'hidden';
//       } else {
//       errorMsg.innerText = "A Catagory is required"
//       errorMsg.style.visibility = 'visible';
//     }
//   }



// if

// function checkActiveBtn() {
//   if(studyBtn.clicked === true) {
//      errorMsg.style.visibility = 'visible';
//   } else {
//      errorMsg.style.visibility = 'hidden';
//   }
// }


// // if(studyBtn.clicked === false) {
//   errorMsg.style.visibility = 'visible';
// } else {
//
// }





// grab the error message; the input values; start activity button
// Create a function that checks if the input value is undefined or Null?
// If the value is undefined/null then remove the visibility of the error message's CSS
