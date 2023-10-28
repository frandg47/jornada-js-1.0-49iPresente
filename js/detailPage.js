import { charlas } from "../charlas.js";

console.log(charlas);

const urlPrueba = new URL(window.location.href)
const id = urlPrueba.searchParams.get("id")

const detailContainer = document.getElementById("detailContainer");

const inscribirButton = document.getElementById("inscribirButton");

inscribirButton.addEventListener("click", () => {
  if (id) {
    const charla = charlas.findIndex((charla) => charla.id == id);

    const userLogged = JSON.parse(localStorage.getItem("login_success"))[0]

    if (charla >= 0) {
      charlas[charla].asistentes.push(userLogged)
      localStorage.setItem("charlas", JSON.stringify(charlas))

      alert("Te has inscrito en la charla.");

    } else {
      alert("La charla no se encuentra disponible.");
    }
  }
});

const renderDetail = (id) => {
  const charla = charlas.find((charla) => charla.id == id);
  console.log(charla)
  console.log(charlas)

  if (charla) {
    detailContainer.innerHTML = `
    <div class="row p-5 bg-dark text-white">
    <div class="col-lg-3">
        <img src="${charla.imagen}" alt="" class="img-fluid">
    </div>
    <div class="col-lg-7">
        <h1>${charla.título}</h1>
        <h4>${charla.descripción}</h4>
        <p class="mt-4">Horario: ${charla.hora}</p>
        <p>Speaker: ${charla.orador}</p>
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

console.log(id)

renderDetail(id);
