import React, {useState} from 'react';
//STYLES
import '../styles/Chats.css';
// COMPONENTS
import Chat from '../components/Chat';
import Infos from '../Infos';

const Chats = () => {
	const [infos, setInfo] = useState(Infos);
	return (
		<div className="chats">
			{infos.map((info, i) => (
				<Chat
					key={i}
					name={info.name}
					message={info.message}
					timestamp={info.timestamp}
					profilePicture={info.profilePicture}
				/>
			))}
		</div>
	);
};
export default Chats;
