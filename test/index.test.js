const test = require('ava')
const pakistranoCameraControl = require('../lib/pakistranoFactory')

test('Ensure exception on bad camera request unit test.', (t) => {
  const cameraResponse = '<<<  >>'
  const error = t.throws(() => pakistranoCameraControl._checkCameraResponse(cameraResponse))
  t.is(error.message, 'Camera response is not correct: ' + cameraResponse)
})
