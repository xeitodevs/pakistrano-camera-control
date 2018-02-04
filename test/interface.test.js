'use strict'

const test = require('ava')
const PakistranoCameraControl = require('../lib/index')
const pakistranoCameraControl = new PakistranoCameraControl({
  host: '10.0.8.4',
  user: 'admin',
  password: 'admin'
})

const sleep = async (seconds) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

test.afterEach(async () => {
  await pakistranoCameraControl.stopAxes()
  await pakistranoCameraControl.centerCamera()
  // Time to center the camera from the farthest position from
  // center
  await sleep(50)
})

/// Movements
test.serial('Move to right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveRight())
  await sleep(2)
})

test.serial('Move to left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveLeft())
  await sleep(2)
})

test.serial('Move to up integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUp())
  await sleep(2)
})

test.serial('Move to down integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveDown())
  await sleep(2)
})

test.serial('Move to bottom right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveBottomRight())
  await sleep(2)
})

test.serial('Move to bottom left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveBottomLeft())
  await sleep(2)
})

test.serial('Move to upper left integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUpLeft())
  await sleep(2)
})

test.serial('Move to upper right integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startMoveUpRight())
  await sleep(2)
})

test.serial('Stopping axes integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.stopAxes())
  await sleep(2)
})

/// Behaviours

test.serial('Horizontal Patrol integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startHorizontalPatrol())
  await sleep(6)
  await t.notThrows(pakistranoCameraControl.stopHorizontalPatrol())
})

test.serial('Vertical Patrol integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.startVerticalPatrol())
  await sleep(6)
  await t.notThrows(pakistranoCameraControl.stopVerticalPatrol())
})

/// Ir view

test.serial('Activate ir view integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.activateIrView())
})

test.serial('De - activate ir view integration test.', async (t) => {
  await t.notThrows(pakistranoCameraControl.deactivateIrView())
})
