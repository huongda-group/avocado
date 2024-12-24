import Construct, { ConstructInterface } from './construct';

export default class String extends Construct {
  constructor(data: ConstructInterface) {
    super(data);
  }

  get() {
    return 'string';
  }

  set() {
    return 'string';
  }
}
