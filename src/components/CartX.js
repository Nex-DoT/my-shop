import React,{useContext} from 'react';
//context
import { CARTContextOfReducer } from '../context/UseReducerContext';
//component
import Navbar from './Navbar';
import CardOfCart from './CardOfCart';
//style
import style from "../styles/Cartx.module.css"
const CartX = () => {
    const {state , dispatch}= useContext(CARTContextOfReducer)
    return (
        <>
            <Navbar/>
        <div className={style.box}>
            <div>
                {state.selectedItems.map(item => <CardOfCart key={item.id} image={item.image} price={item.price} title={item.title} number={item.quantity}/>)}
            </div>
            <div>
                <div>
                    <h3>total items: {state.itemsCounter}</h3>
                    <h3>total Price:${state.total}</h3>
                </div>
                <div className={style.btns}>
                    <button onClick={()=>{dispatch({type:"CLEAR"})}}>Clear cart</button>
                    <button onClick={()=>{dispatch({type:"CHECKOUT"})}}>Check Out</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default CartX;