'use strict'

const request = require('request-promise-native')

const UrlBuilder = require('./urlBuilder').UrlBuilder

class PakistranoCameraControl {
  constructor ({ host, user, password }) {
    this._host = host
    this._user = user
    this._password = password
  }

  async startMoveRight () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(4).toString()))
  }

  _checkCameraResponse (response) {
    if (response !== 'ok.\n') {
      throw new Error('Camera response is not correct: ' + response)
    }
  }

  _getCameraUrl (command) {
    return new UrlBuilder({
      base: `http://${this._host}`,
      path: '/decoder_control.cgi',
      params: [
        { key: 'user', value: this._user },
        { key: 'pwd', value: this._password },
        { key: 'command', value: command }
      ]
    })
  }

  async startMoveLeft () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(6).toString()))
  }

  async centerCamera () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(25).toString()))
  }

  async stopAxes () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(1).toString()))
  }

  async startMoveUp () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(0).toString()))
  }

  async startMoveDown () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(2).toString()))
  }

  async startMoveBottomRight () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(92).toString()))
  }

  async startMoveBottomLeft () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(93).toString()))
  }

  async startMoveUpLeft () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(91).toString()))
  }

  async startMoveUpRight () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(90).toString()))
  }

  async startHorizontalPatrol () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(28).toString()))
  }

  async stopHorizontalPatrol () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(29).toString()))
  }

  async startVerticalPatrol () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(26).toString()))
  }

  async stopVerticalPatrol () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(27).toString()))
  }

  async activateIrView () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(95).toString()))
  }

  async deactivateIrView () {
    this._checkCameraResponse(await request.get(this._getCameraUrl(94).toString()))
  }
}

module.exports = PakistranoCameraControl
