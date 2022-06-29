import React, { useContext , useState } from 'react';
import TextField from '@mui/material/TextField';
import "./search.css";
import Button  from '@mui/material/Button';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import axios from "axios";
import { GlobalContext } from './../../context/GlobalState';
import SinglePokemonCall from '../../components/SinglePokemonCall/SinglePokemonCall';

const SearchComp = () => {
  const [pokemon , setPokemon] = useState("");
  const [pokemonData , setPokemonData] = useState([]);
  console.log("SEARCH DATA :" , pokemonData);

   const getPokemon = async () => {
    const arr =[];
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      arr.push(res.data);
      setPokemonData(arr);
      console.log(res.data);
    }catch(err){
      console.log(err);
    }
   }



   const handleSubmit = (e) =>{
    e.preventDefault();
    getPokemon()
   }

 

   const { handleBookMark , bookmark } = useContext(GlobalContext);

   const disableBookmark = (pokemon) =>{
    let storedPokemon = bookmark.find(o=> o.id === pokemon);
    const disableBook = storedPokemon ? true : false;
    return disableBook;
   }

  return (
    <div>
        <span className="pageTitle">SEARCH PAGE</span>
        <div className="search">
        <TextField   style={{flex: 1}}
          className = "searchBox"
          label="search"
          variant="filled"
          value={pokemon}
          onChange={(e)=>setPokemon(e.target.value.toLowerCase())}
          />
          <Button  variant="contained" style={{marginLeft : 10}}  onClick={handleSubmit} ><SavedSearchIcon /> </Button>
        </div>
        {pokemonData.map((pokemonStats, index)=>{
          return(
            <SinglePokemonCall
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
        
            handleBookMark={() => handleBookMark(pokemonStats)}
            
            weight={pokemonStats.weight}
            stat={pokemonStats.stats[0].base_stat}
            ability={pokemonStats.abilities[0].ability.name}
            height={pokemonStats.height}
            experience={pokemonStats.base_experience}
        
            disableBookmark={disableBookmark(pokemonStats.id)}
        
          />
          )
          
        })}
      </div>
  )
}

export default SearchComp