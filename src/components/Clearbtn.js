import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";


const Clearbtn = (props) => {

    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)


    const clearFavorites = () => {

        updateFavoritePokemons("clear")

    }

    return (
        <div className="clear-btn">
            <button onClick={clearFavorites} ></button>
        </div>
    )
}

export default Clearbtn