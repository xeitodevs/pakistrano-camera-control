'use strict'

const request = require('request-promise-native')
const http = require('http')

const UrlBuilder = require('./urlBuilder').UrlBuilder

class PakistranoCameraControl {
  constructor ({ host, user, password }) {
    this._host = host
    this._user = user
    this._password = password
  }

  async startMoveRight () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(4).toString()))
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

  async startMoveLeft () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(6).toString()))
  }

  async centerCamera () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(25).toString()))
  }

  async stopAxes () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(1).toString()))
  }

  async startMoveUp () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(0).toString()))
  }

  async startMoveDown () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(2).toString()))
  }

  async startMoveBottomRight () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(92).toString()))
  }

  async startMoveBottomLeft () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(93).toString()))
  }

  async startMoveUpLeft () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(91).toString()))
  }

  async startMoveUpRight () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(90).toString()))
  }

  async startHorizontalPatrol () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(28).toString()))
  }

  async stopHorizontalPatrol () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(29).toString()))
  }

  async startVerticalPatrol () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(26).toString()))
  }

  async stopVerticalPatrol () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(27).toString()))
  }

  async activateIrView () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(95).toString()))
  }

  async deactivateIrView () {
    this._checkCameraResponse(await request.get(this._getUrlCommand(94).toString()))
  }

  async ping () {
    const before = new Date().getMilliseconds()
    await this.getSnapshot()
    const after = new Date().getMilliseconds()
    return after - before
  }

  getVideoStream () {
    return new Promise((resolve) => {
      const url = this._getUrlMedia('/videostream.cgi').url
      const httpRequest = http.request(url, (res) => {
        res.on('end', () => { throw new Error('Camera ended transmission.') })
        res.on('error', (err) => { throw new Error(`Camera data retrieve error: ${err}`) })
        resolve(res)
      })
      httpRequest.write('')
      httpRequest.end()
    })
  }

  async getSnapshot () {
    return new Promise((resolve) => {
      const url = this._getUrlMedia('/snapshot.cgi').url
      const buffers = []
      const httpRequest = http.request(url, (res) => {
        res.on('data', (data) => {
          buffers.push(data)
        })
        res.on('end', () => {
          resolve(Buffer.concat(buffers))
        })
        res.on('error', (err) => { throw new Error(`Camera data retrieve error: ${err}`) })
      })
      httpRequest.write('')
      httpRequest.end()
    })
  }

  _getUrlMedia (path) {
    return new UrlBuilder({
      base: `http://${this._host}`,
      path: path,
      params: [
        { key: 'user', value: this._user },
        { key: 'pwd', value: this._password }
      ]
    })
  }
}

module.exports = PakistranoCameraControl
