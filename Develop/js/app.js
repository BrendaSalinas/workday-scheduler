// adding today's date 
var currentD = document.getElementById("currentDay");

moment().format("LL");

currentD.innerHTML = moment().format("LL");

var time1 = document.getElementById("time");

//get the container element
var container = document.getElementById('container');
//an array of hours 
const hours = ["9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM"];

hours.forEach(hour => {
    $('#container').append(`
        <div class = "row mt-2">
            <div class = "col-md-1 hour">${hour}</div>
            <textarea class="col-md-10 future time-block"/></textarea>
            <span class="col-md-1 saveBtn ">
                <i class=" far fa-save"></i>
            </span>
        </div>
    `)
});



