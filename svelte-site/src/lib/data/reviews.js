export const PLACEHOLDER = '/images/placeholder-plate.svg';

export const reviews = [
	{
		slug: 'berns-steakhouse',
		name: 'Bern’s Steakhouse',
		city: 'Tampa',
		state: 'Florida',
		established: 1956,
		listRank: 1,
		hero: '/images/image1-1.jpg',
		tagline: 'Velvet, velvet, and more uhh… well, velvet.',
		copy: [
			'Bern’s is a fancy steakhouse located in Tampa, Florida which has been around since 1956 that has the ambiance of an old brothel, but like, in a good way.',
			'It feels really old school with velvet, velvet, and more uhh…..well velvet.',
			'It makes for a really fun experience, and thats the best way Berns stands out from the others.'
		],
		plates: [
			{ src: '/images/image1-1.jpg', w: 1999, h: 972, caption: 'The Porterhouse at Berns' },
			{ src: '/images/image2-1.jpg', w: 972, h: 1999, caption: 'The flourless cakes and chocolate cake' }
		],
		order: [
			{
				label: 'Steven’s Order',
				items: [
					'Porterhouse – Medium Rare, comes with a baked potato, onion strings, green beans, and carrots. Soup or Salad is also included before the main. French Onion was gas.'
				]
			},
			{ label: 'Lauren’s Order', items: ['Fillet Mignon – Medium Rare with the same side'] },
			{ label: 'Shared', items: ['Side order of Mac n Cheese'] },
			{ label: 'Dessert', items: ['Chocolate Cake and Flourless Cake'] }
		],
		cost: null,
		thoughts: [
			'Bern’s was rated as number one in the nation, and for good reason.',
			'The steak is insanely tastey and buttery, the value is good considering you get a soup and a side with your entree.',
			'They have a whole separate room for dessert, like you go upstairs and listen to a live paino player at a more intimate table for dessert. It’s an experience.',
			'They also do wine cellar and kitchen tours for free! It’s a fun time and it’s something we’ve yet to experience at any other steakhouse.'
		]
	},
	{
		slug: 'keens-steakhouse',
		name: 'Keens Steakhouse',
		city: 'New York',
		state: 'New York',
		established: 1885,
		listRank: 2,
		hero: '/images/image7-1.jpg',
		tagline: 'The best steak we have ever had. Full stop.',
		copy: [
			'Keens is located in the heart of Manhattan and has been around since 1885, and boy does it feel like it.',
			'It also has an old school steakhouse feel like Berns, but in a more city colonial style kind of way.',
			'It’s multistory and makes you feel like an 1900’s business man who’s a regular at the corner table.'
		],
		plates: [
			{ src: '/images/image7-1.jpg', w: 1999, h: 972, caption: 'Keens Portherhouse for Two' },
			{ src: '/images/20210924_203232.jpg', w: 4032, h: 1960, caption: 'Moments before demolishing the giant steak' }
		],
		order: [
			{
				label: 'Shared',
				items: [
					'Porterhouse for two – Medium Rare, doesn’t come with anything',
					'Side order of Mashed Potatoes'
				]
			},
			{ label: 'Dessert', items: ['Chocolate Cake'] }
		],
		cost: null,
		thoughts: [
			'Keens was rated as number two in the nation.',
			'The steak is (and we both agree) the best we’ve ever had, and it holds the number one spot to us in terms of food taste and quality.',
			'Where I feel it loses to Berns is that it doesn’t have the playfulness or value that Berns has. No separate dessert room, sides have to be ordered separately (as is seems to be common) and no tours.',
			'That being said, its in NYC and the atmosphere is still fun and classy and electric. The food is the best, and the experience was all around amazing.',
			'For me, it earns the number 2 spot because I feel Berns holds a better value, but for Lauren this takes the cake as numero uno.'
		]
	},
	{
		slug: 'oak-steakhouse',
		name: 'Oak Steakhouse',
		city: 'Charleston',
		state: 'South Carolina',
		established: 2009,
		listRank: 38,
		hero: '/images/image5-1.jpg',
		tagline: 'Old school modern, with exposed brick and red seats.',
		copy: [
			'Oak Steakhouse has only been around since 2009, starting at the Charleston location, they now have seven locations spanning across South and North Carolina, Virginia, Tennessee, and Georgia.',
			'The atmosphere I could best describe as old school modern. It’s dimly lit with exposed brick, but there’s still that steakhouse touch of lots of wood and red seats.',
			'It’s a two story restaurant located in a historic looking South Carolina building.'
		],
		plates: [
			{ src: '/images/image5-1.jpg', w: 1999, h: 972, caption: 'The Ribeye at Oak Steakhouse' },
			{
				src: '/images/image9-1.jpg',
				w: 1999,
				h: 972,
				caption: 'Oak Steakhouse Chocolate Cake and Caramel Cheesecake'
			}
		],
		order: [
			{ label: 'Steven’s Order', items: ['Ribeye – Medium Rare, doesn’t really come with anything'] },
			{ label: 'Lauren’s Order', items: ['Fillet Mignon – Medium Rare'] },
			{ label: 'Shared', items: ['Side order of lobster Mac n Cheese and Mashed Potatoes'] },
			{ label: 'Dessert', items: ['Chocolate Cake and Caramel Cheesecake'] }
		],
		cost: '$199.34',
		thoughts: [
			'Oak Steakhouse falls as number 38 of the top 50, and we both agreed that so far that spot is deserved.',
			'The steaks were really well prepared and tasted good, but for the price, the others knock Oak out of the park.',
			'The sides were really good here, this was our first dabble in lobster mac n cheese and it did not disappoint with large chuck of lobster and a buttery cheesy flavor. The mashed potatoes were yummy as well',
			'The desserts were just ok, it felt like they left something to be desired. The chocolate cake was a little dry and the cheesecake was good but not amazing. It almost felt like dessert was kind of an afterthought. Great portion sizes though',
			'All in all, it was a really nice dinner and I definitely wouldn’t miss it if you were in Charleston, but it wasn’t a show stopper like the others have been.'
		]
	},
	{
		slug: 'charlie-palmer-steak',
		name: 'Charlie Palmer Steak',
		city: 'Washington',
		state: 'DC',
		established: null,
		listRank: 14,
		hero: '/images/img5.jpg',
		tagline: 'Staring down the US Capitol with bone marrow on the side.',
		copy: [
			'Charlie Palmer has various locations, but the one we went to was in the heart of Washington, DC. Quite literally you are staring at the US Capitol building while eating if you get a nice spot.',
			'Very modern interior with a nice upscale classy vibe',
			'Its a far stray from the wooden interiors with the red and velvet accents of the others spots.',
			'One of the only spots we’ve been with a wine sommelier',
			'Also the only spot we’ve been that included bone marrow with the steak. Nice touch.'
		],
		plates: [
			{ src: '/images/img5.jpg', w: 4080, h: 1950, caption: 'Porterhouse for two at Charlie Palmer Steak' },
			{ src: '/images/Snapchat-122179806.jpg', w: 1935, h: 4000, caption: 'The view of the US Capitol' }
		],
		order: [
			{
				label: 'Shared',
				items: [
					'Porterhouse for two – Medium Rare, comes with no side 🙁',
					'Mashed potatoes',
					'Lobster Mac n Cheese',
					'They did have a free bread service'
				]
			},
			{ label: 'Dessert', items: ['Peanut butter cake'] }
		],
		cost: '$242',
		thoughts: [
			'Charlie Palmer somehow clutched #14 on the article we are basing our travels on.',
			'They must’ve paid the writer of the article or something because we both think Oakhouse was better.',
			'Maybe we just had a “bad” steak. All the steaks have been amazing but this definitely falls in 6/6 so far just due to it being a bit drier and lacking in flavor compared to the others.',
			'The sides were good but the lobster mac was lacking some lobster. The mash was creamy and flavorful.',
			'The environment and location carried this spot a lot for me.',
			'The dessert was good 🙂'
		]
	},
	{
		slug: 'john-howie-steak',
		name: 'John Howie Steak',
		city: 'Bellevue',
		state: 'Washington',
		established: 2009,
		listRank: null,
		hero: '/images/image4-2.jpg',
		tagline: 'A love letter to fat and butter. And a $6 bread basket.',
		copy: [
			'Also opening in 2009, John Howie steak falls again under the classy establishment umbrella.',
			'Not as old school as its located in a large Microsoft building in the heart of Bellevue.',
			'The atmosphere here is generic classy, very nice service and waiters, everyone is well dressed, the usual for a fancy restaurant. Nice view of Bellevue.',
			'They did provide us both with a black napkin instead of a white napkin because we were wearing dark colored clothes, that is the first time I have encountered that anywhere',
			'They didn’t cut the porterhouse for us? Would’ve been a nice touch.'
		],
		plates: [
			{ src: '/images/image4-2.jpg', w: 1999, h: 879, caption: 'The Porterhouse at John Howie Steak' },
			{
				src: '/images/IMG_3759.jpg',
				w: 698,
				h: 620,
				caption: 'The $6 bread basket (the bread was gas I have to admit)'
			}
		],
		order: [
			{
				label: 'Shared',
				items: [
					'Porterhouse – Medium Rare, come with nothing 🙁',
					'Bread – they brought it over basically without asking but it had a $6 charge on the menu. I forgot to check to see if I was charged or not though.',
					'We ordered mac n cheese and wagyu beef fat fried french fries for sides'
				]
			},
			{
				label: 'Dessert',
				items: ['Bananas foster that the couple next to us so graciously shared with us 🙂']
			}
		],
		cost: '$237',
		thoughts: [
			'The theme of this steak (an all the food here) is fat and butter, and thats not a bad thing!',
			'The steak has a good unique taste to it that I think can only be attributed to butter, it slices like butter and a man with no teeth could chew it.',
			'The fried were some of the best I’ve had the the mac n cheese was the best I’ve had in my opinion (Lauren disagrees).',
			'Where they lose a bit is value ($6 for BREAD!!!!!)',
			'There’s also nothing that stands out tremendously other than the food.',
			'Service was swift and polite and I had to be rolled out. What more can you ask for.',
			'I will note that the bananas foster was SO good, and they come to the table to prepare and flambe it.'
		]
	},
	{
		slug: 'metropolitan-grill',
		name: 'Metropolitan Grill',
		city: 'Seattle',
		state: 'Washington',
		established: 1983,
		listRank: 18,
		hero: '/images/image8-2.jpg',
		tagline: 'John Mayer ate here, need I say more?',
		copy: [
			'Metropolitan Grill has a similar vibe to Bern’s but with less velvet.',
			'It’s been around since 1983 and has become pretty famous. They have a classic celeb wall with pictures of all the celebrities that have eaten there',
			'Its a nice old school classy feel with lots of wood and green velvet seats and drapes.',
			'The kitchen is semi-open so when you walk to the bathroom you can see the steaks being flamed up which is fun.',
			'John Mayer ate here, need I say more?'
		],
		plates: [
			{ src: '/images/image8-2.jpg', w: 1999, h: 821, caption: 'Porterhouse from Metropolitan Grill' },
			{ src: '/images/IMG_3904.jpg', w: 698, h: 706, caption: 'Ice cream sundae (with spoon in the ready position)' }
		],
		order: [
			{
				label: 'Shared',
				items: [
					'Porterhouse – Medium Rare, COMES WITH a baked potato or mashed. We got mashed.',
					'Mac n Cheese'
				]
			},
			{ label: 'Dessert', items: ['A big ice cream sundae'] }
		],
		cost: null,
		thoughts: [
			'Metropolitan Grill was delicious and our waiter was the best! He had accidentally dropped our first steak (rip porterhouse) and he was so apologetic and got us the ice cream sundae for free.',
			'The steak came with the au jus which was nice to add to the steak and we also got three different types of flaky salts (upon request) to use',
			'The sides were great with the mac n cheese really shining.',
			'The ice cream for some reason was other worldly, really creamy and soft. Made for a really mouthwatering sundae.',
			'Overall I can see why its so well regarded at #18 on the articles list, I have a feeling it deserves a higher spot. Time shall tell.'
		]
	},
	{
		pending: true,
		slug: 'gene-and-georgetti',
		name: 'Gene & Georgetti',
		city: 'Chicago',
		state: 'Illinois',
		established: 1941,
		listRank: null,
		hero: '/video/gene-and-georgetti-reel.jpg',
		tagline: null,
		copy: [],
		plates: [
			{
				video: true,
				src: '/video/gene-and-georgetti-reel.mp4',
				poster: '/video/gene-and-georgetti-reel.jpg',
				w: 1600,
				h: 900,
				caption: 'The filet and a plate of onion rings'
			}
		],
		order: [],
		cost: null,
		thoughts: []
	},
	{
		pending: true,
		slug: 'gibsons',
		name: 'Gibsons Bar & Steakhouse',
		city: 'Chicago',
		state: 'Illinois',
		established: 1989,
		listRank: null,
		hero: '/images/gibsons-filet.jpg',
		tagline: null,
		copy: [],
		plates: [
			{ src: '/images/gibsons-filet.jpg', w: 2400, h: 1800, caption: 'The filet, medium rare, with mashed potatoes' },
			{ src: '/images/gibsons-filet-cut.jpg', w: 2400, h: 1800, caption: 'Down to the last few bites' },
			{ src: '/images/gibsons-the-table.jpg', w: 2400, h: 1800, caption: 'Lauren, mid-meal, by the Rush Street windows' },
			{
				src: '/images/gibsons-celebrity-wall.jpg',
				w: 1125,
				h: 2000,
				caption: 'The celebrity wall — a signed Sopranos photo'
			},
		],
		order: [],
		cost: null,
		thoughts: []
	}
];

/** @param {string} slug */
export const reviewBySlug = (slug) => reviews.find((r) => r.slug === slug);
