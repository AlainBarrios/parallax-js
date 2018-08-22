# Parallax Vanilla Javascript

Un sencillo pero hermoso parallax para que lo implentes en tu sitio web para darle ese toque moderno.

### Implentación

Agrega esta linea de código en tu archivo html donde debes incluir `data-parallax` y `data-translate="true"`
```html
<div class="parallax-container">
    <img src="./images/1.jpg" alt="Imagen de ciudad" class="parallax" data-parallax data-translate="true">
</div>
````

Se recomienda que coloques estos estilos para el contenedor y la imagen.
```css
.parallax-container{
    position: relative;
    min-height: 100vh;
    overflow: hidden;
}
.parallax{
    position: absolute;
}
```

Se pueden agregar mas efectos al parallax como opacidad `data-opacity="true"` o escalar la imagen usando `data-scale="true"`
```html
<div class="parallax-container">
    <img src="./images/1.jpg" alt="" class="parallax" data-parallax data-scale="true" data-opacity="true">
</div>
```

Si quieres reducir o aumentar la velocidad de transformación utiliza `data-speed="1"` donde el minimo es 0 y el maximo es 1
```html
<div class="parallax-container">
    <img src="./images/1.jpg" alt="" class="parallax" data-parallax data-translate="true" data-speed="0.5">
</div>
```

Puedes cambiar la dirección de la animación usando `data-reverse="true"`
```html
<div class="parallax-container">
    <img src="./images/1.jpg" alt="" class="parallax" data-parallax data-translate="true" data-reverse="true">
</div>
