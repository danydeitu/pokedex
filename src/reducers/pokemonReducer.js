const initialState = {
  pokemons: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state, // Crear una copia del estado actual
        pokemons: action.payload, // Actualizar la propiedad 'pokemons' con los nuevos valores
      };
    case 'DELETE_POKEMON':
      return {
        ...state, // Crear una copia del estado actual
        pokemons: state.pokemons.filter((pokemon) => pokemon.id !== action.payload), // Eliminar un pokemon según su id
      };
    default:
      return state; // Devolver el estado actual sin cambios
  }
};

export default pokemonReducer;
