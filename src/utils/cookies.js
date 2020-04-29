/**
 * Retourne la liste des cookies sous forme de tableau de chaque valeurs
 */
function getCookies() {
	return document.cookie.split(';').map(e => e.trim());
}

function isUserConnected() {
	getCookies().forEach(c => {
		console.warn(c);
		if (c.startsWith('uuid=')) {
			console.log('logged');
			if (c.includes('uuid=disconnected') === false) {
				return true;
			}
		}
	});
	return false;
}

export { getCookies, isUserConnected };
