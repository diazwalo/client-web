const appContainer = document.querySelector('#appContainer'),
	hostname = window.location.hostname,
	protocol = window.location.protocol;

fetch(`${protocol}//${hostname}:8080/api/v1/myresource`)
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));
