# Portfolio Sara Ketelin - SK Brand Motion

Site profissional de portfolio para fotógrafa com design minimalista em preto e branco.

## 🎨 Sobre o Projeto

Portfolio completo desenvolvido em React com design elegante e minimalista, focado em destacar o trabalho fotográfico de Sara Ketelin através da marca SK Brand Motion.

## 📋 Características

- ✨ Design monocromático (preto e branco)
- 📱 Totalmente responsivo
- ⚡ Desenvolvido em React 19
- 🎯 4 páginas completas
- 📸 14 fotos no portfolio
- 🎨 Animações suaves
- 📧 Formulário de contato

## 🚀 Páginas

1. **Início** (`/`) - Hero, preview sobre, trabalhos em destaque, CTA
2. **Sobre** (`/sobre`) - Biografia completa, experiência, filosofia
3. **Portfolio** (`/portfolio`) - Galeria com 14 fotos em grid responsivo
4. **Contato** (`/contato`) - Formulário e informações de contato

## 💻 Tecnologias

### Frontend
- React 19.0.0
- React Router 7.5.1
- Tailwind CSS 3.4.17
- Lucide React (ícones)
- Axios

### Backend
- FastAPI 0.110.1
- MongoDB (Motor)
- Python 3.11

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 16+
- Yarn
- Python 3.8+

### Frontend

```bash
cd frontend
yarn install
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env
yarn start
```

Site rodando em: http://localhost:3000

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

API rodando em: http://localhost:8001

## 📂 Estrutura do Projeto

```
/
├── frontend/
│   ├── src/
│   │   ├── pages/          # Páginas do site
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilitários
│   ├── public/             # Arquivos públicos
│   └── package.json
│
├── backend/
│   ├── server.py           # API FastAPI
│   └── requirements.txt
│
└── README.md
```

## ✏️ Como Editar

### Adicionar/Remover Fotos
Edite `/frontend/src/pages/Portfolio.jsx`:
```javascript
const portfolioImages = [
  {
    url: 'https://url-da-sua-foto.jpg',
    alt: 'Descrição da foto',
  },
  // Adicione mais aqui
];
```

### Mudar Textos
- Home: `/frontend/src/pages/Home.jsx`
- Sobre: `/frontend/src/pages/About.jsx`
- Portfolio: `/frontend/src/pages/Portfolio.jsx`
- Contato: `/frontend/src/pages/Contact.jsx`

### Mudar Cores
Edite `/frontend/src/index.css` nas variáveis CSS.

## 📞 Informações de Contato

- **Email**: skdesignsaraketelin@gmail.com
- **WhatsApp**: +55 19 99263-2871
- **Nome**: Sara Ketelin
- **Marca**: SK Brand Motion

## 🌐 Deploy

### Netlify (Recomendado)
1. `cd frontend && yarn build`
2. Faça upload da pasta `build/`
3. Configure variável: `REACT_APP_BACKEND_URL`

### Vercel
1. Conecte com GitHub
2. Deploy automático

## 📄 Licença

© 2025 Sara Ketelin - SK Brand Motion. Todos os direitos reservados.

## 🎯 Desenvolvido com

- ❤️ Amor
- ☕ Café
- 🎨 Design minimalista
- 💻 Código limpo

---

**Desenvolvido para Sara Ketelin - SK Brand Motion**
