import Component from './Component';

export default class Input extends Component {
	/**
	 * Constructor
	 * @param {string} name
	 * @param {string} id
	 * @param {string} type
	 */
	constructor(name, id, type) {
		super('input', [
			{ name: name },
			{ id: id },
			{ type: type },
			{ class: 'border border-teal-500 p-1 mb-4' },
		]);
	}
}
