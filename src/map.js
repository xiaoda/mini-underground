class CityMap {
  constructor (city) {
    this.options = {city}
  }

  async init () {
    this.mapData = (await import(`./map/${this.options.city}.js`)).default
    return this.mapData
  }
}

export default CityMap
