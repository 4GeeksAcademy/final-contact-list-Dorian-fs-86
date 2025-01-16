
export const contactListDispatcher = {
    get: async () => {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/dorianfinal/contacts", { method: "GET" });
        if(!response.ok) {
            return postAgenda()
        }
        const { contacts } = await response.json();
        return contacts;
    },
    

    post: async (name, phone, email, address) => {
        await fetch("https://playground.4geeks.com/contact/agendas/dorianfinal/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, email, address }),
        });
    },
    delete: async (contactId) => {
        await fetch(`https://playground.4geeks.com/contact/agendas/dorianfinal/contacts/${contactId}`, { method: "DELETE" });
    },
};

const postAgenda= async() => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/dorianfinal", { method: "POST" });
    const data = await response.json();
    console.log("Agenda creada", data)
} 