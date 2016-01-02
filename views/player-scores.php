<section class="score-updater">
    <header class="section__hdr">
        <h2 class="h2 section__hd">Update Player Score</h2>
    </header>

    <label for="score-update" class="score-update__label">Add to total</label>
    <input type="number" name="score-update" id="score-update" class="score-update__input" placeholder="0" value="">
    <button id="submit-update" class="btn score-update__btn">Submit</button>
</section>

<section class="player-scores">
    <header class="section__hdr">
        <h2 class="h2 section__hd">Player Scores</h2>
    </header>
    <ul id="players">
        <?php foreach ($_SESSION['players'] as $key => $player) : ?>
            <li class="player-<?php echo $key; ?> player">
                <p class="player-name"><?php echo $player['name']; ?></p>
                <label for="player-<?php echo $key; ?>-score" id="player-<?php echo $key; ?>-score__label">
                    Score: <input id="player-<?php echo $key; ?>-score" class="score" type="text" value="0" disabled>
                </label>
            </li>
        <?php endforeach; ?>
    </ul>
</section>
