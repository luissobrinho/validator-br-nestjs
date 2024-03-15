"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRenavam = void 0;
var class_validator_1 = require("class-validator");
var validation_br_1 = require("validation-br");
function IsRenavam(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isRenavam',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    if (value) {
                        return (0, validation_br_1.isRenavam)(value);
                    }
                    return true;
                },
                defaultMessage: function (args) {
                    return 'O campo deve ser um número de RENAVAM válido.';
                },
            },
        });
    };
}
exports.IsRenavam = IsRenavam;
