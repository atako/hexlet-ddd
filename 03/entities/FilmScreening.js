import uuid from 'uuid-js';

// BEGIN (write your solution here)
export default class FilmScreening {
  constructor(film, cinemaHall, time) {
    this.id = uuid.create().hex;
    this.film = film;
    this.cinemaHall = cinemaHall;
    this.time = time;
    this.createdAt = new Date();

    this.cinemaHall.addFilmScreening(this);
  }
}
// END
