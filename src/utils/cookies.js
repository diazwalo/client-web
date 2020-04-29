/**
 * Retourne la liste des cookies sous forme de tableau de chaque valeurs
 */
function getCookies() {
	return document.cookie.split(';').map(e => e.trim());
}

function isUserConnected() {
	let result = false;
	getCookies().forEach(c => {
		if (c.startsWith('uuid=')) {
			if (c.includes('uuid=disconnected') === false) {
				result = true;
			}
		}
	});
	return result;
}

export { getCookies, isUserConnected };
