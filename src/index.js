// Importamos el CSS desde la carpeta donde se encuentra.
import './css/style.css';

// Importamos las funciones que se necesitan para que funcione la aplicación.
import { getRespuesta } from './js/http-provider';

const cajaBusqueda = document.getElementById('busqueda');
const botonBuscar = document.getElementById('btnBuscar');
const galeriaHTML = document.getElementById('imagenes');


// Llamadas a las funciones.

// Tengo que llamar a la función que dibuja el HTML.
botonBuscar.addEventListener('click', () => {
    getRespuesta(cajaBusqueda.value).then((array1) => {
        for (let i = 0; i < array1.length; i++) {
            galeriaHTML.innerHTML +=`<img src="${array1[i].urls.thumb}"></img>`
        }
    });
});


