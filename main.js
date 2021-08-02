// //////DATA MODEL/////////////////////
savedActivities = [];

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
var newActivitySection = document.querySelector('#newActivitySection');
var box1 = document.querySelector('#box1');
var h2 = document.querySelector('h2');
var timer = document.querySelector('#timer');
var rightSide = document.querySelector('#box2');




// //////////EVENT LISTENERS ///////////////////
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);
minutesInput.addEventListener('keydown', checkInvalidChars);
startActivityBtn.addEventListener('click', startActivity);
newActivitySection.addEventListener('click', findCategory);




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

// ******Disable buttons if no button is selected********
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


  function startActivity(e){
    e.preventDefault;
    checkInputs();
    var selectedCat = findCategory();
    var newActivity = new Activity(selectedCat, goalInput.value, minutesInput.value, secondsInput.value);
    // savedActivities.push(newActivity);
    h2.innerText = 'Current Activity'
    box1.innerHTML =
  `  <section class="timer" id="timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
      </svg>
      <span class = "countdown" id="countdown">
      ${startingTime(`${minutesInput.value}`, `${secondsInput.value}`)}
      </span>
    </section>
    <button class= "start-button" id="startBtn"> start </button>`;

    // console.log(event);
    // startTimer();
  };

  function startingTime(minutes, seconds) {
    if (seconds < 10) {
    seconds = `0${seconds}`;
    }
    // startTimer();
    return `${minutes}:${seconds}`;
  };

  var startBtn = document.querySelector('#startBtn');
  startBtn.addEventListener('click', startTimer);

  // setInterval(startTimer, 1000);
  // function startTimer(){
  //
  //     var startingMinutes = minutesInput.value * 60;
  //     var startingSeconds = secondsInput.value;
  //
  //
  //     var minutes = Math.floor(startingMinutes / 60);
  //     var seconds = startingSeconds % 60;
  //     var time = minutes + seconds;
  //
  //     time--;
  //     console.log(time);
  // };
