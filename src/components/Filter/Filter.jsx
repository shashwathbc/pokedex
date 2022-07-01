import React , {useEffect} from 'react';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';


const Filter = ({setAllPokemons , allPokemons}) => {
  
  
 
    const handleClick = (pokeType) => {
      const updatedItems = allPokemons.filter((curElem)=>{
        return curElem.types[0].type.name === pokeType;
      });
      setAllPokemons(updatedItems);
    };

  
  

  return (
    <Grid style={{marginTop:"15px" , marginBottom:"10px"}}>
        <span>Filter By :</span>
         <Chip  label="ALL" onClick={()=>setAllPokemons(allPokemons)} style={{color:"white"}}/> 
       <Chip label="WATER" onClick={()=>handleClick("water")}  style={{color:"white"}}/> 
       <Chip label="GRASS" onClick={()=>handleClick("grass")}  style={{color:"white"}}/> 
       <Chip label="FIRE" onClick={()=>handleClick("fire")}  style={{color:"white"}}/> 
       <Chip label="BUG" onClick={()=>handleClick("bug")}  style={{color:"white"}}/> 
       <Chip label="NORMAL" onClick={()=>handleClick("normal")}  style={{color:"white"}}/> 
       <Chip label="POISON" onClick={()=>handleClick("poison")}  style={{color:"white"}}/> 
       <Chip label="ELECTRIC" onClick={()=>handleClick("electric")}  style={{color:"white"}}/> 
       <Chip label="GROUND" onClick={()=>handleClick("ground")}  style={{color:"white"}}/> 
       <Chip label="FAIRY" onClick={()=>handleClick("fairy")}  style={{color:"white"}}/> 
    </Grid>
  )
}

export default Filter