FROM node:22

# Diretório de trabalho no container
WORKDIR /app

# Instalação global do Vite
RUN npm install -g vite

# Instalação do utilitário para inicializar projetos
RUN npm install -g create-vite

# Porta para o servidor de desenvolvimento do Vite
EXPOSE 5173

CMD ["npm", "run", "dev"]