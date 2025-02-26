import React, { useEffect, useState } from "react";
import PokemonCard from "../component/Fragment/PokemonCard";
import Pagination from "../component/Fragment/Pagination";
import TypeSelector from "../component/Fragment/TypeSelector";
import Navbar from "../component/Fragment/Navbar";

const Element = () => {
  // Default state dengan nilai awal
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetch Pokémon berdasarkan tipe (dengan default "fire")
  const fetchPokemonByType = async (type = "fire") => {
    try {
      const url = `https://pokeapi.co/api/v2/type/${type}`;
      const response = await fetch(url);
      const data = await response.json();

      const pokemonNames = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      const pokemonDetails = await Promise.all(
        pokemonNames.map((name) => fetchPokemonDetail(name))
      );

      setAllPokemonList(pokemonDetails);
      setCurrentPage(1); // Reset ke halaman pertama
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch detail Pokémon (dengan default kosong untuk menghindari error)
  const fetchPokemonDetail = async (pokemonName = "") => {
    if (!pokemonName) return {}; // Jika nama tidak tersedia, kembalikan objek kosong
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  // Pokémon yang akan ditampilkan di halaman saat ini
  const displayedPokemon = allPokemonList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fetch Pokémon pertama kali saat komponen dimuat
  useEffect(() => {
    fetchPokemonByType(); // Panggil dengan default type "fire"
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Pokémon by Type</h1>
        <TypeSelector onTypeChange={fetchPokemonByType} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPokemon.map((pokemon, index) => (
            <PokemonCard key={pokemon.name || index} pokemon={pokemon} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.max(
            1,
            Math.ceil(allPokemonList.length / itemsPerPage)
          )}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Element;
