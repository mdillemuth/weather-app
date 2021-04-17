// Initialize classes
const weather = new Weather('Tampa', 'FL')
const ui = new UI()

// Fetch data on DOM load
document.addEventListener('DOMContentLoaded', getWeather())

// Fetches data and passes to UI components
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results)
      console.log(results)
    })
    .catch((error) => console.log(error))
}
