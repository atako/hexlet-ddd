import Bottle from 'bottlejs'; // eslint-disable-line
import services from './services';
import entities from './entities';
import repositories from './repositories';
import makeValidator from './lib/validator';

export default () => {
  // BEGIN (write your solution here)
    const bottle = new Bottle();
  bottle.factory('repositories', () => {
    const result = Object.keys(repositories).reduce((acc, repoName) =>
      ({ ...acc, [repoName]: new repositories[repoName]() }), {});
    return result;
  });

  bottle.factory('entities', () => entities);
  bottle.factory('validate', container => makeValidator(container));

  bottle.factory('services', (container) => {
    const result = Object.keys(services).reduce((acc, serviceName) => {
      const service = new services[serviceName](container);
      return { ...acc, [serviceName]: service };
    }, {});
    return result;
  });

  return bottle.container;
  // END
};
