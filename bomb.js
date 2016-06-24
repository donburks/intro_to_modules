//bomb logic
var total, loop;

function clockString(lpad) {
  var temp = total / 1000; //Get the number of seconds 
  return Math.floor(temp / 60) + ":" + lpad(temp % 60); 
}

function kaboom () {
  clearInterval(loop); 
  console.log("KABOOM!");
}

module.exports = {
  setTotal: function(num) {
    total = num;
  },
  getTotal: function() {
    return total;
  },
  setLoop: function(fn) {
    loop = fn;
  },
  kaboom: kaboom,
  clockstring: clockString,
  updateTimer: function () {
    var clock = clockString(function(num) {
      return ("00" + num).slice(-2);
    });
    if (clock == "0:00") {
      kaboom();
    } else {
      console.log(clock);
    }
  }
};

