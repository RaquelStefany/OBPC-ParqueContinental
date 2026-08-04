# OBPC Parque Continental

Site da Igreja Evangélica Pentecostal O Brasil Para Cristo.

## Desenvolvimento local

1. Copie `.env.example` para `.env.local`.
2. Preencha `YVP_APP_KEY` com a App Key da YouVersion Platform.
3. Execute `npm install` e `npm run dev`.

A rota `/api/verse-of-day` funciona no Vite durante o desenvolvimento. Sem a chave, ela retorna o último versículo de fallback e mantém o site funcional.

## Vercel

Cadastre `YVP_APP_KEY` em **Settings → Environment Variables** no projeto da Vercel e faça um novo deploy. A função em `api/verse-of-day.js` será publicada automaticamente, com cache e fallback.

Nunca use o prefixo `VITE_` na App Key: variáveis com esse prefixo são expostas ao navegador.
