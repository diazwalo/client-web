import Component from '../rendering/Component';
import getApiUrl from '../utils/url';

/**
 * Page de connexion de l'application
 */
export default class Connection extends Component {
	constructor() {
		super('div', {
			class: 'flex flex-col flex-wrap items-center align-middle w-full h-full',
		});
		const errorComponent = new Component(
			'p',
			[{ class: 'text-red-500 p-2 text-thin' }, { id: 'errorMessage' }],
			''
		);
		const newContent = [
			new Component(
				'div',
				[
					{ class: 'hidden border border-red-800 bg-red-100 text-center mb-2' },
					{ id: 'errorBox' },
				],
				errorComponent
			),
			new Component(
				'h2',
				{ class: 'text-teal-500 mb-6 text-xl text-center' },
				'Connexion'
			),
			new Component('div', { class: 'flex flex-col flex-wrap' }, [
				new Component(
					'label',
					[{ for: 'username' }, { class: 'mb-2 text-gray-700' }],
					"Nom d'utilisateur"
				),
				new Component('input', [
					{ name: 'username' },
					{ id: 'username' },
					{ type: 'text' },
					{ class: 'border border-teal-500 p-1 mb-4' },
				]),
				new Component(
					'label',
					[{ for: 'password' }, { class: 'mb-2 text-gray-700' }],
					'Mot de passe'
				),
				new Component('input', [
					{ name: 'password' },
					{ id: 'password' },
					{ type: 'password' },
					{ class: 'border border-teal-500 p-1 mb-4' },
				]),
				//new Breakline(),
				new Component(
					'button',
					[
						{ id: 'startConnectButton' },
						{
							class:
								'border border-teal-500 bg-teal-400 p-2 text-white cursor-pointer hover:bg-gray-200 hover:text-teal-500',
						},
					],
					'Se connecter'
				),
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
		const sendDatas = () => {
			const username = document.getElementById('username').value;
			const password = document.getElementById('password').value;

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
						console.log(data);
						this.showError('Mot de passe ou utilisateur incorrect.');
					} else {
						console.log(data);
						document.cookie = 'uuid=' + data.uuid;
						window.location.href = '/';
					}
				})
				.catch(error => this.showError('Connexion impossible.<br>' + error));
		};

		document.querySelector('#startConnectButton').onclick = () => sendDatas();
	}

	/**
	 * Affiche un message d'erreur à l'utilisateur
	 * @param {string} message
	 */
	showError(message) {
		document.querySelector('#errorMessage').innerHTML = message;
		document.querySelector('#errorBox').classList.remove('hidden');
	}
}
