import React, { useEffect, useState, useContext } from "react";
import SinglePokemonCall from "./../../components/SinglePokemonCall/SinglePokemonCall";
import { GlobalContext } from "./../../context/GlobalState";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Filter from './../../components/Filter/Filter';

const ListingPage = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    console.log(data);
    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    console.log(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const { handleBookMark, bookmark } = useContext(GlobalContext);

  const disableBookmark = (pokemon) => {
    let storedPokemon = bookmark.find((o) => o.id === pokemon);
    const disableBook = storedPokemon ? true : false;
    return disableBook;
  };

  return (
    <div className="app-container">
      <h1 className="pageTitle">POKEMON LISTING PAGE </h1>
      <div className="filter">
        <Filter
          filterPokemon={allPokemons}
        />
      </div>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons ? (
            allPokemons.map((pokemonStats, index) => (
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
              
            ))
          ) : (
            <CircularProgress color="success" />
          )}
        </div>
        <Button
          fullWidth
          onClick={() => getAllPokemons()}
          style={{ backgroundColor: "lightblue" }}
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default ListingPage;
