import React from 'react';
//Link
import { Link } from 'react-router-dom/cjs/react-router-dom';
//icon 
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <Link to="/products">Protucts</Link>
                </div>

                <div>
                    <AiOutlineShopping/>
                    <span></span>
                </div>
            </div>
        </>
    );
};

export default Navbar;