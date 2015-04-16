$(document).ready(function() {
// timer object

var Timer = function(cycles) {
		this.inhaleLength = 0;
		this.exhaleLength = 0;
		this.startT;
		this.elapsedT;
		this.cycles = cycles || 5		
	}
	// add prototype functions
	Timer.prototype.startTime = function(){
		var time = new Date();
		this.startT = time.getTime();
		console.log(this)
		return this.startT;
	}

	Timer.prototype.elapsedTime = function(){
		var time = new Date();
		this.elapsedT = (time.getTime() - this.startT)
		return this.elapsedT;
	}
	timer = new Timer();
	// mousetrap binds
	Mousetrap.bind('space', function(){ //toggle timer state

			timer.startTime();

			setInterval(function(){
				// clear element
				// $(.count).
				// show elapsedTime
				console.log(timer.elapsedTime())
			}, 100);
	})

// timer.cycles (for loop)
	// when the spacebar is pressed, toggle timer, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"

	// when spacebar is pressed again, toggle timer, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"

// debugger
});

