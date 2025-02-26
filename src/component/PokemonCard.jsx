// src/components/PokemonCard.jsx
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center w-40">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto"
      />
      <h3 className="text-lg font-semibold mt-2 capitalize">{pokemon.name}</h3>
      <div className="mt-2">
        {pokemon.stats.map((stat) => (
          <p key={stat.stat.name} className="text-sm">
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
