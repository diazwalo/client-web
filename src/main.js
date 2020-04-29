import getApiUrl from './utils/url';
import Menu from './rendering/Menu';
import MenuButton from './rendering/MenuButton';
import Index from './pages/Index';
import { mainPageRenderer } from './pages/PageRenderer';
import { isUserConnected } from './utils/cookies';

const appContainer = document.querySelector('#appContainer'),
	apiUrl = getApiUrl(window.location);
/*
fetch(apiUrl + '/api/v1/helloworld')
	.then(response => response.text())
	.then(message => {
		// Si le message du serveur est bien reçu
		const messageComponent = new Component(
			'h1',
			{ style: 'color: #096fe3; text-shadow: 1px 1px 12px #5c5c5c' },
			message,
			false
		);
		appContainer.innerHTML = messageComponent.render();
	})
	.catch(error => {
		// Si le serveur n'est pas joignable
		const errorMessage = new Component(
			'h1',
			{ style: 'color: red; font-size: 11pt' },
			"Erreur lors de l'obtention d'informations depuis le serveur: " + error,
			false
		);
		appContainer.innerHTML = errorMessage.render();
	});
*/

const menu = new Menu();
const index = new Index();

mainPageRenderer.setTarget('#appContainer');
mainPageRenderer.setMenu(menu);

menu.setEvents();

mainPageRenderer.setPage(index);
