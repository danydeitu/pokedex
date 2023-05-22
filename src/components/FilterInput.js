import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../actions/pokemonActions';

const FilterInput = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [abilityFilter, setAbilityFilter] = useState('');

  const dispatch = useDispatch();

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleAbilityFilterChange = (event) => {
    setAbilityFilter(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    // Dispatch action to fetch filtered pokemons based on name and abilities
    dispatch(fetchPokemons(nameFilter, abilityFilter));
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <input
        type="text"
        placeholder="Search by name..."
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
      <input
        type="text"
        placeholder="Filter by abilities..."
        value={abilityFilter}
        onChange={handleAbilityFilterChange}
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilterInput;
