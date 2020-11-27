// video from class 4.2 events and event handling!! 


// DOM ELEMENTS
var expenseName = $(document).get("expenseName")
var submitBTN = $(document).get("submitBTN")
var moneyvalue = $(document).get("moneyvalue")

// Submit button event listener 
expense_list = [];
TypeOfExpenseBtn.addeventlistener("click", function(){
    if(!expenseName.value || !moneyvalue.value) return; 
    let expense = {
    title: expenseName.value,
    amount: parseFloat(moneyvalue.value),
    }
    expense_list.push(expense);
    console.log(expense_list)
})



//type of expense to show on bottom 

// expense dicription to show next to ^

// same with value

// no refresh when submit it clicked
