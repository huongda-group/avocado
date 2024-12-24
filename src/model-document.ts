import Avocado from './index';
import { DocumentCollection } from 'arangojs/collection';
import { Database } from 'arangojs/database';

export class ModelEdge {
  private readonly connection: Avocado;
  private readonly model: DocumentCollection;

  constructor(connection: Avocado, arango: Database, name: string, options: {}) {
    this.connection = connection;
    this.model = arango.collection(name) as DocumentCollection;

    return this;
  }

  async FindOne() {

  }

  async FindAll() {

  }

  async Create() {

  }

  async Update() {

  }

  async Delete() {

  }

  async Raw(aql: string, bindVars: any = {}) {
    return await this.connection.Arango().query(aql, bindVars);
  }
}
