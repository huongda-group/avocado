import Construct, { ConstructInterface } from './construct';

export default class Number extends Construct {
  public readonly _type!: number;

  get() {
    return 'string';
  }

  set() {
    return 'string';
  }
}
