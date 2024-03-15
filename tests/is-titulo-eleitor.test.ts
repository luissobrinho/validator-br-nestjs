import { validate } from 'class-validator';
import { IsTituloEleitor } from '../index';

class TestClass {
  @IsTituloEleitor()
  tituloEleitor?: string;
}

describe('IsTituloEleitor Decorator', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  it('should allow valid Título Eleitoral', async () => {
    testClass.tituloEleitor = '743650641660'; // Exemplo de um Título Eleitoral válido
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid Título Eleitoral with mask', async () => {
    testClass.tituloEleitor = '5250.2888.1694'; // Exemplo de um Título Eleitoral inválido
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });

  it('should not allow invalid Título Eleitoral', async () => {
    testClass.tituloEleitor = '12345678901'; // Exemplo de um Título Eleitoral inválido
    const errors = await validate(testClass);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should allow empty value', async () => {
    testClass.tituloEleitor = ''; // Exemplo de um valor vazio
    const errors = await validate(testClass);
    expect(errors.length).toBe(0);
  });
});
