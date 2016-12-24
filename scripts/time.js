$(function() {
        setInterval(function() {
                var today = new Date();
                var sunday = new Date();
                var days_left = 7 - today.getDay();
                sunday.setDate(days_left + today.getDate());
                sunday.setHours(23,59,59,0);
    
                var test = sunday - today;

                var hours = Math.floor(test / 3.6e+6);
                var minutes = Math.floor((test - hours * 3.6e+6) / 60000);
		var seconds = Math.floor((test - hours * 3.6e+6 - minutes * 60000) / 1000);

		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}

                $('.rest div').text(hours + ':' + minutes + ':' + seconds);
        }, 500);
});
