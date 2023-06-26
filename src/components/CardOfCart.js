import React,{useContext} from 'react';
//context
import { CARTContextOfReducer } from '../context/UseReducerContext';
import { ProductsContext } from '../context/ProductsContextProvider';
//function
import { split } from '../Fucntion/function';
import { quantityCount } from '../Fucntion/function';
//icon
import { AiOutlineDelete } from "react-icons/ai";

const CardOfCart = ({id, number}) => {
    const {state , dispatch}= useContext(CARTContextOfReducer);
    const data = useContext(ProductsContext)
    const NewData = data[id - 1];

    return (
        <div>  
            {console.log(NewData)}
            <div>
                <div>
                   <img src={NewData.image} alt="" />
                </div>
                <h3>{split(NewData.title)}</h3>
                <h3>${NewData.price}</h3>
            </div>
            <div>
                <button onClick={()=>{dispatch({type:"INCREASE" , payload: NewData})}}>+</button>
                <p>{number}</p>
                {quantityCount(state , id) > 1 && <button onClick={()=>{dispatch({type:"DECREASE" , payload:NewData})}}>-</button>}         
                {quantityCount(state , id) === 1 && <button onClick={()=>{dispatch({type:"REMOVE_ITEM" , payload:NewData})}}> <AiOutlineDelete/>  </button>}   
            </div>
        </div>
    );
};

export default CardOfCart;