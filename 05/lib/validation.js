import _ from 'lodash';
import validate from 'validate.js';

export default (repositories) => {
  const entityValidator = entity => validate(entity, entity.constructor.constraints);
  validate.validators.uniqueness = (value, options, key, attributes) => {
    if (!value) {
      return null;
    }
    const className = attributes.constructor.name;
    const repository = repositories[`${className}Repository`];
    const scope = options.scope || [];
    const params = { [key]: value, ..._.pick(attributes, scope) };
    const result = repository.findBy(params);
    if (result && result.id !== attributes.id) {
      return 'already exists';
    }
    return null;
  };

  validate.validators.association = (value) => {
    if (!value) {
      return null;
    }
    return entityValidator(value);
  };

  // BEGIN (write your solution here)
  validate.validators.dateObject = (value) => {
    if (!(value instanceof Date)) {
      return 'are not date';
    }
    return null;
  };
  // END

  return entityValidator;
};
