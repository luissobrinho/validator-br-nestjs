import { validate } from 'class-validator';
import { IsRenavam } from '../index';

class TestClass {
  @IsRenavam()
  renavam?: string;
}

describe('IsRenavam Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid RENAVAM', async () => {
    testClass.renavam = '14283256656'; // Example of a valid RENAVAM
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid RENAVAM with mask', async () => {
    testClass.renavam = '9505984597-6'; // Example of a valid RENAVAM
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid RENAVAM', async () => {
    testClass.renavam = '1234567890'; // Example of an invalid RENAVAM
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.renavam = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
