// Initialize Weather object
const weather = new Weather('Stuart', 'FL')

// Retrieve weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather())

function getWeather() {
  weather
    .getWeather()
    .then((results) => console.log(results))
    .catch((error) => console.log(error))
}
