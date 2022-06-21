import React, { useState, useEffect } from "react";

const CardInfo = (props) => {


    const { pokemon, id, abilityid } = props
    const infoImage = new URL("../img/icons8-informações-25.png", import.meta.url)
    const closeImage = new URL("../img/icons8-macos-close-20.png", import.meta.url)


    const closeInfo = async () => {
        console.log(id)
        let cardSelected = await document.getElementById(`${id}`)
        cardSelected.classList.remove("show")
    }

    // const abilityDeatail = async (name)=>{
    //     const ability = await getAbilityDeatail(name)
    //     return ability
    // }
    // const getAbilities = async () =>{
    //    await pokemon.abilities.map(async(a, index)=>{
    //         const data = await getAbilityDeatail(a.ability.name)
    //          setAbilities(data)
    //      })
    // }


    // useEffect(()=>{
    //    getAbilities() 
    // },[])

    return (
        <div className="cardInfo cardInfoFavorites" id={id} >
            <div className="cardInfoAbilities">
                <h4>Tipo: {pokemon.types[0].type.name}</h4>
                <h5>Habilidades:</h5>{pokemon.abilities.map((a, index) => { return (<small >{a.ability.name}</small>) })}
                {/* {abilities.map((a, index)=>{return (<Infodetail ability={a} />)})} */}

            </div>
            <img onClick={closeInfo} alt={pokemon.name} src={closeImage} />
            {/* <button className="teste" onClick={closeInfo}>X</button> */}
        </div>
    )
}


export default CardInfo