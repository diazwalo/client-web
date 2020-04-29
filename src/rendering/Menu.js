import Component from './Component';
import Index from '../pages/Index';
import Connection from '../pages/Connection';
import { isUserConnected } from '../utils/cookies';
import { mainPageRenderer } from '../pages/PageRenderer';
import MenuButton from './MenuButton';

const nonConnectedMenu = [
	new MenuButton('indexButton', 'Accueil'),
	new MenuButton('connectButton', 'Connexion'),
];

// Menu of a connected user
const connectedMenu = [
	new MenuButton('indexButton', 'Accueil'),
	new MenuButton('disconnectButton', 'Déconnexion'),
];

const menuSkeleton = menu => [
	// Left part
	new Component('div', { class: 'w-1/4 flex flex-row space-between pl-2' }, [
		new Component('img', [
			{ src: 'images/Logo_green_Water.png' },
			{ alt: 'title-logo-GreenWater' },
			{ id: 'titleButton' },
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
				mainPageRenderer.setMenu(new Menu());
				mainPageRenderer.setPage(new Index());
			};
	}
}
