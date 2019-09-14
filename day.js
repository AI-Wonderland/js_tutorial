//Returns a greeting for the given date.
function greeting(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
let dayName = daysOfTheWeek[date.getDay()];
return `Hello World! Happy ${dayName}!`
}
