# Skautská stránka

![Skautská stránka](https://user-images.githubusercontent.com/57263460/237047478-bb24c712-0ce1-4b6c-9c02-e19a863a72ce.jpg)

- [Návod pro uživatele (Editoři a Správci)](https://github.com/Michal124/scout-website/blob/master/N%C3%A1vod%20pro%20u%C5%BEivatele.md)
- [Návod pro autory](https://github.com/Michal124/scout-website/blob/master/N%C3%A1vod%20pro%20autory.md)

## Technologie
- **DevOps**: Docker, Gitub Actions
- **Backend**: Strapi, GraphQL
- **Frontend**: Astro, React, Tailwind

# Deployment
:warning: **Budete potřebovat vlastní server pro Strapi.**

## Backend
Zadejte hodnoty pro /backend/.env
```
HOST=0.0.0.0
PORT=1337
URL=https://strapi.vase-stranky.cz
APP_KEYS=tajne,tajne,tajne,tajne
API_TOKEN_SALT=tajne
ADMIN_JWT_SECRET=tajne
TRANSFER_TOKEN_SALT=tajne
JWT_SECRET=tajne

# Database
DATABASE_CLIENT=postgres
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=tajne

# Email
EMAIL=strapi@vase-stranky.cz
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=strapi@vase-stranky.cz
SMTP_PASSWORD=tajne

# NGINX
SSL_CERTIFICATE=tajne
SSL_CERTIFICATE_KEY=tajne
```

### Použitím Github Actions
.github / docker.yml<br />
Na server stačí nainstalovat Github Runner a pokaždé, když proběhne PUSH do branch Main, kód na serveru se aktualizuje a spustí v Dockeru.

### Manuálně
1. Nakopírujte kód a spusťte Strapi pomocí: 
```
cd backend && yarn --frozen-lockfile && yarn build && yarn start
```
2. Nastavte Postgres
3. Nastavte Nginx reverse proxy

Alternativně můžete použít docker compose
```
docker compose -f docker/compose.yml --env-file .env up --detach
```

## Frontend
Zadejte hodnoty pro /frontend/.env
```
PUBLIC_STRAPI=https://strapi.vase-stranky.cz
PUBLIC_URL=https://vase-stranky.cz
```

### Použitím Github Actions
.github / deploy.yml<br />
Spustí se automaticky, zařídí deploy do Github Pages (ty je nutné předem dovolit).

### Manuálně
1. Stusťte
```
cd frontend && yarn build
```
2. Složku /frontend/dist nakopírujte na libovolný hosting statických stránek

:warning: **Tento postup musíte zopakovat při každé změně dat ve Strapi.**


# Development

## Backend
```
cd backend && yarn develop
```

## Frontend
1. Terminál
```
cd frontend && yarn && yarn dev
```
2. Terminál
```
cd frontend && yarn tailwind
```
