import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

import React from "react";

const Navbar = () => {
    // console.log(useSelector((store) => { console.log(store) }));
    // с помощью селектора компонент получает доступ к интересующей его части state. В данной случае к amount
    const { amount } = useSelector((store)=>store.cart)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
