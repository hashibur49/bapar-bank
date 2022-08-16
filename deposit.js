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

  depositCurrentTotal.innerText = currentDepositTotal;

  // Step3: Clear the input Field
  depositInput.value = "";
});
