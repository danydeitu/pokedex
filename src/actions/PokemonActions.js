export const fetchPokemons = () => {
  return async (dispatch) => {
    // Lógica para obtener los pokemons desde la API
  };
};

export const deletePokemon = (id) => {
  return {
    type: 'DELETE_POKEMON',
    payload: id,
  };
};
