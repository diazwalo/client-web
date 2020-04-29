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
						`Bienvenue sur le site de GreenWater<br>
						Les enjeux environnementaux prennent une plus grande importance chaque 
						jour et représentent un défi immense posé à nos sociétés. 
						Face à ces enjeux il n’y a pas une seule réponse à apporter 
						mais une multitude qui ensemble modifier le cours des événements 
						. Les murs végétaux sont une partie de la réponse à apporter.`
					),
				]
			),
			// Cards
			new Component(
				'div',
				[{ class: 'flex flex-row flex-wrap justify-around mb-4' }],
				[
					new Card(
						'Impact Social',
						`Un mur végétal redonne du cachet aux vieilles bâtisses d'antan, il apporte de la vie 
						et ont un apport bienfaisant pour notre santé.`,
						'images/wall.jpg'
					),
					new Card(
						"L'impact economique",
						`Avoir un mur végégetal est un bon moyen de faire des économies. 
						En effet ce dispotistif permet d'améliorer son isolation et 
						donner un plus à une vente immobilière`,
						'images/paris.jpg'
					),
					new Card(
						"L'impact environemental",
						`En effet faire installer un mur végétal redonne un second souffle 
						à la biodiversité en ville. Ce mur permet de capturer le trop 
						plein de Co2 présent dans nos villes et de baisser la température 
						des batiments en cas de fortes chaleurs`,
						'images/vine-leaves.jpg'
					),
				]
			),

			new Component(
				'p',
				{ class: 'text-gray-700' },
				`
				Bienvenue chez Green Water<br>

				Les enjeux environnementaux prennent une plus grande importance chaque jour et 
				représentent un défi immense posé à nos sociétés. 
				Face à ces enjeux il n’y a pas une seule réponse à apporter mais une multitude 
				qui ensemble modifier le cours des événements . 
				Les murs végétaux sont une partie de la réponse à apporter.<br>
				
				En effet les murs vegetaux perment de diminuer l'impact la polution notament du 
				Co2 très présent en ville ainsi que la polution sonor en isolant vos murs,cela 
				limite aussi les risque d'innondation en stockant une partie des eaux de pluie.<br>
				
				Pour vous aider Green Water vous propose une application et un site web permetant 
				de voir en direct le taux de remplisage de vos cuves permetant d'arroser vos mur s
				végétaux et de prévoir le bon moment pour vider ou à contrario fermer votre cuve.<br>
				
				Green water pour des villes plus verte.
            `
			),
		];
		this.setContent(newContent);
	}
}
