/*
Receive events from bt.tn device.
*/
const slack = require("./src/slack");
const handlebars = require("handlebars");
const template = handlebars.compile(
  "Yo! {{ bttn_user }} pressed bttn {{ bttn_id }}."
);
const express = require("express");
const app = express();

/*
 * If running in anything other than production mode,
 * we load in the .env process variables using the dotenv library
 */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
app.use(express.json());

app.get("/", function (req, res) {
  res.send("OK");
});

app.post("/bttn", function (req, res) {
  console.log("Request received from Big Red Button");
  console.log(req.body);
  slack.sendChannelMessage(template(req.body));
  res.send("OK");
});

var listener = app.listen(process.env.PORT, () =>
  console.log("Your app is listening on port " + listener.address().port)
);
