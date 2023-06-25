import React,{useContext} from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import style from "../styles/Product.module.css"


const Details = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext)
    const Pdata = data[id - 1] 
    return (
        <div className={style.product}>
            <div className={style.image}>
                  <img src={Pdata.image} alt="" />
            </div>
            <div>
                <h3>{Pdata.title}</h3>
                <p>{Pdata.price}</p>
                <h4> category :{Pdata.category}</h4>
                <div className={style.btns}>
                <button>
                <Link className={style.Link} to="/products">back</Link>
                </button>
                </div>
            </div>

        </div>
    );
};

export default Details;