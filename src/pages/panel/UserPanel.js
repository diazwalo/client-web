import Component from '../../rendering/Component';
import Index from '../Index';

// Temporary
function createSections() {
	let res = [];
	for (let i = 0; i < 7; i++) {
		res.push(
			new Component(
				'h3',
				{
					class:
						'text-gray-500 hover:text-blue-300 text-lg cursor-pointer text-center mb-4',
				},
				'Section ' + i.toString()
			)
		);
	}
	return res;
}

export default class UserPanel extends Component {
	constructor() {
		super('section', { class: 'border border-blue-500 shadow-lg' }, null);
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
					{ class: 'border border-l-0 border-blue-500 w-full p-2' },
					new Index()
				),
			]),
		];

		this.setContent(newContent);
	}

	setEvents() {}
}
