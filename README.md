# Bodystyle Docs

[![Documentation](https://img.shields.io/badge/Docs-Bodystyle-blue?style=for-the-badge)](https://fedemanzano.github.io/docs-bodystyle)

Documentación oficial de la biblioteca Bodystyle, construida como un sitio estático de HTML, CSS y JavaScript para mostrar componentes, utilidades, ejemplos y guías de uso.

## Descripción

Bodystyle es una biblioteca de estilos y utilidades para la creación rápida de interfaces front-end de sitios y aplicaciones web. Esta documentación sirve como referencia visual y práctica para explorar sus funcionalidades, módulos y patrones de uso.

La documentación incluye:

- Introducción y filosofía del framework
- Grid y utilitarios
- Formularios, botones, alertas, tablas y más
- Módulos interactivos y dinámicos
- Ejemplos demostrativos por secciones
- Guía de inicio rápido

## Requisitos

No requiere instalación de dependencias para visualizar la documentación localmente.

Necesitarás solo:

- Un navegador moderno
- Un servidor local simple (opcional, pero recomendado)

## Ejecutar localmente

### Opción 1: abrir directamente

Puedes abrir el archivo `index.html` directamente en el navegador.

### Opción 2: servidor local

Desde la raíz del proyecto ejecuta:

```bash
python -m http.server 8000
```

Luego abre en tu navegador:

```text
http://localhost:8000
```

## Estructura del proyecto

```text
.
├── css/
│   ├── bodystyle.min.css
│   ├── docs.css
│   ├── index.css
│   └── show-dark.min.css
├── images/
├── js/
│   ├── docs-body.js
│   └── index.js
├── pages/
│   ├── get_started.html
│   ├── botones.html
│   ├── formularios.html
│   ├── grid.html
│   ├── ...
│   └── muestras/
├── plantilla/
│   └── plantilla.html
├── index.html
├── README.md
├── sitemap.xml
└── favicon.ico
```

## Páginas principales

- `index.html`: página principal del sitio
- `pages/get_started.html`: inicio de la documentación
- `pages/` : documentación por componentes y utilidades
- `plantilla/plantilla.html`: plantilla base para pruebas

## Uso

La documentación está pensada para ser consultada en navegador y sirve como guía visual para aprender cómo aplicar Bodystyle en proyectos reales.

## Instalar como aplicación

La documentación incluye soporte PWA. Al visitarla desde un navegador compatible,
elige **Instalar Bodystyle Docs** o **Agregar a la pantalla de inicio** en el menú
del navegador. Se abrirá como una aplicación independiente y las páginas visitadas
quedarán disponibles para consultar sin conexión.

La instalación requiere servir el sitio mediante HTTPS (GitHub Pages ya lo hace)
o desde `localhost`. No funciona al abrir los archivos con `file://`.

Si quieres probar el framework en un proyecto nuevo, revisa la sección de inicio rápido dentro de la documentación:

- `pages/get_started.html`

## Acceso a la documentación

La versión actual de la documentación está orientada a Bodystyle v6.5.0 y se puede consultar desde la landing principal del proyecto:

```text
index.html
```

## Contribución

Si deseas colaborar con mejoras en la documentación:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio.
3. Realiza tus ajustes y corrige contenido o ejemplos.
4. Envía un pull request con una descripción clara.

## Licencia

Este proyecto está distribuido bajo la licencia correspondiente del repositorio original de Bodystyle. Revisa el archivo del proyecto principal o la información disponible en GitHub para verificar la licencia exacta.

## Créditos

Proyecto basado en Bodystyle y su documentación visual, desarrollada para facilitar el aprendizaje y la implementación de estilos y componentes reutilizables para frontend.

---

<div align="center">

### Hecho con ❤️ por **Fede Manzano**

</div>
