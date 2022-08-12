var projectForm = $("#project-form")

var timerEl = $("#timerEl")
var todaysDate = ""


function refreshDate() {
  todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  timerEl.text(todaysDate)
};

function refreshTimer() {
  setInterval(refreshDate, 1000)
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Project Name');
  var projectName = $("#project-name")
  var projectType = $("#project-selector")
  var hourlyWage = $("#hourly-wage")
  var dueDate = $("#date-picker")

  console.log(projectName.val())
  console.log(projectType.val())
  console.log(hourlyWage.val())
  console.log(dueDate.val())

  $('#myTable tr:last').after('<tr>...</tr><tr>...</tr>');
}

window.addEventListener('load', (event) => {
  refreshDate()
  refreshTimer()
  $("#date-picker").datepicker();
})

projectForm.on('submit', handleFormSubmit);
