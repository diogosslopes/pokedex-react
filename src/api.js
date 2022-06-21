export const searchPokemon = async (pokemon) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Error" + error)
        
    }

}
export const getPkemons = async (limit = 150, offset = 0) =>{
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Error" + error)
        
    }

}
export const getPkemon = async (url) =>{
    try {
        const response = await fetch(url) 
        return await response.json()

    } catch (error) {
        console.log("Error" + error)
        
    }

}

// export const getAbilityDeatail = async (name)=>{
//     try {
//         const url = `https://pokeapi.co/api/v2/ability/${name}`
//         const response = await fetch(url) 
//         const data = await response.json()
//         return data.effect_entries[1].short_effect

//     } catch (error) {
//         console.log("Error" + error)
        
//     }
// }

