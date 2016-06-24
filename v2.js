//bomb logic
var total, loop;

function clockString(num, lpad) {
  var temp = num / 1000; //Get the number of seconds 
  return Math.floor(temp / 60) + ":" + lpad(temp % 60); 
}

function kaboom () {
  clearInterval(loop); 
  console.log("KABOOM!");
}

function updateTimer() {
  var clock = clockString(total, function(num) {
    return ("00" + num).slice(-2);
  });
  if (clock == "0:00") {
    kaboom();
  } else {
    console.log(clock);
  }
}

//App logic

function init(duration, timer) {
  total = duration;
  loop = setInterval(timer, 1000);
}

init(10000, function() {
  total = total - 1000;
  updateTimer();
});
