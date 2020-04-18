const appContainer = document.querySelector('#appContainer'),
	hostname = window.location.hostname,
	protocol = window.location.protocol;
	port = window.location.port;

const myresource_url = port === "" ? `${protocol}//${hostname}/api/v1/myresource` : `${protocol}//${hostnamea}:8080/api/v1/myresource`

fetch(myresource_url)
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));
