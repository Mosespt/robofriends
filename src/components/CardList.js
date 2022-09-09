import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
	// const cardsArray = robots.map((user, i) => {
	// 	// We are using map to return multiple components
	// 	return (
	// 		<Card 
	// 		key={robots[i].id} 
	// 		id={robots[i].id} 
	// 		name={robots[i].name} 
	// 		email={robots[i].email} 
	// 		/>
	// 	);
	// })
	
	return (
		<div>
      {
      	robots.map((user, i) => {
					// We are using map to return multiple components
					return (
						<Card 
						key={robots[i].id} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email} 
						/>
					);
				})
      }
    </div>
	)
}

export default CardList;