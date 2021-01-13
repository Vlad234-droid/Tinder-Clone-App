import {Avatar} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
//COMPONENTS
import Infos from '../Infos';

//STYLES
import '../styles/ChatScreen.css';

const ChatScreen = () => {
	const history = useHistory();
	const url = history.location.pathname;
	console.log(url);
	const [Peoples, setPeoples] = useState(Infos);
	const [People, setPeople] = useState(null);
	const [input, setInput] = useState('');

	useEffect(() => {
		const currentPeople = Peoples.filter((p) => p.url === url);
		setPeople(currentPeople[0]);
	}, [Peoples, url]);

	const handleSend = (e) => {
		e.preventDefault();
		e.target.value = '';
		setInput('');
	};

	return (
		<>
			{People && (
				<div className="chatScreen">
					<p className="chatScreen__timestamp">
						{`YOU MATCHED WITH ${People.name} ON 10/08/2021`}
					</p>

					<div className="chatScreen__message">
						<Avatar
							className="chatScreen__image"
							alt={People.name}
							src={People.profilePicture}
						/>
						<p className="chatScreen__text">{People.message}</p>
					</div>
				</div>
			)}
			<form className="chatScreent_input">
				<input
					value={input}
					className="chatScreen_inputField"
					type="text"
					placeholder="Type a message..."
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					onClick={(e) => handleSend(e)}
					type="submit"
					className="chatScreen__button"
				>
					Send
				</button>
			</form>
		</>
	);
};

export default ChatScreen;
