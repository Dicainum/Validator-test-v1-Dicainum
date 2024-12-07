class StringSchema {
  validator = (value) => typeof value === 'string';

  constructor(validators = []) {
    this.validators = [this.validator, ...validators];
  }

  length(min, max) {
    const validators = [(value) => value.length >= min];
    if (max) {
      validators.push((value) => value.length <= max);
    }
    return new StringSchema(validators);
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}

export default StringSchema;
