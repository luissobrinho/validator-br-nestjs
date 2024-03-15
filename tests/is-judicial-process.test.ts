import { validate } from 'class-validator';
import { IsJudicialProcess } from '../index';

class TestClass {
  @IsJudicialProcess()
  judicialProcess?: string;
}

describe('IsJudicialProcess Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid judicial process number', async () => {
    testClass.judicialProcess = '20802520125150049'; // Example of a valid judicial process number
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should allow valid judicial process number with mask', async () => {
    testClass.judicialProcess = '0011006-07.2016.8.20.0100'; // Example of a valid judicial process number
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid judicial process number', async () => {
    testClass.judicialProcess = '00110060720168200101'; // Example of an invalid judicial process number
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.judicialProcess = ''; // Example of an empty value
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
