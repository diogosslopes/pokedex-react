import React from "react";

const Confirmbtn = (props) => {

    const loading = props.loading
    const showFavorites = () => {
        const element = document.querySelector('.pokedex')
        element.classList.add('hide-pokedex')

    }

    if (loading == true) {
        <></>
    } else {
        return (
            <div className="confirm-btn">
                <button onClick={showFavorites} ></button>
                <label>Confirm</label>
            </div>
        )
    }
}

export default Confirmbtn