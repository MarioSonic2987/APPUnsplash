(()=>{"use strict";const e=document.getElementById("busqueda"),t=document.getElementById("btnBuscar"),n=document.getElementById("imagenes"),c=async e=>{try{const t="https://api.unsplash.com/search/photos/?client_id=ulZLgJoctOPe6afPd9nCOcsEtW4Xk_amMob2PH_IYvk&query="+e,n=await fetch(t);return(await n.json()).results}catch(e){console.log(e)}};t.addEventListener("click",(()=>{c(e.value).then((e=>{for(let t=0;t<e.length;t++)n.innerHTML+=`<img src="${e[t].urls.thumb}"></img>`}))}));const s=document.getElementById("busqueda"),u=document.getElementById("btnBuscar"),l=document.getElementById("imagenes");u.addEventListener("click",(()=>{c(s.value).then((e=>{for(let t=0;t<e.length;t++)l.innerHTML+=`<img src="${e[t].urls.thumb}"></img>`}))}))})();
//# sourceMappingURL=bundle.af5bb92986a984f19567.js.map