const test = require('ava')
const pakistranoCameraControl = require('../lib/pakistranoFactory')

test('Video stream integration test.', async (t) => {
  const videoStream = await pakistranoCameraControl.getVideoStream()
  t.is(videoStream.statusCode, 200)
})
