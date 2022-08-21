document.getElementById('save-button-field').addEventListener('click', function(){
    //save button field click
    const incomeInput = getInputValueByIdPulak('income-field');
    //save input field %
    const saveInput = getInputValueByIdPulak('save-input-field');
    //calculate saving amount from total income
    const totalSaveingAmount = incomeInput * saveInput / 100;
    //saving amount set
    const savingAmount = document.getElementById('save-amount-field');
    savingAmount.innerText = totalSaveingAmount;
    //remaining balnace set
    const remainingValue = document.getElementById('balnace-field').innerText;
    const totalRemainigValueString = remainingValue - savingAmount.innerText;
    const remainingAmount =  document.getElementById('remaining-text-value');
    remainingAmount.innerText = totalRemainigValueString;
})