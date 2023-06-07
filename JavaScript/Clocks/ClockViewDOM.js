export default function ClockViewDOM() {
	let myField = null;
	let go = null;
	let clock = null;
	let sArrow = null;
 	let mArrow = null;
 	let hArrow = null;

	this.start = function(field, city) {
		myField = field;

		this.createClockMain(city);
		sArrow = myField.querySelector('.sArrow');
		mArrow = myField.querySelector('.mArrow');
		hArrow = myField.querySelector('.hArrow');
		go = myField.querySelector('.go');
		stop = myField.querySelector('.stop');

		go.disabled = true;
	};

	this.createClockMain = function(city) {
		this.createBtns(); 
		this.setCity(city);
		this.createClockContainer(); 
		this.makeClock();
	};

	this.createBtns = function() {
		let btnGo = '<button class="go">старт</button>';
		let btnStop = '<button class="stop">стоп</button>';
		myField.innerHTML = myField.innerHTML = `${btnGo} ${btnStop}`;
	};

	this.setCity = function(city) {
		let info = document.createElement('div');
		info.classList.add('info');
		info.innerHTML = `${city}`;
		myField.append(info);
	};

	this.createClockContainer = function() {
		clock = document.createElement('div');
		clock.className = 'clock';
		myField.append(clock);

		let sArrow = document.createElement('div');
			sArrow.className = 'sArrow';
			clock.append(sArrow);

		let mArrow = document.createElement('div');
			mArrow.className = 'mArrow';
			clock.append(mArrow);

		let hArrow = document.createElement('div');
			hArrow.className = 'hArrow';
			clock.append(hArrow);
	};
	
	this.makeClock = function() {
		let delta = Math.PI * 2 / 12;
		let angle = -45;
		let clockCenterX = clock.offsetWidth / 2;
		let clockCenterY = clock.offsetHeight / 2;

		for (let i = 1; i <= 12; i++) {
			let point = document.createElement('div');
				point.classList.add('hPoint');
				point.innerHTML = i;
		    	clock.append(point);

			let pointCenterX = point.offsetWidth / 2;
			let pointCenterY = point.offsetHeight / 2;

			point.style.left = clockCenterX - pointCenterX - 2 + 80 * Math.cos(angle) + 'px';
		    point.style.top = clockCenterY - pointCenterY - 2 + 80 * Math.sin(angle) + 'px';
		    
		    angle += delta;
		};
	};

	this.disabledBtns = function (btn, status) {
		if (status == false) {
			btn.removeAttribute('disabled');
		}
		else if (status == true) {
			btn.setAttribute('disabled', 'true');
		}
	};

	this.updateSArrow = function(corner) {
		sArrow.style.transform = `rotate(${corner}deg)`;
	};
	this.updateMinRotation = function(corner) {
		mArrow.style.transform = `rotate(${corner}deg)`;
	};
	this.updateHArrow = function(corner) {
		hArrow.style.transform = `rotate(${corner}deg)`;
	};
}
