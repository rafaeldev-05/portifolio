# Portfolio | Rafael Freitas

Portfolio pessoal de Rafael Freitas de Paula, desenvolvido para apresentar experiencia profissional, projetos, tecnologias utilizadas e formas de contato.

O projeto utiliza React, Vite e TypeScript, com interface construida em Tailwind CSS e shadcn-ui. O deploy e realizado na Vercel e conta com integracao de Web Analytics e Speed Insights.

## Tecnologias Utilizadas

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn-ui
- Vercel Web Analytics
- Vercel Speed Insights

## Funcionalidades

- Apresentacao profissional
- Secao de projetos
- Secao de contato
- Layout responsivo
- Componentes reutilizaveis
- Monitoramento de acessos com Vercel Web Analytics
- Metricas de performance com Vercel Speed Insights

## Estrutura do Projeto

```text
public/              Arquivos publicos da aplicacao
src/components/      Componentes principais da interface
src/components/ui/   Componentes de UI baseados em shadcn-ui
src/hooks/           Hooks reutilizaveis
src/lib/             Utilitarios compartilhados
src/pages/           Paginas da aplicacao
vite.config.ts       Configuracao do Vite
```

## Como Executar Localmente

```bash
git clone https://github.com/rafaeldev-05/Portifolio.git
cd Portifolio
npm install
npm run dev
```

Apos iniciar o servidor de desenvolvimento, acesse a URL exibida no terminal.

## Scripts Disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versao de producao.
- `npm run build:dev`: gera o build em modo de desenvolvimento.
- `npm run lint`: executa a verificacao de lint.
- `npm run preview`: executa uma previa local do build de producao.

## Deploy na Vercel

Configuracoes recomendadas para este projeto React + Vite:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Vercel Insights

Este projeto usa:

- Vercel Web Analytics para visitantes, page views, pessoas online e dados de origem de acesso.
- Vercel Speed Insights para metricas reais de performance e experiencia do usuario.

Como validar apos o deploy:

1. Fazer deploy em producao na Vercel.
2. Acessar o dominio publicado.
3. Navegar por algumas paginas ou secoes.
4. Abrir o painel da Vercel.
5. Verificar as areas de Analytics, Speed Insights, Observability e Firewall.
6. Aguardar alguns minutos para os dados aparecerem.

Tambem e possivel validar pelo navegador em DevTools > Network, verificando chamadas relacionadas ao Vercel Analytics e ao Vercel Speed Insights.

Observacao: os dados podem nao aparecer imediatamente. Bloqueadores de anuncios, extensoes de privacidade e navegacao local podem impedir ou atrasar a coleta.

Observability, Firewall e Deployments sao recursos do painel da Vercel e nao exigem necessariamente codigo extra no frontend.

## Autor

Rafael Freitas de Paula

GitHub: [rafaeldev-05](https://github.com/rafaeldev-05)
