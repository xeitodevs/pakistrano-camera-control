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

test.serial('Move to right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveToRight())
})

test.serial('Move to left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveToLeft())
})

test.serial('Camera center integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.centerCamera())
})

test.serial('Stopping axes integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.stopAxes())
})
