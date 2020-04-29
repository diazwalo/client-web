/**
 * Classe représentant un composant d'une page web.
 */
export default class Component {
	type; // string
	attributes; // List of {key: value}
	content; // string | component | [component]

	/**
	 * Constructeur d'un Component.
	 * @param {string} type
	 * @param {List of {key, value}} attributes
	 * @param {string | Component | List of Component} content
	 */
	constructor(type, attributes, content) {
		this.type = type;
		this.attributes = attributes;
		this.content = content;
	}

	setContent(content) {
		this.content = content;
	}

	/**
	 * Rendu d'un composant du site web.
	 */
	render() {
		const attributes = this.renderAttributes();
		if (!this.content) {
			return `<${this.type}${
				attributes.length !== 0 ? ' ' + attributes : ''
			}/>`;
		} else {
			return `<${this.type}${
				attributes.length !== 0 ? ' ' + attributes : ''
			}>${this.renderContent()}</${this.type}>`;
		}
	}

	subrenderContent(content) {
		if (typeof content === 'string') {
			return content;
		} else if (content instanceof Component) {
			return content.render();
		} else if (content instanceof Array) {
			return content.map(e => this.subrenderContent(e)).join('');
		} else if (!content) {
			return '';
		}
	}

	renderContent() {
		return this.subrenderContent(this.content);
	}

	renderAttributes() {
		if (!this.attributes) {
			return '';
		} else {
			if (Array.isArray(this.attributes)) {
				let result = '';
				result = this.attributes
					.map(object => {
						const key = Object.keys(object)[0];
						return `${key}="${object[key]}"`;
					})
					.join(' ');
				return result;
			} else {
				const key = Object.keys(this.attributes)[0];
				return `${key}="${this.attributes[key]}"`;
			}
		}
	}
}
