// Create a "Weather" class
class Weather {
  constructor(city, state) {
    this.apiKey = 'a05d18c0f4829009d27d9acd4893d1f1'
    this.city = city
    this.state = state
  }

  // Fetching weather from OpenWeatherMap API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    )

    const responseData = await response.json()

    return responseData
  }

  // Change weather location (city , state)
  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}
