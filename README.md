# E-Commerce Store

Aplicación web de comercio electrónico creada con Angular. El proyecto consume
la [Fake Store API] para mostrar productos y
categorías, permite consultar el detalle de un producto y mantiene un carrito
durante la sesión actual del navegador.

## Funcionalidades

- Catálogo de productos obtenido desde una API externa.
- Filtro del catálogo por categoría mediante parámetros de consulta.
- Página de detalle con galería de imágenes.
- Carrito lateral con cantidad de productos y total calculado.
- Página informativa y página para rutas no encontradas.
- Carga diferida de las páginas principales.
- Interfaz adaptable construida con Tailwind CSS.

## Tecnologías

- Angular 20 y Angular CLI 20.
- TypeScript 5.9.
- RxJS y Angular Signals para el estado reactivo.
- Tailwind CSS 3 y PostCSS.
- `date-fns` para el formato relativo de fechas.
- Karma y Jasmine como infraestructura de pruebas.

## Requisitos

- Node.js `20.19+`, `22.12+` o `24+`.
- npm 8 o posterior.

> Node.js 22.2 no cumple el requisito mínimo de Angular CLI 20. Actualiza Node
> antes de instalar las dependencias o ejecutar los comandos del proyecto.

## Instalación y ejecución local

```bash
git clone https://github.com/ING-VSARM1011/E-Commerce-Store.git
cd E-Commerce-Store
npm ci
npm start
```

La aplicación estará disponible en `http://localhost:4200/`. El servidor de
desarrollo recarga la página cuando detecta cambios en el código fuente.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera una compilación optimizada para producción. |
| `npm run watch` | Compila en modo desarrollo y observa cambios. |
| `npm test` | Ejecuta las pruebas con Karma y Jasmine. |
| `npm run ng -- generate component nombre` | Genera un componente con Angular CLI. |

La compilación se guarda en `dist/e-commerce-store/browser/`.

## Rutas

| Ruta | Vista |
| --- | --- |
| `/` | Catálogo de productos. |
| `/?category_id=<id>` | Catálogo filtrado por categoría. |
| `/product/:id` | Detalle de un producto. |
| `/about` | Información de la tienda. |
| Cualquier otra ruta | Página 404. |

## Organización del código

```text
src/app/
├── domains/info/       # Páginas informativas y 404
├── domains/products/   # Catálogo, tarjetas y detalle de producto
├── domains/shared/     # Layout, cabecera, modelos, servicios, pipes y directivas
├── app.config.ts       # Proveedores globales
└── app.routes.ts       # Rutas y carga diferida
```

Los alias `@shared`, `@products` y `@info` están definidos en `tsconfig.json`
para evitar rutas de importación extensas.

## API y datos

Los productos y las categorías se consultan desde:

- `https://api.escuelajs.co/api/v1/products`
- `https://api.escuelajs.co/api/v1/categories`

La disponibilidad y el contenido dependen de ese servicio externo. El proyecto
no incluye un backend propio, autenticación ni procesamiento de pagos.

El carrito existe únicamente en memoria: al recargar la página se pierde su
contenido. Añadir varias veces el mismo producto crea varias entradas y todavía
no existen controles para cambiar cantidades o eliminar productos del carrito.

## Pruebas y calidad

El comando `npm test` está configurado, pero actualmente el repositorio no
incluye archivos `*.spec.ts`. Antes de considerar un despliegue real conviene
añadir pruebas para los servicios, los filtros, el detalle de producto y el
carrito, además de manejar de forma visible los errores de la API.

## Compilación y despliegue

```bash
npm ci
npm test -- --watch=false
npm run build
```

El contenido generado en `dist/e-commerce-store/browser/` puede publicarse en un
alojamiento estático. El servidor debe redirigir las rutas desconocidas a
`index.html` para que Angular Router pueda resolverlas. Si el sitio se publica
en una subcarpeta, ajusta `base-href` al compilar.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta [LICENSE](LICENSE).
