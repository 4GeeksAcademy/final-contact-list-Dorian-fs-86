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
            alert("Complete all request!!");
        }

        await actions.addContact(name, phone, email, address);
        navigate("/");
    };

    return (
        <div>
            <div>
                <input name="name" type="text" placeholder="Name" value={contact.name} onChange={handleChange} />
                <input name="phone" type="text" placeholder="Phone" value={contact.phone} onChange={handleChange} />
                <input name="email" type="text" placeholder="Email" value={contact.email} onChange={handleChange} />
                <input name="address" type="text" placeholder="Address" value={contact.address} onChange={handleChange} />             
            </div>
            <div>
                <button onClick={addContact}>Save</button>
            </div>
            <Link to="/">
                <span>Back to contacts</span>
            </Link>
        </div>
    );
};