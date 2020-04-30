import Component from '../rendering/Component';

export default class NotFoundPage extends Component {
	constructor() {
		super('div', { class: 'border border-b-2 border-red-500 shadow p-4 m-2' }, [
			new Component('h3', { class: 'text-red-500 text-lg mb-4' }, 'Erreur 404'),
			new Component('hr', { class: 'border-red-300 border-solid mb-2' }),
			new Component(
				'p',
				{ class: 'text-gray-700' },
				"Le contenu que vous essayez d'atteindre n'existe pas ou plus."
			),
			new Component('img', [{ src: 'images/404.jpg' }, { class: 'h-64' }]),
		]);
	}
}
