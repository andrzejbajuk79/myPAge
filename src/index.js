import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';



import Header  from './components/header/header.component'
import Jokes from './components/jokes/jokes';
import Form from './components/form/form.component';
import App from './App';
import MusicMaster from './projects/music-app/src';
import Monsters from './projects/monsters/src';
// import Shop from './projects/e-Commerce/src';


ReactDom.render(
	<Router history={createBrowserHistory()}>
		<Switch>
			{/* <Route exact path="/" render={()=><Header Component={App}/>} /> */}
      <Route exact path="/" render={()=><Header ><App/></Header>} />
			<Route path="/jokes" render={()=><Header ><Jokes/></Header>}/>
			<Route path="/music-master" render={()=><Header ><MusicMaster/></Header>}/>
			{/* <Route path="/monsters" render={()=><Header ><Monsters/></Header>}/> */}
			{/* <Route path="/shop" render={()=><Header ><Shop/></Header>}/> */}
			<Route path="/contact"render={()=><Header ><Form/></Header>}/>
	
		</Switch>
	</Router>,
	document.getElementById('root')
);


// const AppWithHeader =() => {
// 	return(
// 		<Header Component={App} />
// 	)
// }