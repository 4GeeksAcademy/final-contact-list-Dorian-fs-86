import React, { useContext, useEffect, } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Contact = ({ name, id }) => {

	const { actions } = useContext(Context);
	const deleteContact = async () => {
		await actions.deleteContact(id);
		await actions.setContactList();
	}
	return (<>
		<h3>{name} <button onClick={deleteContact}>X</button></h3>
	</>)
}

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.setContactList();
	}, [])

	return (<>
		<div>
			<Link to='/add-contact'>
				<button>Add new contact</button>
			</Link>
			<div>
				{store.contactList.map((contact) => { <Contact {...contact} /> })}
			</div>
		</div>
	</>)
}