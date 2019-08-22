import CityMap from './map.js'

class Game {
  constructor (options = {}) {
    this.options = {
      ...options
    }
  }

  async init () {
    this.cityMap = new CityMap('shanghai')
    this.cityMapData = await this.cityMap.init()
    this.initCityMap()

    $(window).resize(_ => {
      this.initCityMap()
    })
  }

  _transformX (x) {
    return this.canvasWidth * Math.abs(
      (x - this.cityMapData.boundary.west) /
      (this.cityMapData.boundary.west - this.cityMapData.boundary.east)
    )
  }

  _transformY (y) {
    return this.canvasHeight * Math.abs(
      (y - this.cityMapData.boundary.north) /
      (this.cityMapData.boundary.north - this.cityMapData.boundary.south)
    )
  }

  initCityMap () {
    const screenWidth = $(window).width()
    const screenHeight = $(window).height()
    const screenAspectRatio = screenHeight / screenWidth
    if (this.cityMapData.aspectRatio > screenAspectRatio) {
      this.canvasHeight = screenHeight
      this.canvasWidth = this.canvasHeight * this.cityMapData.aspectRatio ** -1
    } else {
      this.canvasWidth = screenWidth
      this.canvasHeight = this.canvasWidth * this.cityMapData.aspectRatio
    }
    this.$canvas = $(`#${this.options.canvasId}`)
    this.$canvas.attr({
      width: this.canvasWidth,
      height: this.canvasHeight
    })
    this.stage = new createjs.Stage(this.options.canvasId)

    const cityArea = new createjs.Shape()
    cityArea.x = cityArea.y = 0
    cityArea.graphics
      .beginFill('white')
      .drawRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.stage.addChild(cityArea)

    this.cityMapData.rivers.forEach(riverData => {
      const river = new createjs.Shape()
      river.graphics
        .setStrokeStyle(riverData.width, 'round')
        .beginStroke('#a3dafd')
      riverData.path.forEach((path, index) => {
        const x = this._transformX(path[1])
        const y = this._transformY(path[0])
        index ? river.graphics.lineTo(x, y) : river.graphics.moveTo(x, y)
      })
      river.x = river.y = 0
      this.stage.addChild(river)
    })
    this.stage.update()
  }
}

export default Game
