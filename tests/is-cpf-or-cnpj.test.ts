import { validate } from 'class-validator';
import {IsCPFOrCNPJ} from "../index";

class TestClass {
  @IsCPFOrCNPJ()
  document?: string;
}

describe('IsCPFOrCNPJ Decorator', () => {
  let testClass: TestClass

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it('should allow valid CPF', async () => {
    testClass.document = '12345678909'; // Example of a valid CPF
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid CPF with mask', async () => {
    testClass.document = '861.716.460-32'; // Example of a valid CPF
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid CNPJ', async () => {
    testClass.document = '70017287000148'; // Example of a valid CNPJ
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });


  it('should allow valid CNPJ with mask', async () => {
    testClass.document = '60.336.839/0001-27'; // Example of a valid CNPJ
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid CPF', async () => {
    testClass.document = '12345678900'; // Example of an invalid CPF
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should not allow invalid CNPJ', async () => {
    testClass.document = '1234567890123'; // Example of an invalid CNPJ
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.document = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
