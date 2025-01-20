
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentStep } from '../redux/daoSlice';
import styled from 'styled-components';
import TopHeader from './Header';
import { BlockchainIcon, TagsIcon, MembersIcon, SettingsIcon } from './StepIcons';


const BuildDaoContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #f8fafc;
  min-height: 100vh;
  margin-top: 80px;

  button:focus {
    outline: none;
  }
`;

const Header = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a2b3b;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  max-width: 600px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StepIcon = styled.div`
  margin-bottom: 0.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const StepNumber = styled.span`
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #1a2b3b;
  margin-bottom: 0;
  font-weight: 500;
`;

const StartButton = styled.button`
  background: #CA1111;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background: #CA1111;
  }

  &::after {
    content: "›";
    font-size: 1.25rem;
    margin-left: 0.25rem;
  }
`;

// Update the steps array
const steps = [
  {
    number: 'Step 1',
    title: 'Select blockchain',
    icon: <BlockchainIcon />
  },
  {
    number: 'Step 2',
    title: 'Describe your DAO',
    icon: <TagsIcon />
  },
  {
    number: 'Step 3',
    title: 'Define membership',
    icon: <MembersIcon />
  },
  {
    number: 'Step 4',
    title: 'Select governance settings',
    icon: <SettingsIcon />
  }
];

// Update the BuildDao component to include the SVG definitions
const BuildDao = () => {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(setCurrentStep('blockchain'));
  };

  return (
    <>
      <TopHeader />
      <BuildDaoContainer>
        
        {/* Include the SVG definitions */}
        <svg style={{ display: 'none' }}>
          <use href="#step-icons" />
        </svg>

        <Header>
          <div>
            <Title>Build your DAO</Title>
            <Subtitle>
              Start simple and learn as you go. You can always evolve your DAO in the future.
            </Subtitle>
          </div>
          <StartButton onClick={handleStart}>Build your DAO</StartButton>
        </Header>

        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard key={index}>
              <StepIcon>
                <svg viewBox="0 0 100 100">{step.icon}</svg>
              </StepIcon>
              <div>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
              </div>
            </StepCard>
          ))}
        </StepsGrid>
      </BuildDaoContainer>
    </>
  );
};

export default BuildDao;