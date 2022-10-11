let x = 0;
let array = [];

let form = document.getElementById("form");
let netSalaryInput = document.getElementById("netSalary");
let updateDbBtn = document.getElementById("updateDB");

netSalaryInput.addEventListener("keyup", (event) => {
  let bal = calculateBalance();
  document.getElementById("balance").innerHTML = bal;
  calculateBalance();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let exps = document.getElementById("expense");
  let expAmt = document.getElementById("amount");
  addExpense(exps, expAmt);
  calculateBalance();
});

updateDbBtn.addEventListener("click", async (event) => {
  let billData = JSON.stringify(array);
  let net = document.getElementById("netSalary").value;
  let total = document.getElementById("balance").innerHTML;
  let data = {
    bill: billData,
    net,
    total,
  };
  event.preventDefault();

  await fetch("http://127.0.0.1:6500/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("Request complete! response:", res);
    })
});

function addExpense(expense, amount) {
  if (expense.value !== "" && amount.value !== "") {
    array[x] = { exp: expense.value, val: amount.value };
    x++;
    expense.value = "";
    amount.value = "";
    displayAll();
  } else {
    console.log("null");
  }
}

function displayAll() {
  let itemDiv = document.getElementById("items");
  let newItem = document.createElement("div");

  array.forEach((data) => {
    let x = `<p>${data.exp}</p>` + `<p>Kshs <span>${data.val}</span></p>`;
    newItem.innerHTML = x;
    itemDiv.appendChild(newItem);
  });
}

function calculateBalance() {
  let income = netSalaryInput.value;

  let balance = 0;
  let totalExp = 0;

  array.forEach((data) => {
    totalExp += parseInt(data.val);
  });

  balance = income - totalExp;
  document.getElementById("balance").innerHTML = balance;
  return balance;
}
