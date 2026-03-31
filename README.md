# dattolistudio

Site do Dattoli Studio — React + Vite.

## Execução local

```bash
npm install
npm run dev
```

Acessa em `http://localhost:5173`.

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Serve o build localmente para testar |

## Fluxo de desenvolvimento

### Desenvolver e testar

```bash
git checkout develop
# ... faz as alterações ...
git add .
git commit -m "descrição da mudança"
git push
```

O push para `develop` dispara o GitHub Actions automaticamente:
- Builda a imagem Docker para `linux/arm64`
- Publica em `ghcr.io/ottowbitt/dattolistudio:dev-<sha>`
- Atualiza o deploy em `sandbox.dattolistudio.com.br` via FluxCD (~2 min)

### Subir para produção

```bash
git checkout main
git merge develop
git push
```

O push para `main` segue o mesmo fluxo, atualizando `dattolistudio.com.br`.

### Rollback

Edita a tag da imagem em `k3s-infra/clusters/vm-1/apps/dattolistudio/prod/deployment.yaml` para o SHA anterior e faz push no `k3s-infra`.
