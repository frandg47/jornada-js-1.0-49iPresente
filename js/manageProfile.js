const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const user = JSON.parse(localStorage.getItem('user'));

const rellenarInput = () => {
	document.getElementById('name').value = user.nombre;
	document.getElementById('email').value = user.email;
	document.getElementById('password').value = user.password;
};

const modal = document.getElementById('modalModificar');

modal.addEventListener('click', () => {
	rellenarInput();
});

if (user) {
	nameInput.value = user.nombre;
	emailInput.value = user.email;
	passwordInput.value = user.password;
}

const passwordValidate = (password) => {
	const isValidPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;
	return isValidPass.test(password);
};

const nameValidate = (newName) => {
	const isValidName = /^(?:(?![A-Za-z]*([A-Za-z])\1{2,})[A-Za-z]){3,}$/;
	return isValidName.test(newName);
};

const emailValidate = (newEmail) => {
	const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return isValidEmail.test(newEmail);
};

const profileForm = document.getElementById('profileForm');

profileForm.addEventListener('click', function (event) {
	event.preventDefault();
	const newName = nameInput.value;
	const newEmail = emailInput.value;
	const newPassword = passwordInput.value;

	if (!passwordValidate(newPassword)) {
		return Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'La contraseña no es válida, intente de nuevo.',
			showConfirmButton: false,
			timer: 1500,
		});
	}

	if (!nameValidate(newName)) {
		return Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'El nombre no es válido, intente de nuevo.',
			showConfirmButton: false,
			timer: 1500,
		});
	}

	if (!emailValidate(newEmail)) {
		return Swal.fire({
			position: 'center',
			icon: 'warning',
			title: 'El email no es válido, intente de nuevo.',
			showConfirmButton: false,
			timer: 1500,
		});
	}

	user.nombre = newName;
	user.email = newEmail;
	user.password = newPassword;

	localStorage.setItem('user', JSON.stringify(user));

	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Usuario modificado correctamente',
		showConfirmButton: false,
		timer: 1500,
	});
});
