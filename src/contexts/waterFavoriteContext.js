import React from "react";
const WaterFavoriteContext = React.createContext({
    waterFavorites: [],
    updateWaterFavorites: (id) => null
})

export const WaterFavoriteProvider = WaterFavoriteContext.Provider

export default WaterFavoriteContext