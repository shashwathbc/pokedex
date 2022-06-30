import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import SinglePokemonCall from "./../../components/SinglePokemonCall/SinglePokemonCall";

const BookMark = () => {
  const { bookmark } = useContext(GlobalContext);
  return (
    <div>
      <span className="pageTitle">BOOKMARK PAGE</span>
      {bookmark.length > 0 ? (
        <div className="all-container">
          {bookmark &&
            bookmark.map((pokemonStats, index) => (
              <SinglePokemonCall
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
                weight={pokemonStats.weight}
                stat={pokemonStats.stats[0].base_stat}
                ability={pokemonStats.abilities[0].ability.name}
                height={pokemonStats.height}
                experience={pokemonStats.base_experience}
              />
            ))}
        </div>
      ) : (
        <h2 style={{display:"flex" , alignItems:"center" , justifyContent:"center" ,height:"50vh"}}>NO - POKEMON - IN - BOOKMARK </h2>
      )}
    </div>
  );
};

export default BookMark;
