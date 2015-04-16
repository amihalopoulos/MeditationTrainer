
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