const test = require('ava')
const PakistranoCameraControl = require('../lib/index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '10.0.8.4',
  user: 'admin',
  password: 'admin'
})

test('Ensure exception on bad camera request unit test.', (t) => {
  const cameraResponse = '<<<  >>'
  const error = t.throws(() => pakistranoCameraControl._checkCameraResponse(cameraResponse))
  t.is(error.message, 'Camera response is not correct: ' + cameraResponse)
})
