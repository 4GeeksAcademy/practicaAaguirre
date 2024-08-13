import React, { useState } from "react";



export const Pokemon = ({name, url}) =>{

     const [dataPokemon, setDataPokemon]= useState({})
    const dataPokemonFetch = async () =>{

        if(dataPokemon.id){
            return;
        }

        const response = await fetch (url);
        const data = await response.json();
        setDataPokemon(data);

    }

    dataPokemonFetch();
   

    return (
        <div className="texto2">
            <h2>{name}</h2>
            <div>
                {dataPokemon && dataPokemon.sprites  ? 
                (
                    
                    <img src={dataPokemon.sprites.front_default} alt={`Imagen de ${name}`}/>
                )
                 :(
                <p>Loading...</p>

                )}

            </div>
            
        </div>
    )
}