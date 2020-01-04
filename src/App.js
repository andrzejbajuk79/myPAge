import React, { Component } from 'react';

import Projects  from './components/projects/projects.component';
import SocialProfile  from './components/socialProfiles/socialProfiles.component'

import Title from './components/title/titleComponent'

class App extends Component {
	constructor() {
		super();
    this.state = { displayBio: false}; 
  };
  
	togglesDisplayBio= () => {
    this.setState({displayBio : !this.state.displayBio})
	};
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is David.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
					this.state.displayBio ?
				(	<div>
          <p> Nazywam sie Andrzej, jestem Developerem, poniżej przedstawiam moje portfolio</p>
			<p>Zawsze szukam nowych wyzwan, projektów</p>
						<button onClick={this.togglesDisplayBio} className='btn btn-info'>Ukryj</button>
					</div>
					):<button onClick={this.togglesDisplayBio} className='btn btn-info'>Więcej o mnie</button>
				}
        <hr />
        <Projects />
      
        <SocialProfile />
      </div>
    )
  }
}
export default App;

// class App extends Component {
// 	constructor() {
// 		super();
//     this.state = { displayBio: false}; 
//   };
  
// 	togglesDisplayBio= () => {
//     this.setState({displayBio : !this.state.displayBio})
// 	};
// 	render() {
// return
// 	<div>
// 				<h1>Cześć</h1>
// 				<p> Nazywam sie Andrzej, jestem Developerem, poniżej przedstawiam moje portfolio</p>
// 				<p>Zawsze szukam nowych wyzwan, projektów</p>
// 				{
// 					this.state.displayBio ?
// 				(	<div>
// 						<button onClick={this.togglesDisplayBio}>Ukryj</button>
// 					</div>
// 					):<button onClick={this.togglesDisplayBio}>Więcej o mnie</button>
// 				}
// 				<Projects />
// 				<SocialProfile />
// 			</div>

// }
// }
// export default App;
