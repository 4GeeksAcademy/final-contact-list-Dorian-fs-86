import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const addContact = async () => {
        const { name, phone, email, address } = contact;

        if (!name || !phone || !email || !address) {
            alert("All fields are required!");
            return;
        }

        await actions.addContact(name, phone, email, address);
        navigate("/");
    };

    return (
        <div>
            <input name="name" type="text" placeholder="Name" value={contact.name} onChange={handleChange} />
            <input name="phone" type="text" placeholder="Phone" value={contact.phone} onChange={handleChange} />
            <input name="email" type="text" placeholder="Email" value={contact.email} onChange={handleChange} />
            <input name="address" type="text" placeholder="Address" value={contact.address} onChange={handleChange} />
            <button onClick={addContact}>Save</button>
            <Link to="/">
                <span>Back to contacts</span>
            </Link>
        </div>
    );
};