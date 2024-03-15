"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNUP17 = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsNUP17(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNUP17',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isNUP17)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um NUP17 válido.';
                },
            },
        });
    };
}
exports.IsNUP17 = IsNUP17;
