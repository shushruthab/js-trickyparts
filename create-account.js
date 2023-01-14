function createAccount(pin, initialDeposit = 0) {
    let balance = initialDeposit;
    return {
        checkBalance: function(inputPin) {
            if (inputPin === pin) {
                return "$" + balance;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit: function(inputPin, amount) {
            if (inputPin === pin) {
                balance += amount;
                return "Succesfully deposited $" + amount + ". Current balance: $" + balance + ".";
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw: function(inputPin, amount) {
            if (inputPin === pin) {
                if (balance >= amount) {
                    balance -= amount;
                    return "Succesfully withdrew $" + amount + ". Current balance: $" + balance + ".";
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            } else {
                return "Invalid PIN.";
            }
        },
        changePin: function(inputPin, newPin) {
            if (inputPin === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";
            }
        }
    }
}


module.exports = { createAccount };
