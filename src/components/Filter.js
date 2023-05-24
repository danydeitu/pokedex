import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../contexts/PokemonContext';

const FilterContainer = styled.div`
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333333;
  width: 200px;
  margin-right: 16px;
`;

const AbilitiesSelect = styled.select`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color:gray;
  width: 200px;
  margin-right: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ff6f61;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;

const Filter = () => {
  const {
    searchValue,
    setSearchValue,
    selectedAbilities,
    setSelectedAbilities,
  } = useContext(PokemonContext);

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const handleAbilitiesChange = e => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      option => option.value
    );
    setSelectedAbilities(selectedOptions);
  };

  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder="Buscar por nombre"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <AbilitiesSelect
        multiple
        value={selectedAbilities}
        onChange={handleAbilitiesChange}
      >
        <option value="ability1">Habilidad 1</option>
        <option value="ability2">Habilidad 2</option>
      
      </AbilitiesSelect>
      <Button>Buscar</Button>
    </FilterContainer>
  );
};

export default Filter;
