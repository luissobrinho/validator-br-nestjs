import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isRenavam } from 'validation-br';

export function IsRenavam(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isRenavam',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isRenavam(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um número de RENAVAM válido.';
        },
      },
    });
  };
}
