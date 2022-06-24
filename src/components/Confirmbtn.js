import React from "react";

const Confirmbtn = (props) => {

    const showFavorites = () => {
        const element = document.querySelector('.pokedex')
        element.classList.add('hide-pokedex')

    }

    return (
        <div className="confirm-btn">
            <button onClick={showFavorites} ></button>
            <label>Confirm</label>
        </div>
    )
}

export default Confirmbtn