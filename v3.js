//bomb logic
var bomb = {
  total: undefined,
  loop: undefined,
  clockString: function(lpad) {
    var temp = bomb.total / 1000; //Get the number of seconds 
    return Math.floor(temp / 60) + ":" + lpad(temp % 60); 
  },
  kaboom: function() {
    clearInterval(bomb.loop); 
    console.log("KABOOM!");
  },
  updateTimer: function() {
    var clock = bomb.clockString(function(num) {
      return ("00" + num).slice(-2);
    });
    if (clock == "0:00") {
      bomb.kaboom();
    } else {
      console.log(clock);
    }
  }
};

//App logic
function init(duration, timer) {
  bomb.total = duration;
  bomb.loop = setInterval(timer, 1000);
}

init(10000, function() {
  bomb.total = bomb.total - 1000;
  bomb.updateTimer();
});
