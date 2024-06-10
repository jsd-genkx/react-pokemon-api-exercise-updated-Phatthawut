import { useEffect, useState } from "react";

const PokemonBasicFetch = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				// fetch data from api
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=10"
				);
				// handle data
				const data = await response.json();
				setPokemonData(data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		// invoke function
		fetchPokemon();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1 className="font-bold">Pokémon List</h1>
			<ul>
				{pokemonData.map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonBasicFetch;
