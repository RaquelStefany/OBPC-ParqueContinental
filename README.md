# OBPC Parque Continental

Site institucional da Igreja O Brasil Para Cristo — Parque Continental.

## Sobre o projeto

Este projeto foi desenvolvido para apresentar a igreja à comunidade de forma acolhedora, moderna e acessível. O site reúne as principais informações para quem deseja conhecer a OBPC Parque Continental, participar de uma programação ou encontrar um lugar para congregar.

Por meio dele, visitantes e membros podem conhecer:

- a história e a identidade da igreja;
- os dias, horários e detalhes dos cultos;
- a agenda e o próximo encontro da programação;
- os conjuntos e departamentos da igreja;
- o versículo do dia, integrado à YouVersion;
- o endereço e as formas de chegar à igreja.

A experiência foi pensada para funcionar bem tanto em computadores quanto em dispositivos móveis, mantendo as cores e a identidade visual da Igreja O Brasil Para Cristo.

## Tecnologias

O site foi construído com React, Vite e CSS, além de uma integração serverless para disponibilizar o versículo do dia de forma dinâmica em ambiente local e na Vercel.

## Desenvolvimento local

1. Copie `.env.example` para `.env.local`.
2. Preencha `YVP_APP_KEY` com a App Key da YouVersion Platform.
3. Execute `npm install` e `npm run dev`.

A rota `/api/verse-of-day` funciona no Vite durante o desenvolvimento. Sem a chave, ela retorna o último versículo de fallback e mantém o site funcional.

## Vercel

Cadastre `YVP_APP_KEY` em **Settings → Environment Variables** no projeto da Vercel e faça um novo deploy. A função em `api/verse-of-day.js` será publicada automaticamente, com cache e fallback.

Nunca use o prefixo `VITE_` na App Key: variáveis com esse prefixo são expostas ao navegador.
