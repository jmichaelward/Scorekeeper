/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Scorekeeper = __webpack_require__(2);
	
	var _Scorekeeper2 = _interopRequireDefault(_Scorekeeper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = function () {
	  // Initialize
	  app = new _Scorekeeper2.default();
	
	  app.run();
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scorekeeper = function () {
	  function Scorekeeper() {
	    _classCallCheck(this, Scorekeeper);
	
	    this.numPlayers = 0;
	    this.timeout = null;
	  }
	
	  _createClass(Scorekeeper, [{
	    key: 'getNumPlayers',
	    value: function getNumPlayers() {
	      var numPlayers = document.getElementById('num-players');
	
	      return numPlayers.value;
	    }
	  }, {
	    key: 'createPlayerList',
	    value: function createPlayerList() {
	      var instructions = document.getElementById('instructions'),
	          playersList = document.getElementById('players-list'),
	          formInput = void 0;
	
	      if (!playersList || !instructions) {
	        return;
	      }
	
	      this.numPlayers = this.getNumPlayers();
	
	      instructions.innerHTML = 'Please enter a name for each player.';
	
	      for (var i = 1; i <= this.numPlayers; i++) {
	        formInput = this.createPlayerNameInput(i);
	        playersList.appendChild(formInput);
	      }
	    }
	  }, {
	    key: 'setCurrentPlayer',
	    value: function setCurrentPlayer(previous, next) {
	      // Set next player to the active player
	      previous.classList.remove('current');
	      next.classList.add('current');
	    }
	  }, {
	    key: 'createPlayerNameInput',
	    value: function createPlayerNameInput(i) {
	      var li = document.createElement('li'),
	          label = document.createElement('label'),
	          labelText = void 0,
	          input = document.createElement('input');
	
	      li.classList.add('players-list__player');
	
	      label.setAttribute('for', 'player-' + i);
	      labelText = document.createTextNode('Player ' + i + ' Name: ');
	      label.appendChild(labelText);
	
	      input.setAttribute('type', 'text');
	      input.setAttribute('id', 'player-' + i);
	      input.setAttribute('name', 'player-name[]');
	      input.classList.add('player-name');
	
	      li.appendChild(label);
	      li.appendChild(input);
	
	      return li;
	    }
	  }, {
	    key: 'initScoreUpdater',
	    value: function initScoreUpdater() {
	      var playerList = document.getElementById('players'),
	          players = void 0;
	
	      if (!playerList) {
	        return;
	      }
	
	      players = playerList.querySelectorAll('li');
	
	      this.timeout = setTimeout(function () {
	        if (players.length > 0) {
	          players[0].classList.add('current');
	        }
	
	        if (document.getElementById('submit-update')) {
	          this.scoreUpdateListener();
	          clearTimeout(this.timeout);
	        }
	      }.bind(this), 500);
	    }
	  }, {
	    key: 'scoreUpdateListener',
	    value: function scoreUpdateListener() {
	      var submit = document.getElementById('submit-update');
	
	      submit.addEventListener('click', this.updateScoreOnSubmit.bind(this), false);
	    }
	  }, {
	    key: 'updateScoreOnSubmit',
	    value: function updateScoreOnSubmit(e) {
	      e.preventDefault();
	      var scoreUpdate = document.getElementById('score-update'),
	          current = document.querySelector('.current'),
	          currentScore = current.querySelector('.score'),
	          next = current.nextElementSibling,
	          newScore = parseInt(scoreUpdate.value),
	          newSum = void 0;
	
	      if (isNaN(newScore)) {
	        newScore = 0;
	      }
	
	      newSum = newScore + parseInt(currentScore.value);
	
	      // Update score for current player
	      currentScore.value = newSum;
	      currentScore.style.color = newSum < 0 ? 'red' : 'inherit';
	
	      // Reset score updater input for next update
	      scoreUpdate.value = '';
	
	      // Set next to the first player if at the end of the list
	      if (!next) {
	        next = document.querySelectorAll('.player')[0];
	      }
	
	      this.setCurrentPlayer(current, next);
	    }
	  }, {
	    key: 'eventHandlers',
	    value: function eventHandlers() {
	      this.listenNewCurrentPlayer();
	      this.initScoreUpdater();
	    }
	
	    /**
	     * Set selected user to current user on click
	     */
	
	  }, {
	    key: 'listenNewCurrentPlayer',
	    value: function listenNewCurrentPlayer() {
	      var playerList = document.getElementById('players');
	
	      if (!playerList) {
	        return false;
	      }
	
	      playerList.addEventListener('click', function (e) {
	        var player = void 0,
	            current = void 0;
	
	        if (e.target.matches('.player')) {
	          player = e.target;
	        } else if (e.target.parentNode.classList.contains('player')) {
	          player = e.target.parentNode;
	        } else {
	          player = e.target.parentNode;
	
	          while (!player.classList.contains('player')) {
	            player = player.parentNode;
	          }
	        }
	
	        if (!player) {
	          return;
	        }
	
	        if (player.classList.contains('player') && !player.classList.contains('current')) {
	          current = document.querySelector('.current');
	          this.setCurrentPlayer(current, player);
	        }
	      }.bind(this), false);
	    }
	
	    /**
	     * Wrapper for initialization methods
	     */
	
	  }, {
	    key: 'run',
	    value: function run() {
	      this.createPlayerList();
	      this.eventHandlers();
	    }
	  }]);
	
	  return Scorekeeper;
	}();
	
	exports.default = Scorekeeper;

/***/ }
/******/ ]);
//# sourceMappingURL=scripts.js.map