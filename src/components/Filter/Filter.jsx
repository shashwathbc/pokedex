import React  , {useEffect , useState} from 'react';
import Chip from '@mui/material/Chip';

const Filter = ({filterPokemon}) => {
    const handleClick = () => {
        console.log('You clicked the Chip.');
      };

      console.log("FILTERED POKEMON LIST" ,filterPokemon);

  return (
    <div>
         <Chip label="WATER" onClick={handleClick} />
         <Chip label="GRASS" onClick={handleClick} />
         <Chip label="BUG" onClick={handleClick} />
         <Chip label="FIRE" onClick={handleClick} />
         <Chip label="NORMAL" onClick={handleClick} />
    </div>
  )
}

export default Filter