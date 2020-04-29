import Component from './Component';

export default class MessageBox extends Component {
	#color;
	#text;
	#idText;
	#idBox;

	/**
	 * Constructor
	 * @param {string} text
	 * @param {string} color
	 */
	constructor(text, color, idText, idBox) {
		super(
			'div',
			[
				{
					class:
						'hidden border border-' +
						color +
						'-800 bg-' +
						color +
						'-100 text-center mb-2',
				},
				{ id: idBox },
			],
			new Component(
				'p',
				[{ class: 'text-' + color + '-500 p-2 text-thin' }, { id: idText }],
				text
			)
		);
		this.#color = color;
		this.#text = text;
		this.#idBox = idBox;
		this.#idText = idText;
	}

	/**
	 * Change le texte de la MessageBox
	 * @param {string} text
	 */
	setText(text) {
		console.log(`IDs : text = ${this.#idText} ; box = ${this.#idBox}`);
		this.#text = text;
		document.getElementById(this.#idText).innerHTML = text;
	}

	hide() {
		document.getElementById(this.#idBox).classList.add('hidden');
	}

	display() {
		document.getElementById(this.#idBox).classList.remove('hidden');
	}

	/**
	 * Chnage la couleur de la message box
	 * @param {string} color
	 */
	setColor(color) {
		this.#color = color;
		this.setContent(
			new Component(
				'div',
				[
					{
						class:
							'hidden border border-' +
							this.#color +
							'-800 bg-' +
							this.#color +
							'-100 text-center mb-2',
					},
					{ id: 'errorBox' },
				],
				new Component(
					'p',
					[
						{ class: 'text-' + this.#color + '-500 p-2 text-thin' },
						{ id: 'errorMessage' },
					],
					this.#text
				)
			)
		);
	}
}
