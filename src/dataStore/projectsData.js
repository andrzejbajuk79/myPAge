import project1 from '../assets/e-commerce.PNG';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import resturacja from '../assets/resturacja.png';
import tools  from '../assets/tools.png';
import sound from '../assets/sound.png';
import slider from '../assets/slider.png';


const PROJECTS = [
	{
		id: 1,
		title:  'E-Commerce SHOP-Redux',
		description: 'apka przy użyciu czystego Reacta',
		heroku: 'https://heroku-e-commerce-shop.herokuapp.com',
		github: 'https://github.com/andrzejbajuk79/e_commerce-shop',
		image: project1
	},
	{
		id: 2,
		title: 'Sound Master',
		description: 'wyszukiwarka muzyki za pomoca SpotifyAPI',
		heroku: 'https://heroku-e-sound-master.herokuapp.com',
		github: 'https://github.com/andrzejbajuk79/music-app-React',
		image:  sound 
	},
	{
		id: 3,
		title: 'E-Commerce SHOP-Angular',
		description: 'apka sklepu, dodawanie, usuwanie koszyka zakupów',
		github: 'https://github.com/andrzejbajuk79/Angular2-product-list',
		image: tools 
	},
	{
		id: 4,
		title: 'Restaurant',
		description: "...dużo w HTML-u",
		github: 'https://github.com/andrzejbajuk79/Restaurant--simple-page',
		image: resturacja
	},

	{
		id: 5,
		title: 'Slider Pure CSS',
		description: 'próba stworzenia slidera w czystym CSSIe',
		github: 'https://github.com/andrzejbajuk79/slider-pure-css',
		image: slider
	}

	
];

export default PROJECTS;
