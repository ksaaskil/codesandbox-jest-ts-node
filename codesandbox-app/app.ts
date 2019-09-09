const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = 3000;

const form = `<form method="post">
<input type="text" value="whatever" name="batman">
<button type="submit">Run tests</button>
</form>`;

app.get("/", (_: any, res: any) => res.send(`<h1>Hello World!</h1>${form}`));

app.post("/", (req: any, res: any) => {
  console.log("Got request body", JSON.stringify(req.body));
  res.send(`<h1>Ran tests!</h1>${form}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
