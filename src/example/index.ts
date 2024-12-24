import Schema from '../src/schema';
import DataType from '../src/data-type';

const s = new Schema({
  key: {
    nghi: {
      type: DataType.STRING
    },
    type: {
      type: DataType.NUMBER
    }
  },
  hello: [{
    name: {
      type: DataType.STRING
    },
    age: {
      type: DataType.NUMBER
    }
  }]
});
