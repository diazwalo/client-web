import Component from './Component';

export default class Button extends Component {
	/**
	 * Constructor
	 * @param {string} content
	 * @param {string} id
	 */
	constructor(content, id) {
		super(
			'button',
			[
				{ id: id },
				{
					class:
						'border border-teal-500 bg-teal-400 p-2 text-white cursor-pointer hover:bg-gray-200 hover:text-teal-500',
				},
			],
			content
		);
	}
}
