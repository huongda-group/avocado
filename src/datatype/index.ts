import Boolean from './boolean';
import String from './string';
import Number from './number';
import { ConstructInterface } from './construct';

const BOOLEAN = (data: ConstructInterface) => {
  return new Boolean(data);
}

const STRING = (data: ConstructInterface) => {
  return new String(data);
}

const NUMBER = (data: ConstructInterface) => {
  return new Number(data);
}


export default {
  BOOLEAN,
  STRING,
  NUMBER
}
