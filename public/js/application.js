$(document).ready(function() {
// timer object

	timer = new Timer();
	var count
	// mousetrap binds
	Mousetrap.bind('space', function(){ //toggle timer state
			if (count) {
				clearInterval(count);
			}
			timer.startTime();
			count = setInterval(function(){
				$('div.count').html(timer.elapsedTime())
				// console.log(timer.elapsedTime())
			}, 300);
	});

// timer.cycles (for loop)
	// when the spacebar is pressed, toggle timer, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"

	// when spacebar is pressed again, toggle timer, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"

});

