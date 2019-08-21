import CityMap from './map.js'

class Game {
  constructor (options = {}) {
    this.options = {...options}
    this.$canvas = $(`#${options.canvasId}`)
    this.resizeCanvas()
    this.stage = new createjs.Stage(this.options.canvasId)
    this.cityMap = new CityMap('shanghai')

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
}

export default Game
