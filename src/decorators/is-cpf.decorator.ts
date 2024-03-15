import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isCPF } from 'validation-br';

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCPF',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isCPF(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um CPF válido.';
        },
      },
    });
  };
}
