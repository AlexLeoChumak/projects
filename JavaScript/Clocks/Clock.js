export default function Clock(timeZone) {
	this.go = true;
	let viewClock = null;
	let timer = null;

	this.start = function(view) {
		viewClock = view;
	};

	this.getTime = function() {
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth();	
		let day = date.getDate();
		let hours = date.getUTCHours() + timeZone;
		let mitutes = date.getMinutes(); 
		let seconds = date.getSeconds();
		let datesData = new Date(year, month, day, hours, mitutes, seconds);
		return datesData;
	};

    this.hourTurn = function() {
		let hr = this.getTime().getHours() >= 12 ? this.getTime().getHours() - 12 : this.getTime().getHours();
		let min = this.getTime().getMinutes();
		let seconds = this.getTime().getSeconds();
		let corner = hr * 30 + min * 0.5 + seconds * 0.5 / 60 - 180;
		if (viewClock.updateHArrow) {
			viewClock.updateHArrow(corner);
		} 
	};

    this.minTurn = function() {
		let min = this.getTime().getMinutes();
		let seconds = this.getTime().getSeconds();
		let fullSec = min * 60;
		let corner = fullSec * 0.1 + seconds * 0.1 - 180; 
		if (viewClock.updateMArrow) {
			viewClock.updateMArrow(corner);
		}
	};

	this.secTurn = function() {
		let seconds = this.getTime().getSeconds();
		let corner = seconds * 6 - 180;
		if (viewClock.updateSArrow) {
			viewClock.updateSArrow(corner);
		}
	};

	this.disabledBtns = function(btn, status) {
		viewClock.disabledBtns(btn, status);
	};

    this.viewUpdate = function() {
		if (this.go == true) {
			timer = setInterval(function() {
				this.secTurn();
				this.minTurn();
				this.hourTurn();
				if (viewClock.init) {
					viewClock.init();
				}
			}.bind(this), 100);
		}
		else if (this.go == false) {
			clearInterval(timer);
		}
	};
};