"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTituloEleitor = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsTituloEleitor(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isTituloEleitor',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isTituloEleitor)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um número de Título de Eleitor válido.';
                },
            },
        });
    };
}
exports.IsTituloEleitor = IsTituloEleitor;
