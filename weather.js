// Create a "Weather" class
class Weather {
  constructor(city) {
    this.apiKey = 'a05d18c0f4829009d27d9acd4893d1f1'
    this.city = city
    this.unit = 'F'
  }

  // Fetching weather from OpenWeatherMap API
  async getWeather() {
    let units = ''
    if (this.unit === 'F') {
      units = 'imperial'
    } else {
      units = 'metric'
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${units}&appid=${this.apiKey}`
    )
    // API returns temperature in Kelvin by default
    // Use units=imperial for Fahrenheit, units=metric for Celsius
    const responseData = await response.json()

    return responseData
  }

  // Change weather location (city , state)
  changeLocation(city) {
    this.city = city
  }

  // Change unit setting ( Fahrenheit or Celsius )
  changeUnit() {
    if (this.unit === 'F') {
      this.unit = 'C'
    } else {
      this.unit = 'F'
    }
  }
}
