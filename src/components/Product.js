import React,{useContext} from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Cart from './Cart';
const Product = () => {
    const data = useContext(ProductsContext)
    return (
        <div>
            {data.map(item => <Cart key={item.id} data={item}/>)}
        </div>
    );
};

export default Product;