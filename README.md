# Caddy as nginx alternative for frontend

[Caddy](https://caddyserver.com/) is a simple http server written in go.

In most of our frontend deployments we end up using nginx to serve static files (i.e, SPA applications).
There's a lot of good things in nginx, however we thrive simpler configurations with superpowers.

Caddy provides a lot of useful features:
- Simple reverse-proxy syntax
- Access to environment variables

## Run the example

Run the bff in one terminal:

```
cd bff
npm install
node index.js
```

Run the frontend in another terminal:

```
cd frontend
caddy -envfile .env.example -port 8080
```

Open [localhost:8080](http://localhost:8080)

## Run the example with docker-compose

```
docker-compose up --build --force-recreate
```

Open [localhost:8080](http://localhost:8080)
