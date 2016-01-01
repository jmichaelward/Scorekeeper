'use strict';

(function() {
    var app;

    /**
     * App constructor
     */
    function Scorekeeper() {
        this.numPlayers = 0;
        this.timeout = null;
    }

    /*------------------||
     || Page formatting ||
     ||-----------------*/
    /**
     * Make the page container fill the entirety of the window
     */
    Scorekeeper.prototype.makePageFullHeight = function() {
        var page = document.getElementById('page');

        page.style.minHeight = window.innerHeight + 'px';
    };

    /*------------------||
     || Event listeners ||
     ||-----------------*/
    /**
     * Add app event listeners
     */
    Scorekeeper.prototype.addEventListeners = function() {
        //var numPlayersButton = document.getElementById('num-players-button');
        //
        //if (!numPlayersButton) {
        //    numPlayersButton.addEventListener('click', this.createPlayerList.bind(this), false);
        //}

        this.createPlayerList();
        this.initScoreUpdater();
    };

    /*-------------------------||
     || Scorekeeping functions ||
     ||------------------------*/
    /**
     * Get the submitted value for the number of players to track
     */
    Scorekeeper.prototype.getNumPlayers = function() {
        var numPlayers = document.getElementById('num-players');

        return numPlayers.value;
    };

    /**
     * Create form inputs to enter names for the desired number of players
     */
    Scorekeeper.prototype.createPlayerList = function() {
        var instructions = document.getElementById('instructions'),
            playersList = document.getElementById('players-list'),
            formInput;

        if (!playersList || !instructions) {
            return;
        }

        this.numPlayers = this.getNumPlayers();

        instructions.innerHTML = 'Please enter a name for each player.';

        for (var i = 1; i <= this.numPlayers; i++) {
            formInput = this.createPlayerNameInput(i);
            playersList.appendChild(formInput);
        }
    };

    /**
     * Create input field for each player's name
     */
    Scorekeeper.prototype.createPlayerNameInput = function(i) {
        var li = document.createElement('li'),
            label = document.createElement('label'),
            labelText,
            input = document.createElement('input');

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
    };

    /**
     * Set first player to active and initialize scoreUpdateListener if a list of players is present
     */
    Scorekeeper.prototype.initScoreUpdater = function() {
        var playerList = document.getElementById('players'),
            players;

        if (!playerList) {
            return;
        }

        players = playerList.querySelectorAll('li');

        this.timeout = setTimeout(function() {
            if (players.length > 0) {
                players[0].classList.add('current');
            }

            if (document.getElementById('submit-update')) {
                this.scoreUpdateListener();
                clearTimeout(this.timeout);
            }
        }.bind(this), 500);
    };

    /**
     * Listen for submission of score updates
     */
    Scorekeeper.prototype.scoreUpdateListener = function() {
        var submit = document.getElementById('submit-update');

        submit.addEventListener('click', this.updateScoreOnSubmit, false);
    };

    /**
     * Update the point value for the current player, then advance to the next player
     */
    Scorekeeper.prototype.updateScoreOnSubmit = function() {
        var scoreUpdate = document.getElementById('score-update'),
            current = document.querySelector('.current'),
            currentScore = current.querySelector('.score'),
            next = current.nextElementSibling,
            newSum = parseInt(scoreUpdate.value) + parseInt(currentScore.value);

        // Update score for current player
        currentScore.value = newSum;
        currentScore.style.color = newSum < 0 ? 'red' : 'inherit';

        // Reset score updater input for next update
        scoreUpdate.value = '0';

        // Set next to the first player if at the end of the list
        if (!next) {
            next = document.querySelectorAll('.player')[0];
        }

        // Set next player to the active player
        current.classList.remove('current');
        next.classList.add('current');
    };

    /**
     * Wrapper for initialization methods
     */
    Scorekeeper.prototype.run = function() {
        this.makePageFullHeight();
        this.addEventListeners();
    };

    // Initialize
    app = new Scorekeeper;

    app.run();
}());
