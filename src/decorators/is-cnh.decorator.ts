import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isCNH } from 'validation-br';

export function IsCNH(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCNH',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isCNH(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um CNH válido.';
        },
      },
    });
  };
}
