import uuid from 'uuid-js';

// BEGIN (write your solution here)
export default class Film {
  constructor(name, duration) {
    this.id = uuid.create().hex;
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
// END
