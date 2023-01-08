/**
 * Returns a string indicating whether the given year is a leap year or not.
 * 
 * A year is a leap year if it is divisible by 4, unless it is also divisible by 100 but not by 400.
 * 
 * @param {number} year - The year to check.
 * @return {string} - "Leap year." if the year is a leap year, "Not leap year." otherwise.
 */


function isLeap(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        return "Leap year."
    } else {
        return "Not leap year."
    }
}