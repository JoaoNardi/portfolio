# 💼 Portfólio — João Nardi

Repositório do meu portfólio pessoal, organizado em estrutura monorepo com separação clara entre frontend e backend (futuro).

---

## 🗂 Estrutura do Repositório

```
portfolio/
├── frontend/          → Aplicação Angular (ativa)
├── backend/           → API REST (planejada)
├── _db/               → Scripts SQL (planejada)
├── docker-compose.yml → Orquestração de containers (planejada)
└── README.md
```

---

## 🧠 Decisões de Arquitetura

### Monorepo
Frontend e backend vivem no mesmo repositório para centralizar o controle de versão, facilitar o versionamento conjunto de features e simplificar o processo de deploy.

### Desacoplamento por responsabilidade
Mesmo dentro do monorepo, cada parte é totalmente independente — o frontend pode ser executado e deployado sem depender do backend estar pronto. Essa separação permite evoluir os dois lados em ritmos diferentes.

### Docker Compose na raiz
O `docker-compose.yml` está posicionado na raiz para orquestrar os serviços do projeto de forma unificada, facilitando a execução completa do ambiente com um único comando quando o backend for implementado.

---

## 🚀 Como Executar

### Frontend

```bash
cd frontend
npm install
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

### Ambiente completo (Docker) *Em Breve

```bash
docker-compose up
```

> O backend e o docker ainda está em fase de planejamento. Mais instruções serão adicionadas conforme o serviço for implementado.

---

## 🛠 Tecnologias

| Camada    | Tecnologia                         |
|-----------|------------------------------------|
| Frontend  | Angular · TypeScript · TailwindCSS |
| Backend   | Java · Spring                      |
| Infra     | Docker · Docker Compose            |
| Data Base | PostgreSQL · Scripts em .SQL       |
---

## 🔮 Roadmap

- [x] Estrutura base do repositório
- [x] Aplicação Angular configurada
- [ ] Implementação das seções do portfólio
- [ ] Backend (API REST)
- [ ] Pipeline CI/CD
- [ ] Deploy em produção

---

## 👨‍💻 Autor

**João Nardi** — [github.com/JoaoNardi](https://github.com/JoaoNardi)