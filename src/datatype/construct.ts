export interface ConstructInterface<T = any> {
  nullable?: boolean;
  default?: any;
  get(): T;
  set(): void;
}

export default class Construct {
  nullable: boolean;
  default: any;

  constructor(data: ConstructInterface) {
    this.nullable = data.nullable || true;
    this.default = data.default || undefined;
  }

  get() {

  }

  set() {

  }
}
