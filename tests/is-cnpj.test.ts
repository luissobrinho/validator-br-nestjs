import { validate } from 'class-validator';
import { IsCNPJ } from '../index';

class TestClass {
  @IsCNPJ()
  cnpj?: string;
}

describe('IsCNPJ Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid CNPJ', async () => {
    testClass.cnpj = '81117612000160'; // Example of a valid CNPJ
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid CNPJ with mask', async () => {
    testClass.cnpj = '72.216.900/0001-81'; // Example of a valid CNPJ with mask
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid CNPJ', async () => {
    testClass.cnpj = '12345678901234'; // Example of an invalid CNPJ
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.cnpj = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
