import { LogLevelSetting } from 'arangojs/database';

export interface ConnectionInterface {
  host: string;
  dbName: string;
  basicAuth?: {
    username: string;
    password: string;
  },
  bearerAuth?: string;
  logging?: Record<string, LogLevelSetting>;
}

// export interface ModelConfig extends {
//   name: string;
//   syncDisk: boolean;
//
// }
