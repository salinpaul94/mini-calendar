let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let currentTime = new Date()

function updateCurrentTime() {
  document.getElementById("hours").innerHTML = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
  document.getElementById("minutes").innerHTML = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
  document.getElementById("seconds").innerHTML = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
}

let today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
date.innerHTML = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();

window.addEventListener("DOMContentLoaded", setInterval(updateCurrentTime(), 1000));