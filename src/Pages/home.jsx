import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import PokemonCard from "../component/PokemonCard"; // Sesuaikan path-nya
import Pagination from "../component/Pagination"; // Sesuaikan path-nya
import SortControls from "../component/SortControls"; // Sesuaikan path-nya

const Home = () => {
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetch semua Pokémon dari PokeAPI
  const fetchAllPokemon = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
      const response = await fetch(url);
      const data = await response.json();

      const pokemonNames = data.results.map((pokemon) => pokemon.name);
      const pokemonDetails = await Promise.all(
        pokemonNames.map((name) => fetchPokemonDetail(name))
      );

      setAllPokemonList(pokemonDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch detail Pokémon
  const fetchPokemonDetail = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Urutkan Pokémon
  const sortPokemon = (sortBy) => {
    const sortedList = [...allPokemonList];
    switch (sortBy) {
      case "name":
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "hp":
        sortedList.sort((a, b) => b.stats[0].base_stat - a.stats[0].base_stat);
        break;
      case "attack":
        sortedList.sort((a, b) => b.stats[1].base_stat - a.stats[1].base_stat);
        break;
      case "defense":
        sortedList.sort((a, b) => b.stats[2].base_stat - a.stats[2].base_stat);
        break;
      case "speed":
        sortedList.sort((a, b) => b.stats[5].base_stat - a.stats[5].base_stat);
        break;
      default:
        break;
    }
    setAllPokemonList(sortedList);
  };

  // Tampilkan Pokémon berdasarkan halaman
  const displayedPokemon = allPokemonList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Jalankan fetchAllPokemon saat komponen dimuat
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">All Pokémon</h1>
        <SortControls onSortChange={sortPokemon} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(allPokemonList.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
