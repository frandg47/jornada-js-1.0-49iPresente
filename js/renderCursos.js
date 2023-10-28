import { charlas } from '../charlas.js';
const containerCurso = document.getElementById("containerCurso");

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
                    <a href="${window.location.origin}/detailPage.html?id=${charla.id}" class="btn btn-danger">Ver detalle</a>
                    </div>
                </div>
            </div>
`
        }
        )
        };

renderizar ();