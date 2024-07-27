// src/App.js

import React from 'react';
import InvitationCard from './Components/InvitationCard';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <AppContainer>
      <InvitationCard />
    </AppContainer>
  );
};

export default App;
