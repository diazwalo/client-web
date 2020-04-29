import Component from './Component.js';

describe('component_constructor', () => {
	test('full_constructor', () => {
		const c = new Component('a', { class: 'test' }, 'content');
		expect(c.type).toBe('a');
		expect(c.attributes).toStrictEqual({ class: 'test' });
		expect(c.content).toBe('content');
	});

	test('autoclose_component', () => {
		const c = new Component('a');
		expect(c.type).toBe('a');
		expect(c.attributes).toStrictEqual(undefined);
		expect(c.content).toStrictEqual(undefined);
	});
});

describe('component_methods', () => {
	test('set_content', () => {
		const c = new Component('a', null, 'content');
		expect(c.content).toBe('content');
		c.setContent('hello world');
		expect(c.content).toBe('hello world');
	});
});

describe('component_rendering', () => {
	test("rendu d'une balise auto fermante", () => {
		const c = new Component('button');
		expect(c.render()).toBe('<button/>');
	});

	test("rendu d'une balise avec texte simple", () => {
		const c = new Component('p', null, 'salut');
		expect(c.render()).toBe('<p>salut</p>');
	});

	test("rendu d'une balise a attributs", () => {
		const c = new Component('p', { class: 'red' }, 'salut');
		expect(c.render()).toBe('<p class="red">salut</p>');
	});

	test("rendu d'une balise a multiples attributs", () => {
		const c = new Component(
			'a',
			[{ class: 'red' }, { href: 'http://google.fr' }],
			'Google'
		);
		expect(c.render()).toBe(
			'<a class="red" href="http://google.fr">Google</a>'
		);
	});

	test("rendu d'un component ayant un component en contenu", () => {
		const c = new Component('p', null, new Component('a', null, 'bouh'));
		expect(c.render()).toBe('<p><a>bouh</a></p>');
	});

	test("rendu d'un component ayant une liste de components en contenu", () => {
		const c = new Component('p', null, [
			new Component('a', null, 'bouh'),
			new Component('a', null, 'beh'),
		]);
		expect(c.render()).toBe('<p><a>bouh</a><a>beh</a></p>');
	});
});
