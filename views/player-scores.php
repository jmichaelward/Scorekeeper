<h2>Player Scores</h2>
<ul id="players"><?php
    foreach ($_SESSION['players'] as $player) { ?>
        <li class="<?php echo $player['position']; ?> player"><p class="player-name"><?php echo $player['name']; ?></p>
            <p>Current score: <input type="text" value="<?php echo $player['score']; ?>" class="score" disabled="disabled"></p></li><?php
    } ?>
</ul>

<h2>Update Current Player's Score</h2>
<label for="score-update">Add to total</label>
<input type="number" name="score-update" id="score-update" value="0">
<button id="submit-update">Submit</button>
