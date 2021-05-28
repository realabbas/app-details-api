const express = require("express");
const app = express();
const port = 3000;

const gpsapi = require("./services/scrape-and-map");

app.get("/v1/details/:id", async (req, res) => {
  // const headers = req.headers["x-rapidapi-key"]
  const headers = req.headers["x-rapidapi-key"];
  if (headers === "4f39b7dad4msh3b1b5e80f4a0d5fp1c0abajsnf7ddd01e5fa9") {
    console.log(headers);
    let data = await gpsapi(req.params.id);
    res.send(data);
  } else {
    res.status(401).json({ message: "Incorrect authorization token" });
  }
});

app.listen(port, () => {
  console.log(`Google Play Store App Details API running on ${port}`);
});
