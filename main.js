// grab one of the buttons
var studyBtn = document.querySelector('#studyBtn');
// Create an event listner that responds to a click of one of the buttons
studyBtn.addEventListener('click', changeColor);
// the click will invoke a function
function changeColor(){
  event.preventDefault();

  studyBtn.classList.toggle('study-button-active');
}
// that function will change the colors in CSS
