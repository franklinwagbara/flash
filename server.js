const configurations = require("dotenv");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const { authRouter } = require("./routes/");

//// App constants ///////////
configurations.config();
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
/////////////////////////////

///// Middlewares begins ////
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
///// Middlewares end ///////

///// Paths begins //////////
app.use("/api/auth/", authRouter);
///// Paths ends ////////////

///// Set up Server /////////
console.log("\nConnecting to database....\n");

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to the database successfully.");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((error) =>
    console.error(
      "FATAL ERROR: Can not connect to database.\nEXCEPTION DUMP: " + error
    )
  );
/////////////////////////////
