import Component from './Component';

/**
 * Elément graphique "card" : une petite carte verticale contenant une image, un titre et un texte
 */
export default class Card extends Component {
	#image;
	#title;
	#text;

	/**
	 * Constructeur
	 * @param {string} title
	 * @param {string} text
	 * @param {string} image
	 */
	constructor(title, text, image) {
		super('div', {
			class: 'max-w-sm overflox-hidden shadow-lg border border-teal-500',
		});
		this.#image = image;
		this.#text = text;
		this.#title = title;
		const newContent = [
			new Component('img', [
				{ class: 'w-full object-cover mb-2' },
				{ src: this.#image },
				{ alt: 'card1' },
			]),
			new Component(
				'p',
				{ class: 'text-lg text-blue-500 text-center font-bold' },
				this.#title
			),
			new Component('p', { class: 'text-gray-700 font-thin p-2' }, this.#text),
		];
		this.setContent(newContent);
	}
}
