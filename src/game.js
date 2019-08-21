import CityMap from './map.js'

class Game {
  constructor (options = {}) {
    this.options = {
      ...options
    }
  }

  async init () {
    const {canvasId} = this.options
    this.$canvas = $(`#${canvasId}`)
    this.resizeCanvas()
    this.stage = new createjs.Stage(canvasId)
    this.cityMap = new CityMap('shanghai')
    this.cityMapData = await this.cityMap.init()
    this.drawCityMap()

    $(window).resize(_ => {
      this.resizeCanvas()
      this.stage.update()
    })
  }

  resizeCanvas () {
    this.$canvas.attr({
      width: $(window).width(),
      height: $(window).height()
    })
  }

  drawCityMap () {
    console.log(this.cityMapData)
  }
}

export default Game
