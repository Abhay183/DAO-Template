import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DaoTemplate from '../DaoTemplate/DaoTemplate';

const SplitContainer = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  width: 30%;
  height: 100vh;
  overflow-y: auto;
  background: white;
//   box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  z-index: 2;
  border-right: 1px solid #9CA6AC;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    box-shadow: none;
  }
`;

const PreviewSection = styled.div`
  width: 70%;
  height: 100vh;
  overflow-y: auto;
  background: #0a0b0d;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;


const SplitLayout = ({ children }) => {
  const { currentStep } = useSelector(state => state.dao);
  
  if (currentStep !== 'form') return children;

  return (
    <SplitContainer>
      <FormSection>
        {children}
      </FormSection>
      <PreviewSection>
        <DaoTemplate preview={true} className="preview-container" />
      </PreviewSection>
    </SplitContainer>
  );
};

export default SplitLayout;