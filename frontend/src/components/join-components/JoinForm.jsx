import React, { useState } from 'react';
import genderList from '../../genderList';
import religions from '../../religions';

function JoinForm() {
	const [joinFormDetails, setJoinFormDetails] = useState({
		fName: ``,
		lName: ``,
		phone: ``,
		email: ``,
		gender: ``,
		religiousViews: ``,
		country: ``,
		nationality: ``,
		paymentMethod: ``,
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setJoinFormDetails((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let joinData = JSON.stringify(joinFormDetails);

		try {
			const url = `http://localhost:3001/join`;
			const res = await fetch(url, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: joinData,
			});
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<form className="joinForm" onSubmit={handleSubmit}>
			<div className="names doubleInput">
				<div className="fNameInput">
					<label htmlFor="fName">First Name:</label>
					<input
						type="text"
						name="fName"
						id="fName"
						value={joinFormDetails.fName}
						onChange={handleChange}
					/>
				</div>
				<div className="lNameInput">
					<label htmlFor="lName">Last Name:</label>
					<input
						type="text"
						name="lName"
						id="lName"
						value={joinFormDetails.lName}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="contactDetails doubleInput">
				<div className="phoneInput">
					<label htmlFor="phone">Phone Number:</label>
					<input
						type="text"
						name="phone"
						id="phone"
						value={joinFormDetails.phone}
						onChange={handleChange}
					/>
				</div>
				<div className="emailInput">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						value={joinFormDetails.email}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="genderInput">
				<label htmlFor="gender">Gender:</label>
				<select
					type="text"
					name="gender"
					id="gender"
					value={joinFormDetails.gender}
					onChange={handleChange}
				>
					{genderList.map((item, index) => {
						return (
							<option key={index} value={item.value}>
								{item.display}
							</option>
						);
					})}
				</select>
			</div>
			<div className="religiousViewsInput">
				<label htmlFor="religiousViews">
					Which of these best describe you? Select up to a maximum of
					three:
				</label>
				<input
					type="text"
					name="religiousViews"
					id="religiousViews"
					value={joinFormDetails.religiousViews}
					onChange={handleChange}
				/>
				<div className="religiousOptions">
					{religions.map((item, index) => {
						return (
							<label
								htmlFor={item.toLowerCase()}
								key={index}
								className="checkboxInput"
							>
								<input
									id={item.toLowerCase()}
									type="checkbox"
								/>
								<label>{item}</label>
							</label>
						);
					})}
				</div>
			</div>

			<div className="locationDetails doubleInput">
				<div className="countryInput">
					<label htmlFor="country">Country:</label>
					<input
						type="text"
						name="country"
						id="country"
						value={joinFormDetails.country}
						onChange={handleChange}
					/>
				</div>
				<div className="nationalityInput">
					<label htmlFor="nationality">Nationality:</label>
					<select
						type="text"
						name="nationality"
						id="nationality"
						value={joinFormDetails.nationality}
						onChange={handleChange}
					>
						<option value="Select">--Select--</option>
						<option value="Kenyan">Kenyan</option>
						<option value="Non-Kenyan">Non-Kenyan</option>
					</select>
				</div>
			</div>

			<div className="paymentMethodInput">
				<label htmlFor="paymentMethod">
					Select your preferred payment method:
				</label>
				<select
					type="text"
					name="paymentMethod"
					id="paymentMethod"
					value={joinFormDetails.paymentMethod}
					onChange={handleChange}
				>
					<option value="Select">--Select--</option>
					<option value="Mpesa">M-Pesa</option>
					<option value="Paypal">Paypal</option>
				</select>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

export default JoinForm;
