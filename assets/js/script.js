var timerEl = $("#timerEl")
var todaysDate = ""


function refreshDate(){
    todaysDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    timerEl.text(todaysDate)
};

function refreshTimer(){
        setInterval(refreshDate, 1000)
      }

window.addEventListener('load', (event) => {
    refreshDate()
    refreshTimer()
  })
