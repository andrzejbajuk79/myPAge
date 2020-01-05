import React, { Component } from 'react';



 const Joke = ({ joke:{ setup, punchline } }) => (
  // const Joke = props => 
  // { const { setup, punchline } = props.joke;
    // return 
    <p style={{margin:20}}>
			{setup} <em>{punchline}</em>
		</p>)
	

class Jokes extends Component {
	state = { joke: {}, jokes: [] };

	componentDidMount() {
		fetch('https://official-joke-api.appspot.com/jokes/programming/random')
			.then(response => response.json())
      .then(json => this.setState({ joke: json[0] }))
      .catch(error=>alert(error.message))
	}
	fetchJokes = () => {
		fetch('https://official-joke-api.appspot.com/random_ten')
			.then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error=>alert(error.message))
	};

	render() {
		return(
			<div>
        
				<h2>Pora na żart </h2>
				<Joke joke={this.state.joke} />
				<hr />
				<h3>More Jokes</h3>
				<button onClick={this.fetchJokes}>Click Me!</button>
				{this.state.jokes.map(joke => (
					<Joke key={joke.id} joke={joke} />
				))}
			</div>
		);
	}
}

export default Jokes;
