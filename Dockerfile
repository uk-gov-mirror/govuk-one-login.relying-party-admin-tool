FROM node:24.22.1-alpine3.24@sha256:1200d815de24f8dcca745fbf7651d166034a35adbcad8860a8538ffff44f1420 as builder

WORKDIR /app

COPY . .

RUN apk add --no-cache git && npm run install-all && npm run build && npm ci --omit=dev

FROM node:24.22.1-alpine3.24@sha256:1200d815de24f8dcca745fbf7651d166034a35adbcad8860a8538ffff44f1420 as final

RUN apk add --no-cache tini
RUN apk add --no-cache curl

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ node_modules
COPY --from=builder /app/dist/ dist

ENV NODE_ENV "production"
ENV PORT 6001
EXPOSE $PORT

HEALTHCHECK CMD curl --fail http://localhost:6001/healthcheck || exit 1

USER node

ENTRYPOINT ["tini", "--"]

CMD ["npm", "start"]
