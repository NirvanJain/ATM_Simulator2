let balance = 50000;

const CORRECT_PIN = "5678";
let maxAttempts = 3;
let attemptsLeft = maxAttempts;
let isLocked = false;

function login() {
    const pinInput = document.getElementById("pinInput");
    const pin = pinInput.value;
    const msg = document.getElementById("loginMsg");

    if (isLocked) {
        msg.textContent = "🔒 Account locked. Too many attempts!";
        msg.className = "msg error";
        return;
    }

    if (pin === CORRECT_PIN) {
        msg.textContent = "✅ Correct PIN. Welcome!";
        msg.className = "msg success";

        attemptsLeft = maxAttempts; // reset attempts

        setTimeout(() => {
            document.getElementById("login").classList.add("hidden");
            document.getElementById("atmMenu").classList.remove("hidden");
            msg.textContent = "";
            pinInput.value = "";
        }, 800);

    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            msg.textContent = `❌ Incorrect PIN. Attempts left: ${attemptsLeft}`;
            msg.className = "msg warning";
        } else {
            msg.textContent = "🔒 Account locked. No attempts left!";
            msg.className = "msg error";
            isLocked = true;
            pinInput.disabled = true;
        }
    }
}

function logout() {
    document.getElementById("atmMenu").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("actions").innerHTML = "";
    document.getElementById("pinInput").value = "";
}

function checkBalance() {
    document.getElementById("actions").innerHTML =
        `💰 <b>Current Balance</b><br>₹${balance.toFixed(2)}`;
}

function showWithdraw() {
    document.getElementById("actions").innerHTML = `
        <input type="number" id="withdrawAmt" placeholder="Enter amount">
        <button onclick="withdraw()">Withdraw</button>
        <p id="withMsg"></p>
    `;
}

function withdraw() {
    const amt = Number(document.getElementById("withdrawAmt").value);
    const msg = document.getElementById("withMsg");

    if (amt <= 0 || amt > balance) {
        msg.textContent = "Invalid / Insufficient Balance";
        msg.style.color = "#ff6b6b";
    } else {
        balance -= amt;
        msg.textContent = `✅ Withdrawn ₹${amt}`;
        msg.style.color = "#00ff99";
    }
}

function showDeposit() {
    document.getElementById("actions").innerHTML = `
        <input type="number" id="depositAmt" placeholder="Enter amount">
        <button onclick="deposit()">Deposit</button>
        <p id="depMsg"></p>
    `;
}

function deposit() {
    const amt = Number(document.getElementById("depositAmt").value);
    const msg = document.getElementById("depMsg");

    if (amt <= 0) {
        msg.textContent = "Invalid Amount";
        msg.style.color = "#ff6b6b";
    } else {
        balance += amt;
        msg.textContent = `✅ Deposited ₹${amt}`;
        msg.style.color = "#00ff99";
    }
}
