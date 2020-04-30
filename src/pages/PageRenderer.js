import Index from './Index';
import Connection from './Connection';
import Inscription from './Inscription';

class PageRenderer {
	#target; // string
	#page; // Page (Index | Connection)
	#menu; // Menu

	/**
	 * Constructeur
	 * @param {Menu} menu
	 * @param {string} target
	 */
	constructor(menu, target) {
		this.#menu = menu;
		this.#target = target;
	}

	/**
	 * Set une nouvelle page, l'affiche et effectue une action post-rendu de la page
	 * @param {Index | Connection} page
	 */
	setPage(page) {
		this.#page = page;
		let postRenderOperation = () => {};
		let content = '404 Error - Page not found';

		if (this.#page instanceof Index) {
			content = this.#page.render();
			this.switchActive('#indexMenuButton');
			postRenderOperation = this.#page.setEvents;
		} else if (this.#page instanceof Connection) {
			content = this.#page.render();
			postRenderOperation = () => {
				this.#page.setEvents();
			};
			this.switchActive('#connectMenuButton');
		} else if (this.#page instanceof Inscription) {
			content = this.#page.render();
			this.switchActive('#registerMenuButton');
			postRenderOperation = () => {
				this.#page.setEvents();
			};
		}

		document.querySelector(this.#target).innerHTML = content;
		postRenderOperation();
	}

	/**
	 * Défini un style sur un élément choisi
	 * @param {string} target
	 */
	setActive(target) {
		const element = document.querySelector(target);
		if (element) {
			element.classList.add('text-blue-500');
			element.classList.remove('text-gray-700');
		}
	}

	/**
	 * Supprime un style pour un élément choisi
	 * @param {string} target
	 */
	unsetActive(target) {
		const element = document.querySelector(target);
		if (element) {
			element.classList.remove('text-blue-500');
			element.classList.add('text-gray-700');
		}
	}

	/**
	 * Set a menu button to active and disable all the others
	 * @param {string} target
	 */
	switchActive(target) {
		this.unsetActive('#indexMenuButton');
		this.unsetActive('#connectMenuButton');
		this.unsetActive('#disconnectMenuButton');
		this.unsetActive('#registerMenuButton');
		this.setActive(target);
	}

	/**
	 * Initialisation du menu
	 * @param {Menu} menu
	 */
	setMenu(menu) {
		this.#menu = menu;
		document.querySelector('#menu').innerHTML = this.#menu.render();
		this.#menu.setEvents();
	}

	/**
	 * Changement de la cible HTML contenant la page
	 * @param {string} target
	 */
	setTarget(target) {
		this.#target = target;
	}
}

let mainPageRenderer = new PageRenderer();

export { mainPageRenderer, PageRenderer };
