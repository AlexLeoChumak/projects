export default function ClockViewCanvas() {
	let myModel = null;
	let myField = null;
	let go = null;
	let stop = null;
 	let canvas = null;
	let ctx  = null;
	let hours = null; 
	let min = null; 
	let sec = null;

	this.start = function(model, field, city) {
		myModel = model;
		myField = field;

		this.createClockMain(city);
		go = myField.querySelector('.go');
		stop = myField.querySelector('.stop');

		go.disabled = true;
	};

	this.createClockMain = function(city) {
		this.createBtns(); 
		this.setCity(city);

		let canv = '<canvas id="canvasClock" width="200" height="200"></canvas>';
		let canvasContainer = document.createElement('div');
		canvasContainer.className = 'clock-margin';
		canvasContainer.innerHTML = canv;
		myField.append(canvasContainer);

		canvas = myField.querySelector('#canvasClock');
		ctx = canvas.getContext('2d');
	};

	this.createBtns = function() {
		let btnGo = '<button class="go">старт</button>';
		let btnStop = '<button class="stop">стоп</button>';
		myField.innerHTML = `${btnGo} ${btnStop}`;
	};

	this.setCity = function(city) {
		let info = document.createElement('div');
		info.className = 'info';
		info.innerHTML = `${city}`;
		myField.append(info);
	};

	this.init = function() {
		this.update();
		this.clear();
		this.createClockField(); 
		this.createArrows(); 
	};

	this.clear = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	this.createClockField = function() {
		ctx.beginPath();
		ctx.fillStyle = 'yellow';
		ctx.arc(100, 100, 100, 0, Math.PI*2, true);
		ctx.fill();

		ctx.beginPath();
		let delta = Math.PI * 2 / 12; 
		let angle = -45;

		for (let i = 1; i <= 12; i++) {		
			let x = 100 + 80 * Math.cos(angle);
		    let y = 100 + 80 * Math.sin(angle);
			
			ctx.beginPath();
			ctx.fillStyle = 'green';
		    ctx.arc(x, y, 12.5, 0, Math.PI*2, true);
			ctx.fill();

			ctx.beginPath();
			ctx.fillStyle = '#fff';    
			ctx.font = '800 12px Arial';
			if (i < 10) {
				ctx.fillText(i, x - 4, y + 5);
			}

			if (i >= 10) {
				ctx.fillText(i, x - 8, y + 5);
			}

		    angle += delta;
		};
	};

	this.createArrows = function() {
		let x1 = canvas.width / 2;
		let y1 = canvas.height / 2;

		let secAngle = 6 * sec;
		let minAngle = 6 * (min + 1 / 60 * sec);
		let hrAngle = 30 * (hours + 1 / 60 * min);

		ctx.beginPath();
		ctx.lineWidth = 2;
	    ctx.lineCap = 'round';
		ctx.translate(x1 - ctx.lineWidth / 2, y1);
		ctx.rotate(secAngle * Math.PI / 180 + Math.PI);
		ctx.moveTo(0, -10);
	    ctx.lineTo(0, 80);
	    ctx.strokeStyle = 'black';
	    ctx.stroke();
	    ctx.resetTransform();
	    ctx.closePath();

	    ctx.beginPath();
		ctx.lineWidth = 3;
	    ctx.lineCap = 'round';
		ctx.translate(x1 - ctx.lineWidth / 2, y1);
		ctx.rotate(minAngle * Math.PI / 180 + Math.PI);
		ctx.moveTo(0, -14);
	    ctx.lineTo(0, 75);
	    ctx.stroke();
	    ctx.resetTransform();
	    ctx.closePath();

	    ctx.beginPath();
		ctx.lineWidth = 4;
	    ctx.lineCap = 'round';
		ctx.translate(x1 - ctx.lineWidth / 2, y1);
		ctx.rotate(hrAngle * Math.PI / 180 + Math.PI);
		ctx.moveTo(0, -16);
	    ctx.lineTo(0, 40);
	    ctx.stroke();
	    ctx.resetTransform();
	    ctx.closePath();
	};

	this.disabledBtns = function (btn, status) {
		if (status === false) {
			btn.removeAttribute('disabled');
		}
		else if (status === true) {
			btn.setAttribute('disabled', 'true');
		}
	};

	this.update = function() {
		let date = myModel.getTime(); 
		hours = date.getHours();
		min = date.getMinutes(); 
		sec = date.getSeconds();
	};
}
