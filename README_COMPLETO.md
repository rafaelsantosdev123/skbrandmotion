# Portfolio Sara Ketelin - SK Brand Motion

Portfolio profissional para fotógrafa com design minimalista em preto e branco.

## 📋 Estrutura do Projeto

```
sara-ketelin-portfolio/
├── frontend/          # Aplicação React
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas do site
│   │   └── App.js        # Componente principal
│   ├── public/
│   └── package.json
│
├── backend/           # API FastAPI
│   ├── server.py         # Servidor principal
│   └── requirements.txt  # Dependências Python
│
└── README.md
```

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** (versão 16 ou superior) - [Baixar aqui](https://nodejs.org/)
- **Python** (versão 3.8 ou superior) - [Baixar aqui](https://www.python.org/)
- **Yarn** (gerenciador de pacotes) - Instalar com: `npm install -g yarn`

---

### 1️⃣ Configurar o Frontend (React)

```bash
# Entre na pasta do frontend
cd frontend

# Instale as dependências
yarn install

# Crie o arquivo .env com a URL do backend
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Inicie o servidor de desenvolvimento
yarn start
```

O frontend estará rodando em: **http://localhost:3000**

---

### 2️⃣ Configurar o Backend (FastAPI)

```bash
# Entre na pasta do backend
cd backend

# Crie um ambiente virtual Python
python -m venv venv

# Ative o ambiente virtual
# No Windows:
venv\Scripts\activate
# No Mac/Linux:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Crie o arquivo .env com as variáveis de ambiente
cat > .env << EOL
MONGO_URL=mongodb://localhost:27017
DB_NAME=sara_ketelin_portfolio
EOL

# Inicie o servidor
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

O backend estará rodando em: **http://localhost:8001**

---

## 📝 Como Fazer Alterações

### Editar Textos

1. **Página Inicial** - Edite `/frontend/src/pages/Home.jsx`
2. **Sobre** - Edite `/frontend/src/pages/About.jsx`
3. **Portfolio** - Edite `/frontend/src/pages/Portfolio.jsx`
4. **Contato** - Edite `/frontend/src/pages/Contact.jsx`

### Adicionar/Remover Fotos do Portfolio

Abra o arquivo `/frontend/src/pages/Portfolio.jsx` e edite o array `portfolioImages`:

```javascript
const portfolioImages = [
  {
    url: 'https://sua-url-da-foto.jpg',
    alt: 'Descrição da foto',
  },
  // Adicione mais fotos aqui
];
```

### Mudar Cores ou Estilos

1. **Cores Globais** - Edite `/frontend/src/index.css`
2. **Estilos da Home** - Edite `/frontend/src/pages/Home.css`
3. **Estilos do Portfolio** - Edite `/frontend/src/pages/Portfolio.css`
4. **Header** - Edite `/frontend/src/components/Header.css`
5. **Footer** - Edite `/frontend/src/components/Footer.css`

### Mudar Informações de Contato

Edite os arquivos:
- `/frontend/src/components/Footer.jsx` - Footer com contatos
- `/frontend/src/pages/Contact.jsx` - Página de contato

---

## 🎨 Estrutura de Páginas

### 1. Página Inicial (/)
- Hero com imagem de capa
- Seção "Sobre Mim" preview
- Trabalhos em destaque
- Call-to-action (CTA)

### 2. Sobre (/sobre)
- Hero
- Biografia completa com foto
- Cards de experiência
- Filosofia de trabalho

### 3. Portfolio (/portfolio)
- Hero
- Galeria em grid (3 colunas desktop, 2 tablet, 1 mobile)
- 14 fotos dos trabalhos
- Nota informativa

### 4. Contato (/contato)
- Hero
- Informações de contato direto
- Formulário de contato
- Horário de atendimento

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework JavaScript
- **React Router** - Navegação entre páginas
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Axios** - Requisições HTTP

### Backend
- **FastAPI** - Framework Python
- **MongoDB** - Banco de dados
- **Motor** - Driver MongoDB async
- **Uvicorn** - Servidor ASGI

---

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

---

## 🎯 Recursos Implementados

- ✅ Design minimalista em preto e branco
- ✅ Navegação fixa com menu mobile
- ✅ Animações suaves em hover e scroll
- ✅ Galeria de fotos interativa
- ✅ Formulário de contato funcional (frontend)
- ✅ Links diretos para Email e WhatsApp
- ✅ Footer com informações de contato
- ✅ SEO-friendly com alt texts nas imagens

---

## 📧 Informações de Contato (Configuradas)

- **Email**: skdesignsaraketelin@gmail.com
- **WhatsApp**: +55 19 99263-2871
- **Nome**: Sara Ketelin
- **Marca**: SK Brand Motion

---

## 🔧 Comandos Úteis

### Frontend
```bash
yarn start          # Inicia servidor de desenvolvimento
yarn build          # Cria build de produção
yarn test           # Roda testes
```

### Backend
```bash
uvicorn server:app --reload    # Inicia com auto-reload
python -m pytest               # Roda testes
```

---

## 📦 Deploy

### Frontend (Netlify, Vercel, etc)
1. Faça build: `yarn build`
2. Faça upload da pasta `build/`
3. Configure variável de ambiente: `REACT_APP_BACKEND_URL`

### Backend (Heroku, Railway, etc)
1. Configure as variáveis de ambiente
2. Faça deploy do código backend
3. Configure MongoDB (MongoDB Atlas recomendado)

---

## 🆘 Suporte

Se precisar de ajuda:
1. Verifique se todas as dependências estão instaladas
2. Certifique-se de que os arquivos `.env` estão configurados
3. Verifique se as portas 3000 e 8001 estão livres

---

## 📄 Licença

© 2025 Sara Ketelin - SK Brand Motion. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Sara Ketelin**
