import React from "react";
const FireFavoriteContext = React.createContext({
    fireFavorites: [],
    updateFireFavorites: (id) => null
})

export const FireFavoriteProvider = FireFavoriteContext.Provider

export default FireFavoriteContext