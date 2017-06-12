class Scorekeeper {
  constructor() {
    this.numPlayers = 0;
    this.timeout    = null;
  }

  getNumPlayers() {
    let numPlayers = document.getElementById('num-players');

    return numPlayers.value;
  }

  createPlayerList() {
    let instructions = document.getElementById('instructions'),
        playersList  = document.getElementById('players-list'),
        formInput;

    if (!playersList || !instructions) {
      return;
    }

    this.numPlayers = this.getNumPlayers();

    instructions.innerHTML = 'Please enter a name for each player.';

    for (let i = 1; i <= this.numPlayers; i++) {
      formInput = this.createPlayerNameInput(i);
      playersList.appendChild(formInput);
    }
  }

  setCurrentPlayer(previous, next) {
    // Set next player to the active player
    previous.classList.remove('current');
    next.classList.add('current');
  }

  createPlayerNameInput(i) {
    let li    = document.createElement('li'),
        label = document.createElement('label'),
        labelText,
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

  initScoreUpdater() {
    let playerList = document.getElementById('players'),
        players;

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

  scoreUpdateListener() {
    let submit = document.getElementById('submit-update');

    submit.addEventListener('click', this.updateScoreOnSubmit.bind(this), false);
  }

  updateScoreOnSubmit(e) {
    e.preventDefault();
    let scoreUpdate  = document.getElementById('score-update'),
        current      = document.querySelector('.current'),
        currentScore = current.querySelector('.score'),
        next         = current.nextElementSibling,
        newScore     = parseInt(scoreUpdate.value),
        newSum;

    if (isNaN(newScore)) {
      newScore = 0;
    }

    newSum = newScore + parseInt(currentScore.value);

    // Update score for current player
    currentScore.value       = newSum;
    currentScore.style.color = newSum < 0 ? 'red' : 'inherit';

    // Reset score updater input for next update
    scoreUpdate.value = '';

    // Set next to the first player if at the end of the list
    if (!next) {
      next = document.querySelectorAll('.player')[0];
    }

    this.setCurrentPlayer(current, next);
  }

  eventHandlers() {
    this.listenNewCurrentPlayer();
    this.initScoreUpdater();
  }

  /**
   * Set selected user to current user on click
   */
  listenNewCurrentPlayer() {
    let playerList = document.getElementById('players');

    if (!playerList) {
      return false;
    }

    playerList.addEventListener('click', function (e) {
      let player,
          current;

      if (e.target.matches('.player')) {
        player = e.target;
      }
      else if (e.target.parentNode.classList.contains('player')) {
        player = e.target.parentNode;
      }
      else {
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
  run() {
    this.createPlayerList();
    this.eventHandlers();
  }
}

export default Scorekeeper;