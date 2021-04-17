// Generates dynamic content
class UI {
  // HTML Components
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.temp = document.getElementById('w-temp')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
  }

  // Main function: populates HTML with content
  paint(weather) {
    this.location.textContent = weather.name
    this.desc.textContent = weather.weather[0].description
    this.temp.innerHTML = this.showTempText(weather.main.temp)
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
    this.humidity.textContent = weather.main.humidity
    this.feelsLike.textContent = weather.main.feels_like
  }

  // Returns rounded down temperature in Celsius
  showTempInCelsius(temp) {
    return Math.round(temp - 32 * (5 / 9))
  }
  // Returns rounded down temperature in Fahrenheit
  showTempInFahrenheit(temp) {
    return Math.round(temp)
  }
  // Returns temperature as string (ex. "83°F (65°C)")
  showTempText(temp) {
    return `${this.showTempInFahrenheit(temp)}&#176;F (${this.showTempInCelsius(
      temp
    )}&#176;C)`
  }
}
