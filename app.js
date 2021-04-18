// Init storage object
const storage = new Storage()
// Get stored location data
const weatherLocation = storage.getLocationData()
// Initialize weather object
const weather = new Weather(weatherLocation.city)
// Initialize ui object
const ui = new UI()

// Fetch weather data when page loads
document.addEventListener('DOMContentLoaded', getWeather)

// Change location
$('#w-change-btn').click(function () {
  const city = $('#city').val() // form input values
  weather.changeLocation(city) // update weather object state
  getWeather() // fetch weather data
  $('#locModal').modal('hide') // close the modal
})

// Change units (Fahrenheit => Celsius)
$('#w-change-unit-btn').click(() => {
  weather.changeUnit() // update unit in weather object state
  ui.changeUnit() // update unit in ui object state
  getWeather() // fetch weather data
})

// Fetches data and passes to UI components
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results)
    })
    .catch((error) => console.log(error))
}
