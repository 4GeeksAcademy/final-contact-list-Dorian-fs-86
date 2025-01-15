import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Contact = ({ name, address, email, phone, id }) => {
    const { actions } = useContext(Context);

    const deleteContact = async () => {
        await actions.deleteContact(id);
    };

    return (
        <div>
			<span>{name}</span>
			<span>{address}</span>
			<span>{email}</span>
			<span>{phone}</span>
            <button onClick={deleteContact}>X</button>
        </div>
    );
};

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        actions.setContactList().finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>Loading contacts...</p>;

    return (
        <div>
            <Link to="/add-contact">
                <button>Add new contact</button>
            </Link>
            <div>
                {store.contactList.length === 0 ? (
                    <p>No contacts available.</p>
                ) : (
                    store.contactList.map((contact) => (
                        <Contact key={contact.id} {...contact} />
                    ))
                )}
            </div>
        </div>
    );
};
