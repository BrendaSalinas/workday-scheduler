// adding today's date 
var currentD = document.getElementById("currentDay");

moment().format("LL");

currentD.innerHTML = moment().format("LL");