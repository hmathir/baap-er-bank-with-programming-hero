document.getElementById('deposit-btn').addEventListener('click', function(){
    // Getting New Deposit Value From Field.
    const NewDepositFeild = document.getElementById('deposit-input');
    const NewDepositValueString = NewDepositFeild.value;
    const NewDepositValue = parseFloat(NewDepositValueString);

    // Update "Deposit Element Value"
    const previousDepositAmountElement = document.getElementById('deposit-amount');
    const previousDepositAmountValueString = previousDepositAmountElement.innerText;
    const previousDepositAmountValue = parseFloat(previousDepositAmountValueString);
    const totalDeposit = previousDepositAmountValue + NewDepositValue;
    previousDepositAmountElement.innerText = totalDeposit

    // Update "Balance Element Value"
    const previousBalanceAmountElement = document.getElementById('balance-amount');
    const previousBalanceAmountValueString = previousBalanceAmountElement.innerText;
    const previousBalanceAmountValue = parseFloat(previousBalanceAmountValueString);
    const totalBalance = previousBalanceAmountValue + NewDepositValue;
    previousBalanceAmountElement.innerText = totalBalance;
    
    // Clear Field After Submit Value using Empty String.
    NewDepositFeild.value = '';

})