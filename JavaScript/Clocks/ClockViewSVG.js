export default function ClockViewSVG() {
	let myField = null;
	let go = null;
	let stop = null;
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
		myField.innerHTML = `${btnGo} ${btnStop}`;
	};

	this.setCity = function(city) {
		let info = document.createElement('div');
		info.classList.add('info');
		info.innerHTML = `${city}`;
		myField.append(info);
	};

	this.createClockContainer = function() {
		let svg = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='200' viewBox='0 0 200 200' preserveAspectRatio='xMidYMin meet'><g class='mainCircle'><circle r='100' cx='50%' cy='50%' class='clock'></circle><g class='arrows'><rect class='hArrow' x='98.5' y='45%' width='3' height='64' rx='2.5' ry='2.55'></rect><rect class='mArrow' x='99.1' y='44%' width='1.8' height='80' rx='2' ry='2'></rect><rect class='sArrow' x='99.5' y='42%' width='1' height='100' rx='2' ry='2'></rect></g></svg>"
		let svgContainer = document.createElement('div');
		svgContainer.className = 'clock-margin';
		svgContainer.innerHTML = svg;
		myField.append(svgContainer);
	};
	
	this.makeClock = function() {
		let delta = Math.PI * 2 / 12;
		let angle = -45;
		let arrows = myField.querySelector('.arrows');
		let svgNS = "http://www.w3.org/2000/svg";

		for (let i = 1; i <= 12; i++) {
			let point = document.createElementNS(svgNS, 'circle');
			point.classList.add('hPoint');
			let text = document.createElementNS(svgNS, 'text');

			let x = 100 + 80 * Math.cos(angle);
		    let y = 100 + 80 * Math.sin(angle);

			if (i < 10) {
				text.setAttribute('x', x - 2.5);
				text.setAttribute('y', y + 3);
			}
			if (i >= 10) {
				text.setAttribute('x', x - 6);
				text.setAttribute('y', y + 3);
			}
	        
	        text.textContent = i;
		    point.setAttribute('r', 12.5);
		    point.setAttribute('cx', x);
		    point.setAttribute('cy', y);
			
			arrows.before(point);
			arrows.before(text);
		    angle += delta;
		};
	};

	this.disabledBtns = function (btn, status) {
		if (status === false) {
			btn.removeAttribute('disabled');
		}
		else if (status === true) {
			btn.setAttribute('disabled', 'true');
		}
	};

	this.updateSArrow = function(corner) {
		sArrow.setAttribute('transform', `rotate(${corner})`);
	};
	this.updateMinRotation = function(corner) {
		mArrow.setAttribute('transform', `rotate(${corner})`);
	};
	this.updateHArrow = function(corner) {
		hArrow.setAttribute('transform', `rotate(${corner})`);
	};
}
