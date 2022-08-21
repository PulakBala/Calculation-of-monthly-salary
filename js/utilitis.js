function getInputValueByIdPulak(inputFieldId) {
    const foodInput = document.getElementById(inputFieldId);
    const foodInputString = foodInput.value ;
    const foodExpenses = parseInt(foodInputString);
    return foodExpenses;
}
function balnaceValueId(textField){
    const balnaceText = document.getElementById(textField);
    return balnaceText;
}