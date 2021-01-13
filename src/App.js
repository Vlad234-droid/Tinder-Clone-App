import {Router} from '@material-ui/icons';
import React from 'react';
import './App.css';
// Components
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

// ROUTER
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Header />
						<TinderCards />
						<SwipeButtons />
					</Route>

					<Route exact path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
