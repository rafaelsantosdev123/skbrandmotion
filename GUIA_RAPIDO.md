# 🚀 Guia Rápido - Portfolio Sara Ketelin

## ⚡ Instalação Rápida (5 minutos)

### 1. Instalar Node.js e Python
- **Node.js**: https://nodejs.org/ (baixe a versão LTS)
- **Python**: https://www.python.org/ (versão 3.8+)

### 2. Instalar Yarn (Gerenciador de Pacotes)
```bash
npm install -g yarn
```

### 3. Rodar o Frontend

```bash
# Entre na pasta frontend
cd frontend

# Instale as dependências
yarn install

# Crie o arquivo .env
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Inicie o site
yarn start
```

✅ Site rodando em: http://localhost:3000

---

## 📝 Como Editar

### ✏️ Mudar Textos
- Abra os arquivos em `frontend/src/pages/`
- Edite os textos diretamente no código
- Salve e veja as mudanças automaticamente no navegador

### 📸 Adicionar/Remover Fotos
1. Abra `frontend/src/pages/Portfolio.jsx`
2. Encontre o array `portfolioImages`
3. Adicione ou remova fotos:
```javascript
{
  url: 'https://url-da-sua-foto.jpg',
  alt: 'Descrição da foto',
},
```

### 🎨 Mudar Cores
1. Abra `frontend/src/index.css`
2. Mude as cores nas variáveis CSS
3. Exemplo:
```css
--background: 0 0% 100%;  /* Fundo branco */
--foreground: 0 0% 0%;    /* Texto preto */
```

### 📧 Mudar Contatos
1. Abra `frontend/src/components/Footer.jsx`
2. Mude email e telefone
3. Abra `frontend/src/pages/Contact.jsx` e faça o mesmo

---

## 🔥 Editores Recomendados

- **Visual Studio Code** (Gratuito): https://code.visualstudio.com/
  - Instale extensão: "ES7+ React/Redux/React-Native snippets"
  - Instale extensão: "Tailwind CSS IntelliSense"
  - Instale extensão: "Prettier"

- **Notepad++** (Windows): https://notepad-plus-plus.org/
- **Sublime Text**: https://www.sublimetext.com/

---

## 🆘 Problemas Comuns

### "yarn: command not found"
```bash
npm install -g yarn
```

### "Port 3000 already in use"
```bash
# Mude a porta no terminal:
PORT=3001 yarn start
```

### Alterações não aparecem
- Salve o arquivo (Ctrl+S)
- Recarregue o navegador (F5)
- Se não funcionar, pare o servidor (Ctrl+C) e rode `yarn start` novamente

---

## 📱 Ver no Celular (mesma rede WiFi)

1. No terminal onde o site está rodando, procure:
```
On Your Network:  http://192.168.X.X:3000
```

2. Acesse esse endereço no celular

---

## 💡 Dicas

1. **Sempre salve** os arquivos após editar (Ctrl+S)
2. **Mantenha o terminal aberto** enquanto trabalha
3. **Use Ctrl+C** para parar o servidor
4. **Faça backup** antes de grandes mudanças
5. **Teste no celular** para ver como fica responsivo

---

## 📞 Informações Configuradas

- Email: skdesignsaraketelin@gmail.com
- WhatsApp: +55 19 99263-2871
- Portfolio: 14 fotos
- Páginas: Início, Sobre, Portfolio, Contato

---

## 🎯 Próximos Passos

1. ✅ Rodar o site localmente
2. ✅ Explorar e fazer pequenas mudanças
3. ✅ Adicionar mais fotos se quiser
4. ✅ Personalizar textos
5. ✅ Publicar online (Netlify, Vercel)

---

**Qualquer dúvida, abra o README.md completo!**
