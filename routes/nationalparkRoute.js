const express = require("express")
const router = new express.Router()
const parkController = require("../controllers/nationalparkController")
const utilities = require("../utilities")

// Route to deliver main parks view
router.get("/", utilities.handleErrors(parkController.buildParksView))

// Route to get parks by region
router.get("/region/:region", utilities.handleErrors(parkController.getParksByRegion))

module.exports = router