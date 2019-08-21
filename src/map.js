class CityMap {
  constructor (city) {
    import(`./map/${city}.js`)
      .then(module => {
        const data = module.default
        console.log(data)
      })
  }
}

export default CityMap
