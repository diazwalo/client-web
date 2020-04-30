import Component from '../../rendering/Component';
import Index from '../Index';
import { PageRenderer } from '../PageRenderer';
import Connection from '../Connection';

// Temporary
function createSections() {
	let res = [];
	for (let i = 0; i < 7; i++) {
		res.push(
			new Component(
				'h3',
				[
					{
						class:
							'text-gray-500 hover:text-blue-300 text-lg cursor-pointer text-center mb-4',
					},
					{ id: 'section' + i },
				],
				'Section ' + i
			)
		);
	}
	return res;
}

export default class UserPanel extends Component {
	#pageRenderer; // PageRenderer
	#userPage; // Page
	#target; // string

	constructor() {
		super('section', { class: 'border border-blue-500 shadow-lg' }, null);
		this.#target = 'userSubPage';
		const newContent = [
			new Component('div', { class: 'flex flex-row' }, [
				// Left column
				new Component('div', { class: 'border border-blue-500 w-1/4' }, [
					new Component(
						'h2',
						{
							class:
								'border-b border-blue-500 text-blue-500 text-xl p-4 text-center mb-6',
						},
						'Mon compte'
					),
					new Component('div', null, createSections()),
				]),

				// Right column
				new Component(
					'div',
					[
						{ class: 'border border-l-0 border-blue-500 w-full p-2' },
						{ id: this.#target },
					],
					'Soon'
				),
			]),
		];

		this.setContent(newContent);
	}

	initializePageRenderer() {
		this.#pageRenderer = new PageRenderer(null, '#userSubPage');
	}

	/**
	 * Set une nouvelle page, l'affiche et effectue une action post-rendu de la page
	 * @param {Index | Connection | Inscription | UserPanel} page
	 */
	setPage(page) {
		this.#userPage = page;
		let postRenderOperation = () => {};
		let content = '404 Error - Page not found';

		if (this.#userPage instanceof Index) {
			content = this.#userPage.render();
			this.switchActive('#indexMenuButton');
			postRenderOperation = this.#userPage.setEvents;
		} else if (this.#userPage instanceof Connection) {
			content = this.#userPage.render();
			postRenderOperation = () => {
				this.#userPage.setEvents();
			};
			this.switchActive('#connectMenuButton');
		} else if (this.#userPage instanceof Inscription) {
			content = this.#userPage.render();
			this.switchActive('#registerMenuButton');
			postRenderOperation = () => {
				this.#userPage.setEvents();
			};
		}

		document.querySelector(this.#target).innerHTML = content;
		postRenderOperation();
	}

	setEvents() {
		const section1 = document.getElementById('section1'),
			section2 = document.getElementById('section2');

		if (section1)
			section1.onclick = e => {
				this.#userPage = new Index();
				this.#pageRenderer.setPage(this.#userPage);
			};

		if (section2)
			section2.onclick = e => {
				this.#userPage = new Connection();
				this.#pageRenderer.setPage(this.#userPage);
			};
	}
}
