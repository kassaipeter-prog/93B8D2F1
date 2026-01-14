const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.json({
    message: `A szerver fut  ugyes vagy`,
    status: "success"
  });
});

app.listen(port, () => {
  console.log(`A szerver fut a: http://localhost:${port}`);
});
