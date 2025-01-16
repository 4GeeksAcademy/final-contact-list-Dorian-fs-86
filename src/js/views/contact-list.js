import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '/workspaces/final-contact-list-Dorian-fs-86/src/styles/contact-list.css'

const Contact = ({ name, address, email, phone, id }) => {
    const { actions } = useContext(Context);

    const deleteContact = async () => {
        await actions.deleteContact(id);
    };

    return (<>
        <div className="contact-content">
            <div className="image-contact">
                <img src="https://img.freepik.com/vector-premium/icono-contacto-perfil-icono-avatar_1199668-1319.jpg" />
            </div>
            <div className="contact-list">
                <span>{name}</span>
                <span>{phone}</span> 
                <span>{email}</span>
                <span>{address}</span>           
            </div>
            <div>
                <button className="delete-button" onClick={deleteContact}>X</button>  
            </div>   
        </div>
    </>
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
            <Link className="link-contact" to="/add-contact">
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
