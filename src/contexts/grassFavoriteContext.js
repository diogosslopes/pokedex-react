import React from "react";
const GrassFavoriteContext = React.createContext({
    grassFavorites: [],
    updateGrassFavorites: (id) => null
})

export const GrassFavoriteProvider = GrassFavoriteContext.Provider

export default GrassFavoriteContext