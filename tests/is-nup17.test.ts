import { validate } from 'class-validator';
import { IsNUP17 } from '../index';

class TestClass {
  @IsNUP17()
  nup17?: string;
}

describe('IsNUP17 Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid NUP17', async () => {
    testClass.nup17 = '23037001462202165'; // Example of a valid NUP17
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid NUP17 with mask', async () => {
    testClass.nup17 = '23037.001462/2021-65'; // Example of a valid NUP17
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid NUP17', async () => {
    testClass.nup17 = '12345678901234567890'; // Example of an invalid NUP17
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.nup17 = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
