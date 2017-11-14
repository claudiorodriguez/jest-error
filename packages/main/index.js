import TestClass from '@jest-error/test-class';
import checkInstance from '@jest-error/check-instance';

const main = () => {
  const instance = new TestClass();

  console.log('is instance on main: ', instance instanceof TestClass);

  return checkInstance(instance);
}

export default main;
