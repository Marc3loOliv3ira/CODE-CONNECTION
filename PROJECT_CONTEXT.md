# Code Connect - Contexto inicial

## Visao geral

Este projeto e um monorepo privado gerenciado com `pnpm` workspaces. A raiz centraliza os comandos principais e os apps ficam em `apps/*`.

Apps atuais:

- `apps/web`: frontend React com Vite e TypeScript.
- `apps/api`: backend NestJS com TypeScript.

O repositorio Git foi inicializado na raiz do projeto. Nao ha repositorios Git internos dentro de `apps/api` ou `apps/web`.

## Stack

Raiz:

- `pnpm@11.1.2`
- Workspaces configurados em `pnpm-workspace.yaml`
- Lockfile em `pnpm-lock.yaml`

Frontend (`apps/web`):

- React `19`
- Vite `8`
- TypeScript `~6`
- ESLint flat config

Backend (`apps/api`):

- NestJS `11`
- TypeScript `5.7`
- Jest `30`
- Supertest para e2e
- ESLint com `typescript-eslint` e Prettier

## Comandos principais

Executar pela raiz:

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

## Estrutura relevante

```text
.
+-- package.json
+-- pnpm-workspace.yaml
+-- pnpm-lock.yaml
+-- .gitignore
+-- apps
    +-- api
    |   +-- src
    |   |   +-- main.ts
    |   |   +-- app.module.ts
    |   |   +-- app.controller.ts
    |   |   +-- app.service.ts
    |   |   +-- app.controller.spec.ts
    |   +-- test
    |   |   +-- app.e2e-spec.ts
    |   |   +-- jest-e2e.json
    |   +-- package.json
    |   +-- nest-cli.json
    |   +-- tsconfig.json
    |   +-- tsconfig.build.json
    |   +-- eslint.config.mjs
    |   +-- .gitignore
    +-- web
        +-- src
        |   +-- App.tsx
        |   +-- App.css
        |   +-- index.css
        |   +-- main.tsx
        |   +-- assets
        +-- public
        +-- package.json
        +-- vite.config.ts
        +-- tsconfig.json
        +-- tsconfig.app.json
        +-- tsconfig.node.json
        +-- eslint.config.js
        +-- .gitignore
```

## Estado funcional atual

API:

- `apps/api/src/main.ts` inicia uma aplicacao Nest na porta `process.env.PORT` ou `3000`.
- `AppController` expoe `GET /`.
- `AppService` retorna `Hello World!`.
- Ha teste unitario para o controller e teste e2e para `GET /`.

Web:

- `apps/web/src/main.tsx` monta o app React em `#root`.
- `apps/web/src/App.tsx` renderiza a pagina de login inicial do produto.
- A tela de login usa componentes organizados em `atoms`, `molecules`, `organisms`, `templates` e `pages`.
- `apps/web/src/index.css` define o layout responsivo, tema visual e estados basicos da experiencia de autenticacao.

## Git e ignores

Existe `.gitignore` na raiz e em cada app:

- Raiz ignora `node_modules`, `.pnpm-store`, `dist`, `coverage`, `.env` e variantes.
- `apps/api/.gitignore` ignora logs, `node_modules`, `dist`, `coverage`, arquivos de ambiente e arquivos de IDE.
- `apps/web/.gitignore` ignora logs, `node_modules`, `dist`, arquivos locais e arquivos de IDE.

## Observacoes de arquitetura

- Ainda nao ha codigo compartilhado entre `web` e `api`.
- Ainda nao ha integracao HTTP entre frontend e backend.
- Ainda nao ha configuracao de CORS na API.
- Ha um `.env.example` na raiz documentando as variaveis iniciais usadas localmente.
- O README da raiz documenta a estrutura do monorepo, setup local e scripts principais.

## Diretrizes de frontend

O frontend deve evoluir seguindo Atomic Design como organizacao de componentes.

Camadas esperadas:

- `atoms`: elementos basicos e reutilizaveis, como botoes, inputs, labels, icones e textos.
- `molecules`: composicoes pequenas de atoms, como campos com label/erro, barras de busca e itens de lista.
- `organisms`: secoes completas e reutilizaveis, como headers, sidebars, cards compostos e formularios maiores.
- `templates`: estruturas de pagina com layout e slots de conteudo.
- `pages`: telas roteaveis ou experiencias finais do usuario.

Tailwind CSS deve ser usado como base de estilizacao do frontend. Componentes devem privilegiar classes utilitarias e padroes consistentes, evitando CSS avulso quando a composicao puder ser resolvida com Tailwind.

Todo componente criado deve ter teste cobrindo seu uso essencial. Para componentes visuais, o teste minimo deve validar renderizacao, conteudo principal e interacoes criticas. Para componentes com estados, cobrir ao menos o estado padrao e o fluxo principal de uso.

## Diretrizes de backend

O backend deve seguir principios REST de forma consistente.

Regras esperadas:

- Usar substantivos no plural para recursos, por exemplo `/users`, `/projects` e `/connections`.
- Usar metodos HTTP conforme a semantica: `GET` para leitura, `POST` para criacao, `PUT` ou `PATCH` para atualizacao e `DELETE` para remocao.
- Retornar status HTTP adequados, como `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409` e `422` quando aplicavel.
- Manter respostas em JSON com contratos previsiveis.
- Validar payloads de entrada antes da camada de negocio.
- Evitar verbos em rotas quando a acao puder ser representada por recurso e metodo HTTP.
- Usar paginacao, filtros e ordenacao por query params em listagens.
- Tratar erros com respostas padronizadas e mensagens claras.
- Separar responsabilidades entre controllers, services, DTOs, validacoes e entidades/modelos.

## Diretrizes de Git

O projeto deve usar Conventional Commits tanto para alteracoes do frontend quanto do backend.

Formato esperado:

```text
<tipo>(escopo opcional): <descricao curta>
```

Tipos comuns:

- `feat`: nova funcionalidade.
- `fix`: correcao de bug.
- `docs`: documentacao.
- `style`: formatacao sem mudanca de comportamento.
- `refactor`: refatoracao sem nova funcionalidade ou bugfix.
- `test`: criacao ou ajuste de testes.
- `chore`: tarefas de manutencao, build, tooling ou configuracao.

Exemplos:

```text
feat(web): add project card component
test(web): cover button essential interactions
feat(api): create projects resource
fix(api): return 404 for missing project
docs: update project context
```

## Proximos passos sugeridos

1. Definir o dominio do produto Code Connect: entidades principais, fluxos e usuarios.
2. Criar `.env.example` para `api` e `web`.
3. Configurar CORS e prefixo de API, se o frontend consumir o backend.
4. Substituir as telas e rotas de scaffold por uma primeira experiencia real do produto.
5. Considerar um pacote compartilhado futuro, por exemplo `packages/shared`, caso surjam tipos ou validadores usados pelos dois apps.
6. Atualizar os READMEs com instrucoes reais do monorepo.
