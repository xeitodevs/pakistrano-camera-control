const test = require('ava')
const pakistranoCameraControl = require('../lib/pakistranoFactory')

test('Snapshot integration test.', async (t) => {
  const snapshot = await pakistranoCameraControl.getSnapshot()
  t.true(snapshot.byteLength > 10000)
})
