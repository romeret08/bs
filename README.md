# BeatSupplier - Plataforma de Beats Premium

Una plataforma web moderna y responsive para BeatSupplier, construida con React y Vite. Presenta diseño glassmorphism, fondos iridiscentes usando OGL y navegación flotante, siguiendo la guía de marca oficial.

## 🎯 Características Principales

- **Diseño Glassmorphism**: Elementos semi-transparentes con efectos de vidrio
- **Fondo Iridiscente OGL**: Fondo dinámico e interactivo usando shaders WebGL
- **Paleta de Colores Oficial**: Colores oficiales de BeatSupplier según colors3.html
- **Navegación Flotante**: Menú superior con bordes redondeados y texturas de vidrio
- **Diseño Responsive**: Enfoque mobile-first con animaciones suaves
- **Efectos de Sombra**: Jugando con profundidad y efectos visuales modernos

## 🎨 Paleta de Colores Oficial

### Colores Primarios
- **Azul Celeste**: `#A8EFFF` - Tono frío cristalino principal
- **Verde Menta**: `#B8FFEC` - Complementario fresco
- **Cian Eléctrico**: `#00F7FF` - Acento vibrante

### Colores de Acento
- **Rosa Pastel**: `#FAD5FF` - Tono psicodélico suave
- **Violeta Neón**: `#C385FF` - Acento psicodélico intenso

### Gradientes Oficiales
- **Iris**: Gradiente principal (Azul Celeste → Rosa Pastel → Verde Menta)
- **Bruma**: Gradiente secundario para efectos
- **Cristal**: Gradiente radial para fondos

## 🚀 Tecnologías

- **React 18** - Componentes funcionales modernos con hooks
- **Vite** - Build tool rápido y servidor de desarrollo
- **OGL** - Librería WebGL para efectos iridiscentes
- **CSS3 Avanzado** - Animaciones, glassmorphism y diseño responsive
- **Tipografías Orbitron/Exo 2** - Fuentes oficiales de la marca

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Background/
│   │   ├── Iridescence.jsx       # Fondo WebGL con OGL
│   │   └── Iridescence.css
│   ├── Navigation/
│   │   ├── FloatingNavigation.jsx # Menú glassmorphism
│   │   └── FloatingNavigation.css
│   └── Home/
│       ├── HomePage.jsx          # Página de inicio
│       └── HomePage.css
├── App.jsx
├── App.css
├── index.css                     # Variables CSS oficiales
└── main.jsx
```

## 🛠️ Desarrollo

### Instalación
```bash
# Instalar dependencias
npm install

# Instalar OGL (ya incluido)
npm install ogl
```

### Comandos Disponibles
```bash
# Servidor de desarrollo (Hot Reload)
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linting
npm run lint
```

## � Configuración del Fondo Iridiscente

El componente `Iridescence` acepta las siguientes props:

```jsx
<Iridescence
  color={[0.66, 0.94, 1.0]}  // Color base (RGB normalizado)
  mouseReact={true}          // Reacciona al movimiento del mouse
  amplitude={0.15}           // Amplitud del efecto
  speed={0.8}               // Velocidad de animación
/>
```

### Colores Pre-configurados de BeatSupplier:
- **Azul Celeste**: `[0.66, 0.94, 1.0]` (por defecto)
- **Verde Menta**: `[0.72, 1.0, 0.93]`
- **Rosa Pastel**: `[0.98, 0.84, 1.0]`

## 📱 Compatibilidad

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Soporte WebGL requerido para efectos OGL

## 🎨 Guía de Diseño

### Tipografías
- **Primaria**: Orbitron (títulos, marca)
- **Secundaria**: Exo 2 (texto general)
- **Monospace**: Major Mono Display (código/datos)

### Espaciado
- XS: 0.5rem | SM: 1rem | MD: 1.5rem | LG: 2rem | XL: 3rem
- Border Radius: 12px (normal) | 8px (pequeño)

### Efectos
- Glassmorphism con backdrop-filter
- Sombras en múltiples capas
- Animaciones suaves (0.3s ease)
- Hover states con transformaciones

## 🌐 URL de Desarrollo

**Local**: http://localhost:5174

## 📄 Licencia

MIT License - Proyecto desarrollado para BeatSupplier
#   b s  
 