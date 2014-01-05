// Global app variable
var Scorekeeper = {};

Scorekeeper.numPlayers = 0,
Scorekeeper.timeout;

jQuery().ready(function() {
    makePageFullHeight();
    setEventListeners();
});

/*-----------------||
|| Page formatting ||
||-----------------*/
function makePageFullHeight() {
    jQuery('#page').css('minHeight',jQuery(window).innerHeight());
}

/*-----------------||
 || Event listeners ||
 ||-----------------*/
function setEventListeners() {
    jQuery('#num-players-button').click(function() {
        Scorekeeper.numPlayers = getNumPlayers();
        createPlayerList();
    });

    activateScoreUpdater();
}

/*------------------------||
|| Scorekeeping functions ||
||------------------------*/
function getNumPlayers() {
    return jQuery('#num-players').val();
}

function createPlayerList() {
    var playerForm = jQuery('#player-form');

    playerForm.find('li').remove();
    jQuery('#instructions').html('Enter a name for each player');
    playerForm.attr('action','index.php');

    // @todo Make this an AJAX call to create and retrieve the form from a PHP file
    for (var i = 1; i <= Scorekeeper.numPlayers; i++) {
        var formInput = '<li><label for="player-' + i + '">Player ' + i + ' Name: </label>' +
                        '<input type="text" id="player-' + i + '" name="player-' + i + '" class="player-name"></li>';
        playerForm.append(formInput);
    }
    playerForm.append('<li><input type="submit" id="start-game" value="Start Game"></li>');
}

function activateScoreUpdater() {
    Scorekeeper.timeout = setTimeout(function() {
        if (jQuery('#players').length > 0) {
            jQuery('.player:first').addClass('current');
        }

        if (jQuery('#submit-update').length > 0) {
            scoreUpdater();
            clearTimeout(Scorekeeper.timeout);
        }
    },500);
}

// @todo Split this function into separate functions that handles scores, highlights sub-zero scores, and advances turns
function scoreUpdater() {
    jQuery('#submit-update').click(function() {
        var scoreUpdate = jQuery('#score-update'),
            current = jQuery('.current'),
            currentScore = current.find('.score'),
            next = current.next('.player'),
            newPoints = parseInt(scoreUpdate.val()),
            currentPoints = parseInt(currentScore.val()),
            newSum = newPoints + currentPoints;

        if (newSum < 0) {
            currentScore.css('color','red');
        } else {
            currentScore.css('color','inherit');
        }

        // Update current score and reset score updater field
        currentScore.val(newSum);
        scoreUpdate.val('0');

        // Advance to the next player
        if (next.length == 0) {
            next = jQuery('.player:first-child');
        }
        current.removeClass('current');
        next.addClass('current');
    });
}