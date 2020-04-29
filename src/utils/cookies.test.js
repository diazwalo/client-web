import { isUserConnected } from './cookies';

describe('connected_cookies', () => {
	test('should be connected locally', () => {
		// Initialisation
		document.cookie = 'uuid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
		document.cookie = 'uuid=hello-world-fake-uuid';

		expect(isUserConnected()).toBe(true);
	});

	test('should not be connected locally', () => {
		document.cookie = 'uuid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
		document.cookie = 'uuid=disconnected';

		expect(isUserConnected()).toBe(false);
	});

	test('should not be connected locally, uuid missing', () => {
		document.cookie = 'uuid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
		expect(isUserConnected()).toBe(false);
	});
});
