class Calendar {
    constructor() {
        // member variables
        this.time = new Date(Date.now()); //initialize the current date
        this.year = this.time.getFullYear(); // 4 digit value
        this.month = this.time.getMonth() + 1; // 1 based
        this.date = this.time.getDate(); // 1-31 days
        this.day = this.time.getDay(); // 1 based, 1 -> Sunday 
    }

    // returns this month as string
    getMonthString() {
        switch (this.month) {
            case 1: return "January";
            case 2: return "Feburary";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    // returns today's day as string
    getDayString() {
        switch (this.day) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
        }
    }

    getDaysOfMonth() {
        // returns number of days in current month
        // day 0 shows last day of previous month
        //this.month is actually the next month
        let date = new Date(this.year, this.month, 0);
        return date.getDate();
    }

    getFirstDayOfMonth() {
        // returns first day of current month
        // month is 1-based so subtract by 1 to get current month, eg. May is 4
        // this.month-1 is this month
        let date = new Date(this.year, this.month - 1, 1);
        return date.getDay() + 1; // Date is 0 based, +1 to return current day
    }

    getLastDayOfMonth() {
        // returns last day of current month
        let date = new Date(this.year, this.month, 0);
        return date.getDay() + 1; // Date is 0 based, +1 to return current day
    }

    getLastDateOfPreviousMonth() {
        // returns last of of previous month
        // this.month -1 to get current month
        // day 0 to get day before 1st day of current month (last day of previous month)
        let date = new Date(this.year, this.month - 1, 0);
        return date.getDate(); // Date is 0 based, +1 to return current day
    }

    // returns next month as string
    getNextMonthString() {
        switch (this.month + 1) {
            case 1: return "January";
            case 2: return "Feburary";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    // returns previous month as string
    getPreviousMonthString() {
        switch (this.month - 1) {
            case 1: return "January";
            case 2: return "Feburary";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }
}
