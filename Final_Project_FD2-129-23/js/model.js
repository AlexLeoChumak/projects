import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  push,
  update
}
from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

export default class Model {
  // constructor() {
  //   this.myView = null;
  //   this.myContainer = null;
  //   this.namePlayer = null;
  //   this.arrQuestions = null;
  //   this.randomQuestion = null;
  //   this.arrWithQuestion = null;
  //   this.arrRepeatRandomNumber = null;
  //   this.counterQuestions = null;
  //   this.scorePlayer = null;
  // }

  init(view, container) {
    this.myView = view;
    this.myContainer = container;
    this.arrRepeatRandomNumber = [];
    this.counterQuestions = 0;
    this.scorePlayer = 0;

    this.getLightQuestions();
    this.getRecordsPlayers();
  };

  getRecordsPlayers() {
    try {
      const db = getDatabase();
      const recordsPlayers = ref(db, 'players/');

      onValue(recordsPlayers, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const dataArr = Object.values(data);
          dataArr.sort((a, b) => b.score - a.score);
          this.myView.showRecordsPlayers(dataArr, true);
        }
        else {
          this.myView.showRecordsPlayers(null, false);
        }
      });
    }
    catch (e) {
      this.myView.showErrorApp();
      console.log(e);
    }
  };

  getLightQuestions() {
    try {
      const db = getDatabase();
      const questions = ref(db, 'question/');

      onValue(questions, (snapshot) => {
        this.arrWithQuestion = snapshot.val();
        this.arrWithQuestion = Object.entries(this.arrWithQuestion);
      });
    }
    catch (e) {
      this.myView.showErrorApp();
      console.log(e);
    }
  };

  randomСhoiceQuestion(data) {
    this.randomNumber = Math.floor(Math.random() * ((data.length - 1) - 0)) + 0;

    try {
      this.showQuestionInGameField(data, this.arrRepeatRandomNumber, this.randomNumber);
    }
    catch (error) {
      console.log(error);
      alert('Извините, произошла ошибка, попробуйте загрузить приложение позднее');
      this.myView.showFormAutorization()
    }
  };

  showQuestionInGameField(data, arr, number) {
    if (arr.includes(number)) {
      this.randomСhoiceQuestion(data);
      console.log('Значение повторилось');
    }
    else {
      arr.push(number);

      if (data) {
        this.arrQuestions = data;
      }

      this.randomQuestion = this.arrQuestions[number][1];
      this.myView.showQuestionInGameField(this.randomQuestion);
      this.showName();
    }
  }

  saveName(name) {
    this.namePlayer = name;
  };

  removeName() {
    this.namePlayer = '';
  };

  showName() {
    this.myView.showNamePlayer(this.namePlayer);
  }

  modelDrawGameField() {
    this.randomСhoiceQuestion(this.arrWithQuestion);
    this.myView.removeFormAutorization();
  };

  validateNamePlayer(name) {
    if (name.length > 1) {
      this.saveName(name.toUpperCase());
      this.myView.disabledBtn(false);
    }
    else {
      this.removeName();
      this.myView.disabledBtn(true);
    }
  };

  setDataBaseNamePlayer(name, score) {
    try {
      const db = getDatabase();

      set(ref(db, 'players/' + name), {
          username: name,
          score: score
        }).then(() => {
          console.log('Имя успешно внесено в БД');
        })
        .catch((error) => {
          console.log(`Ошибка внесения имени в БД. Ошибка: ${error}`);
        });

      this.scorePlayer = 0;
    }
    catch (e) {
      this.myView.showErrorApp();
      console.log(e);
    }
  };

  exitGame() {
    const exit = confirm('Вы уверены? В случае выхода вы потеряете весь прогресс');

    if (exit) {
      this.myView.soundExit();
      this.myView.clearQuestionsBackground();
      this.myView.showFormAutorization();
      this.randomСhoiceQuestion(this.arrWithQuestion);
      this.setDataBaseNamePlayer(this.namePlayer, this.scorePlayer);
      this.counterQuestions = 0;
      this.scorePlayer = 0;
      this.arrRepeatRandomNumber = [];
    }
    else {
      return;
    }
  };

  tryAgain() {
    this.myView.showFormAutorization();
    this.counterQuestions = 0;
  };

  hintsFiftyFifty() {
    this.myView.showHintsFiftyFifty(this.randomQuestion.fifty, this.randomQuestion.correctAnswer);
  };

  hintsHelpJS() {
    this.myView.showHintsHelpJS(this.randomQuestion.correctAnswer);
  };

  checkCorrectAnswer(e) {
    if (e.srcElement.innerText === this.randomQuestion.correctAnswer) {
      this.scorePlayer++;
      
      if (this.counterQuestions === 14) { // может тут?
        this.myView.waitingLostCorrectAnswer(e);
        this.counterQuestions = 0;
        this.setDataBaseNamePlayer(this.namePlayer, this.scorePlayer);

        setTimeout(() => {
          this.randomСhoiceQuestion(this.arrWithQuestion);
        }, 9500);
      }
      else {
        this.myView.waitingCorrectAnswer(e);

        setTimeout(() => {
          this.randomСhoiceQuestion(this.arrWithQuestion);
        }, 9500);
      }
      this.counterQuestions++;

    } else {
      this.setDataBaseNamePlayer(this.namePlayer, this.scorePlayer);
      this.myView.waitingWrongAnswer(e, this.randomQuestion.correctAnswer);
      this.arrRepeatRandomNumber = [];
    }
  };

  checkCorrectDataAutorization(state) {
    state ? this.myView.showScreenWorkWithData(this.arrWithQuestion) : this.myView.showInfoWrongPassword();
  }

  updateFieldWithDataQuestions() {
    this.myView.showScreenWorkWithData(this.arrWithQuestion);
  }

  clearMessageWrongPassword() {
    this.myView.clearMessageWrongPassword();
  }

  pushNewQuestionInDataBase(question, optA, optB, optC, optD, correctAnswer, fifty) {

    this.myView.clearInputFieldNewQuestion();

    const db = getDatabase();

    const objQuestion = {
      question: question,
      a: optA,
      b: optB,
      c: optC,
      d: optD,
      correctAnswer: correctAnswer,
      fifty: fifty
    }

    const newQuestionKey = push(child(ref(db), 'question')).key;
    const updates = {};
    updates['/question/' + newQuestionKey] = objQuestion;

    return update(ref(db), updates).then(() => {
        console.log('Вопрос успешно загружен в БД');
        this.getLightQuestions();
        this.updateFieldWithDataQuestions();
      })
      .catch((error) => {
        console.log(`Ошибка загрузки вопроса в БД. Ошибка: ${error}`);
      });
  }

  updateQuestion(question, optA, optB, optC, optD, correctAnswer, fifty, key) {

    const db = getDatabase();
    const updates = {};

    const objQuestion = {
      question: question,
      a: optA,
      b: optB,
      c: optC,
      d: optD,
      correctAnswer: correctAnswer,
      fifty: fifty
    }

    updates['/question/' + key] = objQuestion;

    return update(ref(db), updates).then(() => {

        console.log('Вопрос успешно обновлён в БД');
        this.getLightQuestions();
        this.updateFieldWithDataQuestions();
      })
      .catch((error) => {
        console.log(`Ошибка обновления вопроса в БД. Ошибка: ${error}`);
      });
  }

  removeQuestion(key, node) {
    const db = getDatabase();

    const updates = {};
    updates['/question/' + key] = null;

    this.myView.removeQuestion(node);

    return update(ref(db), updates).then(() => {
        console.log('Вопрос успешно удалён из БД');
        this.getLightQuestions();
        this.updateFieldWithDataQuestions();
      })
      .catch((error) => {
        console.log(`Ошибка удаления вопроса из БД. Ошибка: ${error}`);
      });
  }

  hideFieldWorkInDataQuestions() {
    this.myView.hideFieldWorkInDataQuestions();
  }

  controlSound() {
    this.myView.controlSound();
  }
}