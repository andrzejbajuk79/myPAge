import React, { Component } from 'react';

import './index.css';


import Projects from './components/projects/projects.component';
import SocialProfile from './components/socialProfiles/socialProfiles.component';
import Title from './components/title/titleComponent';

class App extends Component {
	constructor() {
		super();
		this.state = { displayBio: false };
	}

	togglesDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio });
	};
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<p>Nazywam się Andrzej</p>
				<Title />
				<p>
					kodowanie daje mi wiele satysfakcji i chciałbym być w kontakcie
					<br /> z nowymi technologiami oraz ludźmi, od których mogę czerpać
					wiedzę i świeże pomysły..
				</p>
				{this.state.displayBio ? (
					<div>
						<p>
							{' '}
							Obecnie pracuję jako ABAP developer w firmie consultingowej
							świadczącej usługi dla firm korzystających z systemów SAP.
							<br /> W wolnym czasie staram realizować również własne projekty
							aplikacji typu SinglePage. Interesują mnie zwłaszcza technologie
							takie jak REACT,Angular, Typescript . .
						</p>
						<button onClick={this.togglesDisplayBio} className="btn btn-info">
							Ukryj
						</button>
					</div>
				) : (
					<button onClick={this.togglesDisplayBio} className="btn btn-info">
						Więcej o mnie
					</button>
				)}
				<hr />
				<Projects />
				<hr />

				<SocialProfile />
			</div>
		);
	}
}

export default App;
