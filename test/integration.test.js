'use strict'

const test = require('ava')
const PakistranoCameraControl = require('../lib/index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '10.0.8.4',
  user: 'admin',
  password: 'admin'
})

test.serial('Move to right.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveToRight())
})

test.serial('Stopping axes.', async (t) => {
  await t.notThrows(pakistranoCameraControl.stopAxes())
})
