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
            <div className={style.box1}>
                {state.selectedItems.map(item => <CardOfCart key={item.id} image={item.image} price={item.price} title={item.title} number={item.quantity} id={item.id} full={item}/>)}
            </div>
            <div className={style.border}>
                <div>
                    <h5>Total Items:<h4>{state.itemsCounter}</h4></h5>
                    <h5>Total Price:<h4>${state.total}</h4></h5>
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