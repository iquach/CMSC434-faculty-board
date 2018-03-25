function checkTime(i) {
	  if (i < 10) {
	    i = "0" + i;
	  }
	  return i;
}

function startTime() {
	  var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var ampm = h < 12 ? " AM" : " PM";
	  m = checkTime(m);
	  document.getElementById('time').innerHTML = (h%12) + ":" + m + ampm;
	  t = setTimeout(function() {
	    startTime()
	  }, 500);
}

startTime();