# Dummy Credentials - Chrome Extension

Una extensión de Chrome para generar credenciales de prueba (usuarios, emails y contraseñas seguras) de forma rápida y sencilla.

## Características

- 🎲 Genera usuarios dummy aleatorios
- 📧 Crea direcciones de email de prueba
- 🔐 Genera contraseñas seguras y personalizables
- 📋 Funcionalidad de copiado al portapapeles
- ⚙️ Opciones configurables para contraseñas
- 🎨 Interfaz moderna y fácil de usar

## Instalación

### Desde el código fuente (Modo desarrollador)

1. Descarga o clona este repositorio
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa el "Modo de desarrollador" en la esquina superior derecha
4. Haz clic en "Cargar extensión sin empaquetar"
5. Selecciona la carpeta que contiene los archivos de la extensión
6. La extensión aparecerá en tu barra de herramientas

## Uso

1. Haz clic en el icono de la extensión en la barra de herramientas
2. Se generarán automáticamente credenciales dummy
3. Haz clic en el botón 📋 junto a cada campo para copiar al portapapeles
4. Usa "Copiar Todo" para copiar todas las credenciales de una vez
5. Personaliza las opciones de contraseña según tus necesidades
6. Haz clic en "Generar Nuevas Credenciales" para crear un nuevo conjunto

## Opciones de Contraseña

- **Mayúsculas (A-Z)**: Incluir letras mayúsculas
- **Minúsculas (a-z)**: Incluir letras minúsculas  
- **Números (0-9)**: Incluir dígitos
- **Símbolos**: Incluir caracteres especiales (!@#$...)
- **Longitud**: Ajustable de 8 a 32 caracteres

## Archivos del Proyecto

- `manifest.json` - Configuración de la extensión
- `popup.html` - Interfaz de usuario
- `popup.css` - Estilos de la interfaz
- `popup.js` - Lógica de generación de credenciales
- `icon16.png`, `icon48.png`, `icon128.png` - Iconos de la extensión

## Desarrollo

La extensión está construida con:
- HTML5 para la estructura
- CSS3 con gradientes y animaciones
- JavaScript vanilla (sin dependencias)
- Manifest V3 para Chrome Extensions

## Características de Seguridad

- Las contraseñas generadas incluyen múltiples tipos de caracteres
- Generación aleatoria segura usando `Math.random()`
- No se almacenan ni transmiten datos sensibles
- Funciona completamente offline

## Compatibilidad

- Chrome 88+
- Manifest V3
- Funciona en modo offline

## Licencia

Este proyecto está disponible bajo la licencia MIT.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

---

## Apóyame

Si encuentras útil este proyecto, considera apoyarme:

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-☕-yellow.svg)](https://buy.stripe.com/cNi00igBN2Ki881b756EU00)

---

**Nota de Seguridad**: Esta extensión genera credenciales para propósitos de testing únicamente. No uses estas credenciales para cuentas reales o datos sensibles.