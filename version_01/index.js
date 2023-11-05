let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let today = new Date();
date.innerHTML = today.getDate();
day.innerHTML = today.getDay();
month.innerHTML = today.getMonth();