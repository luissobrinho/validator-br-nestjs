import { validate } from 'class-validator';
import { IsPostalCode } from '../index';

class TestClass {
  @IsPostalCode()
  postalCode?: string;
}

describe('IsPostalCode Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid postal code', async () => {
    testClass.postalCode = 'PN718252423BR'; // Example of a valid postal code
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid postal code', async () => {
    testClass.postalCode = 'JT194624698BR'; // Example of an invalid postal code
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.postalCode = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
