import React  from 'react';
import Chip from '@mui/material/Chip';

const Filter = ({setAllPokemons , allPokemons}) => {
    const handleClick = (pokeType) => {
        const updatedItems = allPokemons.filter((curElem)=>{
          return curElem.types[0].type.name === pokeType;
        });
        setAllPokemons(updatedItems);
      };

      // console.log("FILTERED POKEMON LIST" ,filterPokemon);

      // console.log(handleClick);

  return (
    <div>
        <span>Filter By :</span>
         <Chip label="ALL" onClick={()=>setAllPokemons(allPokemons)} /> 
       <Chip label="WATER" onClick={()=>handleClick("water")} /> 
       <Chip label="GRASS" onClick={()=>handleClick("grass")} /> 
       <Chip label="FIRE" onClick={()=>handleClick("fire")} /> 
       <Chip label="BUG" onClick={()=>handleClick("bug")} /> 
       <Chip label="NORMAL" onClick={()=>handleClick("normal")} /> 
       <Chip label="POISON" onClick={()=>handleClick("poison")} /> 
       <Chip label="ELECTRIC" onClick={()=>handleClick("electric")} /> 
       <Chip label="GROUND" onClick={()=>handleClick("ground")} /> 
       <Chip label="FAIRY" onClick={()=>handleClick("fairy")} /> 
    </div>
  )
}

export default Filter