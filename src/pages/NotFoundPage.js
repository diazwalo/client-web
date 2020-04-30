import ErrorPage from './ErrorPage';

export default class NotFoundPage extends ErrorPage {
	constructor() {
		super(
			'Erreur 404',
			"Le contenu que vous essayez d'atteindre n'existe pas ou plus."
		);
	}
}
