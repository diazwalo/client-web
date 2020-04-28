import Component from '../rendering/Component';

export default class Connection extends Component {
	constructor() {
		super('div', {
			class: 'flex flex-col flex-wrap items-center align-middle w-full h-full',
		});
		const newContent = [
			new Component(
				'h2',
				{ class: 'text-teal-500 mb-6 text-xl text-center' },
				'Connexion'
			),
			new Component(
				'form',
				[{ method: 'POST' }, { class: 'flex flex-col flex-wrap' }],
				[
					new Component(
						'label',
						[{ for: 'username' }, { class: 'mb-2 text-gray-700' }],
						"Nom d'utilisateur"
					),
					new Component('input', [
						{ name: 'username' },
						{ id: 'username' },
						{ type: 'email' },
						{ class: 'border border-teal-500 p-1 mb-4' },
					]),
					new Component(
						'label',
						[{ for: 'password' }, { class: 'mb-2 text-gray-700' }],
						'Mot de passe'
					),
					new Component('input', [
						{ name: 'password' },
						{ id: 'password' },
						{ type: 'password' },
						{ class: 'border border-teal-500 p-1 mb-4' },
					]),
					//new Breakline(),
					new Component('input', [
						{ type: 'submit' },
						{ value: 'Se connecter' },
						{
							class:
								'border border-teal-500 bg-teal-400 p-2 text-white cursor-pointer hover:bg-gray-200 hover:text-teal-500',
						},
					]),
				]
			),
		];
		this.setContent(
			new Component(
				'div',
				{ class: 'p-4 border border-teal-300 w-1/4 shadow m-8' },
				newContent
			)
		);
	}
}
