const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./Services/Email_Service");

const jobs = require("./utils/jobs");

const TicketController = require("./Controllers/TicketController");

const SetupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/ticket", TicketController.create);

  app.listen(PORT, () => {
    console.log("Server started on port", PORT);
    jobs();

    // sendBasicEmail(
    //   "support@gmail.com",
    //   "menodejs@gmail.com",
    //   "this is testing email",
    //   "Hi whats up"
    // );
  });
};

SetupAndStartServer();
