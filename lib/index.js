'use strict'

const request = require('request-promise-native')

const UrlBuilder = require('./urlBuilder').UrlBuilder

class PakistranoCameraControl {
  constructor ({ host, user, password }) {
    this._host = host
    this._user = user
    this._password = password
  }

  async startMoveToRight () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(4).toString()))
  }
  async stopAxes () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(1).toString()))
  }

  _checkCameraResponse (response) {
    if (response !== 'ok.\n') {
      throw new Error('Camera response is not correct: ' + response)
    }
  }

  _getUrlCommand (command) {
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
}

module.exports = PakistranoCameraControl
