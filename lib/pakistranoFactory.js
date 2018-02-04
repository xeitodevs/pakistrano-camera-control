const PakistranoCameraControl = require('./index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: process.env.CAMERA_HOST || '127.0.0.1',
  user: process.env.CAMERA_USER || 'admin',
  password: process.env.CAMERA_PASSWORD || 'admin'
})

module.exports = pakistranoCameraControl
