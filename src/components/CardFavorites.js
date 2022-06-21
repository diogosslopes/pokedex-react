import React, { useState, useContext } from "react";

const CardFavorites = (props) => {


    const { pokemon, id, fav, type } = props
    const infoImage = new URL("../img/icons8-informações-25.png", import.meta.url)


    const openInfo = async () => {
        console.log(id)
        let cardSelected = await document.getElementById(`${id}`)
        if (cardSelected.classList.contains('show')) {
            cardSelected.classList.remove('show')
        } else {
            cardSelected.classList.add("show")
        }
    }

    return (

        <div className={`${fav} card cardFavorites`}>
            <img className="pokemonImage" alt={pokemon.name} src={pokemon.sprites.front_default} />
            <h4>{pokemon.name}</h4>
            <img alt={pokemon.name} src={infoImage} onClick={openInfo} />
        </div>
    )

}


export default CardFavorites