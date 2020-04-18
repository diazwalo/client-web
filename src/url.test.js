const base_url = require('./url');

describe('base_url', () => {
    test('should include default port when is define', () => {
        expect(base_url('http:','server','8000')).toBe('http://server:8080');
    });
    test('should remove port when is empty', () => {
        expect(base_url('https:','server','')).toBe('https://server');
    });
});
