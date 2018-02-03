'use strict'

const test = require('ava')
const PakistranoCameraControl = require('../lib/index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '10.0.8.4',
  user: 'admin',
  password: 'admin'
})

test.afterEach(async () => {
  await pakistranoCameraControl.stopAxes()
})

test.serial('Move to right.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveToRight())
})

test.serial('Move to left.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveToLeft())
})

test.serial('Camera center.', async (t) => {
  await t.notThrows(pakistranoCameraControl.centerCamera())
})

test.serial('Stopping axes.', async (t) => {
  await t.notThrows(pakistranoCameraControl.stopAxes())
})
