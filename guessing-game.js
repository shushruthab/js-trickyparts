function guessingGame() {
    let number = Math.floor(Math.random() * 100);
    let guesses = 0;
    let won = false;
    return function guess(n) {
        if (won) {
            return "The game is over, you already won!";
        }
        guesses++;
        if (n === number) {
            won = true;
            const guess = guesses === 1 ? " guess." : " guesses.";
            return "You win! You found " + n + " in " + guesses + guess;
        } else if (n < number) {
            return n + " is too low!";
        } else {
            return n + " is too high!";
        }
    }
}


module.exports = { guessingGame };
