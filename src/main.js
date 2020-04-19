const base_url = require('./url');

const appContainer = document.querySelector('#appContainer'),
	hostname = window.location.hostname,
	protocol = window.location.protocol;
	port = window.location.port;


fetch(base_url(protocol, hostname, port) + '/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));

