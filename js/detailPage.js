import { charlas } from "../charlas.js";

console.log(charlas);

const detailContainer = document.getElementById("detailContainer");

const renderDetail = (id) => {
  const charla = charlas.find((charla) => charla.id === id);

  if (charla) {
    detailContainer.innerHTML = `
    <div class="row p-5 bg-dark text-white">
    <div class="col-3">
        <img src="${charla.imagen}" alt="" class="img-fluid">
    </div>
    <div class="col-7">
        <h1>${charla.título}</h1>
        <h4>${charla.descripción}</h4>
        <p>${charla.hora}</p>
        <p>${charla.orador}</p>
    </div>
    <div class="col-2 d-flex justify-content-center align-items-center">
        <button class="btn btn-danger">Inscribirme ahora</button>
    </div>
</div>
    `;
  } else {
    detailContainer.innerHTML = `
        
        <div class="alert alert-danger text-center" role="alert">
        Charla no encontrada
        </div>
        
        `;
  }
};

const URL = window.location.href
console.log(URL)

const charlaIdSeleccionada = 1;

renderDetail(charlaIdSeleccionada);
