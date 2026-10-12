export const site = {
	title: 'Steven and Laurens Steakations',
	short: 'Steakations',
	tagline: 'A review of some of the best steaks in the nation.',
	listTotal: 50,
	listUrl: 'https://www.thedailymeal.com/eat/best-steakhouses-america/',
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/rankings/', label: 'Rankings' },
		{ href: '/about/', label: 'About' }
	]
};

export const rankings = [
	{
		diner: 'Steven',
		order: [
			'berns-steakhouse',
			'keens-steakhouse',
			'john-howie-steak',
			'metropolitan-grill',
			'gene-and-georgetti',
			'oak-steakhouse',
			'gibsons',
			'charlie-palmer-steak'
		]
	},
	{
		diner: 'Lauren',
		order: [
			'keens-steakhouse',
			'berns-steakhouse',
			'metropolitan-grill',
			'john-howie-steak',
			'oak-steakhouse',
			'gene-and-georgetti',
			'gibsons',
			'charlie-palmer-steak'
		]
	}
];


/** @param {string} slug */
export const isRanked = (slug) => rankings.every(({ order }) => order.includes(slug));

export const about = {
	story: [
		'A while ago me and Lauren stumbled upon an article outlining the top 50 steakhouses in the nation. Number one happened to be an hour away from where I grew up. So we decided to make a weekend out of it and stay a night in Tampa and go to Berns. From there we decided that it would be fun to try and make it to all 50 steakhouse over the course of many many years and to explore the cities and towns where they reside.',
		'So far its been a lot of fun with lots of cities explored and lots of delicious steaks eaten.'
	],
	doneness: 'Firm, but with a little give. Yup, these are medium rare.',
	quote: {
		lines: ['What if someone wants theirs well done?', 'We ask them politely, yet firmly, to leave.'],
		attribution: 'Hank Hill, King of the Hill'
	}
};
