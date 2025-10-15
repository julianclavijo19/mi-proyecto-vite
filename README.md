<<<<<<< HEAD
# Pag_web_agenciaIA
=======
# AIAgency - Sitio Web de Agencia de IA

Un sitio web moderno y responsivo para una agencia de inteligencia artificial, construido con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Modo Oscuro**: Tema claro y oscuro con persistencia en localStorage
- **Responsivo**: Optimizado para todos los dispositivos
- **Animaciones**: Transiciones fluidas con Framer Motion
- **Navegación Suave**: Scroll automático entre secciones
- **Formulario de Contacto**: Formulario funcional con validación
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **React Router** - Enrutamiento
- **Vite** - Herramienta de construcción
- **Lucide React** - Iconos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd ai-agency-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige automáticamente los errores del linter

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── sections/        # Secciones de la página (Hero, Services, etc.)
│   └── ui/             # Componentes de UI reutilizables
├── contexts/           # Contextos de React (Theme)
├── pages/             # Páginas de la aplicación
├── styles/            # Estilos globales
├── types/             # Definiciones de tipos TypeScript
└── utils/             # Funciones utilitarias
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Colores primarios
  },
  accent: {
    // Colores de acento
  }
}
```

### Contenido
El contenido se puede modificar directamente en los componentes de sección:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Services.tsx`
- `src/components/sections/About.tsx`
- etc.

## 🌙 Modo Oscuro

El modo oscuro se implementa usando:
- Context API de React para el estado global
- Clases de Tailwind CSS (`dark:`)
- Persistencia en localStorage
- Detección de preferencia del sistema

## 📱 Responsividad

El sitio está optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Pantallas grandes (1280px+)

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `dist`

### Build Manual
```bash
npm run build
```
Los archivos estáticos se generarán en la carpeta `dist/`

## 📄 Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- Email: contacto@aiagency.com
- Teléfono: +34 900 123 456
- Ubicación: Madrid, España

---

Desarrollado con ❤️ por AIAgency


>>>>>>> d847ca4 (Pagina web)

# mi-proyecto-vite
