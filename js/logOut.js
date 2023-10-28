const logout = () => {
	editPerfilButton.classList.add("d-none")
	cerrarSesionButton.classList.add("d-none")	
	btnIngresologout.classList.add("d-block")
	btnRegistrologout.classList.add("d-block")
	localStorage.removeItem('login_success');

};
const cerrarSesionButton = document.getElementById('cerrarSesionButton');
const editPerfilButton = document.getElementById('editPerfilButton');
const btnIngresologout = document.getElementById("btn-login")
const btnRegistrologout = document.getElementById("btn-registro")

cerrarSesionButton.addEventListener('click', () => {
	logout();
	// window.location.href = '../index.html';
});
