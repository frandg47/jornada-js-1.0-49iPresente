import { charlas } from '../charlas.js';
const containerCurso = document.getElementById("containerCurso");
const filtroCurso = document.getElementById("filtroCurso");
const searchFilter = document.getElementById("searchFilter")

filtroCurso.addEventListener("change", () => {
    const filtro = filtroCurso.value;
    if(filtro ==="todos"){
        searchFilter.value = "";
        containerCurso.innerHTML = "";
        renderizar()
    }
})

searchFilter.addEventListener("input", () => {
    const filtro = filtroCurso.value;
    let filterArray =[];
    if (filtro === "") {
        alert("el campo de busqueda está vacío");
        containerCurso.innerHTML = "";
        containerCurso.innerHTML = `
        <div>
            <p> No existe coincidencias</p>
        </div>`; 
    }
    if (filtro === "orador") {
        filterArray = charlas.filter ( charla => {
            const orador = charla.orador.toLocaleLowerCase()
            console.log(orador)
            return orador.includes(searchFilter.value.toLocaleLowerCase())
        })
    }
    else
    {
        if (filtro ==="tema"){
            filterArray = charlas.filter ( charla => {
                        const title = charla.título.toLocaleLowerCase()
                        console.log(title)
                        return title.includes(searchFilter.value.toLocaleLowerCase())
                    })
        }
        else {
            filterArray = charlas;
        }
    }
        
        console.log(filterArray)
        containerCurso.innerHTML = "";
        filterArray.forEach(charla => {
            containerCurso.innerHTML += `
                <div class="col-12 col-md-4 pb-4">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="${charla.imagen}" class="card-img-top" alt="${charla.título}">
                        <div class="card-body">
                            <h5 class="card-title">${charla.título}</h5>
                            <p class="card-text">${charla.descripción}</p>
                             <a href="${window.location.origin}/html/detailPage.html?id=${charla.id}" class="btn btn-danger">Ver detalle</a>
                        </div>
                    </div>
                </div>`})
        
    })


const renderizar = () => {
    console.log("first")
   
    charlas.forEach(charla => {
        containerCurso.innerHTML += `
            <div class="col-12 col-md-4 pb-4">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${charla.imagen}" class="card-img-top" alt="${charla.título}">
                    <div class="card-body">
                    <h5 class="card-title">${charla.título}</h5>
                    <p class="card-text">${charla.descripción}</p>
                    <a href="${window.location.origin}/html/detailPage.html?id=${charla.id}" class="btn btn-danger">Ver detalle</a>
                    </div>
                </div>
            </div>
`
        }
        )
        };

renderizar ();