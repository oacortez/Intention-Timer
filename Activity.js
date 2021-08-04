class Activity {
  constructor(category,description,minutes,seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    this.id = Date.now();
  }

  countdown() {
    setInterval(displayTimer, 1000);
    var minutes = parseInt(this.minutes);
    var seconds = parseInt(this.seconds);

    var totalSeconds = (minutes * 60) + seconds;

    function displayTimer(){
    var min = Math.floor(totalSeconds / 60);
    var sec = totalSeconds % 60;

      if(min < 10){
        min = `0${min}`;
      } 
      if(sec < 10){
        sec = `0${sec}`;
      }
      if(totalSeconds <= 0){
        countdown.innerText = '00:00';
        startTimerBtn.innerText = 'You did it! Great work!';
        clearInterval(displayTimer);
      }else{
        countdown.innerText = `${min}:${sec}`;
        startTimerBtn.disabled = true;
        totalSeconds--;
        return totalSeconds;
      }
    };
  };
};
