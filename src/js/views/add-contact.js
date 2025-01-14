import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();


	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const addcontact = async () => {
		await actions.addcontact(name, phone, email, address)
		navigate({})

	}
	return (<>
		<div>
			<input type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
			<input type="text" placeholder="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
			<input type="text" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
			<input type="text" placeholder="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
			<button onClick={addcontact}>Save</button>
			<Link to='/'>
				<span>Back to contacts</span>
			</Link>
		</div>
	</>)
}

