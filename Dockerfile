
# Usa Node.js 24 em uma imagem Alpine, mais leve
FROM node:24-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências

COPY package*.json ./

# Instala apenas as dependências necessárias para produção
RUN npm ci --omit=dev

# Copia o código da aplicação e os arquivos da interface
COPY --chown=node:node app.js ./
COPY --chown=node:node public ./public

# Executa a aplicação sem utilizar o usuário administrador (root)
USER node

# Informa que a aplicação utiliza a porta 3000
EXPOSE 3000

# Comando executado ao iniciar o container
CMD ["node", "app.js"]
