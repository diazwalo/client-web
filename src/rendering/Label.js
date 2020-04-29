import Component from './Component';

export default class Label extends Component {
	/**
	 * Constructor
	 * @param {string} forInput
	 * @param {string} content
	 */
	constructor(forInput, content) {
		super(
			'label',
			[{ for: forInput }, { class: 'mb-2 text-gray-700' }],
			content
		);
	}
}
