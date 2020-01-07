import React, { Component } from 'react';
import SOCIAL from '../../dataStore/socialProfiles';
import { Link } from 'react-router-dom';

import '../styles/Contact.css'
import './socialProfile.styles.css';
import emailIcon from '../../assets/email_icon.png';
import githubIcon from '../../assets/github_icon.png';
import linkedinIcon from '../../assets/linkedin_icon.png';

const Profile = props => {
	const { link, image } = props.profile;
	return (
		<span className="profile-container-social">
			{/* <a className="link-social" href={link}> */}
			<Link to="/contact">
				<img className="image-social" src={linkedinIcon} alt="social_profile" />
			</Link>

			{/* </a> */}
		</span>
	);
};

const SocialProfiles = () => (



	<div className="contact">
	<h3>Kontakt</h3>
	<div className="container">
		<div className="info">
			<p>Jeżeli masz jakiekolwiek pytania lub chciałbyś nawiązać kontakt, zapraszam do kontaktu: </p>
			<div className="socials">
				<i className="fas fa-phone"> <span>535 501 791</span> </i>
				<Link to="/contact">
				<i className="fas fa-envelope"> <span>bajukandrzej79@gmail.com</span> </i></Link>
				<a 
				href="https://www.linkedin.com/in/andrzej-bajuk/" 
				target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
				
				<a 
				href="https://github.com/andrzejbajuk79" 
				target="_blank" rel="noopener noreferrer"><i class="fab fa-github" ></i></a>
			
			</div>
		</div>
	</div>
</div>


	// <div>



	// 	 <i className="fas fa-phone"> <span>602 850 683</span> </i>
	// 	<span className="profile-container-social">
	// 		<Link to="/contact">
	// 			<img className="image-social" src={emailIcon} alt="social_profile" />
	// 		</Link>
	// 	</span>
	// 	<span className="profile-container-social">
	// 		<a
	// 			className="link-social"
	// 			target="_blank"
	// 			href="https://github.com/andrzejbajuk79"
	// 		>
	// 			<img className="image-social" src={githubIcon} alt="social_profile" />
	// 		</a>
	// 	</span>
	// 	<span className="profile-container-social">
	// 		<a
	// 			className="link-social"
	// 			href="https://www.linkedin.com/in/andrzej-bajuk/"
	// 			target="_blank"
	// 		>
	// 			<img className="image-social" src={linkedinIcon} alt="social_profile" />
	// 		</a>
	// 	</span>
	// </div>
);

export default SocialProfiles;
