const accounts = [
  { id: 1, owner: "Alice", balance: 500 },
  { id: 2, owner: "Bob", balance: 300 },
];

function getAccountById(id) {
  for (const account of accounts) {
    // Changed == to === for strict equality comparison.
    if (account.id === id) {
      return account;
    }
  }
}

function createAccount(newAccountId, newAccountOwner) {
  // Added check to prevent creating duplicate accounts.
  const account = getAccountById(newAccountId);
  if (account) {
    throw new Error("Account ID already exists");
  }
  // Added check for non-numeric and negative account IDs.
  if (!Number.isInteger(newAccountId) || newAccountId <= 0) {
    throw new Error("Invalid account ID: The ID must be a positive integer.");
  }
  // Added check for non-string or empty owner name.
  if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "") {
    throw new Error("Invalid owner name: The name must be a non-empty string.");
  }
  // Add the new account to the accounts array if it passes all checks.
  accounts.push({
    id: newAccountId,
    owner: newAccountOwner,
    balance: "0",
  });
}

function depositMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found");
  }

  account.balance += amount;
}

function withdrawMoney(accountId, amount) {
  const account = getAccountById(accountId);

  if (!account) {
    throw new Error("Account not found.");
  }

  if (!Number.isFinite(amount)) {
    throw new Error(
      "Invalid value for withdrawal amount: The amount must be a finite number."
    );
  }

  account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) {
  const fromAccount = getAccountById(fromAccountId);
  const toAccount = getAccountById(toAccountId);

  if (!fromAccount) {
    throw new Error("Source account not found.");
  }

  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error(
      "Invalid value for transfer amount: The amount must be a positive finite number."
    );
  }

  toAccount.balance += amount;
}

/*
Hints:

getAccountById("1"); Corrected by using === for strict equality comparison.

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
