fiuba-apuntes.github.io
=======================

Repositorio del sitio web del proyecto FIUBA Apuntes

# Sobre el sitio
El sitio web está realizado con [Jekyll](http://jekyllrb.com/).

El sitio web está alojado en GitHub utilizando [GitHub Pages](https://pages.github.com/)

# Cómo colaborar en el sitio
Luego de clonar el repositorio, para poder colaborar en el sitio web debes cumplir lo siquiente:

1. Tener instalado Ruby 1.9.3 o superior. Puedes abrir un terminal y ejecutar `ruby --version` para verificar la version instalada. En caso de que no se encuentre instalado, sigue las [instrucciones](https://www.ruby-lang.org/es/downloads/) para instalar Ruby.

2. Instalar la gema Bundler. Bundler es un gestor de gemas de Ruby. Si no lo tienes instalado, debes ejecutar `gem install bundler`.

3. Instalar las dependencias del proyecto. El proyecto posee un archivo `Gemfile` que incluye todas sus dependencias. Para instalarlas, se debe abrir un terminal, posicionarse en el directorio del proyecto (repositorio clonado) y ejecutar `bundle install`.

4. Correr el sitio web en forma local. Para poder visualizar los cambios antes de subirlos al repositorio se debería probar en forma local. Para ello basta con ejecutar `jekyll server` y podremos visitar el sitio web en la URL `localhost:4000`. Prestar atención a los mensajes que imprime el terminal para verificar si no hubo algún error.

## Foundation
Para el diseño general del sitio se utilizó [Foundation](http://foundation.zurb.com).

La forma en que se instaló es descargando el paquete completo de CSS y se colocaron manualmente en el proyecto.

Los archivos y directorios que han sido añadido son los siguientes:

```
.
├-- css/
|   ├-- foundation.css
|   └-- normalize.css
|
└-- js/
    ├-- vendor/
    └-- foundation.min.js 
```

La versión utilizada actualmente se puede verificar en el archivo `foundation.css`