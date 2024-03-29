const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Configure server for incoming posted json in req.body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app)
require("./app/routing/jsonRoutes")(app)
app.get("*", (req, res) => { res.redirect("/"); })

app.listen(PORT, () => {
    console.log(`similarity engine server listening on port ${PORT}`);
})