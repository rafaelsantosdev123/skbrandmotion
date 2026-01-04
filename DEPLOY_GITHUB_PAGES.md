# 🚀 Deploy Rápido - GitHub Pages

## ⚡ Comandos Rápidos (Cole no Terminal)

### 1️⃣ Preparar Projeto
```bash
# Entre na pasta do projeto
cd portfolio-sara

# Instale dependências
cd frontend
yarn install
```

### 2️⃣ Configurar Homepage
Abra `frontend/package.json` e mude a linha:
```json
"homepage": "https://SEU-USUARIO.github.io/portfolio-sara-ketelin",
```
Substitua `SEU-USUARIO` pelo seu username do GitHub.

### 3️⃣ Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em `+` → `New repository`
3. Nome: `portfolio-sara-ketelin`
4. Marque: `Public`
5. **NÃO** inicialize com README
6. Clique: `Create repository`

### 4️⃣ Conectar e Fazer Push
```bash
# Voltar para pasta raiz
cd ..

# Conectar ao GitHub (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/portfolio-sara-ketelin.git
git branch -M main
git push -u origin main
```

### 5️⃣ Deploy no GitHub Pages
```bash
# Entrar na pasta frontend
cd frontend

# Deploy!
yarn deploy
```

### 6️⃣ Configurar no GitHub
1. Vá no repositório do GitHub
2. Clique em `Settings`
3. Clique em `Pages` (menu lateral)
4. Em `Source`, selecione: `gh-pages` branch
5. Clique `Save`

## ✅ Pronto!

Seu site estará em:
```
https://SEU-USUARIO.github.io/portfolio-sara-ketelin
```

Aguarde 2-3 minutos para o site ficar online! 🎉

---

## 🔄 Atualizar Site (Após Mudanças)

```bash
# Salvar mudanças
git add .
git commit -m "Atualização do site"
git push

# Deploy atualização
cd frontend
yarn deploy
```

---

## 🆘 Problemas?

### Erro: "yarn not found"
```bash
npm install -g yarn
```

### Erro: "gh-pages not found"
```bash
cd frontend
yarn add gh-pages --dev
```

### GitHub pede senha
Use **Personal Access Token** em vez de senha:
- Settings → Developer settings → Personal access tokens
- Generate new token (classic)
- Marque: `repo` e `workflow`
- Use o token como senha

---

## 📋 Checklist

- [ ] Node.js instalado
- [ ] Yarn instalado
- [ ] Projeto baixado e extraído
- [ ] `homepage` configurado no package.json
- [ ] Repositório criado no GitHub
- [ ] Git conectado ao repositório
- [ ] `yarn deploy` executado
- [ ] GitHub Pages configurado
- [ ] Aguardar 2-3 minutos

---

**Dúvidas? Acesse o tutorial completo em:**
http://localhost:3000/github-pages-tutorial.html
