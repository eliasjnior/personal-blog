---
title: "Como inicio um projeto React?"
slug: "como-inicio-projeto-react"
description: "Um resumo de como configuro meu projeto React com Create React App, ESLint, Prettier, Conventional Commits, import alias e Typescript."
thumbnail: ./coding.jpg
---

Este é um processo que tenho seguido em todos os projetos com React.

## Iniciando o projeto

Para iniciar o projeto, é só rodar o comando do CRA (Create React App). Isso também
serve para qualquer outro projeto que você esteja rodando, seja React Native,
Next.js, Gatsby, etc.

```bash
yarn create react-app PROJECT_NAME --template typescript
```

## Configurando o Editor Config

Para manter sempre padrão é necessário gerar um arquivo `.editorconfig` no root
do projeto com o seguinte conteúdo:

```dotenv
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

No caso do VS Code, você poderá clicar com o botão direito do mouse e depois em
"Generate .editorconfig".

Explicando o conteúdo do arquivo:

* `indent_style` define o tipo de espaçamento que será utilizado (espaço ou tab).
* `indent_size` a quantidade de espaços ou tabs (no caso de tabs é necessário utilizar `tab_width`).
* `charset` para não haver conflitos de codificação.'
* `trim_trailing_whitespace` apaga espaços inutilizados no fim de cada linha.
* `insert_final_newline` insere uma linha em branco no final do aquivo.
* `end_of_line` são os caracteres que define o fim de uma linha por trás do que a gente vê na tela.

## Instalando o ESLint e Prettier

O ESLint fará com que você siga alguns padrões de código durante o desenvolvimento,
enquanto o Prettier, como o próprio nome diz, irá embelezar seu código.

Alguns ficam confuso sobre a diferença dos dois, mas digamos que o ESLint irá
informar variáveis declaradas que não foram utilizadas posteriormente, determinar
que você indique qual o retorno e parâmetros de uma função, enquanto o Prettier
vai quebrar as linhas e reorganizar aquele seu código cheio de parênteses e
chamadas a métodos.
