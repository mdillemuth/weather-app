// Generates dynamic content
class UI {
  // HTML Components
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.temp = document.getElementById('w-temp')
    this.low = document.getElementById('w-temp-low')
    this.high = document.getElementById('w-temp-high')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
  }

  // Main function: populates HTML with content
  paint(weather) {
    this.location.textContent = weather.name
    this.desc.textContent = weather.weather[0].description
    this.temp.textContent = Math.round(weather.main.temp)
    this.low.textContent = Math.floor(weather.main.temp_min)
    this.high.textContent = Math.ceil(weather.main.temp_max)
    this.humidity.textContent = `${Math.round(weather.main.humidity)}%`
    this.feelsLike.textContent = Math.round(weather.main.feels_like)
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
  }
}
