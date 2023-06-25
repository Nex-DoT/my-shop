import React,{useContext} from 'react';
//styel
import style from "../styles/Navbar.module.css"
//Link
import { Link } from 'react-router-dom/cjs/react-router-dom';
//icon 
import { AiOutlineShopping } from "react-icons/ai";
//context
import { CARTContextOfReducer } from '../context/UseReducerContext';
const Navbar = () => {
    const {state} = useContext(CARTContextOfReducer)
    return (
        <>
            <div className={style.Navbar}>
                <div>
                    <Link className={style.link} to="/products">Protucts</Link>
                </div>

                <Link to="/Cart" className={style.cart}>
                    <AiOutlineShopping className={style.icon}/>
                    <span>{state.itemsCounter}</span>
                </Link>
            </div>
        </>
    );
};

export default Navbar;