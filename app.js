const express = require("express");
const app = express();
const port = 3000;

const gpsapi = require("./services/scrape-and-map");

app.get("/v1/details/:id", async (req, res) => {
    let data = await gpsapi(req.params.id);
    res.send(data);
});

app.listen(port, () => {
  console.log(`Google Play Store App Details API running on ${port}`);
});
