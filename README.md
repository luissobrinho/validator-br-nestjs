# validator-br-nestjs

[![npm](https://img.shields.io/npm/v/validator-br-nestjs)](https://www.npmjs.com/package/validator-br-nestjs)
[![npm](https://img.shields.io/npm/dm/validator-br-nestjs)](https://www.npmjs.com/package/validator-br-nestjs)
[![License](https://img.shields.io/github/license/seu-usuario/validator-br-nestjs)](https://github.com/seu-usuario/validator-br-nestjs/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/seu-usuario/validator-br-nestjs.svg?branch=master)](https://travis-ci.com/seu-usuario/validator-br-nestjs)


Este pacote é uma integração do `validation-br` com o NestJS, fornecendo decorators de validação para tipos específicos de dados brasileiros.

## Instalação

Para instalar o pacote, basta executar o seguinte comando:

```bash
npm install validator-br-nestjs
```

ou

```bash
yarn add validator-br-nestjs
```

## Uso

O pacote fornece decorators personalizados para uso com o `class-validator` do NestJS. Você pode usá-los em suas classes DTOs para aplicar validações específicas de dados brasileiros.

Aqui estão os decorators disponíveis:

- `@IsCPFOrCNPJ`: Validação para números de CPF ou CNPJ.
- `@IsCPF`: Validação para números de CPF.
- `@IsCNPJ`: Validação para números de CNPJ.
- `@IsCNH`: Validação para números de CNH.
- `@IsNUP17`: Validação para números de NUP17 (Número Unificado de Protocolo do Governo Federal).
- `@IsJudicialProcess`: Validação para números de Processos Judiciais.
- `@IsPIS`: Validação para números de PIS/PASEP/NIS/NIT.
- `@IsPostalCode`: Validação para CEPs brasileiros.
- `@IsRenavam`: Validação para números de RENAVAM.
- `@IsTituloEleitor`: Validação para números de Título de Eleitor.

## Exemplo

Aqui está um exemplo de como usar os decorators em uma classe DTO:

```typescript
import { IsCPF, IsCNPJ } from 'validator-br-nestjs';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsCPF()
  cpf: string;

  @IsCNPJ()
  cnpj: string;
  
  @IsCPFOrCNPJ()
  document: string;
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou reportar um problema.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).