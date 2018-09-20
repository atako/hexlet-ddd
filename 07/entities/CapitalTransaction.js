import uuid from 'uuid-js'; // eslint-disable-line
import ApplicationEntity from './ApplicationEntity';

export default class CapitalTransaction extends ApplicationEntity {
  // BEGIN (write your solution here)
  static constraints = {
    ticket: {
      presence: true,
      association: true,
    },
    cost: {
      presence: true,
      numericality: true,
    }
  };

  constructor(ticket) {
    super();
    this.id = uuid.create().hex;
    this.ticket = ticket;
    this.cost = ticket.cost;
    this.createdAt = new Date();
  }
  // END
}
