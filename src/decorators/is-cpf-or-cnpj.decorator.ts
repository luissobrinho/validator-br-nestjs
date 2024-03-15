import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isCPF, isCNPJ } from 'validation-br';

export function IsCPFOrCNPJ(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isCPFOrCNPJ',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isCPF(value) || isCNPJ(value);
          }
          return true; // Permitir campos vazios, pois a validação de presença pode ser feita separadamente se necessário
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um CPF ou CNPJ válido.';
        },
      },
    });
  };
}
