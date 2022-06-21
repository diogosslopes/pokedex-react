import React from "react";
const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})
export const FavoriteContextName = React.createContext({
    favoritePokemonsName: [],
    updateFavoritePokemonsName: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider
export const FavoriteProviderName = FavoriteContextName.Provider

export default FavoriteContext
