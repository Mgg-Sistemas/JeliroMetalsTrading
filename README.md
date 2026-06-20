# Jeliro Metals Trading — Landing Page

Landing page corporativa para Jeliro Metals Trading.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** para estilos
- **Bilingüe** ES / EN (selector de idioma)
- Despliegue en **Vercel**

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción (salida en dist/)
npm run preview  # previsualizar el build
```

## Flujo de trabajo (Git Flow)

- `main` — rama estable / producción
- `dev` — rama de integración / desarrollo
- `feature/*` — ramas de funcionalidades

## Estructura

```
img/            # paleta de marca, logo y assets provistos
src/
  components/   # secciones de la landing (Hero, Services, About, Metals, Contact, Footer)
  i18n/         # diccionarios ES/EN y contexto de idioma
```
