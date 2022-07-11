import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";


const Clearbtn = (props) => {

    const loading = props.loading
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)


    const clearFavorites = () => {

        updateFavoritePokemons("clear")
        window.location.reload(false)

    }

    console.log(loading)
    if(loading == true){
        <div></div>
    }else{

        return (
            <div className="clear-btn">
                <button onClick={clearFavorites} ></button>
                <label>Clear</label>
            </div>
        )
    }
}

export default Clearbtn