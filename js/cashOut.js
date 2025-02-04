document.getElementById("btn-CashOut").addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutMoney = document.getElementById("CashOutAmount").value;
    let CashOutMoneyAmount = parseInt(cashOutMoney);
    // console.log(inputMoney);

    const cashOutPinNumber = document.getElementById("Cash-OutPinNumber").value;
    console.log(cashOutPinNumber);


    if (cashOutPinNumber === "7335") {
      const balanceString = document.getElementById("account-balance").innerText;
      let balance = parseInt(balanceString);
      console.log(balance, typeof balance);
    //   console.log("input money", typeof inputMoneyAmount);

    const newBalance = balance - CashOutMoneyAmount;
    console.log(newBalance);
    document.getElementById("account-balance").innerText = newBalance;


    } else {
      alert("Violence!!! Cash Out failed")
      window.location.href = "index.html"
    }
  });

  
