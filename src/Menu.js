import Component from './rendering/Component';
import Index from './pages/Index';
import Connection from './pages/Connection';
import { getCookies, isUserConnected } from './utils/cookies';
import { mainPageRenderer } from './pages/PageRenderer';
import MenuButton from './rendering/MenuButton';

// Menu of a non connected user
const nonConnectedMenu = [
	new MenuButton('indexButton', 'Accueil'),
	new MenuButton('connectButton', 'Connexion'),
];

// Menu of a connected user
const connectedMenu = [
	new MenuButton('indexButton', 'Accueil'),
	new MenuButton('disconnectButton', 'Déconnexion'),
];

export default class Menu extends Component {
	constructor() {
		super('nav', {
			class: 'flex flex-row space-between mb-4 bg-gray-200 shadow-md',
		});

		// Détection de la connexion ou non de l'utilisateur
		let submenu = nonConnectedMenu;
		if (isUserConnected() === true) {
			console.warn('Connected');
			submenu = connectedMenu;
		}

		// Structure du menu
		const menu = [
			// Left part
			new Component(
				'div',
				{ class: 'w-1/4 flex flex-row space-between pl-2' },
				[
					new Component('img', [
						{ src: 'images/Logo_green_Water.png' },
						{ alt: 'title-logo-GreenWater' },
						{ id: 'titleButton' },
						{ class: 'h-16 cursor-pointer' },
					]),
				]
			),

			// Right part
			new Component(
				'div',
				{
					class:
						'w-3/4 flex flex-row-reverse space-around items-stretch mt-4 mb-4 pr-2',
				},
				submenu
			),
		];

		this.setContent(menu);
	}

	/**
	 * Bind des événements du menu
	 */
	setEvents() {
		// Quand don clique sur le logo du site ou sur "Accueil"
		document.querySelector('#titleButton').onclick = e => {
			mainPageRenderer.setPage(new Index());
		};

		document.querySelector('#indexButton').onclick = e => {
			mainPageRenderer.setPage(new Index());
		};

		// Bouton de connexion et déconnexion
		const connectButton = document.querySelector('#connectButton'),
			disconnectButton = document.querySelector('#disconnectButton');

		if (connectButton)
			connectButton.onclick = e => {
				mainPageRenderer.setPage(new Connection());
			};

		if (disconnectButton)
			disconnectButton.onclick = e => {
				document.cookie = 'uuid=disconnected';
				alert('Déconnecté');
			};
	}
}
