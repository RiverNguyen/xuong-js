import instance from "./config";

export const getAccounts = async () => {
    try {
        const { data } = await instance.get("/users");
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getAccountById = async (id) => {
    try {
        const { data } = await instance.get(`/users/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeAccountById = async (id) => {
    try {
        const { data } = await instance.delete(`/users/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const addAccount = async (account) => {
    try {
        const { data } = await instance.post("/users", account);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateAccount = async (account) => {
    try {
        const { data } = await instance.put(`/users/${account.id}`, account);
        return data;
    } catch (error) {
        console.log(error);
    }
};
