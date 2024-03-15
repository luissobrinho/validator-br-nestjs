import { validate } from 'class-validator';
import { IsPIS } from '../index';

class TestClass {
  @IsPIS()
  pis?: string;
}

describe('IsPIS Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid PIS', async () => {
    testClass.pis = '71282677380'; // Example of a valid PIS
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid PIS with mask', async () => {
    testClass.pis = '237.95126.95-5'; // Example of a valid PIS
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid PIS', async () => {
    testClass.pis = '12345678901234567890'; // Example of an invalid PIS
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.pis = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
