
document.getElementById('calculate-field').addEventListener('click', function(){
    //food
   const newFoodAmount = getInputValueByIdPulak('food-field');
    //rent
    const newRentAmount = getInputValueByIdPulak('rent-field');
    //clothes
    const newClothesAmount = getInputValueByIdPulak('clothes-field')
    //Caluculate total Expenses 
    const totalExpensesValue = newFoodAmount + newRentAmount + newClothesAmount;
    //Total Expenses value set 
    const totalExpensesId = document.getElementById('total-expenses');
    totalExpensesId.innerText = totalExpensesValue;
    //Income
    const incomeInput = getInputValueByIdPulak('income-field')
    // income (-) total expenses
    const incomeMinusExpenses = incomeInput - totalExpensesValue;
    //balnace set value
    const balnaceExpenseId = balnaceValueId('balnace-field')
    balnaceExpenseId.innerText = incomeMinusExpenses;

})