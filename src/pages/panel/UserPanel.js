import Component from '../../rendering/Component';
import Index from '../Index';
import { PageRenderer } from '../PageRenderer';
import Connection from '../Connection';
import UserPanelPageLink from '../../rendering/UserPanelPageLink';
import UserIndex from '../userpanel-pages/UserIndex';
import NotFoundPage from '../NotFoundPage';

export default class UserPanel extends Component {
	#userPage; // Page
	#target; // string

	constructor() {
		super(
			'section',
			{ class: 'border border-blue-500 shadow-lg h-full' },
			null
		);
		this.#target = 'userSubPage';
		const newContent = [
			new Component('div', { class: 'flex flex-row h-full' }, [
				// Left column
				new Component('div', { class: 'border border-blue-500 w-1/4' }, [
					new Component(
						'h2',
						{
							class:
								'border-b border-blue-500 text-blue-500 text-xl p-4 text-center mb-6',
						},
						'Mon compte'
					),
					new Component('div', null, [
						new UserPanelPageLink('Accueil', 'userIndexPageButton'),
						new UserPanelPageLink('Calcul de surface', 'calculSurfaceButton'),
						new UserPanelPageLink(
							'Calcul dimensions de cuves',
							'calculDimensions'
						),
						new UserPanelPageLink('Surveillance', 'surveillanceButton'),
						new UserPanelPageLink('Paramètres du compte', 'parametersButton'),
					]),
				]),
				// Right column
				new Component(
					'div',
					[
						{ class: 'border border-l-0 border-blue-500 w-full p-2' },
						{ id: this.#target },
					],
					new UserIndex()
				),
			]),
		];
		this.setContent(newContent);
	}

	/**
	 * Set une nouvelle page, l'affiche et effectue une action post-rendu de la page
	 * @param {Index | Connection | Inscription | UserPanel} page
	 */
	setPage(page) {
		this.#userPage = page;
		let postRenderOperation = () => {};
		let content = '404';

		if (this.#userPage instanceof UserIndex) {
			content = this.#userPage.render();
			postRenderOperation = this.#userPage.setEvents;
		} else if (this.#userPage instanceof NotFoundPage) {
			content = this.#userPage.render();
		}

		document.querySelector('#' + this.#target).innerHTML = content;
		postRenderOperation();
	}

	/**
	 * Active ou desactive le highlight dans le menu du panel utilisateur
	 * @param {string} target
	 */
	switchActive(target) {
		const ids = [
			'userIndexPageButton',
			'calculSurfaceButton',
			'calculDimensions',
			'surveillanceButton',
			'parametersButton',
		];
		ids
			.map(e => document.querySelector('#' + e))
			.forEach(e =>
				e.classList.remove(
					'text-blue-300',
					'border-b-2',
					'border-blue-500',
					'bg-blue-100'
				)
			);
		document
			.getElementById(target)
			.classList.add(
				'text-blue-300',
				'border-b-2',
				'border-blue-500',
				'bg-blue-100'
			);
	}

	/**
	 * Active un trigger par défaut pour toutes les pages du panel
	 */
	setMenuTriggers() {
		const userIndexPageButton = document.getElementById('userIndexPageButton'),
			calculSurfaceButton = document.getElementById('calculSurfaceButton'),
			calculDimensions = document.getElementById('calculDimensions'),
			surveillanceButton = document.getElementById('surveillanceButton'),
			parametersButton = document.getElementById('parametersButton');

		// Temporaire
		const notFound = from => {
			this.switchActive(from);
			this.setPage(new NotFoundPage());
		};

		// Evenements des boutons du menu, affichage des pages de gestion et mise a jour du style
		userIndexPageButton.onclick = e => {
			this.switchActive('userIndexPageButton');
			this.setPage(new UserIndex());
		};
		calculSurfaceButton.onclick = e => notFound('calculSurfaceButton');
		calculDimensions.onclick = e => notFound('calculDimensions');
		surveillanceButton.onclick = e => notFound('surveillanceButton');
		parametersButton.onclick = e => notFound('parametersButton');
	}

	/**
	 * Bind des events aux éléments graphiques (réalisé après un rendu)
	 */
	setEvents() {
		this.setMenuTriggers();
	}
}
