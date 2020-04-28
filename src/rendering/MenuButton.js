import Component from './Component';

export default class MenuButton extends Component {
	constructor(id, content) {
		super('a', [{ id: id }, { class: 'mr-4 cursor-pointer text-xl' }], content);
	}
}
