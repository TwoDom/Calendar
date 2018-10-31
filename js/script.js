
/*Set actual year*/
var thisDate = new Date();
var thisYear = thisDate.getFullYear();
document.getElementById("initYear").value = thisYear;

/*Change year*/
function modifyYear(val){
  var actualYear = document.getElementById("initYear").value;
  var newYear = parseInt(actualYear,10) + val;

  document.getElementById("initYear").value = newYear;
  return newYear;
}

/*Show month details*/
function myFunction(event) {
    var month = event.target;
    var activeMonth = parseInt(month.id);
    var activeYear = parseInt(document.getElementById("initYear").value);

    document.getElementById(month.id).classList.add("active");
    // document.querySelector("ul").classList.remove("hide");

    function getDaysInMonth(month, year) {
      var calendar = document.createElement("span");
      // document.getElementById(month.id).appendChild(calendar);
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));

            date.setDate(date.getDate() + 1);
        }
      console.log(days);
      return days;
    }

    getDaysInMonth(activeMonth, activeYear);
}
