// const utilities = require("../utilities/")
// const baseController = {}

// baseController.buildHome = async function(req, res){
//   const nav = await utilities.getNav()
//   res.render("index", {title: "Home", nav})
// }

// module.exports = baseController
const utilities = require("../utilities/");

async function buildHome(req, res, next) {
  try {
    let nav = await utilities.getNav(); // Fetch navigation data
    res.render("index", {
      title: "Home",
      imagePath: "/images/site/own_today.png", // Main DeLorean image
      imagePath1: "/images/upgrades/flux-cap.png", // Flux capacitor
      imagePath2: "/images/upgrades/flame.jpg", // Flame decals
      imagePath3: "/images/upgrades/bumper_sticker.jpg", // Bumper stickers
      imagePath4: "/images/upgrades/hub-cap.jpg", // Hub caps
      nav
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { buildHome };

