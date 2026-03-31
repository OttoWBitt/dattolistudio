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

### 1. Desenvolver

Trabalhe sempre na `develop` (ou em uma feature branch):

```bash
git checkout develop
# ... faz as alterações ...
git add .
git commit -m "descrição da mudança"
git push
```

### 2. Abrir PR para develop

Abra um PR da sua branch para `develop`. A pipeline vai:
- Rodar `npm run build` e o build Docker para verificar erros (**sem publicar imagem**)
- Postar um comentário lembrando: use **Squash merge**

Após o merge:
- Imagem publicada em `ghcr.io/ottowbitt/dattolistudio:dev-<sha>`
- Deploy automático em `sandbox.dattolistudio.com.br` via FluxCD (~2 min)

### 3. Subir para produção

Abra um PR de `develop → main`. Use **Merge commit**.

Após o merge:
- Imagem publicada em `ghcr.io/ottowbitt/dattolistudio:<sha>`
- Deploy automático em `dattolistudio.com.br` via FluxCD (~2 min)
- PR de backport `main → develop` criado automaticamente

### 4. Backport

Após o merge na `main`, um PR `main → develop` é aberto automaticamente. Use **Merge commit**.

### Rollback

Edita a tag da imagem em `k3s-infra/clusters/vm-1/apps/dattolistudio/prod/deployment.yaml` para o SHA anterior e faz push no `k3s-infra`.
