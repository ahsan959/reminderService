const Sender = require("../config/email_config");
const TicketRepository = require("../repository/ticket-repository");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await Sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log("something went wrong in email Service");
    throw { error };
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (status) => {
  try {
    const repo = new TicketRepository();
    const response = await repo.update(status);
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
