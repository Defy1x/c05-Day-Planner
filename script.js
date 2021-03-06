var todayDate = moment().format("[Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(todayDate)

//runs on page load
setColor();

//runs first on page load
$(document).ready(function(){
  $('.time-block').each(function(){
      var id = $(this).attr('data-hour');
      var value = localStorage.getItem(id);
      $(this).val(value);
      console.log(value);
  });
});

//save user input to local storage
$('.saveBtn').on('click', function(){
  $('.time-block').each(function(){
      var id = $(this).attr('id');
      var value = $(this).val();
      localStorage.setItem(id, value);
  });
});

//clears the local storage
$('#clearBtn').on('click', function(){
  $('.time-block').each(function(){
      $('.time-block .textarea').val('');
      var id = $(this).attr("id");
      var value = $(this).val();
      localStorage.setItem(id, value);
  });
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
