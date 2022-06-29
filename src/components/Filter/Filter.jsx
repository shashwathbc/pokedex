import React  , {useEffect , useState} from 'react';
import Chip from '@mui/material/Chip';

const Filter = ({type , setType , setSelectedType , selectedType}) => {
    const handleClick = () => {
        console.log('You clicked the Chip.');
      };

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