"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPIS = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsPIS(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isPIS',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isPIS)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um número de PIS/PASEP/NIS/NIT válido.';
                },
            },
        });
    };
}
exports.IsPIS = IsPIS;
