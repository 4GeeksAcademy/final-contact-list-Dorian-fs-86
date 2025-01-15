import { contactListDispatcher } from "../views/contact-list-dispatcher";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                { title: "FIRST", background: "white", initial: "white" },
                { title: "SECOND", background: "white", initial: "white" },
            ],
            contactList: []
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: async () => {
                // Example function for loading external data
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo });
            },
            setContactList: async () => {
                try {
                    const contactList = await contactListDispatcher.get();
                    setStore({ contactList });
                } catch (error) {
                    console.error("Error fetching contact list:", error);
                }
            },
            addContact: async (name, phone, email, address) => {
                try {
                    await contactListDispatcher.post(name, phone, email, address);
                    await getActions().setContactList();
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    await contactListDispatcher.delete(contactId);
                    await getActions().setContactList();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;