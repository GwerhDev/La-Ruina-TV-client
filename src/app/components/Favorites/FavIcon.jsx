import React from "react";
import s from "./FavIcon.module.css";

const FavIcon = ({ color }) => {
    return (
        <button className={s.CardFav} id="CardFav">
            <span role="img" style={{color: color}}>❤</span>
        </button>
    )
};

export default FavIcon;