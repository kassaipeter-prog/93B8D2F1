const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: `A szerver fut  ugyes vagy`
  });
});

app.listen(port, () => {
  console.log(`A szerver fut a: http://localhost:${port}`);
});
