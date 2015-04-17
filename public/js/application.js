$(document).ready(function() {
// session object

	session = new Session();
	var intervalID
	// mousetrap binds

	Mousetrap.bind('space', function(){ 
		// dont let user go through more than X cycles
		// while (session.breathCounter  <= 2*session.cycles ){
			if (intervalID) {
				clearInterval(intervalID);
			}
			session.setStartTime();
			intervalID = setInterval(function(){
				
				$('div.count').html(session.currentBreathTime())

			}, 100);
			$('div.last-breath').html("last breath:  " + session.currentBreath)

			// push breathes to arrays
			if (session.breathCounter % 2 !== 0){
				session.inhaleArray.push(session.currentBreath)
			// set longest inhale & display
				session.setLongestInhale();
				$('div#longest-inhale').html("longest inhale:  " + session.longestInhale)
			// set average inhale & display
				session.setLongestInhale();

			} else {
				session.exhaleArray.push(session.currentBreath)
			}
			
			// set 



			session.breathCounter ++
	});


// session.cycles (for loop)
	// when the spacebar is pressed, toggle session, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"

	// when spacebar is pressed again, toggle session, toggle prompt
		// startTime = getTime
		// continously update div with "time since startTime"
});

