import Boolean from './boolean';
import String from './string';
import Number from './number';

export default {
  STRING: (): String => new String(),
  BOOLEAN: (): Boolean => new Boolean(),
  NUMBER: (): Number => new Number()
}
