const month = document.querySelector(".month p");
const day_w = document.querySelector("#day_w");
const day_m = document.querySelector("#day_m");
const year = document.querySelector("#year");

const date = new Date();

year.textContent = date.getFullYear();
day_m.textContent = date.getDate();

let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendnesday",
    "Thursday",
    "Friday",
    "Saturday"
]


let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]



month.textContent = Month[date.getMonth()];
day_w.textContent = day[date.getDay()]