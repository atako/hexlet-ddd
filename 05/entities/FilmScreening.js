import uuid from 'uuid-js';
import ApplicationEntity from './ApplicationEntity';

export default class FilmScreening extends ApplicationEntity {
  // BEGIN (write your solution here)
   static constraints = {
    film: {
      presence: true,
    },
    cinemaHall: {
      presence: true,
    },
    time: {
      presence: true,
    },
  };
  // END

  constructor(film, cinemaHall, time) {
    super();
    this.id = uuid.create().hex;
    this.film = film;
    this.cinemaHall = cinemaHall;
    this.time = time;
    this.createdAt = new Date();
  }
}
