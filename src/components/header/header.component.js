import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
	const { Component } = props;
	const style = {
		display: 'inline-block',
		margin: 10,
		marginBottom: 10
	};
	return (
		<div>
			<div>
				<h3 style={style}>
					{' '}
					<Link to="/">Strona główna</Link>
				</h3>
				<h3 style={style}>
					{' '}
					<Link to="/jokes">Kawały</Link>
				</h3>
				
				<h3 style={style}>
					{' '}
					<Link to="/music-master">Music App</Link>
				</h3>		
				<h3 style={style}>
					<Link to="/contact">Kontakt</Link>
				</h3>
			</div>
			{/* sprawdzic w index.js routy */}
			{/* render={()=><Header Component={App}/>} */}
			{/* <Component /> */}

			{/* <Route exact path="/" render={()=><Header ><App/></Header>} /> */}
			{props.children}

			{/* albo sdamo{children} jak wyslekcjonujemy w funkcji */}
		</div>
	);
};

export default Header;
