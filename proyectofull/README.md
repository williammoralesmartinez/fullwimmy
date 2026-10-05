# Vimmy Frontend
Frontend independiente para **Vimmy - Snacks para Perros**.

## Archivos principales
- `index.html`: página principal
- `catalogo.html`: catálogo conectado al backend
- `login.html` / `registro.html`: autenticación
- `admin.html`: CRUD de productos
- `assets/css/styles.css`: estilos
- `assets/js/config.js`: URL del backend

## Conectar con el backend
Por defecto usa:
`http://localhost:3000/api`

Para cambiarlo, edita `assets/js/config.js` o ejecuta en la consola del navegador:
`localStorage.setItem('vimmy_api_url','https://TU-BACKEND.com/api')`

## Ejecutar localmente
Puedes abrir `index.html`, aunque se recomienda usar Live Server de VS Code.

## GitHub Pages
Este frontend sí puede publicarse en GitHub Pages. El backend Node/Express debe estar desplegado aparte y permitir CORS desde la URL de GitHub Pages.
