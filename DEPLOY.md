# Despliegue

La tienda es una app Next.js (App Router) compilada con `output: "standalone"` y empaquetada en una
imagen Docker de tres etapas (`Dockerfile`): instala dependencias, construye, y copia solo el
servidor standalone + assets estáticos a una imagen final `node:22-alpine` corriendo como usuario
no root.

## Pruebas locales (sin Traefik)

```bash
cp .env.example .env   # opcional en local
docker compose -f docker-compose.local.yml up --build
```

Abre http://localhost:3000

## Producción (VPS con Traefik compartido)

`docker-compose.yml` sigue el mismo patrón de infraestructura que el módulo ICR Almacén: Docker
Compose + Traefik como reverse proxy con TLS automático (Let's Encrypt), enrutando por subdominio
con `Host()`.

Asume que en el VPS ya existe una red externa de Docker donde corre el Traefik compartido, y que
ese Traefik tiene configurado un `certresolver` llamado `letsencrypt` y los entrypoints `web`
(puerto 80) y `websecure` (puerto 443). Si el nombre de la red externa o del certresolver en tu
Traefik real es distinto, ajusta `docker-compose.yml` (`networks.traefik_public.name` y las labels
`traefik.*`) antes de desplegar.

```bash
cp .env.example .env
# editar .env y poner el dominio real, p. ej. DOMAIN=tienda.icrinversiones.pe

docker compose up -d --build
```

## Variables de entorno

| Variable | Uso |
|---|---|
| `DOMAIN` | Dominio público que Traefik enruta hacia el contenedor (solo se usa en `docker-compose.yml`, no dentro de la app) |
