'use strict'

const test = require('ava')
const UrlBuilder = require('../lib/urlBuilder').UrlBuilder

test('Asserting url builder without params unit test.', (t) => {
  const baseCases = [
    'http://www.test.com',
    'http://test.com'
  ]

  baseCases.forEach((base) => {
    const path = '/section'
    const params = [
      { key: 'user', value: 'test_user' },
      { key: 'passwd', value: 'abc1234' }
    ]
    const urlBuilder = new UrlBuilder({ base, path, params })
    const expectedUrl = `${base}${path}?user=test_user&passwd=abc1234`
    t.is(expectedUrl, urlBuilder.toString())
  })
})

test('Expecting exception on bad base url.', (t) => {
  const error = t.throws(() => new UrlBuilder({ base: 'test.com', path: '/' }))
  t.is(error.message, 'Invalid URL: test.com')
})
