## Pakistrano camera control

With this library you can interact with the foscam camera device family.

### Tested models
- FI8910W

You can see the public promise based interface [here](lib/index.js)

### Example usage
```javascript
const PakistranoCameraControl = require('./index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin'
})

const sleep = (seconds) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

/// Camera move
(async () => {
    await pakistranoCameraControl.startMoveLeft()
    await sleep(0.5)
    await pakistranoCameraControl.stopAxes()
})()

/// Camera video stream
(async () => {
    const videoStream = await pakistranoCameraControl.getVideoStream()
    videoStream.pipe(process.stdout)
})()
```

### How to run tests
To run all tests you must
```bash
# run all tests (you must have a camera available on your network).
# Defaults are admin:admin@localhost
CAMERA_HOST=192.168.1.4 CAMERA_USER=admin CAMERA_PASSWORD=admin npm test

# run unit tests
npm run unit-test


# run intergation tests (you must have a camera available on your network)
CAMERA_HOST=192.168.1.4 CAMERA_USER=admin CAMERA_PASSWORD=admin npm test

```

### Authors and maintainers
@zucchinidev
@eloylp