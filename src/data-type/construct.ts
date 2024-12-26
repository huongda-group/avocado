export interface ConstructInterface<T = any> {
  nullable?: boolean;
  default?: any;
  get(): T;
  set(): void;
}

export default class Construct {
  protected type: any;

  get() {

  }

  set() {

  }
}
