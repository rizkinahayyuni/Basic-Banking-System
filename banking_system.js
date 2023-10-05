const BankAccount = require('./bank_account.js');

const myAccount = new BankAccount();

console.log('Current balance:', myAccount.balance);

myAccount.deposit(100);
myAccount.withdraw(50);

// Menunggu beberapa detik sebelum menampilkan saldo terbaru
setTimeout(() => {
    console.log('Updated balance:', myAccount.balance);
}, 4000); // Menunda eksekusi selama 4 detik untuk mensimulasikan operasi asynchronous
