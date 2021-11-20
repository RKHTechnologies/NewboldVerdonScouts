import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1250px) {
    grid-gap: 20px;
  }

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const ScoutSection: FC = () => {
  return (
    <Container>
      <Card image='beaversSection' primary='Beavers' secondary='6 - 8 yrs' url='/beavers' accent='Blue' />
      <Card image='cubsSection' primary='Cubs' secondary='8 - 10 ½ yrs' url='/cubs' accent='Green' />
      <Card image='scoutsSection' primary='Scouts' secondary='10 ½ - 14 yrs' url='/scouts' accent='Purple' />
      <Card image='explorersSection' primary='Explorers' secondary='14 - 18 yrs' url='/explorers' accent='Red' />     
    </Container>
  );
}

export default ScoutSection;