"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCNPJ = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsCNPJ(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCNPJ',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isCNPJ)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um CNPJ válido.';
                },
            },
        });
    };
}
exports.IsCNPJ = IsCNPJ;
