import api from "../api/axios";

export const getProducts = async () => {
    const { data } = await api.get("/product/getProducts");

    return data;
};