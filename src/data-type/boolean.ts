import Construct, { ConstructInterface } from './construct';

export default class String extends Construct {
  public readonly _type!: boolean;

  get() {
    return 'string';
  }

  set() {
    return 'string';
  }
}
