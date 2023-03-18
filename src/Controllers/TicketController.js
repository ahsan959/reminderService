const TicketService = require("../Services/Email_Service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Sucessfully registerd a Email Reminder",
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      data: {},
      err: error,
      message: "we are not able to register a Reminder email ",
    });
  }
};

module.exports = {
  create,
};
