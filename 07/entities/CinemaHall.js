import uuid from 'uuid-js'; // eslint-disable-line
import ApplicationEntity from './ApplicationEntity';

export default class CinemaHall extends ApplicationEntity {
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

  constructor(name, rows, cols) {
    super();
    this.id = uuid.create().hex;
    this.name = name;
    this.rows = rows;
    this.cols = cols;
  }
}
