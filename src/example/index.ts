import Model from '../model-document';
import DataType from '../data-type';
import Config from '../index';

const config = new Config({
  host: 'http://localhost:8529',
  dbName: 'test'
})

const s = new Model(config, 'user', {
  hello: [
    {
      name: {
        type: DataType.STRING(),
        defaultV: 'sdsf'
      },
      age: {
        type: DataType.NUMBER(),
        defaultV: false
      },
    },
  ],
  key: {
    nghi: {
      type: DataType.STRING(),
    }
  },
});

// s.Create({
//   hello: [{
//     name: 'nghi',
//     age: false
//   }],
//   key: {
//     nghi: 597439
//   }
// }).then(console.log).catch(console.error);
