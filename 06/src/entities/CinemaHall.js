import uuid from 'uuid-js';
import ApplicationEntity from './ApplicationEntity';

export default class CinemaHall extends ApplicationEntity {
  // BEGIN (write your solution here)
  static constraints = {
    name: {
      presence: true,
    },
    rows: {
      presence: true,
      numericality: true,
    },
    cols: {
      presence: true,
      numericality: true,
    },
  };
  // END

  constructor(name, rows, cols) {
    super();
    this.id = uuid.create().hex;
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.createdAt = new Date();
  }
}
