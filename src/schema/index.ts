import Boolean from '../datatype/boolean';
import String from '../datatype/string';
import Number from '../datatype/number';

type SchemaField = String | Number | Boolean;

type SchemaSchema = {
  [key: string]: SchemaField | SchemaSchema;
};

export default class Schema {
  private readonly structure: SchemaSchema;

  constructor(structure: SchemaSchema) {
    this.structure = structure;
  }
}
