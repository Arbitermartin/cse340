const express = require("express")
const router = new express.Router()
const countryController = require("../controllers/countryController")
const utilities = require("../utilities")

// Route to deliver main countries view
router.get("/", utilities.handleErrors(countryController.buildCountriesView))

// Route to handle country search
router.post("/country/index", utilities.handleErrors(countryController.searchCountries))

module.exports = router