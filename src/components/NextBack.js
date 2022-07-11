import React from "react";

const NextBack = (props) =>{
    const loading = props.loading
    const {type} = props
    const grassElement = document.querySelector('.pokedex-grass')
    const fireElement = document.querySelector('.pokedex-fire')
    const waterElement = document.querySelector('.pokedex-water')
    const element = document.querySelector('.pokedex')
    const favoriteElement = document.querySelector('#pokemonsFavorites')
    const heart = document.querySelector('#heart')
    const waterNextBtn = document.querySelector('#btnWater')
    const waterNextLabel = document.querySelector('#labelWater')

    const next = () => {
        if(type === "grass"){
            grassElement.classList.add('hide-pokedex')
            fireElement.classList.remove('hide-pokedex')
        }else if(type === "fire"){
            fireElement.classList.add('hide-pokedex')
            waterElement.classList.remove('hide-pokedex')
            waterNextBtn.classList.add('hide-pokedex')
            waterNextLabel.classList.add('hide-pokedex')
        }else if(type === "water"){
            waterElement.classList.add('hide-pokedex')
            element.classList.remove('hide-pokedex')
            heart.classList.add('hide-pokedex')
            favoriteElement.classList.remove('hide-pokedex')
        }
        console.log(type)
    }
    const back = () => {
        if(type === "fire"){
            fireElement.classList.add('hide-pokedex')
            grassElement.classList.remove('hide-pokedex')
        }else if(type === "water"){
            waterElement.classList.add('hide-pokedex')
            fireElement.classList.remove('hide-pokedex')
        }
    }
    if(loading == true){
        <div></div>
    }else{
        return (
            <div className="nextback-btn">
                
                    <label>Back</label>
                    <button onClick={back} ></button>
                    <button onClick={next} ></button>
                    <label>Next</label>
                
            </div>
        )
    }
}

export default NextBack