# Pakistrano camera control

With this library you can interact with the foscam camera device family.

## Camera server (before you continue reading)
If you are thinking on developing a front webservice for this driver, it almost done at [here](https://github.com/xeitodevs/pakistrano-camera-server)

### Tested models
- FI8910W

You can see the public promise based interface [here](lib/index.js)

### Install via npm
```bash
npm install pakistrano-camera-control
```
### Example usage
```javascript
const PakistranoCameraControl = require('pakistrano-camera-control')
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

# run integration tests (you must have a camera available on your network)
CAMERA_HOST=192.168.1.4 CAMERA_USER=admin CAMERA_PASSWORD=admin npm test

```

### Motivation - Who is Pakistrano ?
Pakistrano is a smart thief. He's always awaiting for best moment to steal
shoes and/or socks. The target is to catch him while hes doing the best that he knows.

![image](https://user-images.githubusercontent.com/5852187/35884345-b1d27022-0b8a-11e8-8ea1-c644f416bbd1.png)

### Authors and maintainers
@zucchinidev
@eloylp