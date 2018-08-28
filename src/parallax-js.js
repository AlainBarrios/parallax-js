const Parallax = () => {
  // Seleccionar todos los elementos que contengan el atributo data-parallax
    const pA = Array.from(document.querySelectorAll('[data-parallax]'));
  
  // Recorrer cada elemento para darle el efecto parallax
    pA.map(el => {
        const s = Math.min(1, Math.max(0, el.dataset.speed)) || 1;
        const r = el.dataset.reverse;
        const opa = el.dataset.opacity;
        const trans = el.dataset.translate;
        const sca = el.dataset.scale;

        let t = false;
    
    // Verificar si el ticked es false para ejecutar la animacion.
        const ticked = () => {
            if (!t) {
                window.requestAnimationFrame(isVisible);
                t = true;
            }
        };
    
    // Saber si el elemento esta visible en el viewport
        const isVisible = () => {
            const sy = window.scrollY;
            const ph = el.parentNode.getBoundingClientRect().height;
            const pt = el.parentNode.getBoundingClientRect().top + sy;
            const wh = window.innerHeight;
            const sb = sy + wh;

            if (sb > pt && sy < pt + ph) {
        
        // Restar el scrooll con el top del elemento para resetear el scroll a 0  
                const rs = sb - pt;
        
        // Sacar el porcentaje dividiendo el scroll con la distancia a recorrer
                const percent = r ? 1 - (rs / (ph + wh)) * s : rs / (ph + wh) * s;
                chooseTrans(percent, ph);
            }
      
      // Cambiar el ticked a false para validar y seguir ejecutando la animacion
            t = false;
        };
    
    // Diferentes efectos de animacion a escoger entre translate, scale y opacity.
        const chooseTrans = (percent, ph) => {
            if (trans) translate(percent, ph);
            if (sca) scale(percent);
            if (opa) opacity(percent);
        };
    
    // Hacer el efecto translate a los elementos que contiene el data-translate
        const translate = (percent, ph) => {
      
      // Obtener la diferencia restando el alto de contenedor con el alto de la imagen
            const diff = ph - el.getBoundingClientRect().height;
      
      // Multiplicar la diferencia con el porcentaje, para dar la cantidad de pixeles que se debe desplazar.
            const result = diff * percent;
            el.style.transform = `translate3d(0,${result}px,0)`;
        };
    
    // Hacer el efecto scale a los elementos que contiene el data-scale
        const scale = percent => {
      
      // Multiplicar el porcentaje con el rango que nos da para dar la cantidad la nueva cantidad de porcentaje en la que se va escalar el elemento
            const result = percent * (2 - 1) + 1;
            el.style.transform = `scale(${result})`;
        };
    
    // Hacer el efecto opacity a todos los elementos que contiene el data-opacity
        const opacity = percent => {
            el.style.opacity = `${percent}`;
        };
    
    // Ejecutamos la funcion y disparamos el evento scroll para ejecutar la animacion.
        ticked();
        window.addEventListener('scroll', ticked);
    });
};

Parallax();
