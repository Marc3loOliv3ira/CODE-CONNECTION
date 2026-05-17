# Code Connection

Monorepo privado para a aplicacao Code Connection, organizado com `pnpm`
workspaces. O projeto reune um frontend React/Vite e uma API NestJS.

## Stack

- `pnpm@11.1.2`
- React 19, Vite 8 e TypeScript no frontend
- NestJS 11, TypeScript e Jest no backend

## Estrutura

```text
.
|-- apps
|   |-- api      # API NestJS
|   `-- web      # Frontend React com Vite
|-- package.json
|-- pnpm-lock.yaml
`-- pnpm-workspace.yaml
```

## Configuracao local

1. Instale as dependencias:

   ```bash
   pnpm install
   ```

2. Copie as variaveis de ambiente de exemplo:

   ```bash
   cp .env.example .env
   ```

3. Ajuste os valores do `.env` conforme o ambiente local.

## Scripts principais

Todos os comandos abaixo devem ser executados pela raiz do monorepo.

```bash
pnpm dev:web
pnpm build:web
pnpm lint:web
pnpm preview:web

pnpm dev:api
pnpm start:api
pnpm build:api
pnpm lint:api
pnpm test:api
pnpm test:e2e:api
```

## Frontend

O app `apps/web` renderiza a primeira tela de login do produto usando uma
organizacao inspirada em Atomic Design:

- `atoms`: componentes basicos como botoes, inputs e links.
- `molecules`: combinacoes pequenas, como campos de autenticacao e divisores.
- `organisms`: secoes completas, como o formulario de login.
- `templates`: estrutura visual da pagina.
- `pages`: telas finais da experiencia.

Assets estaticos ficam em `apps/web/public`.

## Backend

O app `apps/api` inicia uma aplicacao NestJS e expoe atualmente o endpoint
`GET /`, usado como ponto inicial de validacao da API.

Por padrao, a API usa `PORT=3000` quando nenhuma porta e informada.

## Boas praticas do repositorio

- Nao versionar `.env`, `node_modules`, `.pnpm-store`, `dist` ou `coverage`.
- Usar Conventional Commits para manter o historico legivel.
- Atualizar este README quando novos fluxos, apps ou variaveis de ambiente
  forem adicionados.
