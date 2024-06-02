# GitHub-Discord Integration

Esta aplicación es una solución completa para integrar GitHub y Discord, permitiendo una comunicación fluida entre ambas plataformas. Construida con TypeScript y Express, la aplicación utiliza webhooks para detectar eventos en GitHub y notificar a un canal de Discord especificado.

## Archivos Principales

### `app.ts`

Este archivo es el punto de entrada principal de la aplicación.

### `envs.ts`

Este archivo se encarga de cargar las variables de entorno desde un archivo `.env`.

### Interfaces

- `github-issue.interface.ts`: Define la interfaz para los eventos de problemas de GitHub.
- `github-star.interface.ts`: Define la interfaz para los eventos de estrellado de repositorios de GitHub.

### Presentación

- `controller.ts`: Maneja las rutas y la lógica de controladores relacionada con GitHub.

### Middlewares

- `github-sha256.ts`: Middleware para verificar la firma del webhook de GitHub.

### Servicios

- `discord.service.ts`: Servicio encargado de enviar notificaciones a Discord a través de un webhook.
- `github.service.ts`: Servicio que maneja la lógica de interacción con la API de GitHub.

## Dependencias

- `dotenv`: Librería para cargar variables de entorno desde un archivo `.env`.
- `env-var`: Utilidad para manejar variables de entorno.
- `@netlify/functions`: Paquete de Netlify para implementar funciones serverless.

## Variables de Entorno

- `DISCORD_WEBHOOK_URL`: La URL del webhook de Discord que recibirá las notificaciones.
- `GITHUB_WEBHOOK_SECRET`: El secreto utilizado para configurar el webhook de GitHub.
-`PORT`: El puerto a utilizar en desarrollo de la app