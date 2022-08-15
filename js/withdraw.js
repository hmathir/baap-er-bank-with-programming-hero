document.getElementById('withdraw-btn').addEventListener('click', function(){
    // Getting New Withdraw Value
    const NewWithdrawField = document.getElementById('withdraw-input');
    const NewWithdrawFieldValueString = NewWithdrawField.value;
    const NewWithdrawFieldValue = parseFloat(NewWithdrawFieldValueString);
    NewWithdrawField.value = '';
    if(isNaN(NewWithdrawFieldValue) || NewWithdrawFieldValue < 0){
        alert('Input Valid Amount.');
        return;
    }

    // Update "Withdraw Element Value"
    const previousWithdrawAmountElement = document.getElementById('withdraw-amount');
    const previousWithdrawAmountValueString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmountValue = parseFloat(previousWithdrawAmountValueString);

    // Update "Balance Element Value"
    const previousBalanceAmountElement = document.getElementById('balance-amount');
    const previousBalanceAmountValueString = previousBalanceAmountElement.innerText;
    const previousBalanceAmountValue = parseFloat(previousBalanceAmountValueString);

    if(NewWithdrawFieldValue > previousBalanceAmountValue){
        alert('Funds Shortage');
        return;
    }

    const totalWithdrawAmount = previousWithdrawAmountValue + NewWithdrawFieldValue;
    previousWithdrawAmountElement.innerText = totalWithdrawAmount;

    const totalBalance = previousBalanceAmountValue - NewWithdrawFieldValue;
    previousBalanceAmountElement.innerText = totalBalance;

     // Clear Field After Submit Value using Empty String.

})