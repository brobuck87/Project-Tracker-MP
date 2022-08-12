var projectForm = $("#project-form")

function refreshDate() {
  var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  var timerEl = $("#timerEl")
  timerEl.text(todaysDate)
};

function refreshTimer() {
  setInterval(refreshDate, 1000)
}

function handleFormSubmit(event) {
  event.preventDefault();
  //calculate difference between and date-picker.val
  var current = moment();
  var selectedDate = moment($("#date-picker").val(), "MM/DD/YYYY");
  var untilDue = selectedDate.diff(current, 'days')
  var estimatedEarnings = untilDue * ($('#hourly-wage').val() * 8);
  var tableInfo = [$("#project-name").val(), $("#project-selector").val(), $("#hourly-wage").val(), $("#date-picker").val(), untilDue, estimatedEarnings];
  var tableRow = $('<tr>')
  
  for (let i = 0; i < tableInfo.length; i++){
     //create td
     var tableData = $('<td>')

     //set text to be current value
     tableData.text(tableInfo[i]);

     //put in tr
     tableRow.append(tableData);
     };
     var buttonTD = $('<td>')
     var deleteButton = $('<button>');
     deleteButton.attr('type', 'button') 
     deleteButton.attr('class', 'btn btn-danger delete fa fa-trash') 
     buttonTD.append(deleteButton)
     tableRow.append(buttonTD)
  $('#project-info tbody').on('click', '.delete',function(){
    $(this).closest('tr').remove();
  })
  $('#project-info tbody').append(tableRow);
  projectForm.trigger('reset');
  $('#formModal').modal('hide');
}



window.addEventListener('load', (event) => {
  refreshDate()
  refreshTimer()
  $("#date-picker").datepicker();
})

projectForm.on('submit', handleFormSubmit);
