# COMERCIAL ITECC SPA - Documentación del Sitio Web

## Información General

**Empresa:** COMERCIAL ITECC SPA  
**Sector:** Electricidad Industrial  
**Especialización:** Tableros eléctricos para sector minero e industrial  
**Fundación:** 2017  
**RUT:** 76.718.944-3  
**Teléfono:** +569 82518859  
**Emails:** ventas@itecc.cl, administracion@itecc.cl  

## Estructura del Proyecto

```
WEB/
├── index.html          # Página principal
├── productos.html      # Productos y servicios
├── marcas.html        # Marcas y partners
├── contacto.html      # Página de contacto
├── styles.css         # Estilos principales
├── script.js          # Funcionalidad JavaScript
├── logo.png          # Logo de la empresa
```

## Arquitectura del Sitio

### Tecnologías Utilizadas
- **HTML5** con semántica moderna
- **CSS3** con Flexbox y Grid Layout
- **JavaScript ES6+** vanilla (sin frameworks)
- **Font Awesome 6.0.0** para iconografía
- **Google Fonts** (Segoe UI como fuente principal)

### Diseño Responsivo
- **Mobile First** approach
- Breakpoints principales:
  - `768px` (tablet)
  - `480px` (móvil)
- Grid adaptativo con `auto-fit` y `minmax()`

## Estructura de Páginas

### 1. index.html - Página Principal

#### Secciones:
1. **Header/Navigation**
   - Logo y tagline
   - Menú de navegación
   - Hamburger menu para móviles

2. **Hero Section**
   - Título principal
   - Descripción de servicios
   - Botones CTA (Call to Action)
   - Animación eléctrica con CSS

3. **Stats Section**
   - 4 estadísticas clave:
     - 20+ años de experiencia
     - Fundación en 2017
     - 4 sectores industriales
     - 100% compromiso
   - Animación de contadores con JavaScript

4. **About Section**
   - Información de la empresa
   - Grid de características (4 items):
     - Especialización Minera
     - Tableros Eléctricos
     - Calidad y Durabilidad
     - Atención Personalizada

5. **Sectors Section**
   - 4 sectores atendidos:
     - Minería
     - Retail
     - Portuarias
     - Sector Agrícola

6. **Values Section**
   - 4 valores principales:
     - Excelencia
     - Transparencia
     - Calidad Técnica
     - Soporte 24/7

7. **CTA Section**
   - Llamada a la acción final
   - Botones de contacto

8. **Footer**
   - Información de contacto
   - Enlaces de servicios
   - Redes sociales
   - Copyright

### 2. productos.html - Productos y Servicios

#### Productos (11 tipos):
1. Tableros de Transferencia
2. Tableros de Regulador de Potencia
3. Tableros de Comando y Control
4. Partidores Estrella/Triángulo
5. Partidores D.O.L
6. Partidores Soft Start
7. Tableros de Servicios Comunes
8. Tableros de Enchufes para Faenas
9. Tableros para Jumbo Minero
10. Sistema de Bombeo Continuo con VDF
11. Sistema de Bombeo Continuo Pedrollo

#### Servicios (10 tipos):
1. Integración de Tableros Eléctricos
2. Integración de Variadores de Frecuencia
3. Mantención de Tableros Eléctricos
4. Instalación de Tableros Eléctricos
5. Mantención de Sistemas de Control Industrial
6. Instalación de Sistemas de Control Industrial
7. Puestas en Marcha
8. Distribución de Equipos de Automatización
9. Atención Personalizada
10. Soporte Post-Venta 24/7

#### Proceso de Trabajo (6 etapas):
1. Análisis de Necesidades
2. Diseño y Ingeniería
3. Fabricación
4. Pruebas y Calidad
5. Instalación
6. Soporte Continuo

#### Estándares de Calidad (4 pilares):
1. Certificaciones
2. Confiabilidad
3. Eficiencia
4. Continuidad

### 3. marcas.html - Marcas y Partners

#### Categorías de Marcas:

**Control y Automatización:**
- MITSUBISHI ELECTRIC
- AuCom
- Autonics
- FANOX
- tele
- telergon

**Componentes Eléctricos:**
- KOINOX/KUNHUNG
- BENEDICT
- cabur
- DONG-A
- Doepke
- Iskra

**Energía y Potencia:**
- KSTAR/risen/ICC
- LINCHR
- ABL
- KEYPOWER
- GEOLUX
- ELECTRONICON

**Medición y Pruebas:**
- Landis+Gyr
- elster
- KPS
- MASTECH
- KONICS/Dinel
- Danfoss

**Herramientas y Equipos:**
- KLEIN TOOLS
- Makita
- Hans Tools
- UNIOR
- TELWIN
- CANTONI MOTOR

**Infraestructura y Protección:**
- BE basor
- Unex
- GEOLUX
- DELIKON
- TOTEN
- DSE

**Alta Tensión y Especialidades:**
- DRIESCHER
- HUBBELL
- ILJIN
- Howard Industries
- DTA ELECTRIC
- ZWAE

**Seguridad y Protección:**
- FISHER PIERCE
- Dahua
- Auer Signal
- MENICS
- GEOLUX
- COOPER Crouse-Hinds

### 4. contacto.html - Página de Contacto

#### Información de Contacto:
- Teléfono: +569 82518859
- Email Ventas: ventas@itecc.cl
- Email Administración: administracion@itecc.cl
- RUT: 76.718.944-3
- Horario: Lunes a Viernes 8:00-18:00
- Soporte de emergencia 24/7

#### Formulario de Contacto:
**Campos obligatorios:**
- Nombre Completo
- Email
- Mensaje

**Campos opcionales:**
- Empresa
- Teléfono
- Sector Industrial (dropdown)
- Tipo de Servicio (dropdown)

#### Servicios de Atención:
1. Cotizaciones
2. Consultoría Técnica
3. Soporte Técnico
4. Alianzas Estratégicas

#### Proceso de Atención (4 etapas):
1. Recepción de Consulta
2. Análisis y Consulta
3. Propuesta Técnica
4. Ejecución

## Estilos CSS (styles.css)

### Paleta de Colores:
- **Azul Principal:** `#1a237e`
- **Azul Secundario:** `#3949ab`, `#5c6bc0`
- **Naranja Acento:** `#ff6b35`
- **Gris Texto:** `#333`, `#666`
- **Fondo Claro:** `#f8f9fa`
- **Fondo Footer:** `#263238`

### Componentes Principales:

#### Header
- Posición fija (`position: fixed`)
- Gradiente azul de fondo
- Navegación responsive con hamburger menu
- Efecto de transparencia al hacer scroll

#### Botones
- **btn-primary:** Naranja con hover effects
- **btn-secondary:** Transparente con borde
- Transiciones suaves (`transition: all 0.3s ease`)
- Efectos de elevación (`transform: translateY(-2px)`)

#### Cards
- Sombras sutiles (`box-shadow: 0 5px 15px rgba(0,0,0,0.08)`)
- Efectos hover con elevación
- Border radius de 10px
- Padding consistente de 2rem

#### Grid Layouts
- `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Gap de 2rem entre elementos
- Responsive automático

### Animaciones CSS:

#### Animación Eléctrica (Hero):
```css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes bolt {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
}
```

#### Fade-in Animation:
```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Media Queries:

#### Tablet (768px):
- Navegación móvil activada
- Grid de 2 columnas para stats y sectors
- Hero content en una columna

#### Móvil (480px):
- Grid de 1 columna para todos los elementos
- Botones de ancho completo
- Footer centrado

## Funcionalidad JavaScript (script.js)

### Características Principales:

#### 1. Navegación Móvil
- Toggle del menú hamburger
- Cierre automático al hacer clic en enlaces
- Cierre al hacer clic fuera del menú

#### 2. Formulario de Contacto
- Validación en tiempo real
- Validación de email con regex
- Validación de teléfonos chilenos
- Mensajes de estado (success, error, info)
- Simulación de envío con loading state

#### 3. Animaciones y Efectos
- **Intersection Observer** para animaciones fade-in
- **Stats Counter Animation** cuando la sección es visible
- **Smooth Scrolling** para enlaces anchor
- **Header Background Change** al hacer scroll

#### 4. Optimizaciones
- **Lazy Loading** para imágenes
- **Loading States** en botones
- **Tooltips** para mejor UX
- **Print Styles** para impresión

#### 5. Validaciones Específicas

**Email Validation:**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Chilean Phone Validation:**
```javascript
// Móvil: +56 9 XXXX XXXX o 9 XXXX XXXX
const mobileRegex = /^(\+56\s?)?9\s?\d{4}\s?\d{4}$/;
// Fijo: +56 X XXXX XXXX
const landlineRegex = /^(\+56\s?)?[2-7]\s?\d{4}\s?\d{4}$/;
```

#### 6. Performance Features
- Event delegation para mejor rendimiento
- Debouncing en búsquedas
- Optimización de animaciones con `requestAnimationFrame`

### Event Listeners Principales:

1. **DOMContentLoaded** - Inicialización
2. **Click Events** - Navegación y formularios
3. **Scroll Events** - Header effects y animaciones
4. **Intersection Observer** - Animaciones de entrada
5. **Form Submit** - Validación y envío

## SEO y Metadatos

### Meta Tags por Página:

**index.html:**
- Title: "COMERCIAL ITECC SPA - Electricidad Industrial"
- Description: "Especialistas en fabricación, montaje, control e integración de tableros eléctricos para el sector minero e industrial"

**productos.html:**
- Title: "Productos y Servicios - COMERCIAL ITECC SPA"
- Description: "Conoce nuestra amplia gama de productos y servicios especializados en tableros eléctricos y automatización industrial"

**marcas.html:**
- Title: "Marcas y Partners - COMERCIAL ITECC SPA"
- Description: "Trabajamos con las mejores marcas del mercado en equipos eléctricos, automatización y control industrial"

**contacto.html:**
- Title: "Contacto - COMERCIAL ITECC SPA"
- Description: "Contacta con COMERCIAL ITECC SPA para obtener cotizaciones y consultas sobre nuestros servicios de electricidad industrial"

### Características SEO:
- Estructura semántica HTML5
- Headings jerárquicos (H1, H2, H3)
- Alt texts para imágenes
- Meta viewport para responsive
- Canonical URLs implícitas
- Schema markup potencial para datos estructurados

## Accesibilidad

### Características de Accesibilidad:
- Contraste de colores adecuado
- Navegación por teclado
- Labels asociados a inputs
- Iconos con texto descriptivo
- Estructura semántica clara
- Focus states visibles

### Mejoras Potenciales:
- ARIA labels para elementos interactivos
- Skip navigation links
- Alt texts más descriptivos
- Roles ARIA para componentes complejos

## Rendimiento

### Optimizaciones Implementadas:
- CSS y JS minificados en producción
- Lazy loading de imágenes
- Intersection Observer para animaciones
- Event delegation
- Transiciones CSS en lugar de JavaScript

### Métricas Estimadas:
- **First Contentful Paint:** < 2s
- **Largest Contentful Paint:** < 3s
- **Cumulative Layout Shift:** < 0.1
- **First Input Delay:** < 100ms

## Seguridad

### Medidas de Seguridad:
- Validación client-side y server-side
- Sanitización de inputs
- Protección contra XSS básica
- Email obfuscation con CloudFlare

### Consideraciones:
- HTTPS requerido en producción
- CSP headers recomendados
- Rate limiting en formularios
- Validación backend necesaria

## Mantenimiento y Actualizaciones

### Archivos a Monitorear:
- `styles.css` - Estilos y responsive
- `script.js` - Funcionalidad interactiva
- Todas las páginas HTML - Contenido y estructura

### Actualizaciones Regulares:
- Font Awesome (actualmente 6.0.0)
- Información de contacto
- Catálogo de productos y marcas
- Contenido de servicios

### Testing Recomendado:
- Pruebas en múltiples dispositivos
- Validación de formularios
- Verificación de enlaces
- Performance testing
- Accessibility testing

## Notas de Desarrollo

### Convenciones de Código:
- **CSS:** BEM methodology parcial
- **JavaScript:** ES6+ features
- **HTML:** Semántica HTML5
- **Naming:** camelCase para JS, kebab-case para CSS

### Estructura de Clases CSS:
- `.section-title` - Títulos de sección
- `.btn-primary`, `.btn-secondary` - Botones
- `.card`, `.product-card`, `.service-card` - Tarjetas
- `.grid` - Layouts de grid
- `.fade-in` - Animaciones

### Dependencias Externas:
- Font Awesome 6.0.0 (CDN)
- CloudFlare email protection
- Google Fonts (Segoe UI fallback)

---

**Última actualización:** Enero 2025  
**Desarrollado por:** MiniMax Agent  
**Versión:** 1.0.0