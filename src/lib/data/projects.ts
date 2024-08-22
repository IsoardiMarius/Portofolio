import Assets, { getAssetURL } from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
export const items: Array<Project> = [
	{
		slug: 'digital-express-restaurant',
		color: '#573497',
		description:
			'Une solution personnalisée pour les restaurateurs, afin de moderniser leur présence en ligne et d\'optimiser l\'expérience client. Cette solution comprend des fonctionnalités telles que la gestion simplifiée des réservations, la mise en valeur des menus en ligne, et des outils pour recueillir et analyser les retours clients.',
		shortDescription:
		// shortDescription sera plus court que description
			'Une solution sur mesure à destination des restaurateurs',
		links: [{ to: 'https://dashboard.digital-express.cloud/', label: 'Live Demo' }],
		logo: Assets.DigitalExpress,
		name: 'DigitalExpress',
		period: {
			from: new Date(2023, 5, 1),
		},
		skills: getSkills('linux', 'ansible', 'docker', 'nginx','express', 'ts', 'mysql', 'pr', 'reactjs', 'tailwind'),
		type: 'Application',
		screenshots: [
			{
				label: 'screen 1',
				src: getAssetURL(Assets.Dashboard1)
			},
			{
				label: 'screen 2',
				src: getAssetURL(Assets.Dashboard2)
			},
			{
				label: 'screen 3',
				src: getAssetURL(Assets.Dashboard3)
			},
			{
				label: 'screen 4',
				src: getAssetURL(Assets.Dashboard4)
			},

		],
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projets';