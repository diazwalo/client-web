import getApiUrl from './utils/url';

const appContainer = document.querySelector('#appContainer'),
    const {protocol, hostname, port} = window.location;
	apiUrl = getApiUrl(protocol, hostname, port);

fetch(apiUrl + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));
