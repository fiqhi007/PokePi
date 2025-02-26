import Card from "../Element/Card";

// src/components/PokemonCard.jsx
const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <Card src={pokemon.sprites.front_default} name={pokemon.name}>
        <table className="mt-2 w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Stat
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map((stat) => (
              <tr key={stat.stat.name} className="border-b">
                <td className="border border-gray-300 px-4 py-2 capitalize">
                  {stat.stat.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  {stat.base_stat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* <div className="border border-gray-300 rounded-lg p-4 text-center w-40">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto"
        />
        <h3 className="text-lg font-semibold mt-2 capitalize">
          {pokemon.name}
        </h3>
        <div className="mt-2">
          {pokemon.stats.map((stat) => (
            <p key={stat.stat.name} className="text-sm">
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default PokemonCard;
