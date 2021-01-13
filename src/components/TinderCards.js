import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
//styles
import '../styles/TinderCards.css';
// DATA
import database from '../fireBase';

const TinderCards = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const unsubscribe = database
			.collection('people')
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			);

		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<div>
			<h2 className="tinder__cards">Tinder Cards</h2>
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						preventSwipe={['up', 'down']}
						className="swipe"
						key={person.name}
					>
						<div
							style={{backgroundImage: `url(${person.url})`}}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;
