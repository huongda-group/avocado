import Avocado from './index';
import { DocumentCollection } from 'arangojs/collection';
import DataTypeString from './data-type/string';
import DataTypeNumber from './data-type/number';
import DataTypeBoolean from './data-type/boolean';

type SchemaField<T> = {
  type: T;
  defaultV?: T extends { _type: infer U } ? U : never;
  nullable?: boolean;
};

type SchemaSchema = {
  [key: string]:
    | SchemaField<DataTypeString | DataTypeNumber | DataTypeBoolean>
    | SchemaSchema
    | SchemaField<DataTypeString | DataTypeNumber | DataTypeBoolean>[]
    | SchemaSchema[];
};

type TypeField<T> = T extends {
  type: {
    _type: infer U
  }
} ? U : T extends Record<string, any> ? {
  [K in keyof T]: TypeField<T[K]>
} : T extends Array<infer U> ? TypeField<U>[] : never;

export default class ModelDocument<T extends SchemaSchema> {
  private readonly structure: T;
  private readonly connection: Avocado;
  private readonly model: DocumentCollection;

  constructor(connection: Avocado, dbName: string, structure: T, options: {} = {}) {
    if (!connection.connected) {
      throw new Error('Connection is not established, call Connect() first');
    }

    this.connection = connection;
    this.model = this.connection.Arango().collection(dbName) as DocumentCollection;
    this.structure = structure;
    return this;
  }

  async Create(data: TypeField<typeof this.structure>) {
    return await this.model.save(data);

  }

  async FindOne() {

  }

  async FindAll() {

  }

  async Update() {

  }

  async Delete() {

  }

  async Raw(aql: string, bindVars: any = {}) {
    return await this.connection.Arango().query(aql, bindVars);
  }
}
