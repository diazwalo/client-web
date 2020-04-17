const appContainer = document.querySelector('#appContainer');

fetch('http://localhost:8080/api/v1/myresource')
	.then(response => response.text())
	.then(message => (appContainer.innerHTML = message));
