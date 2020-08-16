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
yarn create react-app project-name --template typescript
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

Então é necessário instalar as dependências e depois iniciar a configuração do ESLint.

**Atenção**: caso você esteja iniciando um projeto com CRA, ele já vem com ESLint,
então incluí-lo na instalação abaixo poderá causar conflito. Então remove a dependência
do `eslint`, ou caso já tenha instalado é só removê-lo.

```bash
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
```

Depois é só iniciar a configuração:

```bash
yarn eslint --init
```

As opções que sempre escolho são:

1. **How would you like to use ESLint?** *To check syntax, find problems, and enforce code style*
2. **What type of modules does your project use?** *JavaScript modules (import/export)*
3. **Which framework does your project use?** *React*
4. **Does your project use TypeScript?** *y*
5. **Where does your code run?** *Browser* (No caso do Gatsby e Next.js, eu seleciono *Node* também)
6. **How would you like to define a style for your project?** *Use a popular style guide*
7. **Which style guide do you want to follow?** *Standard: https://github.com/standard/standard*
8. **What format do you want your config file to be in?** *JSON*
9. **Would you like to install them now with npm?** *Y*

Sim, eu deixo ele instalar as dependências com NPM, depois eu deleto o `package-lock.json` criado.
Na próxima vez que você instalar mais alguma dependência, o Yarn irá demorar um pouco mais para
atualizar o `yarn.lock`, ou simplesmente rode um `yarn` para adiantar esse processo.

Caso o script tenha instalado a dependência do ESLint no seu `package.json` e você
esteja configurando em um projeto do Create React App, remova a dependência para evitar
conflitos:

```bash
yarn remove eslint
```

Mas calma, ainda faltam algumas configurações para finalizar.

No seu `package.json`, insira um novo script para que você possa rodar o comando
`yarn lint` para checar seu código.

```json
"scripts": {
  "lint": "eslint --ext tsx,ts src/"
}
```

Já no arquivo `.eslintrc.json` é necessário acrescentar algumas linhas:

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react-hooks",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error", // os erros do Prettier serão exibidos como erro
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off", // evita erros de dar preferência a default export
    "comma-dangle": ["error", "always-multiline"], // adiciona uma vírgula no último elemento de um array ou objeto multiline
    "newline-before-return": "error", // é TOC, adiciona um espaço antes do return
    "react/prop-types": "off", // estamos utilizando Typescript, não precisamos do prop-types
    "react/self-closing-comp": ["error", { // fecha o componente <div></div> para <div /> quando está vazio
      "component": true,
      "html": true
    }]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

Lembre-se de encaixar ele corretamente para não quebrar o JSON. Você poderá
executar o `yarn lint` para verificar se está tudo certo com a configuração.

Mas, precisamos também ignorar alguns arquivos, e para isso é só criar um `.eslintignore`
no root do projeto:

```text
/*.js
node_modules
dist
```

E para evitar um conflito entre as opções do ESLint e Prettier, só criar o
`prettier.config.js`, também no root do projeto:

```javascript
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
}
```

## Ainda tem mais! Commit Linter

Gosto sempre de seguir um padrão de commits, e para isso sigo o Conventional Commits.
Tem 3 bibliotecas que costumo usar nos projetos para garantir isso:

```bash
yarn add -D git-commit-msg-linter husky lint-staged
```

O `git-commit-msg-linter` fará com que todo commit deva seguir o padrão do Conventional
Commits. Então não é necessário outras configurações nele.

Já o Husky serve para rodar algum script em hooks do Git, como no pré-commit. Assim
eu configuro para rodar o Lint Staged, que irá fazer um lint **somente** dos arquivos
que estão em stage no Git, não sendo necessário rodar um lint no projeto todo.

Tudo no root do projeto, crie os respectivos arquivos:

`.huskyrc.json`
```json
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

`.lintstagedrc.json`
```json
{
  "src/**/*.{ts,tsx}": [
    "eslint --ext ts,tsx --fix"
  ]
}
```

## Tá quase lá, falta as regras de importações

Pra evitar uma bagunça nos imports, eu configuro da seguinte maneira:

```bash
yarn add -D eslint-plugin-import-helpers
```

Edito o arquivo `.eslintrc.json` com:

```json
{
  "plugins": [
    "eslint-plugin-import-helpers"
  ],
  "rules": {
    "import-helpers/order-imports": [
      "error",
      {
        "newlinesBetween": "always",
        "groups": [
          ["/^react$/", "/^react-router-dom$/", "/^react-redux$/"], // Imports do React primeiro
          "/^~/", // Esses são aliases que irei configurar lá na frente.
          "module", // Módulos gerais
          ["parent", "sibling", "index"] // O restante dos imports que voltam pastas ou no diretório atual.
        ],
        "alphabetize": {
          "order": "asc", // Deixar os imports em ordem alfabética.
          "ignoreCase": true
        }
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true // Os imports da linha em ordem alfabética.
      }
    ]
  }
}
```

Com isso você terá todos os seus imports organizados e sem muita bagunça.

## Finalmente, para finalizar, os imports aliases

Para não ter que ficar digitando aquele monte de `../../../../../../` eu gosto de adicionar
um alias para a pasta inicial do projeto. Eu costumo usar `~/`, mas alguns gostam de usar `@/`,
então vai da sua preferência. Só lembre-se de atualizar no passo anterior do import rules.

Como o CRA não permite modificar essa parte do tsconfig, é necessário instalar a
dependência do React App Rewired:

```bash
yarn add -D react-app-rewired
```

Com isso é só sobrepor as configurações em um arquivo `config-overrides.js`:

```javascript
const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { '~': path.resolve(__dirname, 'src') }, // aqui você pode alterar o alias ou inserir outros
  };

  return config;
};
```

E aí é só definir um novo `tsconfig.paths.json` para fazer sua IDE detectar corretamente os paths.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

E fazer um extends no seu `tsconfig.json`:

```json
{
  "extends": "./tsconfig.paths.json"
}
```

Com isso você já terá sua IDE detectando seus novos aliases, porém falta só mais um passo
para ativar o React App Rewired. Vá no seu `package.json` e substitua os scripts com `react-scripts`
para `react-app-rewired`:

```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
}
```

## Conclusão

Parece ser muita coisa, mas depois que você acostuma, consegue fazer esse setup
de forma muito rápida.

Esse setup consegue deixar seu código mais limpo e te fazer seguir alguns padrões
e regras. Mas também não irá fazer milagre no seu código!

Bom dev!
