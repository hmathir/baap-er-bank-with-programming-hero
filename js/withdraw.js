document.getElementById('withdraw-btn').addEventListener('click', function(){
    // Getting New Withdraw Value
    const NewWithdrawField = document.getElementById('withdraw-input');
    const NewWithdrawFieldValueString = NewWithdrawField.value;
    const NewWithdrawFieldValue = parseFloat(NewWithdrawFieldValueString);

    // Update "Withdraw Element Value"
    const previousWithdrawAmountElement = document.getElementById('withdraw-amount');
    const previousWithdrawAmountValueString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmountValue = parseFloat(previousWithdrawAmountValueString);
    const totalWithdrawAmount = previousWithdrawAmountValue + NewWithdrawFieldValue;
    previousWithdrawAmountElement.innerText = totalWithdrawAmount;

    // Update "Balance Element Value"
    const previousBalanceAmountElement = document.getElementById('balance-amount');
    const previousBalanceAmountValueString = previousBalanceAmountElement.innerText;
    const previousBalanceAmountValue = parseFloat(previousBalanceAmountValueString);
    const totalBalance = previousBalanceAmountValue - totalWithdrawAmount;
    previousBalanceAmountElement.innerText = totalBalance;

     // Clear Field After Submit Value using Empty String.
    NewWithdrawField.value = '';
})