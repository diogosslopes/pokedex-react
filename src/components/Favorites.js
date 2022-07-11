import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import CardFavorites from "./CardFavorites";
import CardInfo from "./CardInfo";
import Clearbtn from "./Clearbtn";

const Favorites = (props) => {

    const loading = props.loading
    const { favoritePokemons } = useContext(FavoriteContext)
    
    return (

        <div className="pokemonsFavorites">
            <div className="pokedex-header">
                <h1>Favoritos</h1>
                <div id="heart" >{favoritePokemons.length}❤️</div>
            </div>
            <div className="hid-pokedex" id="pokemonsFavorites">
                {favoritePokemons.map((p) => {
                    return (
                        <div className="cards">
                            <CardFavorites type={p.types[0].type.name} pokemon={p} key={`K${p.id}`} id={`AF${p.id}`} fav={`FV${p.id}`} />
                            <CardInfo pokemon={p} key={`KI${p.id}`} id={`AF${p.id}`} abilityid={`A${p.id}`} />
                        </div>
                    )
                })}
            </div>
            <Clearbtn loading={loading} />
        </div>
    )
}
export default Favorites