class Activity {
  constructor(category,description,minutes,seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.isCompleted = false;
    this.id = Date.now();
  }
  startTimer() {
    setInterval(startTimer, 1000);
    function startTimer(){
  
      var startingMinutes = this.minutes * 60;
      var startingSeconds = this.seconds;



      var minutes = Math.floor(startingMinutes / 60);
      var seconds = startingSeconds % 60;
      var time = minutes + seconds;

      time--;
    //     console.log(time);
    // };

  }
  markComplete() {

  }
  saveToStorage() {

  }
};
