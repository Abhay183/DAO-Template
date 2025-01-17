import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HomePage from './components/HomePage/HomePage';
import DaoModal from './components/DaoModal/DaoModal';
import BuildDao from './components/BuildDao';
import SelectBlockchain from './components/SelectBlockchain';
import DescribeDao from './components/DescribeDao';
import DefineMembership from './components/DefineMembership';
import SelectSettings from './components/SelectSettings';
import DaoPreview from './components/DaoPreview';
import GlobalStyles from './GlobalStyles';

const AppContainer = styled.div`
  width: 98vw;
  min-height: 100vh;
  background: ${props => 
    props.$isForm ? 
    '#f8fafc' : 
    'transparent'
  };
`;

const App = () => {
  const { currentStep, selectedDao } = useSelector(state => state.dao);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'selection':
        return <HomePage />;
      case 'build':
        return <BuildDao />;
      case 'blockchain':
        return <SelectBlockchain />;
      case 'describe':
        return <DescribeDao />;
      case 'membership':
        return <DefineMembership />;
      case 'settings':
        return <SelectSettings />;
      case 'review':
        return <DaoPreview />
      default:
        return <HomePage />;
    }
  };

  return (
    <AppContainer $isForm={currentStep !== 'selection'}>
      <GlobalStyles />
      {renderCurrentStep()}
      {selectedDao !== 'custom' && <DaoModal />}
    </AppContainer>
  );
};

export default App;