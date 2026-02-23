# Guía de Deployment en Vercel

✅ El repositorio ha sido subido a `git@github.com:anomvlito/vegan_neighbor.git`

Ahora necesitas conectarlo a Vercel para el deploy automático.

## Pasos para Conectar a Vercel

### 1. Acceder a Vercel

1. Ve a https://vercel.com
2. Sign in con tu cuenta de GitHub (o crea una)

### 2. Importar Proyecto

1. Haz click en "New Project" o "Add New"
2. Selecciona "Import Git Repository"
3. Busca y selecciona `anomvlito/vegan_neighbor`
4. Haz click en "Import"

### 3. Configurar Proyecto

Vercel detectará automáticamente que es un proyecto Next.js.

**En "Configure Project":**
- Framework: Next.js ✅ (auto-detectado)
- Root Directory: `web/` (IMPORTANTE)
- Build Command: `npm run build` ✅ (default)
- Output Directory: `.next` ✅ (default)

### 4. Agregar Variables de Entorno

**Este es el paso crítico:**

1. Desplaza a la sección "Environment Variables"
2. Agrega las siguientes variables:

```
SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=shppa_...
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
```

**Dónde obtener estas variables:**

- **SHOPIFY_STORE_DOMAIN**: Tu dominio de tienda (ej: my-store.myshopify.com)
- **SHOPIFY_STOREFRONT_ACCESS_TOKEN**:
  1. Admin de Shopify → Settings → Apps and integrations
  2. Busca "Headless" → Click en Headless app
  3. Create Storefront
  4. Copia el "Storefront access token"
  5. Pega aquí

### 5. Deployar

1. Haz click en "Deploy"
2. Espera a que se complete (2-3 minutos)
3. ¡Listo! Tu tienda estará en vivo 🚀

## Verificar Deployment

Una vez deployado:

1. Vercel te dará una URL (ej: `vegan-neighbor.vercel.app`)
2. Haz click en "Visit" para ver tu sitio
3. Verifica que:
   - ✅ Homepage carga correctamente
   - ✅ Logos son visibles
   - ✅ Productos cargan desde Shopify
   - ✅ Carrito funciona
   - ✅ Checkout redirige a Shopify

## Configuración de Dominio Personalizado (Opcional)

1. En el panel de Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado (ej: vegan-neighbor.com)
3. Sigue las instrucciones para configurar DNS

## Configurar Webhooks (Opcional - para ISR)

Para que Shopify revalide tu sitio automáticamente cuando cambies productos:

### En Shopify Admin:

1. Settings → Webhooks → "Create webhook"
2. **Event**: Products → Updated
3. **URL**: `https://tu-sitio.vercel.app/api/revalidate`
4. Click "Save webhook"

5. Repite para "Collections → Updated"

Esto asegura que tus cambios en Shopify aparezcan inmediatamente en tu sitio.

## Troubleshooting

### Error: "Missing environment variables"
→ Verifica que las variables estén en "Settings" > "Environment Variables"

### Productos no cargan en Vercel pero sí en local
→ El token de Shopify no está configurado en Vercel
→ Verifica que `SHOPIFY_STOREFRONT_ACCESS_TOKEN` está exactamente igual

### URL de checkout está rota
→ Asegúrate de que el Headless sales channel esté activo en Shopify

## Próximos Pasos

1. ✅ Deploy en Vercel
2. Configurar dominio personalizado
3. Instalar Shopify "Headless" app si aún no lo has hecho
4. Publicar productos en Shopify
5. Configurar webhooks para revalidación automática
6. Customizar diseño según necesidades

## Cambios Futuros

Para hacer cambios después del deployment:

1. Haz cambios en tu código local
2. Push a GitHub: `git push origin main`
3. Vercel auto-desplegará automáticamente

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

---

¿Preguntas? Revisa:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Shopify API Docs](https://shopify.dev/docs/api/storefront)
