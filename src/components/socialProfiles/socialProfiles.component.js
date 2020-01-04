import React, { Component } from 'react';
import SOCIAL from '../../dataStore/socialProfiles';
import './socialProfile.styles.css';

class Profile extends Component {
	render() {
		const { link, image } = this.props.profile;
		console.log(this.props);

		return (
			<span className="profile-container-social">
				<a className="link-social" href={link}>
					<img className="image-social" src={image} alt="social_profile" />
				</a>
			</span>
		);
	}
}

class SocialProfiles extends Component {
	render() {
		return (
    
			<div>
          <hr/>
				<div>
					{SOCIAL.map(profile => {
						return <Profile key={profile.id} profile={profile} />;
					})}
				</div>
			</div>
		);
	}
}

export default SocialProfiles;
