class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        setTimeout(() => {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposit of $${amount} successful.`);
            } else {
                console.log('Deposit amount must be greater than 0.');
            }
        }, 2000); // Menunda eksekusi selama 2 detik untuk mensimulasikan operasi asynchronous
    }

    withdraw(amount) {
        setTimeout(() => {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawal of $${amount} successful.`);
            } else if (amount <= 0) {
                console.log('Withdrawal amount must be greater than 0.');
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        }, 2000); // Menunda eksekusi selama 2 detik untuk mensimulasikan operasi asynchronous
    }
}

module.exports = BankAccount;
