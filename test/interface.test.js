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

/// Movements
test.serial('Move to right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveRight())
})

test.serial('Move to left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveLeft())
})

test.serial('Move to up integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUp())
})

test.serial('Move to down integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveDown())
})

test.serial('Move to bottom right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveBottomRight())
})

test.serial('Move to bottom left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveBottomLeft())
})

test.serial('Move to upper left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUpLeft())
})

test.serial('Move to upper right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUpRight())
})

test.serial('Stopping axes integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.stopAxes())
})

/// Behaviours
test.serial('Camera center integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.centerCamera())
})
