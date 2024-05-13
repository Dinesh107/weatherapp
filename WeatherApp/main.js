
// import "./style.css"
// import { getWeather } from "./weather"
// import { ICON_MAP } from "./iconMap"

// navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

// function positionSuccess({ coords }) {
//   getWeather(
//     coords.latitude,
//     coords.longitude,
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   )
//     .then(renderWeather)
//     .catch(e => {
//       console.error(e)
//       alert("Error getting weather.")
//     })
// }

// function positionError() {
//   alert(
//     "There was an error getting your location. Please allow us to use your location and refresh the page."
//   )
// }

// function renderWeather({ current, daily, hourly }) {
//   renderCurrentWeather(current)
//   renderDailyWeather(daily)
//   renderHourlyWeather(hourly)
//   document.body.classList.remove("blurred")
// }

// function setValue(selector, value, { parent = document } = {}) {
//   parent.querySelector(`[data-${selector}]`).textContent = value
// }

// function getIconUrl(iconCode) {
//   return `icons/${ICON_MAP.get(iconCode)}.svg`
// }

// const currentIcon = document.querySelector("[data-current-icon]")
// function renderCurrentWeather(current) {
//   currentIcon.src = getIconUrl(current.iconCode)
//   setValue("current-temp", current.currentTemp)
//   setValue("current-high", current.highTemp)
//   setValue("current-low", current.lowTemp)
//   setValue("current-fl-high", current.highFeelsLike)
//   setValue("current-fl-low", current.lowFeelsLike)
//   setValue("current-wind", current.windSpeed)
//   setValue("current-precip", current.precip)
// }

// const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" })
// const dailySection = document.querySelector("[data-day-section]")
// const dayCardTemplate = document.getElementById("day-card-template")
// function renderDailyWeather(daily) {
//   dailySection.innerHTML = ""
//   daily.forEach(day => {
//     const element = dayCardTemplate.content.cloneNode(true)
//     setValue("temp", day.maxTemp, { parent: element })
//     setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: element })
//     element.querySelector("[data-icon]").src = getIconUrl(day.iconCode)
//     dailySection.append(element)
//   })
// }

// const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: "numeric" })
// const hourlySection = document.querySelector("[data-hour-section]")
// const hourRowTemplate = document.getElementById("hour-row-template")
// function renderHourlyWeather(hourly) {
//   hourlySection.innerHTML = ""
//   hourly.forEach(hour => {
//     const element = hourRowTemplate.content.cloneNode(true)
//     setValue("temp", hour.temp, { parent: element })
//     setValue("fl-temp", hour.feelsLike, { parent: element })
//     setValue("wind", hour.windSpeed, { parent: element })
//     setValue("precip", hour.precip, { parent: element })
//     setValue("day", DAY_FORMATTER.format(hour.timestamp), { parent: element })
//     setValue("time", HOUR_FORMATTER.format(hour.timestamp), { parent: element })
//     element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode)
//     hourlySection.append(element)
//   })
// }
///////////////////////////////////////////////////////////////////////////////////////////////////






// // DataStructures and Algorithms 

// // Big O Notation 

// function addUpto(n) {

//   let total = 0;

//   for(let i = 0; i <= n; i++) {

//        total = total + i;

//   }

//   return total;

// }

// console.log(addUpto(2));

// function charCount(str) {

//   var result = {};

//   for(var i = 0; i < str.length; i++) {
     
//      var char = str[i];

//     if(result[char] > 0) {

//        result[char]++;

//     } else {

//         result[char] = 1;

//     }

//   //  console.log(result);

//   }
   
//   return result;

// }



// console.log(charCount("Your pin number is 1234"));

// console.log(charCount("Welcome Students"));





function same(arr1, arr2) {
   // length is eqaual its false
   if(arr1.length !== arr2.length) {
      return false;
   }

   // loop through arr1
   for(let i = 0; i < arr1.length; i++) {
    //                     arr2.(indexOf(arr1[0] ** 2))
    //   
        console.log("array 1:-", arr1);
        console.log("array 2 before splice:-", arr2);
        console.log("io:- ", arr2.indexOf(arr1[i]));
     
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        
        console.log("CI:- ", correctIndex);
        if(correctIndex === -1) {
            return false;
        }
       arr2.splice(correctIndex, 1)

       console.log("array 2 after splice:-", arr2);

   }
   return true;
}

console.log(same([1, 2], [4, 1]));