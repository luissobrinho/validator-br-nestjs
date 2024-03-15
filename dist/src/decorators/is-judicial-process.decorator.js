"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsJudicialProcess = void 0;
const class_validator_1 = require("class-validator");
const validation_br_1 = require("validation-br");
function IsJudicialProcess(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isJudicialProcess',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (value) {
                        return (0, validation_br_1.isJudicialProcess)(value);
                    }
                    return true;
                },
                defaultMessage(args) {
                    return 'O campo deve ser um número de Processo Judicial válido.';
                },
            },
        });
    };
}
exports.IsJudicialProcess = IsJudicialProcess;
