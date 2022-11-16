//Los Angeles
function showLosAngelesTime() {
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesCurrentDate = moment().format("MMMM Do YYYY");
  losAngelesDateElement.innerHTML = losAngelesCurrentDate;

  let losAngelesTimeElement = document.querySelector("#los-angeles .time");
  let losAngelesCurrentTime = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  losAngelesTimeElement.innerHTML = losAngelesCurrentTime;
}

showLosAngelesTime(); //so that it shows some text on the page when it's loading, otherwise it would be empty
setInterval(showLosAngelesTime, 1000);

//Sydney
function showSydneyTime() {
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyCurrentDate = moment().format("MMMM Do YYYY");
  sydneyDateElement.innerHTML = sydneyCurrentDate;

  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyCurrentTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
  sydneyTimeElement.innerHTML = sydneyCurrentTime;
}

showSydneyTime(); //so that it shows some text on the page when it's loading, otherwise it would be empty
setInterval(showSydneyTime, 1000);
