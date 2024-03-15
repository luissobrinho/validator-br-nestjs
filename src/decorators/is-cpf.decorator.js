"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCPF = void 0;
var class_validator_1 = require("class-validator");
var validation_br_1 = require("validation-br");
function IsCPF(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCPF',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    if (value) {
                        return (0, validation_br_1.isCPF)(value);
                    }
                    return true;
                },
                defaultMessage: function (args) {
                    return 'O campo deve ser um CPF válido.';
                },
            },
        });
    };
}
exports.IsCPF = IsCPF;
