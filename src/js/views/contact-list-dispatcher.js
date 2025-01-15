const BASE_URL = process.env.REACT_APP_API_URL || "https://playground.4geeks.com/contact/agendas/dorianfinal";

export const contactListDispatcher = {
    get: async () => {
        const response = await fetch(`${BASE_URL}`, { method: "GET" });
        const { contacts } = await response.json();
        return contacts;
    },
    post: async (name, phone, email, address) => {
        await fetch(`${BASE_URL}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, email, address }),
        });
    },
    delete: async (contactId) => {
        await fetch(`${BASE_URL}/contacts/${contactId}`, { method: "DELETE" });
    },
};