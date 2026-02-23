# Vegan Neighbor - E-commerce

E-commerce headless para Vegan Neighbor, una marca de productos veganos artesanales construida con Next.js 14+ y Shopify Storefront API.

**Lema de marca**: Rico, casero, vegan 🌱

## Stack Tecnológico

- **Frontend**: Next.js 14+ (App Router, React Server Components)
- **Backend**: Shopify Storefront API (GraphQL)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Tipografía**: Bebas Neue (display), JetBrains Mono (mono), Inter (sans)
- **Colores**: Negro puro (#000000), Blanco puro (#FFFFFF), Natural (#F5E6D3)

## Instalación Rápida

### 1. Requisitos Previos
- Node.js 18.17+
- npm o yarn
- Cuenta Shopify con Storefront API access token

### 2. Setup Local

```bash
# Instalar dependencias
npm install

# Crear archivo de variables de entorno
cp .env.example .env.local

# Editar .env.local con tus credenciales de Shopify
# SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
# SHOPIFY_STOREFRONT_ACCESS_TOKEN=tu_token_aqui

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) 🚀

### 3. Deploy en Vercel

```bash
# Hacer push a GitHub
git add .
git commit -m "Initial commit: Vegan Neighbor e-commerce"
git push -u origin main

# Luego conecta el repo en https://vercel.com/new
# Vercel detectará Next.js automáticamente
# Agrega las variables de entorno en Vercel dashboard
```

## Funcionalidades

✅ **Homepage** - Hero section + productos destacados
✅ **Catálogo** - Listado y detalle de productos
✅ **Carrito** - Persistencia en localStorage + checkout
✅ **Shopify Integration** - Storefront API GraphQL
✅ **ISR** - Revalidación incremental de contenido
✅ **Brand Compliance** - Manual de marca 100% integrado
✅ **Responsive** - Mobile-first design
✅ **SEO** - Metadata dinámica en todas las páginas

## Scripts

```bash
npm run dev      # Desarrollo con hot-reload
npm run build    # Build para producción
npm start        # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

## Cumplimiento Manual de Marca

- ✅ Logos (DOSLINEAS, UNALINEA, BAJADA, AVATAR)
- ✅ Tipografía (Bebas Neue, JetBrains Mono, Inter)
- ✅ Paleta de colores (Negro, Blanco, Natural)
- ✅ Tono de comunicación
- ✅ Área de seguridad en logos
- ✅ Tamaños mínimos

## Recursos

- [Manual de Marca](../VEGAN%20NEIGHBOR/VN-manual.pdf)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Hecho con ❤️ para un mundo más humano**
