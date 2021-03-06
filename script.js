//variables
var savedItem = $(".saveBtn");
//set click function on buttons and add it to local storage

//set the color of the blocks
function setColor(){
  $(".time-block").each(function(index,item){
    // var currentHourStrng = moment().format("HH");
    // var currentHourInt = parseInt(currentHourStrng);
    var currentHourInt = 10;
    var timeBlockValue = parseInt($(item).attr("data-hour"));
    console.log()
    if (currentHourInt === timeBlockValue){
      $(".time-block .textarea").addClass("present");
      console.log("present")
      console.log (timeBlockValue);
    }
    else if (currentHourInt > timeBlockValue) {
      $(".time-block .textarea").addClass("past");
      console.log("past");
      console.log (timeBlockValue);
    }
    else {
      $(".time-block .textarea").addClass("future");
      console.log("future");
      console.log (timeBlockValue);
    }
  });
};

// update the current day at the top
var todayDate = moment().format("[Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(todayDate)

// run the color check every 15 seconds
var timeCheck = window.setInterval(function(){
  setColor();
}, 15000);

setColor();
