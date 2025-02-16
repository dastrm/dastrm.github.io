// Base values for meta tags
// So they can be added as suffixes on different pages
// Via <svelte:head>

import { websiteLink } from "$lib/data/links";

export const keywords = [
	'Personal Site',
	'Static Site',
	'Svelte',
	'SvelteKit',
];

export const description =
	"My personal website based on SvelteKit.";

export const title = 'David Strassmann';

export const image = `${websiteLink}/icons/favicon.svg`;
