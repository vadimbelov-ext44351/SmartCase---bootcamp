//Days between two dates
let firstDate = new Date(2024,11,01);
let secondDate = new Date(2024,11,07);

function calcDayDifference(firstDate, secondDate){
    return Math.abs((firstDate - secondDate)/(1000*60*60*24));
}

function dateToString(dateInput){
    const year = dateInput.getFullYear();
    const month = dateInput.getMonth();
    const date = dateInput.getDate();

    return `${year}.${date}.${month}`
}

let betweenDays = calcDayDifference(firstDate,secondDate);
firstDate = dateToString(firstDate);
secondDate = dateToString(secondDate);

console.log(`There is ${betweenDays} days different between ${firstDate} and ${secondDate}!`);

//Get last day
function gatDaysInMonth(year, month){
return new Date(year, month + 1, 0);
}

function getDayString(date){
const weekdays = new Array(7);
weekdays[0]="Sunday";
weekdays[1]="Monday";
weekdays[2]="Tuesday";
weekdays[3]="Wednesday";
weekdays[4]="Thursday";
weekdays[5]="Friday";
weekdays[6]="Saturday";

return weekdays[date.getDay()];
}

let novemberDays = gatDaysInMonth(2024,11);
let februaryDays = gatDaysInMonth(2024,1);

console.log('Last day of November is',getDayString(novemberDays));
console.log('Last day of February is',getDayString(februaryDays));