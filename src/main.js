import getApiUrl from './utils/url';
import Component from './rendering/Component';

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message))
	.catch(error => {
		const errorMessage = new Component(
			'h1',
			{ style: 'color: red' },
			"Erreur lors de l'obtention d'informations depuis le serveur: " + error,
			false
		);
		appContainer.innerHTML = errorMessage.render();
	});
