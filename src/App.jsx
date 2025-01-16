import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HomePage from './components/HomePage/HomePage';
import DaoModal from './components/DaoModal/DaoModal';
import GovernanceForm from './components/DaoForm/GovernanceForm';
import InvestmentForm from './components/DaoForm/InvestmentForm';
import CharityForm from './components/DaoForm/CharityForm';
import NftCollectorForm from './components/DaoForm/NftCollectorForm';
import ServiceForm from './components/DaoForm/ServiceForm';
import DaoTemplate from './components/DaoTemplate/DaoTemplate';
import GlobalStyles from './GlobalStyles';
import SplitLayout from './components/DaoForm/SplitLayout';

const AppContainer = styled.div`
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
      case 'form':
        let FormComponent;
        switch (selectedDao) {
          case 'governance':
            FormComponent = GovernanceForm;
            break;
          case 'investment':
            FormComponent = InvestmentForm;
            break;
          case 'charity':
            FormComponent = CharityForm;
            break;
          case 'nft':
            FormComponent = NftCollectorForm;
            break;
          case 'service':
            FormComponent = ServiceForm;
            break;
          default:
            return <HomePage />;
        }
        return (
          <SplitLayout>
            <FormComponent />
          </SplitLayout>
        );
      case 'template':
        return <DaoTemplate />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppContainer $isForm={currentStep === 'form'}>
      <GlobalStyles />
      {renderCurrentStep()}
      <DaoModal />
    </AppContainer>
  );
};

export default App;