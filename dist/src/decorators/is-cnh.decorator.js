"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCNH = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsCNH(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCNH',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isCNH)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um CNH válido.';
                },
            },
        });
    };
}
exports.IsCNH = IsCNH;
