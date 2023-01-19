<h1 align="center">
  JS Closures
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-yellow">
</p>

## Description

This is an algorithmic exercise to cement my understanding of closures in Javascript. Closure is the ability of inner functions to remember variables defined in outer functions, long after the outer function has returned. It is usefor encpsulating logic and creating private variables. 

## Key Functions

- Create Account
    Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

    checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
    deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
    withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
    changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
    ```javascript
    let account = createAccount("1234", 100);

    account.checkBalance("oops");
    // "Invalid PIN."

    account.deposit("1234", 250);
    // "Succesfully deposited $250. Current balance: $350."

    account.withdraw("1234" 300);
    // "Succesfully withdrew $300. Current balance: $50."

    account.withdraw("1234" 10);
    // "Withdrawal amount exceeds account balance. Transaction cancelled."

    account.changePin("1234", "5678");
    // "PIN successfully changed!"
    ```
- Curried Add
    Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.
    ```javascript
    let firstAdder = curriedAdd();
    let secondAdder = curriedAdd();
    let thirdAdder = curriedAdd();

    firstAdder(); // 0
    secondAdder(1)(2)(); // 3
    thirdAdder(2)(8)(5)(1)(); // 16
    ```
- Guessing Game
    Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

    Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

    After a correct guess, the game ends.
    ```javascript
    let game = guessingGame();
    game(50); // "50 is too low!"
    game(90); // "90 is too high!"
    game(70); // "You win! You found 70 in 3 guesses."
    game(70); // "The game is over, you already won!"
    ```

## Getting Started

Install dependencies:

```javascript
npm install
```
Test functions:

```javascript
jest
```