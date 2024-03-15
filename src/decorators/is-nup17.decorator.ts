import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isNUP17 } from 'validation-br';

export function IsNUP17(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNUP17',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isNUP17(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um NUP17 válido.';
        },
      },
    });
  };
}
