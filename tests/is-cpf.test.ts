import { validate } from 'class-validator';
import { IsCPF } from '../index';

class TestClass {
  @IsCPF()
  cpf?: string;
}

describe('IsCPF Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid CPF', async () => {
    testClass.cpf = '12345678909'; // Example of a valid CPF
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid CPF with mask', async () => {
    testClass.cpf = '123.456.789-09'; // Example of a valid CPF with mask
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid CPF', async () => {
    testClass.cpf = '12345678900'; // Example of an invalid CPF
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.cpf = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
