import express from "express";
import { json, urlencoded } from "express";
import exchangeRateApi from  "./ exchage.api.controller";

const app = express();

app.use(json())

// adds middleware that parses requests with x-www-form-urlencoded data encoding
app.use(urlencoded({ extended: true }));



// https://expressjs.com/en/starter/basic-routing.html
app.get("/api/rates", exchangeRateApi);
// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal server error"
    }
  });
});



//Handle unknown routes
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found"
  });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
