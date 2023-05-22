import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const Card = ({ name, image, weight, abilities }) => {
  return (
    <CardContainer>
      <PokemonImage src={image} alt={name} />
      <h3>{name}</h3>
      <p>Weight: {weight}</p>
      <p>Abilities: {abilities.join(', ')}</p>
    </CardContainer>
  );
};

export default Card;
