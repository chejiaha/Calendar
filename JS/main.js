
// main function
document.addEventListener("DOMContentLoaded", function () {
    let cal = new Calendar();
    let dateParent = document.getElementById("dateParent");
    let day = document.getElementsByClassName("days");
    let header = document.getElementById("header");
    var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // display dynamic month and year
    header.innerHTML = '<div id="header">' + cal.getMonthString() + ' ' + cal.year + '</div>';

    // calling calender functions from outside main
    resize(weekArray, day);
    previousMonth(cal, dateParent);
    currentMonth(cal, dateParent);
    nextMonth(cal, dateParent);
});

// displays days in current month div
function currentMonth(cal, item) {
    for (var i = 1; i <= cal.getDaysOfMonth(); i++) {
        // displays current month on first day of month
        if (i == 1) {
            item.innerHTML += '<div class="dateItem">' + cal.getMonthString() + " " + i + '</div>';
        } else if (i == cal.date) {
            // highlights current day using 'currentDay' div
            item.innerHTML += '<div class="currentDay">' + i + '</div>';
        } else {
            // prints dates normally
            item.innerHTML += '<div class="dateItem">' + i + '</div>';
        }
    }
}

// dislpays last days of previous month for the week (if applicaple)
// i = Math.abs(1 - cal.getFirstDayOfMonth() + 1); - to find out how many days in the first week of the month belong to
// the day of the previous month. Sunday(1) subtract first day of the month (1-based) so add (+1). Take an absolute value
// because the number of divs cannot be negative.
function previousMonth(cal, item) {
    for (var i = Math.abs(1 - cal.getFirstDayOfMonth() + 1); i >= 0; i--) {
        // appends string of previous month on first day of week of current month
        if (i == Math.abs(1 - cal.getFirstDayOfMonth() + 1)) {
            item.innerHTML += '<div class="datesBefore">' + cal.getPreviousMonthString() + " "
                + (cal.getLastDateOfPreviousMonth() - i) + '</div>';
            // prints days of previous month
        } else {
            item.innerHTML += '<div class="datesBefore">' + (cal.getLastDateOfPreviousMonth() - i) + '</div>';
        }
    }
}

// displays days of next month for the week (if applicable)
// subtract the last day of week from 7(days) to find out how many dates are the next month's. 
function nextMonth(cal, item) {
    for (var i = 1; i <= (7 - cal.getLastDayOfMonth()); i++) {
        // prints next month string on first day of next month
        if (i == 1) {
            item.innerHTML += '<div class="datesAfter">' + cal.getNextMonthString() + " " + i + '</div>';
            // appends first day of next month on last week as string
        } else {
            item.innerHTML += '<div class="datesAfter">' + i + '</div>';
        }
    }
}

// resize function to shrink text when window size hits a limit of 800
// passes two parameters (array of text and div class)
function resize(arr, day) {
    window.addEventListener('resize', function () {
        if (window.innerWidth < 800) {
            // Only display 3 letters when window size is less than 800.
            for (let i = 0; i < arr.length; i++) {
                day[i].innerHTML = arr[i].substring(0, 3);
            }
            // display full size text if window size is greater than 800
        } else {
            for (let i = 0; i < arr.length; i++) {
                day[i].innerHTML = arr[i];
            }
        }
    })
}
