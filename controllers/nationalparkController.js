
const parkModel = require("../models/nationalpark-model")
const utilities = require("../utilities")

const parkCont = {}

/* ***************************
 * Deliver Parks Main View
 * ************************** */
parkCont.buildParksView = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    const regions = await parkModel.getRegions()
    console.log("Rendering parks view with regions:", regions)
    res.render("parks/index", {
      title: "National Parks of Tanzania",
      nav,
      errors: null,
      messages: req.flash(),
      regions,
      parks: [],
      selectedRegion: null
    })
  } catch (error) {
    console.error("Error in buildParksView:", error.message, error.stack)
    next(error)
  }
}

/* ***************************
 * Get Parks by Region
 * ************************** */
parkCont.getParksByRegion = async function (req, res, next) {
  try {
    const region = req.params.region
    let nav = await utilities.getNav()
    console.log("Fetching parks for region:", region)
    if (!region || typeof region !== "string") {
      req.flash("notice", "Invalid region selected.")
      return res.redirect("/parks")
    }
    const parks = await parkModel.getParksByRegion(region)
    const regions = await parkModel.getRegions()
    if (!parks.length) {
      req.flash("notice", `No national parks found for ${region}.`)
      return res.redirect("/parks")
    }
    res.render("parks/index", {
      title: `National Parks in ${region}`,
      nav,
      errors: null,
      messages: req.flash(),
      regions,
      parks,
      selectedRegion: region
    })
  } catch (error) {
    console.error("Error in getParksByRegion:", error.message, error.stack)
    req.flash("notice", "An error occurred while fetching parks.")
    res.redirect("/parks")
  }
}

module.exports = parkCont