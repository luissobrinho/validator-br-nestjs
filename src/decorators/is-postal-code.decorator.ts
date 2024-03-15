import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isPostalCode } from 'validation-br';

export function IsPostalCode(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPostalCode',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isPostalCode(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um CEP válido.';
        },
      },
    });
  };
}
