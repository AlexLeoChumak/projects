export default class Controller {

  init(model, container) {
    this.myModel = model;
    this.myContainer = container;

    window.addEventListener('load', () => {
      this.myContainer.querySelector('.spinner').classList.add('hidden');
    });

    this.inputName = this.myContainer.querySelector('#menuInputName');
    this.btnSubmitName = this.myContainer.querySelector('#menuButtonSubmitName');
    this.btnTryAgain = this.myContainer.querySelector('#gameBtnTryAgain');
    this.btnInfoRoots = this.myContainer.querySelector('#menuBtnInfoRoots');
    this.btnInfoRootsReturn = this.myContainer.querySelector('#infoRootsBtnReturn');
    this.btnRecords = this.myContainer.querySelector('#menuBtnRecords');
    this.btnRecordsReturn = this.myContainer.querySelector('#recordsBtnReturn');
    this.menuBtnAutorization = this.myContainer.querySelector('#menuBtnAutorization');
    this.autorizationLoginName = this.myContainer.querySelector('#loginName');
    this.autorizationLoginPassword = this.myContainer.querySelector('#loginPassword');
    this.workInData = this.myContainer.querySelector('#workInData');
    this.statePopstate = false;

    this.workInDataInputQuestion = this.myContainer.querySelector('#workInDataInputQuestion');
    this.workInDataInputCorrectAnswer = this.myContainer.querySelector('#workInDataInputCorrectAnswer');
    this.workInDataInputA = this.myContainer.querySelector('#workInDataInputA');
    this.workInDataInputB = this.myContainer.querySelector('#workInDataInputB');
    this.workInDataInputC = this.myContainer.querySelector('#workInDataInputC');
    this.workInDataInputD = this.myContainer.querySelector('#workInDataInputD');
    this.workInDataInputFifty = this.myContainer.querySelector('#workInDataInputFifty');
    this.arrInputs = [
      this.workInDataInputQuestion,
      this.workInDataInputA,
      this.workInDataInputB,
      this.workInDataInputC,
      this.workInDataInputD,
      this.workInDataInputCorrectAnswer,
      this.workInDataInputFifty
    ];

    this.btnSubmitName.setAttribute('disabled', 'disabled');

    this.inputName.addEventListener('input', function valInput() {
      this.validationInput(this.inputName.value);
    }.bind(this));

    this.myContainer.setAttribute('tabindex', 0);
    this.myContainer.addEventListener('click', this.clickGameField.bind(this));

    this.autorizationLoginName.addEventListener('click', this.clearMessageWrongPassword.bind(this));
    this.autorizationLoginPassword.addEventListener('click', this.clearMessageWrongPassword.bind(this));

    window.addEventListener('offline', () => {
      this.myModel.showModalMessage('Интернет-соединение потеряно. Можно продолжить игру без сохранения результата');
    });

    window.addEventListener('online', () => {
      this.myModel.showModalMessage('Интернет-соединение восстановлено. Результаты игры будут сохранены');
    });

    this.checkUnload();
    window.performance = this.reloadPage();
  };

  reloadPage() {
    if (location.hash === '#Play') {
      location.hash = 'Menu';
    }
  }

  checkUnload() {
    window.addEventListener('beforeunload', (e) => {
      if (location.hash === '#Play') {
        e.returnValue = 'У вас есть несохранённые изменения!';
      }
    });

    window.addEventListener('popstate', () => {
        if (location.hash === '#Menu' && this.statePopstate) {
          window.history.forward();
          this.myModel.checkExitGame();
        }
    });
  }

  clearMessageWrongPassword() {
    this.myModel.clearMessageWrongPassword();
  }

  showRecordsReturn() {
    location.hash = 'Menu';
    this.myModel.getRecordsPlayers();
  }

  showRecords() {
    location.hash = 'Records';
  }

  showInfoRootsReturn() {
    location.hash = 'Menu';
  }

  showInfoRoots() {
    location.hash = 'InfoAndRoots';
  }

  tryAgain() {
    this.myModel.tryAgain();
  };

  validationInput(name) {
    this.myModel.validateNamePlayer(name);
  };

  drawGameField() {
    location.hash = 'Play';
    this.myModel.modelDrawGameField();
    this.statePopstate = true;

    this.inputName.removeEventListener('input', function valInput() {
      this.validationInput(this.inputName.value);
    }.bind(this));
  };

  showMenuAutorization() {
    location.hash = 'Autorization';
    this.myModel.hideFieldWorkInDataQuestions();
  }

  returnAutorizationToMain() {
    location.hash = 'Menu';
    this.myModel.hideFieldWorkInDataQuestions();
  }

  checkCorrectDataAutorization() {
    if (this.autorizationLoginName.value === 'admin' && 
        this.autorizationLoginPassword.value === '1') {
          
      this.myModel.checkCorrectDataAutorization(true);

      this.workInData.addEventListener('click', this.updateOrRemoveQuestion.bind(this));
    }
    else {
      this.myModel.checkCorrectDataAutorization(false);
    }
  }

  updateOrRemoveQuestion(e) {
    let targetQuestion = e.target.closest('.work__data_questions');

    if (!targetQuestion) return;
    if (!this.workInData.contains(targetQuestion)) return;

    switch (e.target.classList.value) {
      case 'workDataBtnUpdate':
        this.myModel.updateQuestion(
          targetQuestion.querySelector('.updateQuestion').textContent,
          targetQuestion.querySelector('.updateQuestionA').textContent,
          targetQuestion.querySelector('.updateQuestionB').textContent,
          targetQuestion.querySelector('.updateQuestionC').textContent,
          targetQuestion.querySelector('.updateQuestionD').textContent,
          targetQuestion.querySelector('.updateCorrectAnswer').textContent,
          targetQuestion.querySelector('.updateQuestionFifty').textContent,
          targetQuestion.querySelector('.idKeyQuestion').textContent);

          this.myModel.showModalMessage('Вопрос успешно обновлён');
        break;

      case 'workDataBtnRemove':
        this.myModel.removeQuestion(targetQuestion.querySelector('.idKeyQuestion').textContent, targetQuestion);
        this.myModel.showModalMessage('Вопрос успешно удалён');
        break;
    }
  }

  checkInputsQuestion() {
    for (let i = 0; i < this.arrInputs.length; i++) {

      if (this.arrInputs[i].value === '') {
        return this.myModel.showModalMessage('Заполните все поля');
      }
    }

    this.addValueInputNewQuestionInDataBase();
    this.myModel.showModalMessage('Вопрос отправлен в базу данных. Статус выполнения отобразится в консоли');
  }

  addValueInputNewQuestionInDataBase() {
    this.myModel.pushNewQuestionInDataBase(

      this.workInDataInputQuestion.value,
      this.workInDataInputA.value,
      this.workInDataInputB.value,
      this.workInDataInputC.value,
      this.workInDataInputD.value,
      this.workInDataInputCorrectAnswer.value,
      this.workInDataInputFifty.value
    );
  }

  controlSound() {
    this.myModel.controlSound();
  }

  clickGameField(e) {
    e.preventDefault();

    switch (e.target.id) {
      case 'menuButtonSubmitName':
        this.drawGameField();
        break;
      case 'menuBtnInfoRoots':
        this.showInfoRoots();
        break;
      case 'infoRootsBtnReturn':
        this.showInfoRootsReturn();
        break;
      case 'menuBtnRecords':
        this.showRecords();
        break;
      case 'recordsBtnReturn':
        this.showRecordsReturn();
        break;
      case 'menuBtnSound':
        this.controlSound();
        break;
      case 'menuBtnAutorization':
        this.showMenuAutorization();
        break;
      case 'autorizationBtnToMain':
        this.returnAutorizationToMain();
        break;
      case 'workInDataBtnReturnMainMenu':
        this.returnAutorizationToMain();
        break;
      case 'autorizationBtnConfirm':
        this.checkCorrectDataAutorization();
        break;
      case 'workInDataBtnAddQuestion':
        this.checkInputsQuestion();
        break;
      case 'gameBtnTryAgain':
        this.tryAgain();
        break;
      case 'gameFieldHintsFifty':
        this.myModel.hintsFiftyFifty();
        break;
      case 'gameFieldHintsHelpJS':
        this.myModel.hintsHelpJS();
        break;
      case 'gameFieldExit':
        this.myModel.checkExitGame();
        break;
      case 'gameFieldAnswerA':
        this.myModel.checkCorrectAnswer(e);
        break;
      case 'gameFieldAnswerB':
        this.myModel.checkCorrectAnswer(e);
        break;
      case 'gameFieldAnswerC':
        this.myModel.checkCorrectAnswer(e);
        break;
      case 'gameFieldAnswerD':
        this.myModel.checkCorrectAnswer(e);
        break;
      case 'recordsBtnReturn404':
        this.showInfoRootsReturn();
        break;
      case 'modalClose':
      case 'overlay':
        this.myModel.closeModalWindow();
        break;
      case 'exitConfirmation':
        this.myModel.exitGame(true);
        this.statePopstate = false;
        this.myContainer.removeEventListener('click', this.clickGameField.bind(this));
        this.autorizationLoginName.removeEventListener('click', this.clearMessageWrongPassword.bind(this));
        this.autorizationLoginPassword.removeEventListener('click', this.clearMessageWrongPassword.bind(this));
        break;
      case 'exitCancel':
        this.myModel.exitGame(false);
        break;
    }
  };
}