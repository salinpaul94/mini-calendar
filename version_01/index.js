let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");



function updateCurrentTime() {
  let currentTime = new Date();
  document.getElementById("hours").innerHTML = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();

  document.getElementById("minutes").innerHTML = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();

  document.getElementById("seconds").innerHTML = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();

  // document.getElementById("milli-seconds").innerHTML = currentTime.getMilliseconds() === 0 ? `0000` : currentTime.getMilliseconds() < 10 ? `000${currentTime.getMilliseconds()}` : currentTime.getMilliseconds() < 100 ? `00${currentTime.getMilliseconds()}` : currentTime.getMilliseconds() < 1000 ? `0${currentTime
  //   .getMilliseconds()}` : currentTime.getMilliseconds();

  document.getElementById("12-hour").innerHTML = currentTime.getHours() == 0 ? "12" : currentTime.getHours() < 12 ? (currentTime.getHours() < 10 ? `0${currentTime.getHours()}`: currentTime.getHours()) : ((currentTime.getHours() - 12) < 10 ? `0${currentTime.getHours() - 12}`: currentTime.getHours()) - 12;

  document.getElementById("12-minutes").innerHTML = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();

  document.getElementById("12-seconds").innerHTML = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();

  document.getElementById("12-AM-PM").innerHTML = currentTime.getHours() > 12 ? "PM" : "AM";
}

let today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
date.innerHTML = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();

window.addEventListener("DOMContentLoaded", setInterval(function () {
  updateCurrentTime()
}, 1000));
