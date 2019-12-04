FROM node:dubnium as build

WORKDIR /build

COPY . .

RUN npm ci \
 && npm run build

FROM abiosoft/caddy:no-stats

ENV CONTENT_ROOT /srv
ENV PROXY_API_HOST https://swapi.co/api/
ENV PROXY_BFF_HOST http://bff:3000/

COPY --from=build /build/Caddyfile /etc/Caddyfile
COPY --from=build /build/dist /srv
