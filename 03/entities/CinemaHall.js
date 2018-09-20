import uuid from 'uuid-js';

// BEGIN (write your solution here)
export default class CinemaHall {
  constructor(name, rows, cols) {
    this.id = uuid.create().hex;
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.createdAt = new Date();
    this.filmScreenings = [];
  }

  addFilmScreening(filmScreening) {
    this.filmScreenings.push(filmScreening);
  }
}
// END
