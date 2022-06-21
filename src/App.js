import React, { useEffect, useState } from 'react';
import { getPkemons, getPkemon, filterPokemons, searchPokemon } from './api';
import './App.css';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import { FavoriteProvider } from './contexts/favoritesContext';



function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPkemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPkemon(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log("Fetch Error" + error)
    }
  }


  useEffect(() => {
    console.log("Carregou")
    fetchPokemons();
  }, [])

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons()
    }

    setLoading(true)
    const result = await searchPokemon(pokemon)
    if(!result){
      setLoading(false)
    }else{
      setPokemons([result])
    }
    setLoading(false)
    
  }

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    console.log(name)
    if (name === "clear") {
      updatedFavorites.splice(0)
      fetchPokemons()
    } else if (favorites.indexOf(name) >= 0) {
      updatedFavorites.splice(favorites.indexOf(name), 1)
    } else {
      updatedFavorites.push(name)
    }
    setFavorites(updatedFavorites)
  }

  // const updateGrassFavorites = (name) => {
  //   const updatedGrassFavorites = [...grassFavorites]
  //   if (grassFavorites.indexOf(name) <= -1) {
  //     console.log("nao contem")
  //     updatedGrassFavorites.push(name)
  //   } else {
  //     console.log("contem")
  //   }
  //   setGrassFavorites(updatedGrassFavorites)
  //   console.log(grassFavorites)
  // }
  // const updateFireFavorites = (name) => {
  //   const updatedFireFavorites = [...fireFavorites]
  //   if (fireFavorites.indexOf(name) <= -1) {
  //     console.log("nao contem")
  //     updatedFireFavorites.push(name)
  //   } else {
  //     console.log("contem")
  //   }
  //   setFireFavorites(updatedFireFavorites)
  //   console.log(fireFavorites)
  // }
  // const updateWaterFavorites = (name) => {
  //   const updatedWaterFavorites = [...waterFavorites]
  //   if (waterFavorites.indexOf(name) <= -1) {
  //     console.log("nao contem")
  //     updatedWaterFavorites.push(name)
  //   } else {
  //     console.log("contem")
  //   }
  //   setWaterFavorites(updatedWaterFavorites)
  //   console.log(waterFavorites)
  // }
  return (
    <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons }}>
      <div className='container'>
        <Searchbar onSearch={onSearchHandler} />
        <Pokedex pokemons={pokemons} loading={loading} />
      </div>
    </FavoriteProvider>
  );
}

export default App;