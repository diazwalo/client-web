import Component from './rendering/Component';
import Index from './pages/Index';
import Connection from './pages/Connection';

export default class Menu extends Component {
	constructor() {
		super('nav', {
			class:
				'flex flex-row space-between p-2 pt-4 pb-4 mb-4 bg-gray-200 shadow-md',
		});
		const newContent = [
			// Left part
			new Component('div', { class: 'w-1/4 flex flex-row space-between' }, [
				new Component(
					'h1',
					{
						class: 'text-teal-500 text-2xl hover:text-teal-800 cursor-pointer',
					},
					new Component('a', { id: 'titleButton' }, 'Greenwater')
				),
			]),

			// Right part
			new Component(
				'div',
				{
					class: 'w-3/4 flex flex-row-reverse space-around items-stretch',
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
