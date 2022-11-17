//Los Angeles
function showLosAngelesTime() {
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  if (losAngelesDateElement) {
    let losAngelesCurrentDate = moment().format("MMMM Do YYYY");
    losAngelesDateElement.innerHTML = losAngelesCurrentDate;

    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    let losAngelesCurrentTime = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
    losAngelesTimeElement.innerHTML = losAngelesCurrentTime;
  }
}

showLosAngelesTime(); //so that it shows some text on the page when it's loading, otherwise it would be empty
setInterval(showLosAngelesTime, 1000);

//Sydney
function showSydneyTime() {
  let sydneyDateElement = document.querySelector("#sydney .date");
  if (sydneyDateElement) {
    let sydneyCurrentDate = moment().format("MMMM Do YYYY");
    sydneyDateElement.innerHTML = sydneyCurrentDate;

    let sydneyTimeElement = document.querySelector("#sydney .time");
    let sydneyCurrentTime = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneyCurrentTime;
  }
}

showSydneyTime(); //so that it shows some text on the page when it's loading, otherwise it would be empty
setInterval(showSydneyTime, 1000);

//Multiple locations
function showTimeInSelectedCity(event) {
  let selectedCityTimeZone = event.target.value;
  let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
  let selectedCityData = moment().tz(selectedCityTimeZone);
  let selectedCityElement = document.querySelector("#cities");
  selectedCityElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${selectedCityData.format("MMMM Do YYYY")}</div>
    </div>
    <div>
      <div class="time">${selectedCityData.format(
        "h:mm:ss"
      )} <small>${selectedCityData.format("A")}</small></div>
    </div>
  </div>`;
}

let selectCitiesElement = document.querySelector("#city");
selectCitiesElement.addEventListener("change", showTimeInSelectedCity);
