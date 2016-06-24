//bomb logic
var total, loop;

function lpad(num) {
  return ("00" + num).slice(-2);
}

function clockString(num) {
  var temp = num / 1000; //Get the number of seconds 
  return Math.floor(temp / 60) + ":" + lpad(temp % 60); 
}

function kaboom () {
  clearInterval(loop); 
  console.log("KABOOM!");
}

function updateTimer() {
  var clock = clockString(total);
  if (clock == "0:00") {
    kaboom();
  } else {
    console.log(clock);
  }
}

//App logic

function init() {
  total = 10000;
  loop = setInterval(function() {
    total = total - 1000;
    updateTimer();
  }, 1000);
}

init();
