const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {
  async getAll() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      console.log("Something went wrong in Ticket Repository");
      throw { error };
    }
  }

  async create(data) {
    try {
      const Ticket = await NotificationTicket.create(data);
      return Ticket;
    } catch (error) {
      throw { error };
    }
  }

  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) ticket.status = data.status;
      await ticket.save();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;
