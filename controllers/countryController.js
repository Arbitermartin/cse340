const countryModel = require("../models/country-model")
const utilities = require("../utilities")

const countryCont = {}

/* ***************************
 * Deliver Main Countries View
 * ************************** */
countryCont.buildCountriesView = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    const countries = await countryModel.getAllCountries()
    console.log("Rendering countries view with:", countries.length, "countries")
    res.render("country/index", {
      title: "West African Countries",
      nav,
      errors: null,
      messages: req.flash(),
      countries,
      searchTerm: ""
    })
  } catch (error) {
    console.error("Error in buildCountriesView:", error.message, error.stack)
    next(error)
  }
}

/* ***************************
 * Handle Country Search
 * ************************** */
countryCont.searchCountries = async function (req, res, next) {
  try {
    const { searchTerm } = req.body
    let nav = await utilities.getNav()
    console.log("Searching for:", searchTerm)

    // Validate search term
    if (!searchTerm || typeof searchTerm !== "string" || searchTerm.trim().length === 0) {
      req.flash("notice", "Please enter a valid search term.")
      return res.redirect("/country")
    }

    const countries = await countryModel.searchCountries(searchTerm.trim())
    if (!countries.length) {
      req.flash("notice", `No countries found matching "${searchTerm}".`)
    }

    res.render("country/index", {
      title: `Search Results for "${searchTerm}"`,
      nav,
      errors: null,
      messages: req.flash(),
      countries,
      searchTerm: searchTerm.trim()
    })
  } catch (error) {
    console.error("Error in searchCountries:", error.message, error.stack)
    req.flash("notice", "An error occurred while searching.")
    res.redirect("/country")
  }
}

module.exports = countryCont