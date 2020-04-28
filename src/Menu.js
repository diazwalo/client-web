import Component from './rendering/Component';
import Index from './pages/Index';
import Connection from './pages/Connection';

export default class Menu extends Component {
	constructor() {
		super('nav', {
			class: 'flex flex-row space-between mb-4 bg-gray-200 shadow-md',
		});
		const newContent = [
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
				[
					new Component(
						'a',
						[{ id: 'connectButton' }, { class: 'cursor-pointer text-xl' }],
						'Connexion'
					),
					new Component(
						'a',
						[{ id: 'indexButton' }, { class: 'mr-4 cursor-pointer text-xl' }],
						'Accueil'
					),
				]
			),
		];
		this.setContent(newContent);
	}

	setEvents(pageRenderer) {
		document.querySelector('#titleButton').onclick = e => {
			pageRenderer.setPage(new Index());
		};

		document.querySelector('#indexButton').onclick = e => {
			pageRenderer.setPage(new Index());
		};

		document.querySelector('#connectButton').onclick = e => {
			pageRenderer.setPage(new Connection());
		};
	}
}
