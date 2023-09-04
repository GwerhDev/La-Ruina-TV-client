import React from "react";
import s from "./Fav.module.css"

const Fav = ({ urlID, color }) => {
    return (
        <button className={s.CardFav} id="CardFav">
            <span role="img" style={{color: color}}>❤</span>
        </button>
    )
}

export default Fav