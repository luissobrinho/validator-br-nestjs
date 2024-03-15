import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isJudicialProcess } from 'validation-br';

export function IsJudicialProcess(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isJudicialProcess',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isJudicialProcess(value);
          }

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um número de Processo Judicial válido.';
        },
      },
    });
  };
}
