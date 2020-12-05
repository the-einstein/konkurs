const express = require("express");
require("dotenv").config();
const monggose = require("mongoose");
const cors = require("cors");

// init app
const app = express();

//connect to DB
monggose.connect(
  process.env.MONGO_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to the server");
  }
);

//Middlewares
app.use(express.json());
app.use(cors());

//routers
const homeRoute = require("./router/home");
const userRouter = require("./router/user");

//Route middlewares
app.use("/", homeRoute);

app.use("/user", userRouter);

app.listen(process.env.PORT || 8000, (err) => {
  if (err) console.log(`there is an error \n ${err}`);

  console.log("server listening on port ", process.env.PORT);
});
