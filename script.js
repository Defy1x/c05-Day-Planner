var todayDate = moment().format("[Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(todayDate)

//runs on page load
setColor();

//runs first on page load
$(document).ready(function(){
  $(".textarea").each(function(){
      var id = $(this).attr("id");
      var value = localStorage.getItem(id);
      $(this).val(value);
  });
});

//save user click handler to savebtns
$(".saveBtn").on("click", handleSave)

//run the function when save button is hit
function handleSave(event){
  var value = $(this).siblings(".textarea").val();
  var key = $(this).siblings(".textarea").attr("id");
  localStorage.setItem(key, value);
}

//clears the local storage and reset value
$("#clearBtn").on("click", function(){
  $(".textarea").val("");
  localStorage.clear();
});

//set the color of the blocks
function setColor(){
  $(".time-block").each(function(index,item){
    var currentHourStrng = moment().format("HH");
    var currentHourInt = parseInt(currentHourStrng);
    var timeBlockValue = parseInt($(item).attr("data-hour"));

    if (currentHourInt === timeBlockValue){
      $(this).children("textarea").addClass("present");
    }
    else if (currentHourInt > timeBlockValue) {
      $(this).children("textarea").addClass("past");
    }
    else {
      $(this).children("textarea").addClass("future");
    }
  });
};

// run the color check every 15 seconds
var timeCheck = window.setInterval(function(){
  setColor();
}, 15000);
