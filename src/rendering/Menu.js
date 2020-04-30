import Component from './Component';
import Index from '../pages/Index';
import Connection from '../pages/Connection';
import { isUserConnected } from '../utils/cookies';
import { mainPageRenderer } from '../pages/PageRenderer';
import MenuButton from './MenuButton';
import Inscription from '../pages/Inscription';
import UserPanel from '../pages/panel/UserPanel';

const nonConnectedMenu = [
	new MenuButton('indexMenuButton', 'Accueil'),
	new MenuButton('connectMenuButton', 'Connexion'),
	new MenuButton('registerMenuButton', 'Inscription'),
];

// Menu of a connected user
const connectedMenu = [
	new MenuButton('indexMenuButton', 'Accueil'),
	new MenuButton('userPanelMenuButton', 'Espace Membre'),
	new MenuButton('disconnectMenuButton', 'Déconnexion'),
];

const menuSkeleton = menu => [
	// Left part
	new Component('div', { class: 'w-1/4 flex flex-row space-between pl-2' }, [
		new Component('img', [
			{ src: 'images/Logo_green_Water.png' },
			{ alt: 'title-logo-GreenWater' },
			{ id: 'titleMenuButton' },
			{ class: 'h-16 cursor-pointer' },
		]),
	]),

	// Right part
	new Component(
		'div',
		{
			class:
				'w-3/4 flex flex-row-reverse space-around items-stretch mt-4 mb-4 pr-2',
		},
		menu
	),
];

export default class Menu extends Component {
	#menuButtons;

	/**
	 * Constructor
	 */
	constructor() {
		super('nav', {
			class: 'flex flex-row space-between mb-4 bg-gray-200 shadow-md',
		});

		// Détection de la connexion ou non de l'utilisateur
		if (isUserConnected()) {
			this.#menuButtons = connectedMenu.reverse();
		} else {
			this.#menuButtons = nonConnectedMenu.reverse();
		}
		// Structure du menu
		const menu = menuSkeleton(this.#menuButtons);

		this.setContent(menu);
	}

	/**
	 * Bind des événements du menu
	 */
	setEvents() {
		// Quand don clique sur le logo du site ou sur "Accueil"
		document.querySelector('#titleMenuButton').onclick = e => {
			mainPageRenderer.setPage(new Index());
		};

		document.querySelector('#indexMenuButton').onclick = e => {
			mainPageRenderer.setPage(new Index());
		};

		// Bouton de connexion et déconnexion
		const connectButton = document.querySelector('#connectMenuButton'),
			disconnectButton = document.querySelector('#disconnectMenuButton'),
			registerMenuButton = document.querySelector('#registerMenuButton'),
			userPanelMenuButton = document.querySelector('#userPanelMenuButton');

		if (connectButton)
			connectButton.onclick = e => {
				mainPageRenderer.setPage(new Connection());
			};

		if (disconnectButton)
			disconnectButton.onclick = e => {
				document.cookie = 'uuid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
				mainPageRenderer.setMenu(new Menu());
				mainPageRenderer.setPage(new Index());
				mainPageRenderer.switchActive('#indexMenuButton');
			};

		if (userPanelMenuButton)
			userPanelMenuButton.onclick = e => {
				mainPageRenderer.setPage(new UserPanel());
			};

		if (registerMenuButton)
			registerMenuButton.onclick = e => {
				mainPageRenderer.setPage(new Inscription());
			};
	}
}
