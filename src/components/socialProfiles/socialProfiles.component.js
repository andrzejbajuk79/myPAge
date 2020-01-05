import React, { Component } from 'react';
import SOCIAL from '../../dataStore/socialProfiles';
import './socialProfile.styles.css';

const Profile = props => {
	const { link, image } = props.profile;
	return (
		<span className="profile-container-social">
			<a className="link-social" href={link}>
				<img className="image-social" src={image} alt="social_profile" />
			</a>
		</span>
	);
};

const SocialProfiles = () => (
	<div>
	
		<div>
			{SOCIAL.map(profile => (
				<Profile key={profile.id} profile={profile} />
			))}
		</div>
	</div>
);

export default SocialProfiles;
