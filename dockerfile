# Etapa de build
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/package*.json ./
RUN npm install --only=production

COPY --from=build /app/dist ./dist
COPY prisma ./prisma
COPY .env .env

ENV NODE_ENV=production

RUN npx prisma generate

CMD ["node", "dist/server.js"]
