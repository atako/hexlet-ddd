import _ from 'lodash'; // eslint-disable-line
import validate from 'validate.js'; // eslint-disable-line

import BaseEntity from './BaseEntity';

export default ({ repositories }) => {
  const entityValidator = (entity, options = { exception: false }) => {
    const errors = validate(entity, entity.constructor.constraints);
    if (errors && options.exception) {
      throw new Error(`${entity} is not valid (${errors})`);
    }
    return errors;
  };

  validate.validators.uniqueness = (value, options, key, attributes) => {
    if (!value) {
      return null;
    }
    const className = attributes.constructor.name;
    const repository = repositories[className];
    const scope = options.scope || [];
    const params = { [key]: value, ..._.pick(attributes, scope) };
    const result = repository.findBy(params);
    const isEntity = result instanceof BaseEntity;
    if (result || (isEntity && result.id !== value.id)) {
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

  return entityValidator;
};
