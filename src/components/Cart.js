import React,{useContext} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from "../styles/Product.module.css"
//function
import { ValidOrNot } from '../Fucntion/function';
import { split } from '../Fucntion/function';
import { quantityCount } from '../Fucntion/function';
//context 
import { CARTContextOfReducer } from '../context/UseReducerContext';
//icon 
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({data}) => {
    const {state , dispatch} = useContext(CARTContextOfReducer)
    return (
        <div className={style.product}>
            <div className={style.image}>
            <img src={data.image} alt="" />
            </div>
            <div>
            <h3>{split(data.title)}</h3>
            <p>${data.price}</p>
            <Link to={`detail/${data.id}`}>details</Link>

              <div className={style.btns}>
                    <div>
                    {
                     ValidOrNot(state , data.id)?
                     <button onClick={()=>{dispatch({type:"INCREASE" , payload:data})}}>+</button>:
                     <button onClick={()=>{dispatch({type:"ADD_ITEM" , payload:data})}}>Add to cart</button>
                    }     
                    {quantityCount(state , data.id) > 1 && <button onClick={()=>{dispatch({type:"DECREASE" , payload:data})}}>-</button>}         
                    {quantityCount(state , data.id) === 1 && <button onClick={()=>{dispatch({type:"REMOVE_ITEM" , payload:data})}}> <AiOutlineDelete/>  </button>}         
                    </div>
              </div>
            </div>
        </div>
    );
};

export default Cart;