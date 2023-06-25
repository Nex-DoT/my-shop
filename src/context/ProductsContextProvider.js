import React,{useState,useEffect,createContext} from 'react';
//API 
import { getProducts } from '../service/api';
export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

const [data , setData] = useState([])

    useEffect(()=>{
        const fetchAPI = async ()=>{
            setData(await getProducts() )
        }
        fetchAPI()
    } , [])
    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;