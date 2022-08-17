document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step 1 : get deposit amount from the user withdraw input field.
  const withdrawInput = document.getElementById("withdraw-input");
  //   console.log(withdrawInput);
  const newWithdrawAmountString = withdrawInput.value;
  //   console.log(newWithdrawAmountString);
  const newWithdrewAmount = parseFloat(newWithdrawAmountString);
  //   console.log(typeof newWithdrewAmount);

  // Step 2: Get the Current Withdraw Total
  const withdrawCurrentElement = document.getElementById("withdraw-total");
  const previousWithdrewAmountString = withdrawCurrentElement.innerText;
  const previousWithdrewAmountTotal = parseFloat(previousWithdrewAmountString);
  // Step 6 : calculate Current Total Withdrew
  const withdrawCurrentTotal = previousWithdrewAmountTotal + newWithdrewAmount;
  //set Withdrew total
  withdrawCurrentElement.innerText = withdrawCurrentTotal;

  // reduce balance for withdraw
  // Step 1 : Get the Current balance Total
  const currentBalanceELement = document.getElementById("balance-total");
  const previousBalanceAmountString = currentBalanceELement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceAmountString);
  // Step 2 : calculate Current Total Balance after withdrew
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmountString;
  //set Balance total
  currentBalanceELement.innerText = currentBalanceTotal;

  // reduce balance for withdraw

  // Step7: Clear the input Field
  withdrawInput.value = "";
});
