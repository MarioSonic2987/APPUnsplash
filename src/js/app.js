const keyAPI = 'ulZLgJoctOPe6afPd9nCOcsEtW4Xk_amMob2PH_IYvk';
const httpProvider = `https://api.unsplash.com/search/photos/?client_id=${keyAPI}&query=`;

const cajaBusqueda = document.getElementById('busqueda');
const botonBuscar = document.getElementById('btnBuscar');
const galeriaHTML = document.getElementById('imagenes');

const getRespuesta = async (busqueda) => {
    try {
        const url = httpProvider + busqueda;
        const resp = await fetch(url);
        const datos = await resp.json();
        return datos.results;
    } catch (error) {
        console.log(error);
    }
}


botonBuscar.addEventListener('click', () => {
    getRespuesta(cajaBusqueda.value).then((array1) => {
        for (let i = 0; i < array1.length; i++) {
            galeriaHTML.innerHTML +=`<img src="${array1[i].urls.thumb}"></img>`
        }
    });
});