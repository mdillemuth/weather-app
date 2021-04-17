// Init storage object
const storage = new Storage()
// Get stored location data
const weatherLocation = storage.getLocationData()
// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)
// Initialize ui object
const ui = new UI()

// Fetch weather data when page loads
document.addEventListener('DOMContentLoaded', getWeather)

// Change location
$('#w-change-btn').click(function () {
  // Select form input values
  const city = $('#city').val()

  // Update state of weather class
  weather.changeLocation(city)

  // Refresh UI with new data
  getWeather()

  // Close the modal with jQuery
  $('#locModal').modal('hide')
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
