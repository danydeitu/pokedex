import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Card = ({ name, imageUrl, weight, abilities }) => {
  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>Weight: {weight}</p>
      <p>Abilities: {abilities.join(', ')}</p>
    </CardContainer>
  );
};

export default Card;
