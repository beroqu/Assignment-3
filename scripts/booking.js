/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costFullDay = 35;
let costHalfDay = 20;
let totalFullDay = 0;
let totalHalfDay = 0;
let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");
let isFullDaySelected = true;
let clearButton = document.getElementById("clear-button");
let days = document.querySelectorAll(".day-selector li");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

days.forEach(function (button) {
    button.addEventListener("click", function () {

        if (!button.classList.contains("clicked")) {
            button.classList.add("clicked");

            if (isFullDaySelected) {
                totalFullDay++;

            }
            else {
                totalHalfDay++;
            }

        }
        else {
            button.classList.remove("clicked");

            if (isFullDaySelected) {
                totalFullDay--;

            }

            else {
                totalHalfDay--;
            }
        }

        calculateCost();

    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function () {
    days.forEach(function (button) {
      button.classList.remove("clicked");

    });

    totalFullDay = 0;
    totalHalfDay = 0;
    calculateCost();

});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function () {
    if (!halfButton.classList.contains("clicked")) {
        isFullDaySelected = false;
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
        calculateCost();
    }
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function () {
    if (!fullButton.classList.contains("clicked")) {
        isFullDaySelected = true;
        halfButton.classList.remove("clicked");
        fullButton.classList.add("clicked");
        calculateCost();
    }
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    let total = 0;
    if (isFullDaySelected === true) {
        total = totalFullDay * costFullDay;

    }

    else if (isFullDaySelected === false) {
        total = totalHalfDay * costHalfDay;

    }

    document.getElementById("calculated-cost").textContent = total;
}