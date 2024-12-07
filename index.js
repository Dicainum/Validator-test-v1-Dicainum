import NumberSchema from './src/NumberSchema.js';
import ObjectSchema from './src/ObjectSchema.js';
import StringSchema from './src/StringSchema.js';

class Validator {
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  object() {
    return new ObjectSchema();
  }
}

export default Validator;
