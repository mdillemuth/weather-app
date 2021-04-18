// Generates dynamic content
class UI {
  // HTML Components
  constructor() {
    this.location = $('#w-location')
    this.desc = $('#w-desc')
    this.temp = $('#w-temp')
    this.low = $('#w-temp-low')
    this.high = $('#w-temp-high')
    this.details = $('#w-details')
    this.icon = $('#w-icon')
    this.humidity = $('#w-humidity')
    this.feelsLike = $('#w-feels-like')
    this.time = $('#w-time')
    this.unit = 'F'
  }

  // Main function: populates HTML with content
  paint(weather) {
    this.location.text(weather.name)
    this.desc.text(weather.weather[0].description)
    this.temp.text(`${Math.round(weather.main.temp)} ${this.unit}`)
    this.low.text(`${Math.floor(weather.main.temp_min)} ${this.unit}`)
    this.high.text(`${Math.ceil(weather.main.temp_max)} ${this.unit}`)
    this.humidity.text(`${Math.round(weather.main.humidity)}%`)
    this.feelsLike.text(`${Math.round(weather.main.feels_like)} ${this.unit}`)
    this.icon.attr(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
    )
    this.time.text(this.getTime())
  }

  // Change unit setting ( Fahrenheit or Celsius )
  changeUnit() {
    if (this.unit === 'F') {
      this.unit = 'C'
    } else {
      this.unit = 'F'
    }
  }

  getTime() {
    const d = new Date()
    return d
  }
}
