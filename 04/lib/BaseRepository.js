// BEGIN (write your solution here)
export default class {
  data = [];

  all() {
    return this.data;
  }

  find(id) {
    const result = this.data.find(entity => entity.id === id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }

  save(entity) {
    this.data.push(entity);
  }
}
// END
