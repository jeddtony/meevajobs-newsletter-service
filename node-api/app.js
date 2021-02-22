const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8083"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to newsletter subscription service." });
});

require("./app/routes/user.route")(app);

app.use((error, req, res, next) => {
    if (error !== null) {
      return res.status(400).json({
        "message": "Invalid JSON payload passed.",
        "status": "error",
        "data": null
      });
    }
    return next();
  });

  module.exports = app;
// set port, listen for requests
// const PORT = process.env.PORT || 8082;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });