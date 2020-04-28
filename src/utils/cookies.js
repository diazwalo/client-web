/**
 * Retourne la liste des cookies sous forme de tableau de chaque valeurs
 */
function getCookies() {
	return document.cookie.split(';').map(e => e.trim());
}

function isUserConnected() {
	for (const c in getCookies()) {
		if (c.startsWith('uuid=') && c !== 'uuid=disconnected') return true;
	}
	return false;
}

export { getCookies, isUserConnected };
