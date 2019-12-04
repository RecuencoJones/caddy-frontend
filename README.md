# Caddy as nginx alternative for frontend

[Caddy](https://caddyserver.com/) is a simple http server written in go.

In most of our frontend deployments we end up using nginx to serve static files (i.e, SPA applications).
There's a lot of good things in nginx, however we thrive simpler configurations with superpowers.

Caddy provides a lot of useful features:
- Simple reverse-proxy syntax
- Access to environment variables
- HTTP/2 and QUIC
- Https by default (although we won't use it directly)

## Run the example

### Bff (backend for frontend)

```
cd bff
npm install
node index.js
```

### Static

```
cd frontend-static
caddy -envfile .env.example -port 8080
```

Open [localhost:8080](http://localhost:8080)

### Webpack

```
cd frontend-webpack
npm install
npm run build
caddy -envfile .env.example -port 8080
```

or

```
cd frontend-webpack
cp .env.example .env
npm install
npm start
```

Open [localhost:8080](http://localhost:8080)

## Run the example with docker-compose

```
docker-compose up --build --force-recreate
```

Open [localhost:8080](http://localhost:8080) and [localhost:8081](http://localhost:8081)
