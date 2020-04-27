/**
 * Classe représentant un composant d'une page web.
 */
export default class Component {
	#type; // string
	#attributes; // List of {key: value}
	#content; // string | component | [component]
	#autoclose; // bool

	/**
	 * Constructeur d'un Component.
	 * @param {string} type
	 * @param {List of {key, value}} attributes
	 * @param {string | Component | List of Component} content
	 * @param {bool} autoclose
	 */
	constructor(type, attributes, content, autoclose) {
		this.#type = type;
		this.#attributes = attributes;
		this.#content = content;
		this.#autoclose = autoclose;
	}

	/**
	 * Rendu d'un composant du site web.
	 */
	render() {
		let attributes = this.renderAttributes();
		if (this.#autoclose) {
			return `<${this.#type} ${this.renderAttributes()}/>`;
		} else {
			return `<${this.#type}${
				attributes.length > 0 ? ' ' + attributes : ''
			}>${this.renderContent()}</${this.#type}>`;
		}
	}

	subrenderContent(content) {
		if (typeof content === 'string') {
			return content;
		} else if (content instanceof Component) {
			return content.render();
		} else if (content instanceof Array) {
			return content.map(e => this.subrenderContent(e)).join('');
		}
	}

	renderContent() {
		return this.subrenderContent(this.#content);
	}

	renderAttributes() {
		if (this.#attributes === null) {
			return '';
		} else {
			if (Array.isArray(this.#attributes)) {
				let result = '';
				result = this.#attributes
					.map(object => {
						const key = Object.keys(object)[0];
						return `${key}="${object[key]}"`;
					})
					.join(' ');
				return result;
			} else {
				const key = Object.keys(this.#attributes)[0];
				return `${key}="${this.#attributes[key]}"`;
			}
		}
	}
}
