// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var todaysDate;
var tasks = [];
var currentTime = moment().format("h");

// to use later to creat colors for each section THEN create for loop to cycle through each function
var workDaySection = document.querySelectorAll("textarea");
var workDaySectionArr = Array.from(workDaySection);

// for each loop to get through each function
// workDaySectionArr.forEach(function () {
//   var workHour = ;
// });

// console.log(workDaySectionArr);
var currentDay = function () {
  todaysDate = moment().format("MMMM Do YYYY");

  $("#currentDay").text(todaysDate);
};

// add data attr to each time section
// create click function the get the values of each text area make sure to also get the time data attr
$(".save-task").on("click", function () {
  console.log("a button was clicked");

  var taskArea = $(this).parent(".row").find("textarea");
  var taskText = taskArea.val().trim();
  var taskTime = taskArea.attr("data-time");

  console.log(taskTime, taskText);

  localStorage.setItem(taskTime, taskText);
});

// look up what trigger method does and event.tartget
$(".work-day-section").on("click", "textarea", function () {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});
// localStorage.setItem("taskArea", tasks));
// save to local storage
// get from local storage

currentDay();
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
