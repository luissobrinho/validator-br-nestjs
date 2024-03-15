import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isPIS } from 'validation-br';

export function IsPIS(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isPIS',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isPIS(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um número de PIS/PASEP/NIS/NIT válido.';
        },
      },
    });
  };
}
