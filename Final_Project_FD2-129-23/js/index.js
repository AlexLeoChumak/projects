import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

const container = document.querySelector('#app');
const viewApp = new View();
const modelApp = new Model();
const controllerApp = new Controller();

if (!window.navigator.onLine) {
  document.body.innerHTML = `<div id="errorMessage">
                                Извините, возникли технические проблемы.<br>
                                Попробуйте загрузить позднее
                              </div>`;
} else {
  viewApp.init(container);
  modelApp.init(viewApp, container);
  controllerApp.init(modelApp, container);
  window.onhashchange = switchToStateFromURLHash;
  let SPAState = {};

  function switchToStateFromURLHash() {
    const URLHash = window.location.hash;
    const cntMenu = container.querySelector('#menu');
    const cntRecords = container.querySelector('#records');
    const cntInfoAndRoots = container.querySelector('#infoRoots');
    const cntGame = container.querySelector('#game');
    const cntError = container.querySelector('#errorNotFound');
    const cntAutorization = container.querySelector('#autorization');
    let stateStr = URLHash.slice(1);
    if (stateStr != "") {
      SPAState = {
        pagename: stateStr
      };
    } else {
      SPAState = {
        pagename: 'Menu'
      };
    }
    switch (SPAState.pagename) {
      case 'Menu':
        cntMenu.classList.remove("hidden");
        cntRecords.classList.add("hidden");
        cntInfoAndRoots.classList.add("hidden");
        cntGame.classList.add("hidden");
        cntError.classList.add("hidden");
        cntAutorization.classList.add("hidden");
        break;
      case 'Records':
        cntMenu.classList.add("hidden");
        cntRecords.classList.remove("hidden");
        cntInfoAndRoots.classList.add("hidden");
        cntGame.classList.add("hidden");
        cntError.classList.add("hidden");
        cntAutorization.classList.add("hidden");
        break;
      case 'InfoAndRoots':
        cntMenu.classList.add("hidden");
        cntRecords.classList.add("hidden");
        cntInfoAndRoots.classList.remove("hidden");
        cntGame.classList.add("hidden");
        cntError.classList.add("hidden");
        cntAutorization.classList.add("hidden");
        break;
      case 'Play':
        cntMenu.classList.add("hidden");
        cntRecords.classList.add("hidden");
        cntInfoAndRoots.classList.add("hidden");
        cntGame.classList.remove("hidden");
        cntError.classList.add("hidden");
        cntAutorization.classList.add("hidden");
        break;
      case 'Autorization':
        cntMenu.classList.add("hidden");
        cntRecords.classList.add("hidden");
        cntInfoAndRoots.classList.add("hidden");
        cntGame.classList.add("hidden");
        cntError.classList.add("hidden");
        cntAutorization.classList.remove("hidden");
        break;
      default:
        cntMenu.classList.add("hidden");
        cntRecords.classList.add("hidden");
        cntInfoAndRoots.classList.add("hidden");
        cntGame.classList.add("hidden");
        cntError.classList.remove("hidden");
        cntAutorization.classList.add("hidden");
        break;
    }
  }
  // устанавливает в закладке УРЛа новое состояние приложения
  // и затем устанавливает+отображает это состояние
  function switchToState(newState) {
    const stateStr = newState.pagename;
    location.hash = stateStr;
  }

  function switchToMenuPage() {
    switchToState({
      pagename: 'Menu'
    });
  }

  function switchToRecordsPage() {
    switchToState({
      pagename: 'Records'
    });
  }

  function switchToInfoAndRootsPage() {
    switchToState({
      pagename: 'InfoAndRoots'
    });
  }

  function switchToPlayPage() {
    switchToState({
      pagename: 'Play'
    });
  }
  // переключаемся в состояние, которое сейчас прописано в закладке УРЛ
  switchToStateFromURLHash();
}