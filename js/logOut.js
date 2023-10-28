const logout = () => {
	localStorage.removeItem('user');
};
const cerrarSesionButton = document.getElementById('cerrarSesionButton');
cerrarSesionButton.addEventListener('click', () => {
	logout();
	window.location.href = './index.html';
});
