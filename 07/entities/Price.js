import uuid from 'uuid-js'; // eslint-disable-line
import dateFns from 'date-fns'; // eslint-disable-line
import ApplicationEntity from './ApplicationEntity';

export default class Price extends ApplicationEntity {
  // BEGIN (write your solution here)
  static weekendMultiplier = 1.3;

  static constraints = {
    cinemaHall: {
      presence: true,
      uniqueness: true,
    },
    value: {
      presence: true,
      numericality: {
        greaterThanOrEqualTo: 0,
      },
    },
  };

  constructor(cinemaHall, value) {
    super();
    this.id = uuid.create().hex;
    this.cinemaHall = cinemaHall;
    this.value = value;
  }

  calculateFor(time) {
    return dateFns.isWeekend(time) ?
      this.value * this.constructor.weekendMultiplier : this.value;
  }
  // END
}
