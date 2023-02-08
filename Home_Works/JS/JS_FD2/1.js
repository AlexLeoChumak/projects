'use strict';
/*

const length = prompt('Введите длину прямоугольника');
const width = prompt('Введите ширину прямоугольника');

if ( isNaN(length) && isNaN(width) ) {
  console.log(`Некорректный ввод длины и ширины (введите числа). 
               Для повтора ввода нажмите F5`);
} else if ( length === '' && width === '' ) {
  console.log(`Некорректный ввод длины и ширины (пустые строки). 
               Для повтора ввода нажмите F5`);
} else if ( isNaN(length) ) {
  console.log(`Некорректный ввод длины (введите число).
               Для повтора ввода нажмите F5`);
} else if ( isNaN(width) ) {
  console.log(`Некорректный ввод ширины (введите число). 
               Для повтора ввода нажмите F5`);  
} else if ( length === '' ) {
  console.log(`Некорректный ввод длины (пустая строка).
                Для повтора ввода нажмите F5`);
} else if ( width === '' ) {
  console.log(`Некорректный ввод ширины (пустая строка). 
                Для повтора ввода нажмите F5`);  
} else if ( length === null || width === null ) {
  console.log(`Вы отменили ввод. 
            Для повтора ввода нажмите F5`);
} else {
  calcArea(length, width);
  calcPerimeter(length, width);
}

function calcArea(length, width) {
  const areaRectangle = length * width;
  console.log(`Площадь геометрической фигуры составляет: 
               ${areaRectangle} единиц.`);
}

function calcPerimeter(length, width) {
  const perimeterRectangle = (Number(length) + Number(width)) * 2;
  console.log(`Периметр геометрической фигуры составляет: 
               ${perimeterRectangle} единиц.`);
}

if ( length === width 
  && length !== null 
  && length !== '' ) {
  console.log('Это квадрат');
} */
  
/*  */

/* const month = Number(prompt('Введите номер месяца (число)'));

if ( month === 12 || month === 1 || month === 2 ) {
  console.log('Пора года - зима');
} else if ( month === 3 || month === 4 || month === 5 ) {
  console.log('Пора года - весна');
} else if ( month === 6 || month === 7 || month === 8 ) {
  console.log('Пора года - лето');
} else if ( month === 9 || month === 10 || month === 11 ) {
  console.log('Пора года - осень');
} else if ( month >= 13 ) {
  console.log('Такого порядкового числа месяца в году не существует');
} else {
  console.log('Неверное значение');
} */

/*  */

/* const month = Number(prompt('Введите номер месяца (число)'));

const timeYear = ( month === 12 || month === 1 || month === 2 ) ? 'Пора года - зима' :
  ( month === 3 || month === 4 || month === 5 ) ? 'Пора года - весна' :
  ( month === 6 || month === 7 || month === 8 ) ? 'Пора года - лето' :
  ( month === 9 || month === 10 || month === 11 ) ? 'Пора года - осень' :
  ( month >= 13 ) ? 'Такого порядкового числа месяца в году не существует' :
  'Неверное значение';

console.log(timeYear); */

/*  */

/* const month = Number(prompt('Введите номер месяца (число)'));

switch (month) {
  case 12: 
  case 1: 
  case 2:
    console.log('Пора года - зима');
    break;

  case 3: 
  case 4: 
  case 5:
    console.log('Пора года - весна');
    break;

  case 6: 
  case 7: 
  case 8:
    console.log('Пора года - лето');
    break;

  case 9: 
  case 10: 
  case 11:
    console.log('Пора года - осень');
    break;

 default:
    console.log('Неверное значение');
}
 */

/*  */

/* let numStr = prompt('Введите любое число');
let num = Number(numStr);

function showErrorZero(num) {
    if (isNaN(num)) {
      console.log('Ошибка! Неверный набор!');
    } else if (num === 0) {
      checkEscEmptyStr();
    } else {
      console.log
        (`Это ${checkEvenOdd(num)} ${checkWholeFractional(num)} ${checkNigativPositiv(num)} число!`);
    }
}

showErrorZero(num);

function checkEscEmptyStr(numStr) { //перепробовал много способов - функция работает неверно
  if (numStr === '0' || typeof(numStr) === 'string') {
    console.log('Это целое чётное не положительное и не отрицательное число');
  } else if (numStr === '' || typeof(numStr) === 'string') {
    console.log('Пустая строка');
  } else {
    console.log('Отмена');
  }
}

function checkWholeFractional(num) {
    if (num % 1 == 0) {
        return 'целое';
    }
    return 'дробное';
}

function checkEvenOdd(num) {
    if (num % 1 == 0 && num % 2) {
        return 'нечётное';
    } else if (num % 1 == 0) {
        return 'чётное';
    } else {
        return '';
    }
}

function checkNigativPositiv(num) {
    if (num < 0) {
        return 'отрицательное';
    } else if (num > 0) {
        return 'положительное';
    }
} */
    

/*  */

/* let symbols = '|_';
let counter = 1;

while (counter <= 9) {
  console.log(symbols);
  symbols += '|_';
  counter++;
} */

/*  */

/* let whiteBlackSquare = '\u2B1C \u2B1B \u2B1C \u2B1B \u2B1C \u2B1B \u2B1C \u2B1B \u000A';
let blackWhiteSquare = '\u2B1B \u2B1C \u2B1B \u2B1C \u2B1B \u2B1C \u2B1B \u2B1C \u000A';
let result = '';
let i;
let j;

for (i = 1; i < 5; i++) {
  result += whiteBlackSquare;
  
  for (j = 1; j < 2 ; j++) {
    result += blackWhiteSquare;
  } 
}

console.log(result); */