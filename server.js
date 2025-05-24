/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
// const express = require("express")
// const expressLayouts = require("express-ejs-layouts")
// const env = require("dotenv").config()
// const app = express()
// const static = require("./routes/static")
// const baseController = require("./controllers/baseController")
// const inventoryRoute = require("./routes/inventoryRoute")
// const Util = require("./utilities/"); // Import Util module to bring utilities/index.js into scope
// const utilities = require("./utilities/")


/* ***********************
 * Routes
 *************************/

// app.set("view engine", "ejs")
// app.use(expressLayouts)
// app.set("layout", "./layouts/layout") // not at views root

// app.use(static)

// app.use(express.static('public'));

// // Inventory routes
// app.use("/inv", inventoryRoute)

// index route
// app.get("/",baseController.buildHome)

// app.get("/", function(req, res){
//   res.render("index", {title: "Home"})
// })
// utilities.handleErrors(baseController.buildHome)

// Index route
// app.get("/", utilities.handleErrors(baseController.buildHome))

// File Not Found Route - must be last route in list
// app.use(async (req, res, next) => {
//   next({status: 404, message: 'Sorry, we appear to have lost that page.'})
// })

// app.get("/", function(req, res) {
//   res.render("index", {
//     title: "Home",
//     imagePath: "/images/site/own_today.png", // Define and pass imagePath
//     imagePath1: "/images/upgrades/flux-cap.png",
//     imagePath2: "/images/upgrades/flame.jpg",
//     imagePath3: "/images/upgrades/bumper_sticker.jpg",
//     imagePath4: "/images/upgrades/hub-cap.jpg"
//   })
// })
// app.get('/', (req, res) => {
//   res.render('index', {
//     title: "Home",
//     imagePath: '/images/site/own_today.png', // Ensure this file exists in public/images/
//   });
// });

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
// app.use(async (err, req, res, next) => {
//   let nav = await Util.getNav()
//   console.error(`Error at: "${req.originalUrl}": ${err.message}`)
//   res.render("errors/error", {
//     title: err.status || 'Server Error',
//     message: err.message,
//     nav
//   })
// })
// /* ***********************
// * Express Error Handler
// * Place after all other middleware
// *************************/
// app.use(async (err, req, res, next) => {
//   let nav = await utilities.getNav()
//   console.error(`Error at: "${req.originalUrl}": ${err.message}`)
//   if(err.status == 404){ message = err.message} else {message = 'Oh no! There was a crash. Maybe try a different route?'}
//   res.render("errors/error", {
//     title: err.status || 'Server Error',
//     message,
//     nav
//   })
// })

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
// const port = process.env.PORT
// const host = process.env.HOST

// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`)
// })

/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");
const baseController = require("./controllers/baseController");
const inventoryRoute = require("./routes/inventoryRoute");
const utilities = require("./utilities/");

/* ***********************
 * Routes
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

app.use(express.static('public'));
app.use(static);

// Inventory routes
app.use("/inv", inventoryRoute);

// Index route
app.get("/", utilities.handleErrors(baseController.buildHome));

// File Not Found Route - must be last route in list
app.use(async (req, res, next) => {
  next({ status: 404, message: 'Sorry, we appear to have lost that page.' });
});

// Express Error Handler
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav();
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
  const message = err.status == 404 ? err.message : 'Oh no! There was a crash. Maybe try a different route?';
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  });
});

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});