import { contactListDispatcher } from "../views/contact-list-dispatcher";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setContactList: async () => {
				const contactList = await contactListDispatcher.get();
				const store = getStore();
				setStore({ ...store, contactList })
			},
			addContact: async (name, phone, email, address) => {
				await contactListDispatcher.post(name, phone, email, address)
			},
			deleteContact: async (contactId) => {
				await contactListDispatcher.delete(contactId);
			}

		}
	};
};

export default getState;
