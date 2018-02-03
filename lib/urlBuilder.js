'use strict'
const { URL } = require('url')

class UrlBuilder {
  constructor ({ base, path, params }) {
    try {
      if (typeof path === 'undefined' || path === null) {
        path = '/'
      }
      this.url = new URL(path, base)
      if (typeof params === 'undefined' || params === null) {
        params = []
      }
      for (const { key, value } of params) {
        this.url.searchParams.set(key, value)
      }
    } catch ({ message }) {
      throw new TypeError(message)
    }
  }

  toString () {
    return this.url.toString()
  }
}

module.exports = (params) => {
  return new UrlBuilder({ ...params })
}
module.exports.UrlBuilder = UrlBuilder
