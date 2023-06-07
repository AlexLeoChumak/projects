export default function ClockController() {
	let myModel = null;
	let myField = null;
	let go = null;
	let stop = null;

	this.start = function(model, field) {
		myModel = model;
		myField = field;

		go = myField.querySelector('.go');
		stop = myField.querySelector('.stop');

		go.addEventListener('click', function(e){
			e.preventDefault();
			myModel.go = true;
			myModel.disabledBtns(go, true);
			myModel.disabledBtns(stop, false);
			myModel.viewUpdate();
		});

		stop.addEventListener('click', function(e){
			e.preventDefault();
			myModel.go = false;
			myModel.disabledBtns(go, false);
			myModel.disabledBtns(stop, true);
			myModel.viewUpdate();
		});
	}
}