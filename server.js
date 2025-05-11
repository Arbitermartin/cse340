/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
/* ***********************
 * Routes
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

app.use(static)

app.use(express.static('public'));


// index route
// app.get("/", function(req, res){
//   res.render("index", {title: "Home"})
// })
app.get("/", function(req, res) {
  res.render("index", {
    title: "Home",
    imagePath: "/images/site/own_today.png", // Define and pass imagePath
    imagePath1: "/images/upgrades/flux-cap.png",
    imagePath2: "/images/upgrades/flame.jpg",
    imagePath3: "/images/upgrades/bumper_sticker.jpg",
    imagePath4: "/images/upgrades/hub-cap.jpg"
  })
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
