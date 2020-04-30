import Component from '../rendering/Component';

export default class ErrorPage extends Component {
	/**
	 * Constructor
	 * @param {string} title
	 * @param {string} content
	 */
	constructor(title, content) {
		super('div', { class: 'border border-b-2 border-red-500 shadow p-4 m-2' }, [
			new Component('h3', { class: 'text-red-500 text-lg mb-4' }, title),
			new Component('hr', { class: 'border-red-300 border-solid mb-2' }),
			new Component('p', { class: 'text-gray-700' }, content),
		]);
	}
}
