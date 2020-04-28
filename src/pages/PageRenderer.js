import Index from './Index';
import Connection from './Connection';

export default class PageRenderer {
	#target;
	#page;
	#menu;

	constructor(menu, target) {
		this.#menu = menu;
		this.#target = target;
	}

	setPage(page) {
		this.#page = page;
		let toCall = () => console.log('No bounded events for current page');
		let content = '404 Error - Page not found';
		if (this.#page instanceof Index) {
			content = this.#page.render();
			this.setActive('#indexButton');
			this.unsetActive('#connectButton');
		} else if (this.#page instanceof Connection) {
			content = this.#page.render();
			this.unsetActive('#indexButton');
			this.setActive('#connectButton');
		}
		document.querySelector(this.#target).innerHTML = content;
		toCall();
	}

	setActive(target) {
		document.querySelector(target).classList.add('text-blue-500');
		document.querySelector(target).classList.remove('text-gray-700');
	}

	unsetActive(target) {
		document.querySelector(target).classList.remove('text-blue-500');
		document.querySelector(target).classList.add('text-gray-700');
	}

	setMenu(menu) {
		this.#menu = menu;
		document.querySelector('#menu').innerHTML = this.#menu.render();
	}
}
