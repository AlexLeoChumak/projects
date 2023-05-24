export default class View {
    constructor() {
      this.myContainer = null;
      this.mainMenu = null;
      this.gameField = null;
      this.progressGame = null;
      this.inputName = null;
      this.zoneQuestion = null;
      this.optionA = null;
      this.optionB = null;
      this.optionC = null;
      this.optionD = null;
      this.btnSubmitName = null;
      this.btnFiftyFifty = null;
      this.btnHelpJS = null;
      this.btnExit = null;
      this.youWrong = null;
      this.animateWrongAnswer = null;
      this.flyToOfferTitle = null;
      this.animateBetweenQuestions = null;
      this.counterQuestions = 1;
      this.congratulateTitle = null;
      this.animateCongratulateWin = null;
      this.cntRecordsOl = null;
      this.animateBackgroundCnt = null;
      this.hintFiftyState = null;
      this.hintHelpJSState = null;
      this.progressGameMobileScreen = null;
      this.errorNotFound = null;
      this.gamePlayerName = null;
      this.autorization = null;
      this.adminOverlay = null;
      this.modalClose = null;
      this.workInData = null;
      this.adminConfirmPassword = null;
      this.autorizationForm = null;
      this.errorLogin = null;
      this.autorizationLoginName = null;
      this.autorizationLoginPassword = null;
      this.divForQuestionsList = null;
      this.menuBtnSound = null;
      this.stateSound = null;
  
      this.workInDataInputQuestion = null;
      this.workInDataInputCorrectAnswer = null;
      this.workInDataInputA = null;
      this.workInDataInputB = null;
      this.workInDataInputC = null;
      this.workInDataInputD = null;
      this.workInDataInputFifty = null;
  
      this.musicStart = null;
      this.musicPlayerThink = null;
      this.musicFiftyFifty = null;
      this.musicHelpJS = null;
      this.musicExit = null;
      this.musicAnswerAccept = null;
      this.musicCorrectAnswer = null;
      this.musicWrongAnswer = null;
      this.musicApplause = null;
  
      this.question1 = null;
      this.question2 = null;
      this.question3 = null;
      this.question4 = null;
      this.question5 = null;
      this.question6 = null;
      this.question7 = null;
      this.question8 = null;
      this.question9 = null;
      this.question10 = null;
      this.question11 = null;
      this.question12 = null;
      this.question13 = null;
      this.question14 = null;
      this.question15 = null;
    }
  
    init(container) {
      this.myContainer = container;
  
      this.myContainer.innerHTML = `
          <audio id="music_start" src="music/startGame.mp3"></audio>
          <audio id="music_player_think" src="music/player-think.mp3" loop></audio>
          <audio id="music_fifty" src="music/50-50.mp3"></audio>
          <audio id="music_helpJS"  src="music/helpJS.mp3"></audio>
          <audio id="music_exit" src="music/exit.mp3"></audio>
          <audio id="music_answer_accept" src="music/answer_accept.mp3"></audio>
          <audio id="music_correct" src="music/correct.mp3"></audio>
          <audio id="music_wrong" src="music/wrong.mp3"></audio>
          <audio id="music_applause" src="music/applause.mp3"></audio>
  
          <div id="menu" class="menu hidden">
              <img src="images/logo.png" id="menuLogo" class="menu__logo" alt="logo" title="logo">
              <form>
                  <input id="menuInputName" class="menu__input_name btn" type="text" placeholder="ВВЕДИТЕ ВАШЕ ИМЯ..." title="Введите имя не короче 2-х любых символов">
                  <button id="menuButtonSubmitName" class="btn disabled_active" type="button" title="Чтобы начать игру, введите имя не короче 2-х любых символов">НАЧАТЬ ИГРУ</button>
                  <button id="menuBtnAutorization" type="button" class="btn" title="Админ-доступ">Админ-досту</button>
              </form>
  
              <button id="menuBtnSound" type="button" class="btn soundOn" title="Звук">Звук</button>
              <button id="menuBtnRecords" type="button" class="btn" title="Лучшие результаты игроков">Рекорды</button>
              <button id="menuBtnInfoRoots" type="button" class="btn" title="Информация об игре и правила игры">Об игре</button>
          </div>
  
          <div id="autorization" class="autorization hidden">
              <div id="autorizationForm" class="autorization__form">
                  <form class="autorization__form_login">
                      <input id="loginName" type="text" placeholder="ИМЯ">
                      <input id="loginPassword" type="password" placeholder="ПАРОЛЬ">
                      <button id="autorizationBtnConfirm" type="button">ОК</button>
                      <button id="autorizationBtnToMain" type="button">на главную</button>
                      <p id="showErrorLogin" class="hidden">Неверное имя и(или) пароль</p>
                  </form>
              </div>  
          </div>
  
          <div id="records" class="records hidden">
              <button id="recordsBtnReturn" class="btn btn__return" type="button">Вернуться в меню</button>
              <h2>Рекорды</h2>
              <ol id="recordsOl" class="records__ol"></ol>
          </div>
  
          <div id="infoRoots" class="info__roots hidden">
              <button id="infoRootsBtnReturn" class="btn btn__return" type="button">Вернуться в меню</button>
              <h2>Игра "Кто хочет стать джуном"</h2>
              <p>
                  Эмулирует собеседование на джуниора фронтенд-разработчика лайт-версии, 
                  т.е. без лайвкодинга и прочих подобных техник, только вопросы по теории.
                  Игра предназначена для проверки, "освежения" или пополнения знаний
                  перед собеседованием, или для личного развития как фронтенд - 
                  разработчика (например, для студентов курса FD2).
              </p>
              <h2>Правила игры</h2>
              <p>
                  Для победы нужно правильно ответить на 15 вопросов подряд. Вопросы 
                  поделены на 3 категории сложности - 5 вопросов в каждой. За правильный 
                  ответ начисляется 1 очко. Если в процессе игры дан неверный 
                  ответ - игра заканчивается, а все заработанные на конкретный момент игры
                  очки сохраняются в рекордах. Такое же поведение будет и при нажатии на кнопку
                  "выход".<br>
                  <br>
                  У игрока есть возможность воспользоваться 2-мя подсказками:
                  50/50 - на экране остаются 2 варианта ответа, один из которых верный;
                  помощь js - программа оставит только 1 верный ответ.
                  За игру каждой подсказкой можно воспользоваться лишь один раз.<br>
                  <br>
                  Как бонус - в категории вопросов средней сложности есть "счастливый" вопрос - 
                  нужно будет просто выбрать вариант "да"! Вопросы подтягиваются рандомно, 
                  поэтому - поздравляю!, если вдруг выпадет этот вопрос!<br>
                  <br>
                  Горячие клавиши:<br>
                  <br>
                  F2 - рекорды игроков;<br>
                  F4 - описание, правила игры и горячие клавиши;<br>
                  Esc - выход в главное меню из последних двух разделов;<br>
                  Home - при проигрыше возвращает в главное меню для возобновления игры;<br>
                  F8 - подсказка "50/50";<br>
                  F9 - подсказка "помощь JavaScript";<br>
                  End - возможность выйти из игры в главное меню с автоматическим сохранением результата;<br>
                  Для навигации по вариантам ответов используйте клавишу Tab для навигация вперёд или 
                  сочетание клавиш Tab + Shift для навигации назад, после выбора нужного варианта
                  нажмите клавишу Enter.<br>
                  Для навигации вверх-вниз используйте соответствующие стрелки на клавиатуре.<br>
                  <br>
                  Удачи! 
              </p>
          </div>
  
          <div id="game" class="game hidden">
              <div id="gameAnimateBackgroundCnt">
                  <div class='game__animate_background game__line1'></div>
                  <div class='game__animate_background game__line2'></div>
                  <div class='game__animate_background game__line3'></div>
                  <div class='game__animate_background game__line4'></div>
                  <div class='game__animate_background game__line5'></div>
                  <div class='game__animate_background game__line6'></div>
                  <div class='game__animate_background game__line7'></div>
                  <div class='game__animate_background game__line8'></div>
              </div>
  
              <div id="gameField" class="game__field">
                  <p id="gamePlayerName" class="game__field_hints_title"></p>
                  <div class="game__field_hints">
  
                      <span class="game__field_hints_wrapper_btns">
                          <button id="gameFieldHintsFifty" class="game__hints_btns" title="Подсказка: убирает два неверных ответа" type="button">50/50</button>
                      </span>
                      <span class="game__field_hints_wrapper_btns">
                          <button id="gameFieldHintsHelpJS" class="game__hints_btns" title="Подсказка: оставляет только верный ответ" type="button">помощь JS</button>
                      </span>
                      <span class="game__field_hints_wrapper_btns">
                          <button  id="gameFieldExit" class="game__hints_btns" title="Выйти из игры (Вы потеряете игровой прогресс)" type="button">выход</button>
                      </span>
                  </div>
                  
                  <div id="gameFieldQuestion" class="game__field_question"></div>
                  <div class="game__field_answer_options">
                      <div class="game__field_answer_options_left_side">
                          <button id="gameFieldAnswerA" class="game__field_answer_option" title="game__field"></button>
                          <button id="gameFieldAnswerB" class="game__field_answer_option" title="game__field"></button>
                      </div>
                      <div class="game__field_answer_options_right_side">
                          <button id="gameFieldAnswerC" class="game__field_answer_option" title="game__field"></button>
                          <button id="gameFieldAnswerD" class="game__field_answer_option" title="game__field"></button>
                      </div>
                  </div>
              </div>
  
              <div id="gameProgressMobileScreen" class="game__progress_mobile_screen"></div>
  
              <div id="gameProgress" class="game__progress">
                  <div class="game__progress_title">ИГРОВОЙ ПРОГРЕСС</div>
                  <div>
                      <span>джун</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1272.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
                          <path d="M2075 12791 c-340 -40 -672 -164 -975 -366 -374 -249 -693 -610 -876
                              -990 -143 -297 -209 -572 -220 -920 -15 -438 62 -797 250 -1170 120 -238 244
                              -411 426 -598 138 -143 240 -229 393 -331 292 -195 589 -310 957 -373 150 -25
                              580 -25 730 0 431 73 806 239 1135 501 107 86 295 277 385 391 610 780 679
                              1853 173 2690 -129 212 -344 459 -536 614 -120 97 -284 203 -425 274 -274 140
                              -511 215 -832 263 -112 17 -485 26 -585 15z"/>
                          <path d="M9855 12790 c-634 -58 -1178 -342 -1602 -835 -372 -431 -563 -951
                              -563 -1530 0 -660 237 -1232 705 -1701 395 -396 791 -597 1355 -686 131 -20
                              557 -17 690 5 542 92 1008 334 1364 708 338 355 547 769 638 1259 26 146 36
                              502 18 660 -95 824 -585 1523 -1322 1885 -227 111 -456 182 -718 221 -117 17
                              -443 26 -565 14z"/>
                          <path d="M8814 8018 c-106 -71 -267 -229 -344 -335 -114 -160 -193 -346 -225
                              -527 -13 -79 -15 -477 -15 -3622 l0 -3534 138 0 c76 0 261 3 410 7 l272 6 0
                              1418 c0 1534 1 1559 49 1583 83 42 243 56 639 56 l344 0 93 88 c52 49 118 105
                              147 125 75 52 196 102 308 129 52 12 96 23 98 24 2 1 -20 31 -48 66 -55 68
                              -93 140 -110 209 -15 60 -25 2582 -12 3019 9 283 13 334 31 398 71 244 249
                              438 481 522 42 16 136 38 209 49 74 11 136 22 138 25 8 8 -218 230 -264 261
                              -49 32 -41 33 -220 -29 -273 -95 -495 -136 -778 -143 -151 -4 -233 -1 -334 11
                              -262 32 -515 97 -671 173 -185 89 -230 92 -336 21z"/>
                          <path d="M3250 7959 c-83 -30 -342 -95 -481 -121 -111 -21 -153 -23 -412 -22
                              -158 0 -284 -3 -280 -7 5 -4 159 -73 343 -154 184 -82 648 -287 1030 -456 382
                              -170 698 -305 702 -301 12 12 -36 169 -88 292 -129 308 -370 587 -652 756 -64
                              39 -85 40 -162 13z"/>
                          <path d="M1338 7770 c-209 -38 -407 -173 -509 -346 -53 -90 -148 -302 -186
                              -413 -24 -71 -25 -85 -20 -206 4 -71 13 -155 20 -185 49 -190 154 -334 327
                              -446 77 -49 97 -59 415 -199 116 -51 318 -141 450 -200 132 -59 321 -142 420
                              -185 99 -43 284 -124 410 -180 127 -56 410 -181 630 -277 220 -96 477 -209
                              570 -250 94 -42 361 -160 595 -263 234 -103 515 -228 625 -277 110 -50 223
                              -96 250 -104 65 -17 292 -18 365 0 80 19 206 81 279 136 124 94 216 236 315
                              485 66 167 79 233 72 360 -16 308 -155 518 -430 649 -55 27 -276 126 -491 221
                              -214 95 -887 393 -1495 662 -608 270 -1298 576 -1535 681 -236 104 -473 210
                              -525 234 -171 80 -259 105 -390 109 -63 1 -136 -1 -162 -6z"/>
                          <path d="M7978 7539 c-128 -99 -390 -299 -583 -444 -512 -387 -1253 -951
                              -1302 -991 -24 -19 -43 -39 -43 -43 0 -5 36 -32 81 -61 160 -104 267 -225 349
                              -395 69 -142 93 -249 93 -405 -1 -130 -10 -187 -59 -343 -32 -101 -136 -320
                              -196 -414 -157 -242 -395 -385 -707 -423 -52 -7 -112 -9 -133 -6 -49 8 -43 -6
                              14 -35 71 -36 130 -49 230 -49 122 0 194 21 284 85 38 26 329 246 649 489 319
                              243 747 569 951 724 282 214 375 290 388 316 14 30 16 99 16 628 0 326 5 667
                              10 758 17 262 69 475 165 676 46 96 52 114 36 114 -5 0 -115 -81 -243 -181z"/>
                          <path d="M11254 7491 c-122 -20 -228 -75 -324 -170 -75 -74 -122 -155 -145
                              -253 -23 -96 -22 -3242 0 -3337 22 -92 71 -185 129 -246 l51 -52 101 -7 c205
                              -12 301 -39 499 -140 73 -37 119 -69 173 -120 l74 -71 27 32 c40 48 155 275
                              191 378 17 50 40 134 51 188 18 94 19 161 19 1695 0 1388 -2 1605 -15 1661
                              -46 194 -209 365 -405 426 -62 19 -339 29 -426 16z"/>
                          <path d="M590 3105 l0 -3105 1805 0 1805 0 0 2239 c0 1232 -3 2247 -6 2256 -9
                              22 -27 30 -460 218 -572 249 -697 304 -964 427 -222 102 -1254 557 -1625 717
                              -278 119 -366 173 -473 287 -34 36 -66 66 -72 66 -7 0 -10 -973 -10 -3105z"/>
                          <path d="M10815 3274 c-64 -10 -193 -49 -265 -79 -138 -57 -256 -149 -335
                              -258 -66 -92 -37 -87 -498 -87 -384 0 -406 -1 -428 -19 l-24 -19 -3 -1401 -2
                              -1401 1617 0 c890 0 1669 -3 1731 -7 l112 -6 0 1429 0 1429 -432 -4 c-294 -2
                              -443 0 -468 8 -28 8 -51 29 -96 86 -121 155 -269 248 -486 305 -64 17 -118 23
                              -238 25 -85 2 -168 1 -185 -1z m454 -204 c101 -36 292 -174 276 -200 -8 -13
                              -1145 -14 -1145 -1 0 18 116 111 180 145 139 72 211 86 445 82 157 -3 188 -6
                              244 -26z"/>
                          </g>
                      </svg>
                  </div>
                  <div class="game__progress_questions game__progress_question_15">15 вопрос</div>
                  <div class="game__progress_questions game__progress_question_14">14 вопрос</div>
                  <div class="game__progress_questions game__progress_question_13">13 вопрос</div>
                  <div class="game__progress_questions game__progress_question_12">12 вопрос</div>
                  <div class="game__progress_questions game__progress_question_11">11 вопрос</div>
                  <div class="game__progress_questions game__progress_question_10">10 вопрос</div>
                  <div class="game__progress_questions game__progress_question_9">9 вопрос</div>
                  <div class="game__progress_questions game__progress_question_8">8 вопрос</div>
                  <div class="game__progress_questions game__progress_question_7">7 вопрос</div>
                  <div class="game__progress_questions game__progress_question_6">6 вопрос</div>
                  <div class="game__progress_questions game__progress_question_5">5 вопрос</div>
                  <div class="game__progress_questions game__progress_question_4">4 вопрос</div>
                  <div class="game__progress_questions game__progress_question_3">3 вопрос</div>
                  <div class="game__progress_questions game__progress_question_2">2 вопрос</div>
                  <div class="game__progress_questions game__progress_question_1">1 вопрос</div>
                  <div>
                      <span>новичок</span>
                      <svg width="35" height="35"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <g fill="white" stroke="none"><path d="m227.31 65.333h108.132c57.867 0 105.015 47.093 105.015 105.015v69.244c16.955 14.111 31.778 30.41 43.975 48.022v-117.267c0-82.152-66.837-148.989-148.989-148.989h-108.133c-12.142 0-21.987 9.845-21.987 21.987s9.845 21.988 21.987 21.988z"/>
                          <path d="m74.273 242.983c-3.063-3.063-7.275-4.813-11.65-4.813h-46.217c-12.482 0-20.38 13.404-14.33 24.34l74.878 135.206c2.024-41.35 15.479-80.566 37.958-113.766z"/>
                          <path d="m20.246 221.157c2.139-2.132 2.144-5.598.01-7.735-4.321-4.337-2.938-12.579.174-18.401 7.009-13.117 23.899-24.607 16.662-56.345-2.417-10.586-6.974-20.302-11.38-29.693-1.281-2.735-4.551-3.91-7.275-2.628-2.735 1.281-3.912 4.54-2.628 7.275 4.16 8.866 8.463 18.037 10.616 27.481 6.044 26.472-7.668 33.822-15.642 48.75-5.117 9.577-6.567 22.962 1.727 31.284 2.125 2.136 5.586 2.152 7.736.012z"/>
                          <path d="m54.745 221.157c2.139-2.132 2.144-5.598.01-7.735-4.319-4.332-2.938-12.579.174-18.401 7.009-13.116 23.897-24.586 16.665-56.345-2.417-10.586-6.974-20.302-11.38-29.693-1.285-2.735-4.546-3.91-7.275-2.628-2.735 1.281-3.912 4.54-2.628 7.275 4.16 8.866 8.463 18.037 10.616 27.475 6.039 26.513-7.685 33.854-15.647 48.761-5.114 9.577-6.562 22.962 1.731 31.279 2.124 2.136 5.585 2.152 7.734.012z"/>
                          <path d="m218.203 211.368h162.955c-2.67-34.545-28.733-62.601-62.41-68.29 2.231-3.496 3.568-7.614 3.568-12.055 0-12.415-10.118-22.534-22.534-22.534-12.415 0-22.534 10.118-22.534 22.534 0 4.439 1.336 8.559 3.566 12.053-33.629 5.679-59.815 33.741-62.611 68.292z"/>
                          <path d="m509.975 400.338c-8.773-63.035-53.546-123.715-114.03-157.032h-196.856c-68.421 36.717-111.525 107.573-111.525 186.732 0 14.056 1.313 38.287 3.774 57.484 1.75 13.728 13.509 24.121 27.293 24.121h362.629c13.784 0 25.215-9.955 27.239-23.738 4.047-27.622 4.648-64.431 1.476-87.567z"/>
                          </g>
                      </svg>
                  </div> 
              </div>
  
          <div id="gameTitleFlyToOffer" class="game__title_fly_to_offer hidden">
              Отлично!<br> Летим дальше к победе!
          </div>
          <div id="gameAnimateBetweemQuestions" class="game__animate_between_questions hidden">
              <div class="game__animate_wing_left"></div>
              <div class="game__animate_wing_right"></div>
              <div class="game__animate_exhaust"></div>
  
              <div class="game__animate_capsule">
                  <div class="game__animate_top">
                  </div>
                  <div class="game__animate_base"></div>
              </div>
  
              <div class="game__animate_window_big"></div>
              <div class="game__animate_window_small"></div>
              <div class="game__animate_fire_1"></div>
              <div class="game__animate_fire_2"></div>
              <div class="game__animate_fire_3"></div>
              <div class="game__animate_fire_4"></div>
              <div class="game__animate_spark_1"></div>
              <div class="game__animate_spark_2"></div>
              <div class="game__animate_spark_3"></div>
              <div class="game__animate_spark_4"></div>
              <div class="game__animate_star game__animate_star_1"></div>
              <div class="game__animate_star game__animate_star_2"></div>
              <div class="game__animate_star game__animate_star_3"></div>
              <div class="game__animate_star game__animate_star_4"></div>
              <div class="game__animate_star game__animate_star_5"></div>
              <div class="game__animate_star game__animate_star_6"></div>
              <div class="game__animate_star game__animate_star_7"></div>
              <div class="game__animate_star game__animate_star_8"></div>
              <div class="game__animate_star game__animate_star_9"></div>
              <div class="game__animate_star game__animate_star_10"></div>
              <div class="game__animate_star game__animate_star_11"></div>
              <div class="game__animate_star game__animate_star_12"></div>
              <div class="game__animate_star game__animate_star_13"></div>
              <div class="game__animate_star game__animate_star_14"></div>
              <div class="game__animate_star game__animate_star_15"></div>
              <div class="game__animate_star game__animate_star_16"></div>
          </div>
  
          <div id="gameTitleYouWrong" class="game__title_you_wrong hidden">Вы проиграли! Попробуйте сыграть ещё раз!
              <button id="gameBtnTryAgain" class="game__btn_try_again" type="button">Начать</button>
          </div>
          <div id="gameAnimateWaves" class="game__animate_after_loss game__animate_wave hidden">
              <div class="game__animate_wave_inner game__animate_wave_bg_top">
                  <div class="game__animate_wave game__animate_wave_top" style="background-image: url('images/wave-top.png')"></div>
              </div>
              <div class="game__animate_wave_inner game__animate_wave_bg_middle">
                  <div class="game__animate_wave game__animate_wave_middle" style="background-image: url('images/wave-mid.png')"></div>
              </div>
              <div class="game__animate_wave_inner game__animate_wave_bg_bottom">
                  <div class="game__animate_wave game__animate_wave_bottom" style="background-image: url('images/wave-bot.png')"></div>
              </div>
          </div>
  
          <div id="gameCongratulateTitle" class="game__title_congratulate hidden"> Поздравляем! Вы победили! И готовы к джоб-офферу!</div>
          <svg id="gameAnimateWinnerCat" class="game__animate_winner_cat hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 787.3 433.8">
                  <defs>
                      <symbol id="eye" data-name="eye" viewBox="0 0 19.2 18.7">
                          <circle cx="9.4" cy="9.1" r="8"></circle>
                          <path d="M16.3,5.1a1.3,1.3,0,0,1-1.4-.3,7.2,7.2,0,0,0-4.5-2.6A7.2,7.2,0,0,0,5.5,3.5,6.8,6.8,0,0,0,2.8,7.8a6.8,6.8,0,0,0,1,4.8,6.2,6.2,0,0,0,4,2.7,6.1,6.1,0,0,0,4.6-.7,6.7,6.7,0,0,0,2.9-3.7,6.4,6.4,0,0,0-.5-4.5c-.1-.2.8-1,1.5-1.3s2.2,0,2.3.5a9.4,9.4,0,0,1-.2,7.2,9.4,9.4,0,0,1-5.1,5.1,9,9,0,0,1-7,.2A9.6,9.6,0,0,1,1,13.5,9.2,9.2,0,0,1,.4,6.6,8.9,8.9,0,0,1,4.6,1.3,9,9,0,0,1,11.2.2,9.3,9.3,0,0,1,16.7,4C16.9,4.3,17,4.8,16.3,5.1Z"></path>
                      </symbol>
                      <symbol id="paw-pads" data-name="paw-pads" viewBox="0 0 31.4 33.9">
                          <path d="M6.8,16a3.7,3.7,0,0,1,1.1,2.8,3.2,3.2,0,0,1-1.6,2.6L5,21.8H4.4a2.8,2.8,0,0,1-1.8.3A4.2,4.2,0,0,1,.2,19.1,7.7,7.7,0,0,1,0,17.6a2.8,2.8,0,0,1,.6-2,3.2,3.2,0,0,1,2.1-.8H4A5,5,0,0,1,6.8,16Zm7.3-4.8a1.8,1.8,0,0,0,.7-.5l.7-.4a3.5,3.5,0,0,0,1.1-1,3.2,3.2,0,0,0,.3-1.4,1.4,1.4,0,0,0-.2-.6,3.4,3.4,0,0,0-.3-2.4,3.2,3.2,0,0,0-2.1-1.5H13.1a4.7,4.7,0,0,0-1.6.4,2,2,0,0,0-.9.9l-.4.6v.4a6.1,6.1,0,0,0-.5,1.2,4.3,4.3,0,0,0,0,1.6,3.5,3.5,0,0,0,.5,2l.7.6a3.3,3.3,0,0,0,1.7.7A3,3,0,0,0,14.1,11.2ZM22.7,7l.6.2h.3A2.3,2.3,0,0,0,25,6.8l.4-.3.6-.3a7.5,7.5,0,0,0,1.5-.9,4.2,4.2,0,0,0,.8-1.2,1.9,1.9,0,0,0,.1-1.5A2.6,2.6,0,0,0,27.5,1,3.5,3.5,0,0,0,23.6.3a3.8,3.8,0,0,0-2,1.5,4.8,4.8,0,0,0-.7,2,3.6,3.6,0,0,0,.9,2.6ZM31,24.1a13.5,13.5,0,0,0-2.2-4.7,36.6,36.6,0,0,0-3.2-3.9,5.3,5.3,0,0,0-5-1.9,10.5,10.5,0,0,0-4.5,2.2A5.6,5.6,0,0,0,13.5,20a15.1,15.1,0,0,0,1.2,6.3c.8,2,1.7,4,2.6,5.9a1.6,1.6,0,0,0,1.5.8,1.7,1.7,0,0,0,1.9.9,17.1,17.1,0,0,0,8.7-4.8,8.2,8.2,0,0,0,1.7-2C31.6,26.3,31.3,25,31,24.1Z" fill="#ef97b0"></path>
                      </symbol>
                  </defs>
                  <g id="head">
                      <g id="head__outline">
                          <path d="M303.2,186.3c4-7,14.8-20.2,20-26,17-19,34.6-34.9,43-41l12-8s16.6-32,21-33c9-2,33,22,33,22s20-9,79,7c41,11.1,47,14,57,22,7.5,6,18,16,18,16s33.7-19.5,41-15-2,66-2,66,5.9,12.9,11,22c9.1,16.2,13.6,20.2,19,31,3.6,7.2,8.4,28.5,10.5,43.5l-385-62Z" fill="#fff"></path>
                          <path d="M302.9,186.9c-1.2,3-5.9,12.6-9,18.8l-12.5,25.5-.6-1.2c32.2,4.8,64.4,9.2,96.6,13.6s64.4,8.9,96.5,13.7,64.3,9.7,96.4,14.9,64.1,10.5,96.2,15.8l-5.6,5.5c-1.2-8.5-2.8-17.1-4.8-25.6-1-4.1-2.1-8.4-3.4-12.3l-.5-1.4-.5-1.4-.6-1.3-.7-1.3a59.5,59.5,0,0,0-3.1-5.5c-2.2-3.6-4.7-7.2-7.1-11s-4.8-7.6-7-11.5c-4.5-7.9-8.3-15.9-12.1-24a4,4,0,0,1-.3-2.6h0c1.4-9.1,2.7-18.2,3.7-27.4.5-4.5.9-9.1,1.2-13.7s.4-9.1.2-13.4a26.4,26.4,0,0,0-.8-6,8.1,8.1,0,0,0-.3-1.1c-.1-.3-.2-.4-.1-.3h.3c0,.1.1.1,0,.1h-.6a11.9,11.9,0,0,0-2.5.2,16.3,16.3,0,0,0-3,.7,56.7,56.7,0,0,0-6.2,2.1,212.6,212.6,0,0,0-24.5,11.9h-.1a3.9,3.9,0,0,1-4.7-.6c-4.9-4.7-10-9.4-15.1-13.8a86.6,86.6,0,0,0-7.9-6,46.1,46.1,0,0,0-8.5-4.6c-6-2.6-12.6-4.6-19.2-6.7l-19.8-5.7a324.9,324.9,0,0,0-40-8.9,196.8,196.8,0,0,0-20.2-1.8c-1.7,0-3.4-.1-5.1,0h-2.5l-2.5.2-2.5.2-2.4.4-2.4.5-1.1.3h-.5l-.4.2H433a2.5,2.5,0,0,1-2.6-.7c-4.6-4.6-9.5-9.1-14.5-13.2a82.7,82.7,0,0,0-7.9-5.7L403.9,81a10.8,10.8,0,0,0-4-.9c-.1,0-.3,0-.3.1h0l-.7.5-1.5,1.7c-1,1.2-2,2.6-2.9,3.9s-3.6,5.5-5.3,8.3c-3.5,5.7-6.8,11.4-9.9,17.3h0l-.4.4-10.2,6.6a53.6,53.6,0,0,0-4.9,3.4l-4.6,3.8c-6.2,5.1-12.1,10.6-17.9,16.2s-11.3,11.4-16.7,17.4c-2.7,3-5.3,6.1-7.8,9.2s-5,6.3-7.4,9.5c-4.2,5.6-7,10-5.7,7.1a34.1,34.1,0,0,1,2.1-3.8l3.8-5.6c2.9-4,6.3-8.3,8.5-10.9s4.4-5.2,6.7-7.7l6.9-7.4c4.7-4.9,9.4-9.7,14.3-14.3s9.8-9.3,15-13.7l4-3.2,4.2-2.9,8.3-5.7-.4.4c3-5.9,6.1-11.8,9.4-17.7,1.6-2.9,3.3-5.8,5.1-8.6l2.9-4.3,1.8-2a7.5,7.5,0,0,1,1.3-1.1c.1-.2.6-.4,1-.5l.9-.2h1.7l1.4.2,2.7.8c1.7.7,3.3,1.5,4.8,2.3a84,84,0,0,1,8.5,5.7A175.7,175.7,0,0,1,434,98.5l-2.9-.6.8-.3.7-.2L434,97l2.7-.7,2.7-.5a23,23,0,0,1,2.6-.3l2.7-.3,2.7-.2h5.3a182.1,182.1,0,0,1,21,1.3,332.5,332.5,0,0,1,41.1,8.4l20,5.5c6.7,2,13.4,4,20.1,6.7a65.3,65.3,0,0,1,9.8,5.1c3.1,2.1,5.9,4.3,8.6,6.5,5.4,4.5,10.6,9.2,15.7,14l-4.8-.6c4.1-2.4,8.2-4.6,12.4-6.7s8.6-4.2,13-6c2.3-.9,4.6-1.7,7-2.4a23.4,23.4,0,0,1,3.8-.9,20,20,0,0,1,4.4-.4h1.3l1.5.4a5.1,5.1,0,0,1,1.7.7l.9.7.8.7a8.3,8.3,0,0,1,1.6,2.6,12.7,12.7,0,0,1,.8,2.3,44.6,44.6,0,0,1,1.1,7.7c.2,5,.1,9.7-.1,14.4s-.7,9.5-1.2,14.1c-.9,9.4-2.1,18.6-3.6,27.9l-.3-2.6c3.7,7.9,7.5,15.8,11.8,23.3,2.1,3.7,4.4,7.4,6.8,11s4.9,7.2,7.3,11.1c1.3,2,2.4,4,3.5,6.1a10.9,10.9,0,0,0,.8,1.5l.8,1.8.7,1.7.6,1.7c1.5,4.4,2.6,8.7,3.7,13.1a262,262,0,0,1,5.2,26.4,4.9,4.9,0,0,1-4.1,5.6h-1.5c-32.1-5-64.2-9.9-96.3-15.1s-64.1-10.6-96.1-16.1-64-11.4-96-17.4-63.9-11.9-95.9-17.4h-.1a.8.8,0,0,1-.6-.9v-.2l16.6-32.1C299.8,192.2,304.1,183.9,302.9,186.9Z"></path>
                      </g>
                      <g id="head__face">
                          <g id="eyes">
                              <use width="19.2" height="18.7" transform="translate(474.8 195.2)" xlink:href="#eye"></use>
                              <use width="19.2" height="18.7" transform="matrix(-0.51, -0.85, 0.82, -0.5, 370.39, 192.59)" xlink:href="#eye"></use>
                          </g>
                          <g id="mouth">
                              <path d="M399.2,186.3c.9,3.6,2.6,7.8,6,9,6.4,2.3,19-6,19-6s4.1,12.4,10,15,10.7-1.7,16-6" fill="#fff"></path>
                              <path d="M450.2,198.3c.6,1.2.2,1.9-.2,2.2a36.7,36.7,0,0,1-7.6,4.9,14.9,14.9,0,0,1-4.8,1.4h-1.4l-1.3-.2-1.4-.4-1.3-.6a21.6,21.6,0,0,1-6.4-7.2,52.8,52.8,0,0,1-4-8.3l3.8,1.3a62.3,62.3,0,0,1-7.1,4.1,32.1,32.1,0,0,1-7.9,2.8,13.2,13.2,0,0,1-4.9.2l-1.4-.3a7.5,7.5,0,0,1-1.3-.6,7.9,7.9,0,0,1-2.3-1.6,16.8,16.8,0,0,1-2.9-4,24.1,24.1,0,0,1-1.6-4.2c-.1-.5,1.6-1.3,3-1.4s3.5.2,3.6.6a10.3,10.3,0,0,0,2.6,4.9l.7.5h2.4l1.5-.2a28.4,28.4,0,0,0,6.5-2c2.1-1,4.3-2.1,6.3-3.3h.1a2.5,2.5,0,0,1,3.4.9l.3.5a43.1,43.1,0,0,0,3.2,7.7,19.8,19.8,0,0,0,2.2,3.4,8.1,8.1,0,0,0,2.6,2.6,5,5,0,0,0,3,.7,10.8,10.8,0,0,0,3.7-1,33.4,33.4,0,0,0,7.2-4.3C448.8,197.4,449.5,197.2,450.2,198.3Z"></path>
                          </g>
                      </g>
                  </g>
                  <g id="table">
                      <path d="M65.7,181.8l714,124c0,74-2,54-2,128l-673-161Z" fill="#fff"></path>
                      <path d="M786.7,304.2c-2.7,1.2-10.8,0-16.1-.9L31.1,176.4c-5.2-.9-8.9-3.8-6.2-5s14.3-1.4,19.5-.5L777.1,300.6C782.3,301.6,789.4,303.1,786.7,304.2Z"></path>
                  </g>
                  <g id="laptop">
                      <g id="laptop__base">
                          <polygon points="641.9 304.1 454.7 348.2 103.8 271.3 254.6 230.3 641.9 304.1" fill="#f2f2f2"></polygon>
                          <path d="M641.9,304.1c1.5-.1-2.3,1.5-10.3,3.6-28.9,7.5-58.1,15.2-87.7,22.6s-59.1,14.5-88.4,21.3l-.8.2-.8-.2-349.5-78-1.1-.2-8.7-1.9,8.6-2.3,150.6-41.5.6-.2h.7c62.5,11.7,125.5,23.6,188.4,35.9s125.6,25.1,188,37.6c8,1.6,11.9,3,10.4,3a185.6,185.6,0,0,1-18.4-2.6c-61.9-11.2-123.6-22.2-185-33.5s-122.7-23.1-184.4-35h1.2L104.4,273.4h-.1v-4.3l351.2,75.7h-1.5c28.3-6.7,56.3-13.3,84.3-19.5s56.5-12,85.2-18.1C631.3,305.6,640.4,304.1,641.9,304.1Z" fill="#231f20"></path>
                      </g>
                      <g id="laptop__keyboard">
                          <polygon points="371.1 274.8 256.8 253.5 257 252.7 266.2 251.1 382.4 271.5 382.3 272.3 371.1 274.8" fill="#3e3e54"></polygon>
                          <polygon points="237.4 265.6 221.3 262.4 221.4 261.7 230.2 260.2 246.8 262.6 246.6 263.4 237.4 265.6" fill="#3e3e54"></polygon>
                          <polygon points="474.6 312.9 249.9 268.1 250.1 267.3 259.2 265.8 487.7 309.6 487.5 310.5 474.6 312.9" fill="#3e3e54"></polygon>
                          <polygon points="411.8 309.4 204.2 266.7 204.4 266 212.9 264.5 423.9 306.3 423.7 307.2 411.8 309.4" fill="#3e3e54"></polygon>
                          <polygon points="450 317.3 428.5 312.9 428.8 312 440.7 310.6 462.7 314.1 462.5 315 450 317.3" fill="#3e3e54"></polygon>
                          <polygon points="201.6 273.9 187.5 270.9 187.7 270.2 196 268.7 210.4 271 210.3 271.7 201.6 273.9" fill="#3e3e54"></polygon>
                          <polygon points="222.6 278.3 208.1 275.3 208.3 274.5 216.9 273.1 231.8 275.4 231.6 276.2 222.6 278.3" fill="#3e3e54"></polygon>
                          <polygon points="362.9 308.1 231.5 280.2 231.7 279.5 240.7 278.1 374.2 305.1 374 305.9 362.9 308.1" fill="#3e3e54"></polygon>
                          <polygon points="444.3 288.4 385.2 277.4 385.4 276.5 396.6 274.9 456.9 285.1 456.7 285.9 444.3 288.4" fill="#3e3e54"></polygon>
                          <polygon points="526.1 303.6 460.1 291.3 460.3 290.4 472.8 288.9 540.1 300.2 539.9 301.1 526.1 303.6" fill="#3e3e54"></polygon>
                          <polygon points="426.2 321.6 376.1 310.9 376.3 310.1 387.4 308.7 438.5 318.5 438.3 319.4 426.2 321.6" fill="#3e3e54"></polygon>
                          <g>
                              <polygon points="410.6 286.5 399.1 288 398.9 288.8 499.9 308.3 513.3 305.9 513.5 305 410.6 286.5" fill="#3e3e54"></polygon>
                              <polygon points="395.7 283.7 395.9 282.8 248.2 255.7 239.2 257.3 239 258 384.3 286 395.7 283.7" fill="#3e3e54"></polygon>
                          </g>
                          <polygon points="371.3 273.9 256.9 252.7 266.4 250.3 382.4 271.5 371.3 273.9" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="237.6 264.9 221.4 261.7 230.4 259.4 246.8 262.6 237.6 264.9" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="474.8 312 250 267.3 259.4 265.1 487.7 309.6 474.8 312" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="412 308.5 204.4 266 213.1 263.8 423.9 306.3 412 308.5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="450.2 316.4 428.8 312 440.9 309.7 462.8 314.1 450.2 316.4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="201.7 273.1 187.7 270.2 196.2 268 210.4 271 201.7 273.1" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="222.8 277.6 208.3 274.5 217.1 272.4 231.8 275.4 222.8 277.6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="363.1 307.3 231.7 279.5 240.9 277.3 374.2 305.1 363.1 307.3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="444.6 287.5 385.4 276.5 396.8 274.1 456.9 285 444.6 287.5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="526.3 302.7 460.3 290.4 473 288 540.1 300.2 526.3 302.7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <polygon points="426.4 320.7 376.3 310.1 387.6 307.9 438.5 318.5 426.4 320.7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          <g>
                              <polygon points="410.7 285.6 399.1 288 500.1 307.4 513.5 305 410.7 285.6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                              <polygon points="395.9 282.8 248.4 255 239.2 257.3 384.5 285.2 395.9 282.8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon>
                          </g>
                      </g>
                      <g id="paw-right">
                          <g class="paw-right--down">
                              <path d="M293.2,191.3l10-7s-18.4,11.1-24,20-13,20.4-9,31c4.7,12.4,20.5,15.7,22,16,20,3.8,47.8-24.3,47.8-24.3s1.9-3.3,2.2-3.7" fill="#fff"></path>
                              <path d="M342.1,223.4c.9,1.2.2,2.8-.3,3.7l-.4.7-.3.3a118.1,118.1,0,0,1-14.2,12.3,83.2,83.2,0,0,1-16.2,9.8,43.9,43.9,0,0,1-9.3,3,26.3,26.3,0,0,1-10.1.2,44.5,44.5,0,0,1-9.3-3.2,34.2,34.2,0,0,1-8.3-5.5,23,23,0,0,1-5.8-8.5,21.3,21.3,0,0,1-1.3-10.3,34.9,34.9,0,0,1,2.7-9.7,76.1,76.1,0,0,1,4.5-8.5l2.4-4,.6-1,.8-1.1a15.6,15.6,0,0,1,1.6-2,49.9,49.9,0,0,1,7-6.8,136.1,136.1,0,0,1,15.3-11.2,3.1,3.1,0,0,1,4.4,1,3,3,0,0,1-.8,4.2H305l-8.6,6.2c-.9.6-2.7-.5-3.1-1.9s.5-4.4,1.5-5l6.6-4.5,3.5,5.3A131.9,131.9,0,0,0,290,197.4a52.7,52.7,0,0,0-6.4,6,6.5,6.5,0,0,0-1.3,1.6l-.6.8-.7,1-2.4,3.8c-1.6,2.6-3.1,5.2-4.4,7.8a27.7,27.7,0,0,0-2.4,8.1,15.6,15.6,0,0,0,.8,8,17.4,17.4,0,0,0,4.4,6.7,27.2,27.2,0,0,0,7.1,4.9,39.5,39.5,0,0,0,8.1,3,21.6,21.6,0,0,0,8.4,0,37.8,37.8,0,0,0,8.5-2.6,84.9,84.9,0,0,0,15.7-9,142.4,142.4,0,0,0,14.1-11.6l-.3.3,1.1-1.8C340.3,223.4,341.3,222.2,342.1,223.4Z"></path>
                          </g>
                          <g class="paw-right--up">
                              <g>
                                  <path d="M282.2,215.2c-1.6-1.6-12.8-17.9-14-34.3-.1-2.5,1.7-16,12.9-22.4s22.3-1.9,26.2.4c12.2,7.3,21.2,19.1,22.8,22.4" fill="#fff"></path>
                                  <path d="M330,181.2a2.4,2.4,0,0,1-2.6-1.3,71.4,71.4,0,0,0-9.8-10.8,64,64,0,0,0-11.7-8.6,26.3,26.3,0,0,0-6.5-2.3,26.9,26.9,0,0,0-6.9-.6,24.9,24.9,0,0,0-6.7,1.3,20.8,20.8,0,0,0-5.8,3.3,23.1,23.1,0,0,0-7.6,11,32.5,32.5,0,0,0-1.4,6.6,6.6,6.6,0,0,0,.1,1.4l.2,1.8c.1,1.2.4,2.3.6,3.5a65,65,0,0,0,4.8,13.4c1,2.2,2.2,4.3,3.4,6.4a43.1,43.1,0,0,0,3.9,5.9.6.6,0,0,1,0,.6c0,.2-.2.4-.4.7a5.7,5.7,0,0,1-1.5,1.6c-1.3.6-4.1.1-4.6-.6a89.5,89.5,0,0,1-7.2-13.7,63.7,63.7,0,0,1-4.3-14.9,25.7,25.7,0,0,1-.5-4c0-.3-.1-.6-.1-1v-1.2a12.5,12.5,0,0,1,.2-2.1,35.2,35.2,0,0,1,2.4-7.8,28.6,28.6,0,0,1,4.1-6.9,24.6,24.6,0,0,1,6.1-5.5,26.2,26.2,0,0,1,15.5-4.2,28.9,28.9,0,0,1,7.8,1.2l3.8,1.3,1.8.9,1.8,1a78.2,78.2,0,0,1,11.9,9.6,80.2,80.2,0,0,1,9.7,11.8C331.1,179.7,331.4,181,330,181.2Z"></path>
                              </g>
                              <use width="31.4" height="33.93" transform="translate(273.2 166.1) rotate(-5.6)" xlink:href="#paw-pads"></use>
                          </g>
                      </g>
                      <g id="laptop__terminal">
                          <path d="M316.9,238.7,153.5,205.2a5.1,5.1,0,0,1-4-3.5L109.8,75.4c-1-3.3,1.9-6.6,5.6-6.3L277.9,84.5a5.2,5.2,0,0,1,4.6,3.7l40.7,144.4C324.2,236.2,320.8,239.5,316.9,238.7Z"></path>
                          <path d="M317.3,238.7a7.9,7.9,0,0,0,2.2-.7,5,5,0,0,0,2.2-1.9,3.7,3.7,0,0,0,.6-2.9l-.3-.8-.2-.9a15.4,15.4,0,0,1-.5-1.7L300,154.6l-10.7-37.5L284,98.3l-2.6-9.4a7.9,7.9,0,0,0-.4-.9,4.3,4.3,0,0,0-.4-.7,3.3,3.3,0,0,0-1.5-1.1l-.9-.3h-1.1l-2.4-.2L119.2,71.2l-2.4-.3h-2.2a3.3,3.3,0,0,0-2.8,1.6,2.4,2.4,0,0,0-.5,1.4v.8c.1.1.1.2.1.4l.2.6,1.5,4.6L119,98.8l11.8,37.3,11.7,37.2,5.9,18.6,2.9,9.3a3.4,3.4,0,0,0,2.2,2h1l1.2.3,2.4.4,153,31.1c4.3.9,7.4,2.9,5.2,3.3s-11.7-.1-16-1l-75.8-15.7L186.6,214l-19-3.9-9.5-2-4.7-1h-.7l-.8-.3a6.1,6.1,0,0,1-1.4-.7,7.6,7.6,0,0,1-2.3-2.4l-.4-.8a1.9,1.9,0,0,1-.2-.7l-.4-1.2-.7-2.3-1.4-4.6-2.9-9.2-5.8-18.5-11.5-36.9-11.5-37-2.9-9.2L109,78.5l-.7-2.3v-.6c0-.3-.1-.6-.1-.8a4.8,4.8,0,0,1,0-1.7,6.8,6.8,0,0,1,3.8-5,10.1,10.1,0,0,1,3-.7h2.6l9.6,1L204.1,76l38.5,3.7,19.3,1.9,9.6.9,4.8.5h2.6a6.6,6.6,0,0,1,2.7,1.2,7.2,7.2,0,0,1,1.9,2.4,12.1,12.1,0,0,1,.5,1.4l.3,1.1,1.3,4.7,2.6,9.3,5.2,18.6,10.4,37.3,10.4,37.3,5.3,18.6,2.6,9.4,1.3,4.6.6,2.4a7,7,0,0,1,.4,2.7,5.7,5.7,0,0,1-1.8,3.7,5.9,5.9,0,0,1-3.4,1.6,3.5,3.5,0,0,1-2.1-.4C316.7,239,316.8,238.9,317.3,238.7Z"></path>
                      </g>
                      <g id="laptop__terminal_code_scene">
                          <g id="laptop__code">
                              <g stroke="#3DE0E8" stroke-width="6" transform="matrix(-1 0 0 1 278 103)">
                                  <g id="f3" transform="translate(0 76)">
                                      <path class="typing-animation" id="f3-l9" d="M8,25L8,25" stroke-dasharray="60,10"></path>
                                      <path class="typing-animation" id="f3-l8" d="M8,13L8,13" stroke-dasharray="50,10"></path>
                                      <path class="typing-animation" id="f3-l7" d="M0,1L0,1" stroke-dasharray="25,10"></path>
                                  </g>
                                  <g id="f2" transform="translate(0 38)">
                                      <path class="typing-animation" id="f2-l6" d="M8,25L8,25" stroke-dasharray="40,10"></path>
                                      <path class="typing-animation" id="f2-l5" d="M8,13L8,13" stroke-dasharray="60,10"></path>
                                      <path class="typing-animation" id="f2-l4" d="M0,1L0,1" stroke-dasharray="30,10"></path>
                                  </g>
                                  <g id="f1">
                                      <path class="typing-animation" id="f1-l3" d="M8,25L8,25" stroke-dasharray="60,10"></path>
                                      <path class="typing-animation" id="f1-l2" d="M8,13L8,13" stroke-dasharray="60,10"></path>
                                      <path class="typing-animation" id="f1-l1" d="M0,1L0,1" stroke-dasharray="60,10"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                      <g id="laptop__cover" style="mix-blend-mode: hard-light;">
                          <polygon points="440.7 347.2 90.3 275.6 4.7 3.8 353 36.7 440.7 347.2" fill="#f2f2f2"></polygon>
                          <path d="M440.4,346.4c-2.5-5.3-6.5-18.8-9-27.4L390.7,178c-13.6-46.8-26.9-93.7-40.3-140.6l2.3,2L4.4,7.1,7.9,2.8,94,274.5l-2.9-2.6q83.7,16.8,166.8,34.2t166.8,35.4c8.8,1.9,17.5,5.1,14.7,5.5s-6.3-.2-12-.9-12.3-1.5-16.8-2.3Q330.5,328.1,250,312.1c-53.5-10.8-107.1-21.7-160.4-32.7l-2.3-.5-.6-2.1L1.5,4.8,0,0,5,.5,353.3,34l1.8.2.5,1.8q20.7,73.8,41.2,147.8l40.6,147.5C439.8,340.1,442.9,351.7,440.4,346.4Z"></path>
                      </g>
                  </g>
                  <g id="paw-left">
                      <g class="paw-left--up">
                          <g>
                              <path d="M545.4,261.9c-7.1-13-12.9-31.1-13.3-37.6-.6-9,0-15.6,5.2-22.2s15-9.8,22.7-8.8a26.7,26.7,0,0,1,17.3,9.4c5.3,5.8,9.4,12.9,11.6,16.6" fill="#fff"></path>
                              <path d="M588.9,219.2c-1.4.4-2.3-.7-2.8-1.4a93.9,93.9,0,0,0-8.9-12.5c-3.3-3.9-7.1-7-11.7-8.6a24.2,24.2,0,0,0-7.1-1.4,24.5,24.5,0,0,0-7.1.7,27,27,0,0,0-6.6,2.7,21,21,0,0,0-5.2,4.6,20.6,20.6,0,0,0-3.5,6.1,22.2,22.2,0,0,0-1.3,6.9,47.3,47.3,0,0,0,.1,7.5,52.2,52.2,0,0,0,1.4,7.1c1.4,4.8,3.1,9.7,5,14.4a147.7,147.7,0,0,0,6.5,13.9c.4.7-1,2.3-2.4,2.6s-4-.6-4.4-1.4c-2.3-4.8-4.3-9.7-6.1-14.6a128.8,128.8,0,0,1-4.6-15.3c-.3-1.3-.5-2.6-.7-4a16.4,16.4,0,0,1-.2-2.2v-2a57,57,0,0,1,.4-8.2,27.2,27.2,0,0,1,2.3-8.2c.7-1.3,1.4-2.5,2.2-3.7l1.3-1.7,1.4-1.6a28.8,28.8,0,0,1,7-5,27.6,27.6,0,0,1,8-2.5,25.6,25.6,0,0,1,8.3-.2,27.4,27.4,0,0,1,15.1,6.7,50.6,50.6,0,0,1,5.5,5.9,111.3,111.3,0,0,1,8.7,13.2C589.8,217.7,590.3,218.9,588.9,219.2Z"></path>
                          </g>
                          <use width="31.4" height="33.93" transform="matrix(0.99, -0.03, 0.04, 1, 539.85, 203.52)" xlink:href="#paw-pads"></use>
                      </g>
                      <g class="paw-left--down">
                          <path d="M538.2,239.3c-3.2,1.6-33,10.8-37,28-.4,1.8-2.1,18.9,7,26,5.5,4.3,12.7,2.8,25,0,10.3-2.3,19-5.8,40-16,9.1-4.4,16.6-8.2,22-11" fill="#fff"></path>
                          <path d="M595.1,266.4c.1,1.4-1.4,2.4-2.4,2.9l-18.3,9.4c-6.2,3.1-12.3,6.1-18.6,9a120.8,120.8,0,0,1-19.6,7.2l-5.1,1.2-5.1,1.1a43.4,43.4,0,0,1-5.2.9,33.8,33.8,0,0,1-5.6.3,17.8,17.8,0,0,1-5.8-1.5,6.1,6.1,0,0,1-1.4-.7l-1.3-.9-2.2-2a23.6,23.6,0,0,1-5.2-10.2,44.5,44.5,0,0,1-1.3-10.9c0-.9.1-1.8.1-2.7a6.6,6.6,0,0,0,.1-1.4v-.7c.1-.3.1-.7.2-.9a21.6,21.6,0,0,1,2.1-5.5,33.4,33.4,0,0,1,7.1-8.7,67.1,67.1,0,0,1,8.7-6.4,121.7,121.7,0,0,1,19-9,1.5,1.5,0,0,1,1.7.6,3.4,3.4,0,0,1,.9,1.9c.1,1.5-1.6,4.2-2.6,4.6a91.1,91.1,0,0,0-17.8,8.5,40.1,40.1,0,0,0-7.6,5.8,22.8,22.8,0,0,0-5.2,7.3l-.4,1-.3,1a1.7,1.7,0,0,0-.2.5v.4c-.1.4-.1.8-.2,1.2s-.1,3.1-.1,4.7a35.4,35.4,0,0,0,1.4,9.3,15.6,15.6,0,0,0,4.5,7.3c2,1.9,4.7,2.6,7.8,2.5a55.9,55.9,0,0,0,9.7-1.2l4.9-1.1,4.9-1.1a121,121,0,0,0,18.8-6.8c12.4-5.3,24.6-11.5,36.8-17.4C593.4,265.4,595,264.9,595.1,266.4Z"></path>
                      </g>
                  </g>
              </svg>
          </div>
  
          <div id="workInData" class="work__data hidden">
              <div class="work__data_btn_return_main_menu">
                  <button id="workInDataBtnReturnMainMenu" type="button">НА ГЛАВНУЮ</button>
              </div>
  
              <form class="work__data_field_for_input_question">
                  <input id="workInDataInputQuestion" placeholder="Введите вопрос">
                  <input id="workInDataInputA"  placeholder="Вариант ответа - 1">
                  <input id="workInDataInputB"  placeholder="Вариант ответа - 2">
                  <input id="workInDataInputC"  placeholder="Вариант ответа - 3">
                  <input id="workInDataInputD"  placeholder="Вариант ответа - 4">
                  <input id="workInDataInputCorrectAnswer"  placeholder="Введите правильный ответ">
                  <input id="workInDataInputFifty"  placeholder="Вариант для подсказки 50/50">
  
                  <button id="workInDataBtnAddQuestion" type="button">Добавить вопрос</button>
              </form>
  
              <div class="work__data_field_for_question_list"></div>
          </div>
          
          <div id="errorNotFound" class="error hidden">Извините, запрашиваемая Вами страница не найдена</div>`;
  
      this.mainMenu = this.myContainer.querySelector('#menu');
      this.gameField = this.myContainer.querySelector('#gameField');
      this.progressGame = this.myContainer.querySelector('#gameProgress');
      this.inputName = this.myContainer.querySelector('#menuInputName');
      this.btnSubmitName = this.myContainer.querySelector('#menuButtonSubmitName');
      this.btnFiftyFifty = this.myContainer.querySelector('#gameFieldHintsFifty');
      this.btnHelpJS = this.myContainer.querySelector('#gameFieldHintsHelpJS');
      this.btnExit = this.myContainer.querySelector('#gameFieldExit');
      this.youWrong = this.myContainer.querySelector('#gameTitleYouWrong');
      this.animateWrongAnswer = this.myContainer.querySelector('#gameAnimateWaves');
      this.zoneQuestion = this.myContainer.querySelector('#gameFieldQuestion');
      this.optionA = this.myContainer.querySelector('#gameFieldAnswerA');
      this.optionB = this.myContainer.querySelector('#gameFieldAnswerB');
      this.optionC = this.myContainer.querySelector('#gameFieldAnswerC');
      this.optionD = this.myContainer.querySelector('#gameFieldAnswerD');
      this.flyToOfferTitle = this.myContainer.querySelector('#gameTitleFlyToOffer');
      this.animateBetweenQuestions = this.myContainer.querySelector('#gameAnimateBetweemQuestions');
      this.congratulateTitle = this.myContainer.querySelector('#gameCongratulateTitle');
      this.animateCongratulateWin = this.myContainer.querySelector('#gameAnimateWinnerCat');
      this.cntRecordsOl = this.myContainer.querySelector('#recordsOl');
      this.animateBackgroundCnt = this.myContainer.querySelector('#gameAnimateBackgroundCnt');
      this.progressGameMobileScreen = this.myContainer.querySelector('#gameProgressMobileScreen');
      this.errorNotFound = this.myContainer.querySelector('#errorNotFound');
      this.gamePlayerName = this.myContainer.querySelector('#gamePlayerName');
      this.autorization = this.myContainer.querySelector('#autorization');
      this.autorizationForm = this.myContainer.querySelector('#autorizationForm');
      this.workInData = this.myContainer.querySelector('#workInData');
      this.errorLogin = this.myContainer.querySelector('#showErrorLogin');
      this.autorizationLoginName = this.myContainer.querySelector('#loginName');
      this.autorizationLoginPassword = this.myContainer.querySelector('#loginPassword');
      this.divForQuestionsList = this.myContainer.querySelector('.work__data_field_for_question_list');
      this.menuBtnSound = this.myContainer.querySelector('#menuBtnSound');
      this.stateSound = true;
  
      this.workInDataInputQuestion = this.myContainer.querySelector('#workInDataInputQuestion');
      this.workInDataInputCorrectAnswer = this.myContainer.querySelector('#workInDataInputCorrectAnswer');
      this.workInDataInputA = this.myContainer.querySelector('#workInDataInputA');
      this.workInDataInputB = this.myContainer.querySelector('#workInDataInputB');
      this.workInDataInputC = this.myContainer.querySelector('#workInDataInputC');
      this.workInDataInputD = this.myContainer.querySelector('#workInDataInputD');
      this.workInDataInputFifty = this.myContainer.querySelector('#workInDataInputFifty');
  
      this.musicStart = this.myContainer.querySelector('#music_start');
      this.musicPlayerThink = this.myContainer.querySelector('#music_player_think');
      this.musicFiftyFifty = this.myContainer.querySelector('#music_fifty');
      this.musicHelpJS = this.myContainer.querySelector('#music_helpJS');
      this.musicExit = this.myContainer.querySelector('#music_exit');
      this.musicAnswerAccept = this.myContainer.querySelector('#music_answer_accept');
      this.musicCorrectAnswer = this.myContainer.querySelector('#music_correct');
      this.musicWrongAnswer = this.myContainer.querySelector('#music_wrong');
      this.musicApplause = this.myContainer.querySelector('#music_applause');
  
      this.question1 = this.myContainer.querySelector('.game__progress_question_1');
      this.question2 = this.myContainer.querySelector('.game__progress_question_2');
      this.question3 = this.myContainer.querySelector('.game__progress_question_3');
      this.question4 = this.myContainer.querySelector('.game__progress_question_4');
      this.question5 = this.myContainer.querySelector('.game__progress_question_5');
      this.question6 = this.myContainer.querySelector('.game__progress_question_6');
      this.question7 = this.myContainer.querySelector('.game__progress_question_7');
      this.question8 = this.myContainer.querySelector('.game__progress_question_8');
      this.question9 = this.myContainer.querySelector('.game__progress_question_9');
      this.question10 = this.myContainer.querySelector('.game__progress_question_10');
      this.question11 = this.myContainer.querySelector('.game__progress_question_11');
      this.question12 = this.myContainer.querySelector('.game__progress_question_12');
      this.question13 = this.myContainer.querySelector('.game__progress_question_13');
      this.question14 = this.myContainer.querySelector('.game__progress_question_14');
      this.question15 = this.myContainer.querySelector('.game__progress_question_15');
    };
  
    showFormAutorization() {
      location.hash = 'Menu';
      this.musicStart.play();
      this.mainMenu.classList.remove('hidden');
      this.myContainer.classList.remove('background_logo');
      this.gameField.classList.add('hidden');
      this.progressGame.classList.add('hidden');
      this.progressGameMobileScreen.classList.add('hidden');
      this.inputName.value = '';
      this.youWrong.classList.add('hidden');
      this.animateWrongAnswer.classList.add('hidden');
  
      this.disabledBtnSubmitName();
      this.unDisabledBtnHelpJS();
      this.unDisabledBtnFiftyFifty();
      this.clearOptionsClass();
      this.unDisabledAllBtnsAndOptionsAnswer();
  
      this.hintFiftyState = false;
      this.hintHelpJSState = false;
    };
  
    removeFormAutorization() {
      this.musicStart.pause();
      this.musicStart.currentTime = 0;
  
      this.mainMenu.classList.add('hidden');
      this.drawGameField();
    };
  
    drawGameField() {
      this.musicPlayerThink.play();
  
      this.gameField.classList.remove('hidden');
      this.progressGame.classList.remove('hidden');
      this.animateBackgroundCnt.classList.remove('hidden');
      this.progressGameMobileScreen.classList.remove('hidden');
      this.progressGameMobileScreen.innerHTML = 'правильные ответы: 0';
    };
  
    showQuestionInGameField(objQuestion) {
  
      this.zoneQuestion.innerHTML = objQuestion.question;
      this.optionA.innerHTML = `${objQuestion.a}`;
      this.optionB.innerHTML = `${objQuestion.b}`;
      this.optionC.innerHTML = `${objQuestion.c}`;
      this.optionD.innerHTML = `${objQuestion.d}`;
  
      this.clearOptionsClass();
    };
  
    clearOptionsClass() {
      this.optionA.className = 'game__field_answer_option';
      this.optionB.className = 'game__field_answer_option';
      this.optionC.className = 'game__field_answer_option';
      this.optionD.className = 'game__field_answer_option';
    };
  
    showHintsFiftyFifty(answerOne, answerTwo) {
      this.musicFiftyFifty.play();
  
      this.optionA.innerHTML = `${answerOne}`;
      this.optionB.innerHTML = ``;
      this.optionC.innerHTML = `${answerTwo}`;
      this.optionD.innerHTML = ``;
  
      this.disabledBtnFiftyFifty();
      this.disabledOptionB();
      this.disabledOptionD();
  
      this.hintFiftyState = true;
    };
  
    showHintsHelpJS(correctAnswer) {
      this.musicHelpJS.play();
      this.optionA.innerHTML = `${correctAnswer}`;
      this.optionB.innerHTML = ``;
      this.optionC.innerHTML = ``;
      this.optionD.innerHTML = ``;
  
      this.disabledBtnFiftyFifty();
      this.disabledBtnHelpJS();
      this.disabledOptionB();
      this.disabledOptionC();
      this.disabledOptionD();
  
      this.hintHelpJSState = true;
    };
  
    // disabled / undisabled btns
  
    disabledBtnSubmitName() {
      this.btnSubmitName.setAttribute('disabled', true);
      this.btnSubmitName.classList.add('disabled_active');
    }
    unDisabledBtnSubmitName() {
      this.btnSubmitName.removeAttribute('disabled');
      this.btnSubmitName.classList.remove('disabled_active');
    }
  
    disabledBtnFiftyFifty() {
      this.btnFiftyFifty.setAttribute('disabled', true);
      this.btnFiftyFifty.classList.add('disabled_active');
    }
    unDisabledBtnFiftyFifty() {
      this.btnFiftyFifty.removeAttribute('disabled');
      this.btnFiftyFifty.classList.remove('disabled_active');
    }
  
    disabledBtnExit() {
      this.btnExit.setAttribute('disabled', true);
      this.btnExit.classList.add('disabled_active');
    }
    unDisabledBtnExit() {
      this.btnExit.removeAttribute('disabled');
      this.btnExit.classList.remove('disabled_active');
    }
  
    disabledBtnHelpJS() {
      this.btnHelpJS.setAttribute('disabled', true);
      this.btnHelpJS.classList.add('disabled_active');
    }
    unDisabledBtnHelpJS() {
      this.btnHelpJS.removeAttribute('disabled');
      this.btnHelpJS.classList.remove('disabled_active');
    }
  
    disabledOptionA() {
      this.optionA.setAttribute('disabled', true);
      this.optionA.classList.add('disabled_active');
    }
    unDisabledOptionA() {
      this.optionA.removeAttribute('disabled');
      this.optionA.classList.remove('disabled_active');
    }
  
    disabledOptionB() {
      this.optionB.setAttribute('disabled', true);
      this.optionB.classList.add('disabled_active');
    }
    unDisabledOptionB() {
      this.optionB.removeAttribute('disabled');
      this.optionB.classList.remove('disabled_active');
    }
  
    disabledOptionC() {
      this.optionC.setAttribute('disabled', true);
      this.optionC.classList.add('disabled_active');
    }
    unDisabledOptionC() {
      this.optionC.removeAttribute('disabled');
      this.optionC.classList.remove('disabled_active');
    }
  
    disabledOptionD() {
      this.optionD.setAttribute('disabled', true);
      this.optionD.classList.add('disabled_active');
    }
    unDisabledOptionD() {
      this.optionD.removeAttribute('disabled');
      this.optionD.classList.remove('disabled_active');
    }
  
    undisabledOptionsHints() {
      this.unDisabledOptionB();
      this.unDisabledOptionC();
      this.unDisabledOptionD();
    };
  
    soundExit() {
      this.musicPlayerThink.pause();
      this.musicPlayerThink.currentTime = 0;
      this.musicExit.play();
    };
  
    disabledBtn(state) {
      if (state) {
        this.disabledBtnSubmitName();
      }
      else {
        this.unDisabledBtnSubmitName();
      }
    };
  
    disabledAllBtnsAndOptionsAnswer() {
      this.disabledBtnExit();
      this.disabledOptionA();
      this.disabledOptionB();
      this.disabledOptionC();
      this.disabledOptionD();
    };
  
    unDisabledAllBtnsAndOptionsAnswer() {
      this.unDisabledBtnExit();
      this.unDisabledOptionA();
      this.unDisabledOptionB();
      this.unDisabledOptionC();
      this.unDisabledOptionD();
    };
  
    waitingLostCorrectAnswer(e) {
      this.disabledAllBtnsAndOptionsAnswer();
      this.disabledBtnFiftyFifty();
      this.disabledBtnHelpJS();
  
      const target = e.target;
      target.classList.add('wait_answer');
      this.musicPlayerThink.pause();
      this.musicPlayerThink.currentTime = 0;
      this.musicAnswerAccept.play();
  
      setTimeout(() => {
        target.classList.add('correct_answer');
        this.musicCorrectAnswer.play();
        this.musicApplause.play();
  
        target.classList.remove('wait_answer');
        this.question15.classList.add('backgroundGreen');
      }, 5000);
  
      setTimeout(() => {
        this.gameField.classList.add('hidden');
        this.progressGame.classList.add('hidden');
        this.animateBackgroundCnt.classList.add('hidden');
        this.clearQuestionsBackground();
  
        this.musicStart.play();
        this.congratulateTitle.classList.remove('hidden');
        this.animateCongratulateWin.classList.remove('hidden');
  
        setTimeout(() => {
          this.congratulateTitle.classList.add('hidden');
          this.animateCongratulateWin.classList.add('hidden');
          this.showFormAutorization();
  
          if (!this.hintFiftyState) {
            this.unDisabledBtnFiftyFifty();
          }
  
          if (!this.hintHelpJSState) {
            this.unDisabledBtnHelpJS();
          }
        }, 9000);
      }, 9500);
    }
  
    clearQuestionsBackground() {
      this.question1.classList.remove('backgroundGreen');
      this.question2.classList.remove('backgroundGreen');
      this.question3.classList.remove('backgroundGreen');
      this.question4.classList.remove('backgroundGreen');
      this.question5.classList.remove('backgroundGreen');
      this.question6.classList.remove('backgroundGreen');
      this.question7.classList.remove('backgroundGreen');
      this.question8.classList.remove('backgroundGreen');
      this.question9.classList.remove('backgroundGreen');
      this.question10.classList.remove('backgroundGreen');
      this.question11.classList.remove('backgroundGreen');
      this.question12.classList.remove('backgroundGreen');
      this.question13.classList.remove('backgroundGreen');
      this.question14.classList.remove('backgroundGreen');
      this.question15.classList.remove('backgroundGreen');
      this.counterQuestions = 1;
    }
  
    waitingCorrectAnswer(e) {
      this.disabledAllBtnsAndOptionsAnswer();
      this.disabledBtnFiftyFifty();
      this.disabledBtnHelpJS();
  
      const target = e.target;
      target.classList.add('wait_answer');
      this.musicPlayerThink.pause();
      this.musicPlayerThink.currentTime = 0;
  
      this.musicAnswerAccept.play();
  
      setTimeout(() => {
        target.classList.add('correct_answer');
        this.musicCorrectAnswer.play();
        this.musicApplause.play();
  
        target.classList.remove('wait_answer');
  
        switch (this.counterQuestions) {
          case 1:
            this.question1.classList.add('backgroundGreen');
            break;
          case 2:
            this.question2.classList.add('backgroundGreen');
            break;
          case 3:
            this.question3.classList.add('backgroundGreen');
            break;
          case 4:
            this.question4.classList.add('backgroundGreen');
            break;
          case 5:
            this.question5.classList.add('backgroundGreen');
            break;
          case 6:
            this.question6.classList.add('backgroundGreen');
            break;
          case 7:
            this.question7.classList.add('backgroundGreen');
            break;
          case 8:
            this.question8.classList.add('backgroundGreen');
            break;
          case 9:
            this.question9.classList.add('backgroundGreen');
            break;
          case 10:
            this.question10.classList.add('backgroundGreen');
            break;
          case 11:
            this.question11.classList.add('backgroundGreen');
            break;
          case 12:
            this.question12.classList.add('backgroundGreen');
            break;
          case 13:
            this.question13.classList.add('backgroundGreen');
            break;
          case 14:
            this.question14.classList.add('backgroundGreen');
            break;
        }
  
        this.progressGameMobileScreen.innerHTML = `правильные ответы: ${this.counterQuestions}`;
        this.counterQuestions++;
      }, 5000);
  
      setTimeout(() => {
        this.showAnimationCorrectAnswer();
        this.undisabledOptionsHints();
        this.unDisabledAllBtnsAndOptionsAnswer();
  
        if (!this.hintFiftyState) {
          this.unDisabledBtnFiftyFifty();
        }
  
        if (!this.hintHelpJSState) {
          this.unDisabledBtnHelpJS();
        }
      }, 9500);
    };
  
    showAnimationCorrectAnswer() {
      this.flyToOfferTitle.classList.remove('hidden');
      this.animateBetweenQuestions.classList.remove('hidden');
  
      this.gameField.classList.add('hidden');
      this.progressGame.classList.add('hidden');
      this.animateBackgroundCnt.classList.add('hidden');
      this.progressGameMobileScreen.classList.add('hidden');
  
      setTimeout(() => {
        this.flyToOfferTitle.classList.add('hidden');
        this.animateBetweenQuestions.classList.add('hidden');
  
        this.gameField.classList.remove('hidden');
        this.progressGame.classList.remove('hidden');
        this.animateBackgroundCnt.classList.remove('hidden');
        this.progressGameMobileScreen.classList.remove('hidden');
  
        this.musicPlayerThink.play();
      }, 3000);
    };
  
    waitingWrongAnswer(e, correctAnswer) {
      this.disabledAllBtnsAndOptionsAnswer();
      this.disabledBtnFiftyFifty();
      this.disabledBtnHelpJS();
  
      const target = e.target;
      target.classList.add('wait_answer');
      this.musicPlayerThink.pause();
      this.musicPlayerThink.currentTime = 0;
  
      this.musicAnswerAccept.play();
  
      setTimeout(() => {
        target.classList.add('wrong_answer');
        this.musicWrongAnswer.play();
  
        target.classList.remove('wait_answer');
      }, 5000);
  
      setTimeout(() => {
        switch (correctAnswer) {
          case this.optionA.innerText:
            this.optionA.classList.add('correct_answer');
            break;
          case this.optionB.innerText:
            this.optionB.classList.add('correct_answer');
            break;
          case this.optionC.innerText:
            this.optionC.classList.add('correct_answer');
            break;
          case this.optionD.innerText:
            this.optionD.classList.add('correct_answer');
            break;
        }
      }, 6300);
  
      setTimeout(() => {
        this.showAnimationWrongAnswer();
        this.undisabledOptionsHints();
        this.unDisabledAllBtnsAndOptionsAnswer();
        this.clearQuestionsBackground();
      }, 11000);
    };
  
    showAnimationWrongAnswer() {
      this.youWrong.classList.remove('hidden');
      this.animateWrongAnswer.classList.remove('hidden');
  
      this.gameField.classList.add('hidden');
      this.progressGame.classList.add('hidden');
      this.progressGameMobileScreen.classList.add('hidden');
      this.animateBackgroundCnt.classList.add('hidden');
    };
  
    showErrorApp() {
      this.myContainer.innerHTML = `<div id="errorMessage">
                                          Извините, возникли технические проблемы.<br>
                                          Попробуйте загрузить позднее
                                        </div>`;
    }
  
    showRecordsPlayers(data, state) {
      this.cntRecordsOl.innerHTML = '';
  
      if (state) {
        for (let i = 0; i < data.length; i++) {
          if (i === 15) {
            return;
          }
          this.cntRecordsOl.insertAdjacentHTML('beforeend', `<li>Имя: ${data[i].username} , очков: ${data[i].score}</li>`);
        }
      }
      else {
        this.cntRecordsOl.innerHTML = `Нет данных`;
      }
    }
  
    showNamePlayer(name) {
      this.gamePlayerName.innerHTML = `ИГРОК : ${name} &nbsp;&nbsp;|&nbsp;&nbsp; ПОДСКАЗКИ`;
    }
  
    showScreenWorkWithData(data) {
      this.autorizationForm.classList.add('hidden');
      this.workInData.classList.remove('hidden');
      this.divForQuestionsList.innerHTML = '';
  
      if (data) {
        for (let i = 0; i < data.length; i++) {
          this.divForQuestionsList.insertAdjacentHTML('beforeend',
  
            `<div class="work__data_questions">
                      <div class="work__data_question_edit">
                          <h6>Ключ : <span class="idKeyQuestion">${data[i][0]}</span></h6><br>
                          <h6>Вопрос ${i+1} : <span class="updateQuestion" contenteditable="true">${data[i][1].question}</span> </h6>
                          <p>Вариант ответа - 1 : <span class="updateQuestionA" contenteditable="true">${data[i][1].a}</span> </p>
                          <p>Вариант ответа - 2 : <span class="updateQuestionB" contenteditable="true">${data[i][1].b}</span> </p>
                          <p>Вариант ответа - 3 : <span class="updateQuestionC" contenteditable="true">${data[i][1].c}</span> </p>
                          <p>Вариант ответа - 4 : <span class="updateQuestionD" contenteditable="true">${data[i][1].d}</span> </p>
                          <p>Правильный ответ : <span class="updateCorrectAnswer" contenteditable="true">${data[i][1].correctAnswer}</span> </p>
                          <p>Вариант для подсказки 50/50 : <span class="updateQuestionFifty" contenteditable="true">${data[i][1].fifty}</span></p>
                          
                          <div class="work__data_controller">
                              <button class="workDataBtnUpdate" type="button">Обновить вопрос</button>
                              <button class="workDataBtnRemove" type="button">Удалить вопрос</button>
                          </div>
                      </div>   
                  </div>`);
        }
      }
      else {
        this.divForQuestionsList.innerHTML = `Нет данных, без них приложение неработоспособно`;
      }
    }
  
    showInfoWrongPassword() {
      this.autorizationLoginName.value = '';
      this.autorizationLoginPassword.value = '';
      this.errorLogin.classList.remove('hidden');
    }
  
    clearMessageWrongPassword() {
      this.errorLogin.classList.add('hidden');
    }
  
    clearInputFieldNewQuestion() {
      this.workInDataInputQuestion.value = '',
        this.workInDataInputCorrectAnswer.value = '',
        this.workInDataInputA.value = '',
        this.workInDataInputB.value = '',
        this.workInDataInputC.value = '',
        this.workInDataInputD.value = '',
        this.workInDataInputFifty.value = '';
    }
  
    removeQuestion(node) {
      node.remove();
    }
  
    hideFieldWorkInDataQuestions() {
      this.workInData.classList.add('hidden');
      this.autorizationForm.classList.remove('hidden');
      this.showInfoWrongPassword();
      this.errorLogin.classList.add('hidden');
      this.clearInputFieldNewQuestion();
    }
  
    controlSound() {
      if (this.stateSound === true) {
  
        this.stateSound = false;
  
        this.menuBtnSound.classList.remove('soundOn');
        this.menuBtnSound.classList.add('soundOff');
  
        this.musicStart.muted = true;
        this.musicStart.pause();
        this.musicStart.currentTime = 0;
  
        this.musicPlayerThink.muted = true;
        this.musicPlayerThink.pause();
        this.musicPlayerThink.currentTime = 0;
  
        this.musicFiftyFifty.muted = true;
        this.musicFiftyFifty.pause();
        this.musicFiftyFifty.currentTime = 0;
  
        this.musicHelpJS.muted = true;
        this.musicHelpJS.pause();
        this.musicHelpJS.currentTime = 0;
  
        this.musicExit.muted = true;
        this.musicExit.pause();
        this.musicExit.currentTime = 0;
  
        this.musicAnswerAccept.muted = true;
        this.musicAnswerAccept.pause();
        this.musicAnswerAccept.currentTime = 0;
  
        this.musicCorrectAnswer.muted = true;
        this.musicCorrectAnswer.pause();
        this.musicCorrectAnswer.currentTime = 0;
  
        this.musicWrongAnswer.muted = true;
        this.musicWrongAnswer.pause();
        this.musicWrongAnswer.currentTime = 0;
  
        this.musicApplause.muted = true;
        this.musicApplause.pause();
        this.musicApplause.currentTime = 0;
  
      }
      else {
  
        this.stateSound = true;
  
        this.menuBtnSound.classList.add('soundOn');
        this.menuBtnSound.classList.remove('soundOff');
  
        this.musicStart.muted = false;
        this.musicPlayerThink.muted = false;
        this.musicFiftyFifty.muted = false;
        this.musicHelpJS.muted = false;
        this.musicExit.muted = false;
        this.musicAnswerAccept.muted = false;
        this.musicCorrectAnswer.muted = false;
        this.musicWrongAnswer.muted = false;
        this.musicApplause.muted = false;
      }
    }
  }