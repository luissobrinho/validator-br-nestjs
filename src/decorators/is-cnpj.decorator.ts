import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isCNPJ } from 'validation-br';

export function IsCNPJ(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCNPJ',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isCNPJ(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um CNPJ válido.';
        },
      },
    });
  };
}
