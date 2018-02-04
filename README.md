## Pakistrano camera control

With this library you can interact with the foscam camera device family.

### Tested models
- FI8910W

You can see the public promise based interface [here]('./lib/index.js')

### Example usage
```javascript
const PakistranoCameraControl = require('./index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '127.0.0.1',
  user: 'admin',
  password: 'admin'
})

const sleep = async (seconds) => {
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

### Authors and maintainers
@zucchinidev
@eloylp