import Component from './Component';

export default class UserPanelPageLink extends Component {
	/**
	 * Constructor
	 * @param {string} title
	 * @param {string} id
	 */
	constructor(title, id) {
		super(
			'h3',
			[
				{
					class:
						'text-gray-500 hover:text-blue-300 text-lg cursor-pointer text-center mb-4 p-2',
				},
				{ id: id },
			],
			title
		);
	}
}
