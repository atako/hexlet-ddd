import uuid from 'uuid-js';

export default class Film {
  constructor(name, duration) {
    this.id = uuid.create().hex;
    this.name = name;
    this.duration = duration;
    this.createdAt = new Date();
  }
}
