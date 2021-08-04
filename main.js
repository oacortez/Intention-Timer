// //////DATA MODEL/////////////////////
savedActivities = [];

// //////QUERY SELECTORS///////////////////////
var form = document.querySelector('.activity-form');
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var startActivityBtn = document.querySelector('#startBtn')
var goalInput = document.querySelector('#goal');
var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');
var errorMsg = document.querySelector('#errorMsg');
var newActivitySection = document.querySelector('#newActivitySection');
var box1 = document.querySelector('#box1');
var h2 = document.querySelector('h2');
var timerView = document.querySelector('#timerView');
var rightSide = document.querySelector('#box2');
var countdown = document.querySelector('#countdown');
var startTimerBtn = document.querySelector('#startTimerBtn');
var activityDisplay = document.querySelector('#activityOutput');


// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);
minutesInput.addEventListener('keydown', checkInvalidChars);
startActivityBtn.addEventListener('click', startActivity);
newActivitySection.addEventListener('click', findCategory);
startTimerBtn.addEventListener('click', startTimer);




// ///////EVENT HANDLERS //////////////////////

function changeStudyColor(){
  studyBtn.classList.toggle('study-button-active');
  meditateBtn.classList.remove('meditate-button-active');
  exerciseBtn.classList.remove('exercise-button-active');
};

function changeMeditateColor(){
  meditateBtn.classList.toggle('meditate-button-active');
  studyBtn.classList.remove('study-button-active');
  exerciseBtn.classList.remove('exercise-button-active');
};

function changeExerciseColor(){
  exerciseBtn.classList.toggle('exercise-button-active');
  meditateBtn.classList.remove('meditate-button-active');
  studyBtn.classList.remove('study-button-active');
};

function checkInvalidChars(){
  var invalidChars = ['e', '+', '-', '.'];
  if(invalidChars.includes(e.key)){ 
  }
};

function checkInputs() {
  event.preventDefault();
  if(studyBtn.classList.contains('study-button-active') === false
    && exerciseBtn.classList.contains('exercise-button-active') === false
    && meditateBtn.classList.contains('meditate-button-active') === false){
      errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A category is required`;
      errorMsg.style.visibility = 'visible';
  } else if(!goalInput.value) {
      errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A description is required`;
      errorMsg.style.visibility = 'visible';
  } else if(!minutesInput.value) {
      errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A minute is required`;
      errorMsg.style.visibility = 'visible';
  } else if(!secondsInput.value) {
      errorMsg.innerHTML = `<img src="assets/warning.svg" alt="error image"> A second is required`;
      errorMsg.style.visibility = 'visible';
  } else{
      errorMsg.style.visibility = 'hidden';
      form.classList.add('hidden');
      timerView.style.visibility = 'visible';
      h2.innerText = 'Current Activity';
    }
  };

  function findCategory() {
    if(studyBtn.classList.contains('study-button-active')){
      return 'study';
    }else if (meditateBtn.classList.contains('meditate-button-active')){
        return 'meditate';
    }else if (exerciseBtn.classList.contains('exercise-button-active')){
        return 'exercise';
    }
  };

  function startActivity(){
    event.preventDefault;
    checkInputs();
    changeBtnColor();
    activityDisplay.innerText = `${goalInput.value}`;
    startingTime();
  };

  function startingTime() {
     countdown.innerText = `${minutesInput.value}:${secondsInput.value}`;

  };

  function startTimer(){
    var selectedCat = findCategory();
    var newActivity = new Activity(selectedCat, goalInput.value, minutesInput.value, secondsInput.value);
    newActivity.countdown();
  };
  
  function changeBtnColor() {
    if (studyBtn.classList.contains('study-button-active')) {
      startTimerBtn.classList.add('start-timer-button-study')
    } else if (exerciseBtn.classList.contains('exercise-button-active')) {
      startTimerBtn.classList.add('start-timer-button-exercise')
    } else if (meditateBtn.classList.contains('meditate-button-active')) {
      startTimerBtn.classList.add('start-timer-button-meditate') 
    }

  }