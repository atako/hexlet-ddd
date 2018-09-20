import uuid from 'uuid-js';
import ApplicationEntity from './ApplicationEntity';

export default class Film extends ApplicationEntity {
  // BEGIN (write your solution here)
  static constraints = {
    name: {
      presence: true,
    },
    duration: {
      presence: true,
    },
  };
  // END

  constructor(name, duration) {
    super();
    this.id = uuid.create().hex;
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
