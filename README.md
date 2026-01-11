# 🏧 ATM Simulator Project
## 📌 Overview

A **console-based ATM simulation program** written in **C++** that mimics real-world ATM operations such as balance enquiry, cash withdrawal, deposit, PIN change, and mini statement generation.

This project is ideal for **beginners** to understand menu-driven programs and transaction handling in C++.

---
Deployment:- https://atm-simulator2.vercel.app/ 
---
## ✨ Features

- 🔐 Secure **PIN Login System** (3 attempts limit)
- 💰 **Check Balance**
- 💸 **Withdraw Cash**
  - Checks sufficient balance  
  - Allows only ₹100 denominations  
  - Enforces daily withdrawal limit
- ➕ **Deposit Cash**
- 🔁 **Change PIN** (with confirmation)
- 🧾 **Mini Statement** (last 5 transactions)
- ⏱ **Date & Time Stamps** for each transaction
- 🚪 Safe session exit with timestamp

---

## 🛠 How It Works

1. User logs in using a **4-digit PIN**
2. After successful authentication, the **main menu** appears
3. User selects a banking operation
4. Balance and transaction history are updated
5. Mini statement shows recent transactions
6. Exit ends the session with date & time

---

## 💻 Technologies Used

| Component | Details |
|---------|--------|
| Language | C++ |
| Standard | C++17 |
| Programming Style | Procedural |
| Libraries | iostream, string, ctime |

---

## 👤 Author

**Nirvan** 

---

## 📌 Notes

- 🔐 Default PIN: `5678`
- 💵 Initial Balance: ₹50000
- 📆 Daily Withdrawal Limit: ₹15000
- 🧾 Maximum Transactions Stored: 50
- 🗃 Transactions are stored temporarily using arrays

---

## 🚀 Future Enhancements

- 💾 Persistent storage using **file handling**
- 👥 Support for **multiple users**
- 🆕 Account creation and deletion
- 🧪 Better input validation
- 🖥 GUI version (Qt / future scope)
- 🧱 Object-Oriented refactor

---

## 🎓 Learning Outcomes

- Menu-driven programming
- Conditional logic and loops
- Transaction history management
- Date & time handling in C++
- Real-world simulation logic

---

⭐ *A beginner-friendly C++ project for mastering fundamentals.*
