import React, { useState, useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Card = (props) => {


    const { pokemon, id, fav, type } = props
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
    const infoImage = new URL("../img/icons8-informações-25.png", import.meta.url)


    const openInfo = async () => {
        let cardSelected = await document.getElementById(`${id}`)
        if (cardSelected.classList.contains('show')) {
            cardSelected.classList.remove('show')
        } else {
            cardSelected.classList.add("show")
        }

    }


    const selectGrassFav = async () => {
        console.log(pokemon)
        let cardSelected = document.querySelector(`.${fav}`)
        console.log(cardSelected)
        console.log(pokemon)

        if (cardSelected.classList.contains('grass')) {
            if (cardSelected.classList.contains('cardGrassFavorite')) {
                cardSelected.classList.remove("cardGrassFavorite")
                updateFavoritePokemons(pokemon)
            } else {
                if (favoritePokemons.length <= 2) {
                    cardSelected.classList.add("cardGrassFavorite")
                    updateFavoritePokemons(pokemon)
                } else {
                    window.alert("Limite de pokemons tipo grama atingido !")
                }
            }
        } else if (type === 'fire') {
            if (cardSelected.classList.contains('cardFireFavorite')) {
                cardSelected.classList.remove("cardFireFavorite")
                updateFavoritePokemons(pokemon)
            } else {
                if (favoritePokemons.length <= 5) {
                    cardSelected.classList.add("cardFireFavorite")
                    updateFavoritePokemons(pokemon)
                } else {
                    window.alert("Limite de pokemons tipo fogo atingido !")
                }
            }
        } else if (type === 'water') {
            if (cardSelected.classList.contains('cardWaterFavorite')) {
                cardSelected.classList.remove("cardWaterFavorite")
                updateFavoritePokemons(pokemon)
            } else {
                if (favoritePokemons.length <= 8) {
                    cardSelected.classList.add("cardWaterFavorite")
                    updateFavoritePokemons(pokemon)
                } else {
                    window.alert("Limite de pokemons tipo agua atingido !")
                }
            }
        }
    }

    return (
        <div className="main-card">
            <div className={`${fav} card ${type} card${type}`} onClick={selectGrassFav} >
                <img className="pokemonImage" alt={pokemon.name} src={pokemon.sprites.front_default} />
                <h4>{pokemon.name}</h4>
            </div>
            <img alt={pokemon.name} src={infoImage} onClick={openInfo} />
        </div>
    )

}


export default Card