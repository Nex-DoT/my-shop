import React,{useContext} from 'react';
//context
import { CARTContextOfReducer } from '../context/UseReducerContext';
import { ProductsContext } from '../context/ProductsContextProvider';
//function
import { split } from '../Fucntion/function';
import { quantityCount } from '../Fucntion/function';
//icon
import { AiOutlineDelete } from "react-icons/ai";
//style
import style from "../styles/CardOfCart.module.css"

const CardOfCart = ({id, number}) => {
    const {state , dispatch}= useContext(CARTContextOfReducer);
    const data = useContext(ProductsContext)
    const NewData = data[id - 1];

    return (
        <div className={style.card}>  
            {console.log(NewData)}
            <div className={style.box}>
                <div className={style.img}>
                   <img src={NewData.image} alt="" />
                </div>
                <h3>{split(NewData.title)}</h3>
                <h3>${NewData.price}</h3>
            </div>
            <div className={style.flex}>
                <button onClick={()=>{dispatch({type:"INCREASE" , payload: NewData})}}>+</button>
                <h4>{number}</h4>
                {quantityCount(state , id) > 1 && <button onClick={()=>{dispatch({type:"DECREASE" , payload:NewData})}}>-</button>}         
                {quantityCount(state , id) === 1 && <button onClick={()=>{dispatch({type:"REMOVE_ITEM" , payload:NewData})}}> <AiOutlineDelete/>  </button>}   
            </div>
        </div>
    );
};

export default CardOfCart;