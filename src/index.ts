import { Model } from './model';
import { ConnectionInterface } from './interface';
import { Database, LogLevelSetting, VersionInfo } from 'arangojs/database';

export default class Avocado {
  private readonly arango: Database;
  private readonly logging: Record<string, LogLevelSetting>;
  private connected: boolean = false;

  constructor(connection: ConnectionInterface) {
    this.arango = new Database({
      url: connection.host,
      databaseName: connection.dbName
    });
    if (connection.basicAuth) {
      this.arango.useBasicAuth(connection.basicAuth.username, connection.basicAuth.password);
    }
    if (connection.bearerAuth) {
      this.arango.useBearerAuth(connection.bearerAuth);
    }
    if (this.logging) {
      this.arango.setLogLevel(this.logging);
    }
  }

  async Connect(): Promise<VersionInfo> {
    try {
      const version = await this.arango.version();
      this.connected = true;
      return version;
    } catch (e) {
      throw e;
    }
  }

  Arango(): Database {
    return this.arango;
  }

  Model(name: string, options: any): Model {
    return new Model(this, this.arango, name, options);
  }
}
