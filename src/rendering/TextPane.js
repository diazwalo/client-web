import Component from './Component';

export default class TextPane extends Component {
	constructor(title, text) {
		super(
			'div',
			{ class: 'border border-b-4 border-blue-500 shadow p-4 m-2' },
			[
				new Component('h3', { class: 'text-blue-500 text-lg mb-4' }, title),
				new Component('hr', { class: 'border-blue-300 border-solid mb-2' }),
				new Component('p', { class: 'text-gray-700' }, text),
			]
		);
	}
}
