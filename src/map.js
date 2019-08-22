class CityMap {
  constructor (city) {
    this.options = {city}
  }

  async init () {
    this.mapData = (await import(`./map/${this.options.city}.js`)).default
    this.mapData.origin = this.calculateOrigin(this.mapData.boundary)
    this.mapData.aspectRatio = this.calculateAspectRatio(this.mapData.boundary)
    return this.mapData
  }

  calculateOrigin (boundary) {
    return [
      (boundary.north + boundary.south) / 2,
      (boundary.west + boundary.east) / 2
    ]
  }

  calculateAspectRatio (boundary) {
    return Math.abs(
      (boundary.north - boundary.south) /
      (boundary.west - boundary.east)
    )
  }
}

export default CityMap
