const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./Services/Email_Service");

const SetupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("Server started on port", PORT);

    sendBasicEmail(
      "support@gmail.com",
      "menodejs@gmail.com",
      "this is testing email",
      "Hi whats up"
    );
  });
};

SetupAndStartServer();
