import Component from './Component.js';

describe('component_rendering', () => {
	test("rendu d'une balise auto fermante", () => {
		const c = new Component('button', null, '', true);
		expect(c.render()).toBe('<button />');
	});

	test("rendu d'une balise avec texte simple", () => {
		const c = new Component('p', null, 'salut', false);
		expect(c.render()).toBe('<p>salut</p>');
	});

	test("rendu d'une balise a attributs", () => {
		const c = new Component('p', { class: 'red' }, 'salut', false);
		expect(c.render()).toBe('<p class="red">salut</p>');
	});

	test("rendu d'une balise a multiples attributs", () => {
		const c = new Component(
			'a',
			[{ class: 'red' }, { href: 'http://google.fr' }],
			'Google',
			false
		);
		expect(c.render()).toBe(
			'<a class="red" href="http://google.fr">Google</a>'
		);
	});

	test("rendu d'un component ayant un component en contenu", () => {
		const c = new Component(
			'p',
			null,
			new Component('a', null, 'bouh', false),
			false
		);
		expect(c.render()).toBe('<p><a>bouh</a></p>');
	});

	test("rendu d'un component ayant une liste de components en contenu", () => {
		const c = new Component(
			'p',
			null,
			[
				new Component('a', null, 'bouh', false),
				new Component('a', null, 'beh', false),
			],
			false
		);
		expect(c.render()).toBe('<p><a>bouh</a><a>beh</a></p>');
	});
});
