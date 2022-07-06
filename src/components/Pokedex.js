import React, { useContext, useState } from "react";
import Card from "./Card";
import CardInfo from "./CardInfo";
import Favorites from "./Favorites";
import NextBack from "./NextBack";
import Confirmbtn from "./Confirmbtn";


const Pokedex = (props) => {

    let { pokemons, loading } = props
    const [searchState, setSearchState] = useState(false)
    const grassPokemons = pokemons.filter((p) => p.types[0].type.name === "grass")
    const firePokemons = pokemons.filter((p) => p.types[0].type.name === "fire")
    const waterPokemons = pokemons.filter((p) => p.types[0].type.name === "water")

    const showFavorites = () => {
        const element = document.querySelector('.pokedex')
        const heart = document.querySelector('#heart')
        const favoriteElement = document.querySelector('#pokemonsFavorites')
        favoriteElement.classList.remove('hide-pokedex')
        element.classList.add('hide-pokedex')
        heart.classList.add('hide-pokedex')
    }


    // const onSearchHandler = (pokemonSearch) =>{
    //     if(pokemonSearch.length != 0){
    // }

    return (
        <div className="mainContainer">

            {searchState ? (<div></div>) :
                (
                    <div className="pokedex">
                        {/* <Searchbar onSearch={onSearchHandler} /> */}
                        <div className="pokedex-grass">
                            <div className="pokedex-grid grass" >
                                {grassPokemons.map((pokemon, index) => {
                                    return (
                                        <div className="cards">
                                            <Card type={"grass"} pokemon={pokemon} key={`K${pokemon.id}`} id={pokemon.id} fav={`F${pokemon.id}`} />
                                            {/* <CardInfo pokemon={pokemon} key={`KI${pokemon.id}`} id={pokemon.id} abilityid={`A${pokemon.id}`} /> */}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="buttons">
                                <Confirmbtn />
                                <NextBack type={"grass"}  />
                            </div>
                        </div>
                        <div className="pokedex-fire hide-pokedex">
                            <div className="pokedex-grid fire">
                                {firePokemons.map((pokemon, index) => {
                                    return (
                                        <div className="cards">
                                            <Card type={"fire"} pokemon={pokemon} key={`K${pokemon.id}`} id={pokemon.id} fav={`F${pokemon.id}`} />
                                            {/* <CardInfo pokemon={pokemon} key={`KI${pokemon.id}`} id={pokemon.id} abilityid={`A${pokemon.id}`} /> */}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="buttons">
                                <Confirmbtn />
                                <NextBack type={"fire"}  />
                            </div>
                        </div>
                        <div className="pokedex-water hide-pokedex">
                            <div className="pokedex-grid water">
                                {waterPokemons.map((pokemon, index) => {
                                    return (
                                        <div className="cards">
                                            <Card type={"water"} pokemon={pokemon} key={`K${pokemon.id}`} id={pokemon.id} fav={`F${pokemon.id}`} />
                                            {/* <CardInfo pokemon={pokemon} key={`KI${pokemon.id}`} id={pokemon.id} abilityid={`A${pokemon.id}`} /> */}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="buttons">
                                <Confirmbtn />
                                <NextBack type={"water"} idbtn={"waterNextBtn"} idlabel={'waterNextLabel'} />
                            </div>
                        </div>
                        {pokemons.map((pokemon, index) => {
                            return (
                                <CardInfo pokemon={pokemon} key={`KI${pokemon.id}`} id={pokemon.id} abilityid={`A${pokemon.id}`} />
                            )
                        })}
                        {/* {firePokemons.map((pokemon, index) => {
                            return (
                                <CardInfo pokemon={pokemon} key={`KI${pokemon.id}`} id={pokemon.id} abilityid={`A${pokemon.id}`} />
                            )
                        })} */}
                    </div>
                )
            }
            <Favorites />
        </div>
    )
}

export default Pokedex