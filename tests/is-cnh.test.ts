import { validate } from 'class-validator';
import { IsCNH } from '../index';

class TestClass {
  @IsCNH()
  license?: string;
}

describe('IsCNH Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid CNH', async () => {
    testClass.license = '12345678900'; // Example of a valid CNH
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid CNH with mask', async () => {
    testClass.license = '123456789-00'; // Example of a valid CNH with mask
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid CNH', async () => {
    testClass.license = '12345678901'; // Example of an invalid CNH
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.license = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
