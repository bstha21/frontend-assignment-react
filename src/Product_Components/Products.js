import { useQuery } from "react-query";
import axios from "axios";


const fetchproductdata = (id) =>{
    return axios.get(`https://fakestoreapi.com/products/${id}`)
}

export const Products = (id) =>{
    return useQuery(['Products',id], () => fetchproductdata(id))
}