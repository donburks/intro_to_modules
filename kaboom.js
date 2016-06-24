var bomb = require('./bomb');
//App logic

function init(duration, timer) {
  bomb.setTotal(duration);
  bomb.setLoop(setInterval(timer, 1000)); 
}

init(5000, function() { 
  bomb.setTotal(bomb.getTotal() - 1000); 
  bomb.updateTimer(); 
});

