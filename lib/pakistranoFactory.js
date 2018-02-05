const PakistranoCameraControl = require('./index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: process.env.CAMERA_HOST || 'localhost',
  user: process.env.CAMERA_USER || 'admin',
  password: process.env.CAMERA_PASSWORD || 'admin'
})

module.exports = pakistranoCameraControl
