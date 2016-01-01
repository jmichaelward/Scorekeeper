<h2>Player Scores</h2>
<ul id="players">
    <?php foreach ($_SESSION['players'] as $key => $player) : ?>
        <li class="player-<?php echo $key; ?> player">
            <p class="player-name"><?php echo $player['name']; ?></p>
            <label for="player-<?php echo $key; ?>-score">
                Score: <input id="player-<?php echo $key; ?>-score" class="score" type="text" value="0" disabled>
            </label>
        </li>
    <?php endforeach; ?>
</ul>

<h2> Update Current Player's Score</h2>
<label for="score-update">Add to total</label>
<input type="number" name="score-update" id="score-update" value="0">
<button id="submit-update">Submit</button>
