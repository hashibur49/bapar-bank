document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step 1 : get deposit amount from the deposit input FileSystemDirectoryHandle.
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountString = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //   console.log(typeof newDeposit);

  // Step 2: Get the Current Deposit Total
  const depositCurrentTotal = document.getElementById("deposit-total");
  const previousDepositAmountString = depositCurrentTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);
  //   console.log(typeof previousDepositAmount);
  const currentDepositTotal = previousDepositAmount + newDepositAmount;
  //set deposit total
  depositCurrentTotal.innerText = currentDepositTotal;

  // step: 5 Get ballance current total
  const ballanceTotalElement = document.getElementById("balance-total");
  const previousBalanceAmountString = ballanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceAmountString);

  // Step 6 : calculate Current Total Bllance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set balance total
  ballanceTotalElement.innerText = currentBalanceTotal;
  // Step7: Clear the input Field
  depositInput.value = "";
});
