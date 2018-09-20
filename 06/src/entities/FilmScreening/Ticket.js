import uuid from 'uuid-js';
import ApplicationEntity from '../ApplicationEntity';

export default class FilmScreeningTicket extends ApplicationEntity {
  // BEGIN (write your solution here)
   static constraints = {
    filmScreening: {
      presence: true,
      uniqueness: {
        scope: ['place'],
      },
    },
    user: {
      presence: true,
    },
    place: {
      presence: true,
    },
  };
  // END

  constructor(filmScreening, user, place) {
    super();
    this.id = uuid.create().hex;
    this.filmScreening = filmScreening;
    this.user = user;
    this.place = place;
    this.createdAt = new Date();
  }
}
