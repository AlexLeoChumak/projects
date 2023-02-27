"use strict";

	var drinkStorage = new tHashStorage();
	//key   - название напитка
	//value - информация о напитке


	var drinkName = document.getElementById("drinkName");

	drinkName.onclick = function() {
		var keyP = prompt("напишите название напитка");
		var valueC = {};

		valueC.alcohol = confirm(keyP + " - алкогольный напиток или нет?\nok - алкогольный\nотмена - без алкогольный");
		valueC.recipe = prompt("напишите рецепт напитка - " + keyP);
		drinkStorage.addValue(keyP, valueC);
	}

	var drinkInfo = document.getElementById("drinkInfo");

	drinkInfo.onclick = function() {
		var drinkInf = prompt("Напишите название напитка");
		var drinkInfoP = document.getElementById("drinkInfoP");

		var answer = drinkStorage.getValue(drinkInf);

		if (drinkStorage.getValue(drinkInf) !== undefined) {
			drinkInfoP.innerHTML = "напиток: " + drinkInf + 
								   "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") + 
								   "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "к сожалению РЕЦЕПТА НЕТ");
		} else {
			drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
		}
	}
	
	var drinkInfoDel = document.getElementById("drinkInfoDel");

	drinkInfoDel.onclick = function() {
		var drinkInfoDel = prompt("Напишите название напитка");
		var drinkInfoP = document.getElementById("drinkInfoP");

		if (drinkStorage.deleteValue(drinkInfoDel) === true) {
			drinkInfoP.innerHTML = "информация о напитке УДАЛЕНО!";
		} else {
			drinkInfoP.innerHTML = "В хранилище такой напиток отсутствует";
		}

	}

	var drinkList = document.getElementById("drinkList");
	
	drinkList.onclick = function() {
		var drinkInfoP = document.getElementById("drinkInfoP");
		drinkInfoP.innerHTML = drinkStorage.getKeys();
	}