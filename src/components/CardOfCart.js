import React,{useContext} from 'react';
//context
import { CARTContextOfReducer } from '../context/UseReducerContext';
import { ProductsContext } from '../context/ProductsContextProvider';
//function
import { split } from '../Fucntion/function';
import { quantityCount } from '../Fucntion/function';
//icon
import { AiOutlineDelete } from "react-icons/ai";

const CardOfCart = ({image,title,number,price}) => {
    const {state , dispatch}= useContext(CARTContextOfReducer);
    const data = useContext(ProductsContext)

    return (
        <div>  
            <div>
                <div>
                   <img src={image} alt="" />
                </div>
                <h3>{split(title)}</h3>
                <h3>${price}</h3>
            </div>
            <div>
                <button onClick={()=>{dispatch({type:"INCREASE" , payload:data.id})}}>+</button>
                <p>{number}</p>
                {quantityCount(state , data.id) > 1 && <button onClick={()=>{dispatch({type:"DECREASE" , payload:data})}}>-</button>}         
                {quantityCount(state , data.id) === 1 && <button onClick={()=>{dispatch({type:"REMOVE_ITEM" , payload:data})}}> <AiOutlineDelete/>  </button>}   
            </div>
        </div>
    );
};

export default CardOfCart;