<?php if (!isset($_SESSION['num-players'])) : ?>
    <p id="instructions">Welcome to Scorekeeper. How many players?</p>

    <form action="" method="post" id="player-form">
        <ul>
            <li id="num-players-item">
                <label for="num-players">Number of Players: </label>
                <input type="number" name="num-players" id="num-players" min="1">
            </li>
            <li>
                <button id="num-players-button" class="btn">Click to start</button>
            </li>
        </ul>
    </form>
<?php else : ?>
    <p id="instructions">Please enter the names of each player.</p>

    <form action="" method="post" id="player-list-form">
        <input type="hidden" name="num-players" id="num-players" value="<?php echo $_SESSION['num-players']; ?>"/>
        <ul id="players-list"></ul>

        <input type="submit" id="start-game" class="btn" value="Start Game"/>
    </form>
<?php endif; ?>
