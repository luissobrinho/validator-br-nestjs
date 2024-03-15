import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isTituloEleitor } from 'validation-br';

export function IsTituloEleitor(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isTituloEleitor',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value) {
            return isTituloEleitor(value);
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O campo deve ser um número de Título de Eleitor válido.';
        },
      },
    });
  };
}
