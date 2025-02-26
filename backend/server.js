const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://10.100.183.215:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);
  app.get('/', (req, res) => {
    res.status(200).send('Today we have party!');
});

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}
