import React from 'react';
// STYLES
import '../styles/Chat.css';
// ICONS
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

const Chat = ({name, message, timestamp, profilePicture}) => {
	return (
		<Link to={`/chat/${name}`}>
			<div className="chat">
				<Avatar className="chat__image" alt={name} src={profilePicture} />
				<div className="chat__details">
					<h2>{name}</h2>
					<p>{message}</p>
				</div>
				<p className="chat__timestamp">{timestamp}</p>
			</div>
		</Link>
	);
};
export default Chat;
