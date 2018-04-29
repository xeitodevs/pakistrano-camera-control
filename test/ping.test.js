const test = require('ava')
const pakistranoCameraControl = require('../lib/pakistranoFactory')

test('Ping integration test.', async (t) => {
  const ms = await pakistranoCameraControl.ping()
  t.is('number', typeof ms)
  t.true(ms > 0)
})
