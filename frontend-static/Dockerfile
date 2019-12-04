FROM abiosoft/caddy:no-stats

ENV CONTENT_ROOT /srv
ENV PROXY_API_HOST https://swapi.co/api/
ENV PROXY_BFF_HOST http://bff:3000/

COPY Caddyfile /etc/Caddyfile
COPY public /srv
