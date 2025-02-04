document
  .getElementById("btn-addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = document.getElementById("inputAddMoney").value;
    let inputMoneyAmount = parseInt(inputMoney);
    // console.log(inputMoney);

    const inputPinNumber = document.getElementById("pinNumber").value;
    console.log(inputPinNumber);

    // get Pin
    const pin = document.getElementById("pinNumber").value;

    if (pin === "7335") {
      const balanceString =
        document.getElementById("account-balance").innerText;
      let balance = parseInt(balanceString);
      console.log(balance, typeof balance);
    //   console.log("input money", typeof inputMoneyAmount);

    const newBalance = balance + inputMoneyAmount;
    console.log(newBalance);
    document.getElementById("account-balance").innerText = newBalance;


    } else {
      console.log("Failed to add money due to wrong password");
    }
  });
