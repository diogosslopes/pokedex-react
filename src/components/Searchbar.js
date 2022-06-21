import React from "react";
import { useState } from "react";



function Searchbar(props) {
    let [search, setSearch] = useState("Charizard")
    const {onSearch} = props
    
    const searchHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearch(undefined)
        }
    }

    const onButtonClick = () => {
        onSearch(search)
    }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={searchHandler} />

            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClick}>
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default Searchbar