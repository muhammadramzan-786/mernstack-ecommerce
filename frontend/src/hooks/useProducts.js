import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product.service";

export function useGetProducts(){
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}