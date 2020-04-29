import Component from '../rendering/Component';
import Card from '../rendering/Card';

export default class Index extends Component {
	constructor() {
		super('main');
		const newContent = [
			new Component(
				'section',
				[
					{
						class:
							'bg-gray-800 pt-2 pb-2 border-solid border-b-4 border-teal-500 mb-2',
					},
				],
				[
					new Component('img', [
						{ src: 'images/Logo_green_Water.png' },
						{ alt: 'greenwater-logo' },
						{ class: 'm-auto w-64 h-32' },
					]),
					new Component(
						'p',
						[{ class: 'text-center text-white' }],
						'atum deleniti atque corrupti quos dolores et quas molestias e'
					),
				]
			),
			// Cards
			new Component(
				'div',
				[{ class: 'flex flex-row flex-wrap justify-around mb-4' }],
				[
					new Card(
						'Hello World !',
						`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati`,
						'images/wall.jpg'
					),
					new Card(
						'Hello World !',
						`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati`,
						'images/paris.jpg'
					),
					new Card(
						'Hello World !',
						`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati`,
						'images/vine-leaves.jpg'
					),
				]
			),

			new Component(
				'p',
				{ class: 'text-gray-700' },
				`
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam 
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et 
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            `
			),
		];
		this.setContent(newContent);
	}
}
