var Session = function(cycles) {
		this.startTimeime;
		this.currentBreath = 0;
		this.cycles = cycles || 4;
		this.inhaleArray = [];
		this.exhaleArray = [];
		// inhales
		this.longestInhale = 0;
		this.averageInhale;
		// exhales
		this.longestExhale;
		this.averageExhale;
		// cycles
		this.longestCycle;
		this.averageCycle;
		this.breathCounter = 0;
	}
	// add prototype functions
	Session.prototype.setStartTime = function(){
		var time = new Date();
		this.startTime = time.getTime();
		console.log(this)
		return this.startTime;
	}

	Session.prototype.currentBreathTime = function(){
		var time = new Date();
		millis = (time.getTime() - this.startTime)
		this.currentBreath = (millis / 1000).toFixed(1)
		console.log(this.currentBreath);
		return this.currentBreath;
	}

	Session.prototype.inhales = function(){
		// this.breaths = .push(currentBreath)
		// return this.inhale_lengths;
	}

	Session.prototype.setLongestInhale = function(){
		// is currentBreath longer than longestInhale?
		// longestInhale = currentBreath
		if (this.breathCounter === 0){
			this.longestInhale = this.currentBreath
		} else if(this.currentBreath > this.longestInhale) {
			this.longestInhale = this.currentBreath
		}
		return this.longestInhale;
	}

	Session.prototype.setAverageInhale = function(){

		retru
	}

	Session.prototype.longestExhale = function(){
		// is currentBreath longer than longestExhale?
		// longestExhale = currentBreath
	}

	Session.prototype.averageExhale = function(){

	}

	Session.prototype.longestCycle = function(){

	}

	Session.prototype.averageCycle = function(){

	}

