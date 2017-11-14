import TestClass from '@jest-error/test-class';

const checkInstance = (instance) => {
  console.log('is instance in checkInstance: ', instance instanceof TestClass);

  return instance instanceof TestClass;
};

export default checkInstance;
