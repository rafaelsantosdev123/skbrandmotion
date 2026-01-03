# Como Adicionar Mais Fotos ao Portfolio

## 📸 Instruções para Adicionar as 9 Fotos Restantes

O site já está funcionando perfeitamente com 5 fotos. Para adicionar as outras 9 fotos ao portfolio, siga estes passos simples:

### Passo 1: Obter os URLs das Fotos
Após fazer upload das fotos, você receberá URLs como:
```
https://customer-assets.emergentagent.com/job_XXXXX/artifacts/nome-da-foto.jpg
```

### Passo 2: Editar o Arquivo Portfolio.jsx
Abra o arquivo: `/app/frontend/src/pages/Portfolio.jsx`

### Passo 3: Adicionar as Fotos ao Array
Localize o array `portfolioImages` (linha ~12) e adicione as novas fotos:

```javascript
const portfolioImages = [
  {
    url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/wixjdpif_IMG_0568.jpg',
    alt: 'Casamento - Noiva assinando documento',
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/iezow5ss_IMG_0706.jpg',
    alt: 'Ensaio externo',
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/l5x9595o_IMG_0882.jpg',
    alt: 'Casamento - Casal noturno',
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/ijil5cye_IMG_1082.jpg',
    alt: 'Retrato artístico',
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_d5739f53-20d0-4b59-bef8-c19166e38000/artifacts/lm5x5hen_IMG_1127.jpg',
    alt: 'Retrato profissional',
  },
  // ADICIONE AS NOVAS FOTOS AQUI:
  {
    url: 'URL_DA_FOTO_6',
    alt: 'Descrição da foto 6',
  },
  {
    url: 'URL_DA_FOTO_7',
    alt: 'Descrição da foto 7',
  },
  // ... e assim por diante
];
```

### Exemplo Completo:
```javascript
{
  url: 'https://customer-assets.emergentagent.com/job_XXXXX/artifacts/foto-nova.jpg',
  alt: 'Casamento - Cerimônia',
},
```

### Passo 4: Salvar e Ver Resultado
O site tem **hot reload** ativado, então assim que você salvar o arquivo, as mudanças aparecerão automaticamente no navegador!

---

## 🎨 Estrutura do Site

### Páginas Criadas:
1. **Início** (`/`) - Hero + Preview do trabalho + CTA
2. **Sobre** (`/sobre`) - Bio completa + Experiência + Filosofia
3. **Portfolio** (`/portfolio`) - Galeria de fotos em grid
4. **Contato** (`/contato`) - Formulário + Informações de contato

### Informações de Contato Incluídas:
- ✉️ Email: skdesignsaraketelin@gmail.com
- 📱 WhatsApp: +55 19 99263-2871

### Design:
- ✅ Monocromático (Preto e Branco)
- ✅ Minimalista e Elegante
- ✅ Totalmente Responsivo
- ✅ Animações Suaves
- ✅ Navegação Intuitiva

---

## 🚀 Como Executar

O site já está rodando! Acesse:
- **Desenvolvimento**: http://localhost:3000
- **Produção**: Após deploy, o URL será fornecido

---

## 📝 Notas

- As fotos carregam automaticamente
- O formulário de contato já está funcional (frontend)
- Mobile menu funciona perfeitamente
- Footer em todas as páginas com informações de contato
