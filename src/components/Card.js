import React from 'react';

/*
// Alternative 1
const Card= (props) => {
	return (
		// The HTML tags/elements are know as JSX by the compiler and we need to import React
		// in other to use them.

		// We can only return one (1) element with others nested in it.
		// So, we only return the div element with the img, div (h2, p); nested in it
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${props.id}.png?200x200`} alt="robots" />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

// Alternative 2
const Card = (props) => {
 	const { name, email, id } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}.png?200x200`} alt="robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
*/


// Destructuring
const Card= ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}.png?200x200`} alt="robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;