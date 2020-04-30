import Component from '../rendering/Component';
import getApiUrl from '../utils/url';
import { isUserConnected } from '../utils/cookies';
import Button from '../rendering/Button';
import Label from '../rendering/Label';
import Input from '../rendering/Input';
import MessageBox from '../rendering/MessageBox';

/**
 * Page de connexion de l'application
 */
export default class Connection extends Component {
	#errorMessageBox;
	#infoMessageBox;

	constructor() {
		super('div', {
			class: 'flex flex-col flex-wrap items-center align-middle w-full h-full',
		});
		this.#errorMessageBox = new MessageBox(
			'',
			'red',
			'errorMessageText',
			'errorMessageBox'
		);
		this.#infoMessageBox = new MessageBox(
			'',
			'blue',
			'infoMessageText',
			'infoMessageBox'
		);
		const newContent = [
			this.#errorMessageBox,
			this.#infoMessageBox,
			new Component(
				'h2',
				{ class: 'text-teal-500 mb-6 text-xl text-center' },
				'Connexion'
			),
			new Component('div', { class: 'flex flex-col flex-wrap' }, [
				new Label('username', "Nom d'utilisateur"),
				new Input('username', 'username', 'text'),
				new Label('password', 'Mot de passe'),
				new Input('password', 'password', 'password'),
				new Button('Se connecter', 'startConnectButton'),
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

	/**
	 * Définition des événements du composant de connexion
	 */
	setEvents() {
		const sendDatasToConnectionServer = () => {
			const username = document.getElementById('username').value;
			const password = document.getElementById('password').value;

			/*
				Envoit du formulaire de connexion au serveur
			*/
			fetch(
				getApiUrl(window.location) +
					'/api/v1/authent/' +
					username +
					'/' +
					password
			)
				.then(response => response.json())
				.then(data => {
					if (!data.authent) {
						this.showError('Mot de passe ou utilisateur incorrect.');
					} else {
						document.cookie = 'uuid=' + data.uuid;
						window.location.href = '/';
					}
				})
				.catch(error => this.showError('Connexion impossible.<br>' + error));
		};

		document.querySelector('#startConnectButton').onclick = () => {
			if (!isUserConnected()) {
				sendDatasToConnectionServer();
			} else {
				this.showError('Vous êtes déjà connecté.');
			}
		};
	}

	/**
	 * Affiche un message d'erreur à l'utilisateur
	 * @param {string} message
	 */
	showError(message) {
		this.#errorMessageBox.setText(message);
		this.#errorMessageBox.display();
		this.#infoMessageBox.hide();
	}

	/**
	 * Affiche une information à l'utilisateur
	 * @param {string} message
	 */
	showInfo(message) {
		this.#errorMessageBox.hide();
		this.#infoMessageBox.setText(message);
		this.#infoMessageBox.display();
	}
}
