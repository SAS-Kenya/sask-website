import React from 'react';
import { Link } from 'react-router-dom';

function HeaderIntro() {
	return (
		<div className="headerIntro">
			<h1>Welcome to the Skeptics and Atheist Society of Kenya</h1>
			{/* <h2>A society for all non-believers in Kenya</h2> */}
			<h3>
				A society of Atheists, Skeptics, Agnostics, Philosophers,
				<br />
				Secularists, Humanists and Rationalists
			</h3>
			<Link to={'/join'}>Join the society</Link>
		</div>
	);
}

export default HeaderIntro;
