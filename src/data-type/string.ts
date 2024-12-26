import Construct from './construct';

export default class String extends Construct {
  public readonly _type!: string;

  get() {
    return 'string';
  }

  set() {
    return 'string';
  }
}
