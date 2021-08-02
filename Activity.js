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

      countdown.innerText = `${min}:${sec}`;
      totalSeconds--;
      return totalSeconds;
      console.log(totalSeconds);

    }
  }

  markComplete() {

  }
  saveToStorage() {

  }
};
