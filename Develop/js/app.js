// adding today's date 
var currentD = document.getElementById("currentDay");

moment().format("LL");

currentD.innerHTML = moment().format("LL");

var time1 = document.getElementById("time");

//get the container element
var container = document.getElementById('container');
//an array of standard business hours 
const hours = ["8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM"];

hours.forEach(hour => {
    $('#container').append(`
        <div class = "row mt-3">
            <div class = "col-md-1 hour">${hour}</div>
            <textarea id = "text1" class="col-md-10 time-block"/></textarea>
            <button class="col-md-1 saveBtn ">
                <i class=" far fa-save"></i>
            </button>
        </div>
    `)
});

// local storage
var time1 = document.getElementById('text1');
var button1 = document.getElementsByClassName('saveBtn');

var storedInput = localStorage.getItem('task')


if (time1){
    time1.textContent = storedInput;
};

time1.addEventListener('input',letter => {
    time1.textContent = letter.target.value;
});


var saveToLocalStorage = () => {
    localStorage.setItem('task', time1.textContent)

};

for (i=0; i<button1.length; i++) {
    button1[i].addEventListener('click', function(){
        var value = $(this).siblings(".time-block").val()
        localStorage.setItem('task', value)
    });
};

//Current time depending on your time zone 
var currentTime = parseInt(moment().format("LT"));
var MilitaryT = currentTime + 12;
var hoursM = ["8","9","10","11","12","13","14","15","16","17"]
console.log(MilitaryT)

//adding the colors depending of the time of the day 
for (i=0; i<hoursM.length; i++){
    console.log(parseInt(hoursM[i]))
    if (currentTime > parseInt(hoursM[i])){
        $('textarea').addClass('future');
    }else if (currentTime === parseInt(hoursM[i])){
        $('textarea').addClass('present');
    }else{
        $('textarea').addClass('past');
    };
};