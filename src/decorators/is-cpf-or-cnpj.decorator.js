"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCPFOrCNPJ = void 0;
var class_validator_1 = require("class-validator");
var validation_br_1 = require("validation-br");
function IsCPFOrCNPJ(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCPFOrCNPJ',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    if (value) {
                        return (0, validation_br_1.isCPF)(value) || (0, validation_br_1.isCNPJ)(value);
                    }
                    return true; // Permitir campos vazios, pois a validação de presença pode ser feita separadamente se necessário
                },
                defaultMessage: function (args) {
                    return 'O campo deve ser um CPF ou CNPJ válido.';
                },
            },
        });
    };
}
exports.IsCPFOrCNPJ = IsCPFOrCNPJ;
