# Debugging Exercise

Hello, future software developer! In this exercise, you will practice debugging. 🐛

As a systems engineer 🧑‍💻 in the Rich Bank 🏦, you know:

- 📋 Each account has the ID (positive integer), the owner (non-empty string), and the balance (non-negative number).
- 🧐 Account holders can view their accounts using their ID (See: `getAccountById`).
- 🥳 Customers can create a new account with an ID and their name with 0 balance (See: `createAccount`).
- 💸 Account holders can deposit money to their accounts with their ID if the amount to be deposited is greater than 0, of course! (See: `depositMoney`).
- 💰 Account holders can withdraw money from their accounts with their ID if the amount to be withdrawn is greater than 0, of course! (See: `withdrawMoney`).
- 🛫 Account holders can transfer their money to another account holder's account using IDs if the amount to be transferred is greater than 0, of course! (See: `transferMoney`).

The starter code is full of bugs. Your task is fixing the bugs using the knowledge above.

💡 Hints:

- At the end of the `rich-bank.js` file, you will find function calls, each representing a hint of a bug.
- You might be fixing an equality check, adding code logic, or throwing an error where missing.
