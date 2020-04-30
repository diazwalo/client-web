import Component from '../../rendering/Component';
import TextPane from '../../rendering/TextPane';

export default class UserIndex extends Component {
	constructor() {
		super('section', null, null);
		const content = [
			new Component('h3', { class: 'text-blue-500 text-xl m-4' }, 'Accueil'),
			new TextPane(
				'Info',
				"Quelques liens et explications viendront complèter cette page.<br>Les autres modules du paneau d'administration seront disponibles prochainement."
			),
		];
		this.setContent(content);
	}

	setEvents() {
		console.log('TODO: UserIndex events');
	}
}
