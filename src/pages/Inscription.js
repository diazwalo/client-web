import Component from '../rendering/Component';
import Label from '../rendering/Label';
import Input from '../rendering/Input';
import Button from '../rendering/Button';
import MessageBox from '../rendering/MessageBox';
import getApiUrl from '../utils/url';

export default class Inscription extends Component {
	#errorMessageBox;
	#infoMessageBox;
	// Modèle du formulaire:
	// nom
	// password
	// confirm
	// email
	constructor() {
		super('div', {
			class: 'flex flex-col flex-wrap items-center align-middle w-full h-full',
		});
		this.#errorMessageBox = new MessageBox(
			'',
			'red',
			'registerErrorText',
			'registerErrorBox'
		);
		this.#infoMessageBox = new MessageBox(
			'',
			'blue',
			'registerInfoText',
			'registerInfoBox'
		);
		const newContent = [
			this.#errorMessageBox,
			this.#infoMessageBox,
			new Component(
				'h2',
				{ class: 'text-teal-500 mb-6 text-xl text-center' },
				'Inscription'
			),
			new Component('div', { class: 'flex flex-col flex-wrap' }, [
				new Label('name', "Nom d'utilisateur"),
				new Input('name', 'name', 'string'),
				new Label('password', 'Mot de passe'),
				new Input('password', 'password', 'password'),
				new Label('confirmPassword', 'Confirmer le mot de passe'),
				new Input('confirmPassword', 'confirmPassword', 'password'),
				new Label('email', 'Adresse mail'),
				new Input('email', 'email', 'email'),
				new Button("S'inscrire", 'subButton'),
			]),
		];
		this.setContent(
			new Component(
				'div',
				{ class: 'p-4 border border-teal-300 w-1/4 shadow m-8' },
				newContent
			)
		);
	}

	setEvents() {
		const passwordInput = document.querySelector('#password'),
			passwordConfirm = document.querySelector('#confirmPassword'),
			registerButton = document.querySelector('#subButton'),
			emailInput = document.querySelector('#email'),
			usernameInput = document.querySelector('#name');

		registerButton.onclick = e => {
			if (
				passwordInput.value === passwordConfirm.value &&
				usernameInput.value.length > 0 &&
				emailInput.value.length > 0 &&
				emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
			) {
				fetch(
					getApiUrl(window.location) +
						`/api/v1/register/${usernameInput.value}/${passwordInput.value}/${emailInput.value}`
				)
					.then(response => {
						if (response.status === 200) {
							this.#infoMessageBox.setText(
								"Compte utilisateur créé.<br>Vous allez être redirigé vers l'accueil"
							);
							this.#infoMessageBox.display();
							this.#errorMessageBox.hide();
							setTimeout(() => {
								window.location.href = '/';
							}, 3000);
						} else {
							this.#errorMessageBox.setText('Impossible de créer le compte');
							this.#errorMessageBox.display();
						}
					})
					.catch(error => {
						this.#errorMessageBox.setColor('red');
						this.#errorMessageBox.setText(error);
						this.#errorMessageBox.display();
					});
			} else {
				this.#errorMessageBox.setColor('red');
				this.#errorMessageBox.setText('Les données fournies sont incorrectes.');
				this.#errorMessageBox.display();
			}
		};
	}
}
