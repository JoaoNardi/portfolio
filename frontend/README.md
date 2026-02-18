# Frontend — Portfólio João Nardi

Aplicação SPA desenvolvida com **Angular** e **TypeScript**, responsável pela interface do portfólio pessoal.

---

## 🛠 Tecnologias

| Tecnologia  | Versão   | Uso                             |
|-------------|----------|---------------------------------|
| Angular     | 21.1.4   | Framework principal             |
| TypeScript  | 5.9.3    | Tipagem estática                |
| Node.js     | 22.20.0  | Ambiente de execução / tooling  |
| TailwindCSS | 4.1.18   | Estilização utilitária          |

---

## 🏗 Estrutura de Diretórios

```
src/
└── app/
    ├── core/          → Serviços globais, guards, interceptors
    ├── shared/        → Componentes reutilizáveis (botões, cards, etc.) e imports
    ├── components/    → Componentes específicos do projeto (banner de projetos)
    ├── pages/         → Páginas montadas (Home, Currículo, Projetos, Sobre etc.)
    ├── layout/        → Header, navbar, footer e estrutura geral
    └── app.routes.ts  → Definição de rotas
```

---

## 🚀 Como Executar

**Pré-requisitos:** Node.js 22+ e Angular CLI instalados.

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

```bash
# Build para produção
ng build
```

Os artefatos gerados ficam em `dist/`.

---

## 🎨 Design

A interface foi pensada com base em:

- Hierarquia visual clara entre seções
- Espaçamento consistente via sistema de escala do Tailwind
- Responsividade desktop e mobile
- Paleta de cores definidas

---

## 🔮 Evoluções Planejadas

- Integração com a futura API backend
- Dark mode
- Animações com Angular Animations
- Internacionalização (i18n)
- Deploy automatizado via CI/CD

---

> Para contexto geral do projeto (monorepo, backend, docker), consulte o [README da raiz](../README.md).