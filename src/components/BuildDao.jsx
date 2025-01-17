import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentStep } from '../redux/daoSlice';
import styled from 'styled-components';
import TopHeader from './Header';

const BuildDaoContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease;
  margin-top: 80px;

  button:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #0b1b27;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StepCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #183B56;
  max-width: 600px;
`;

const StepIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 1.5rem;
  color: #CA1111;
`;

const StepNumber = styled.span`
  font-size: 0.875rem;
  color: #CA1111;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #0b1b27;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const StartButton = styled.button`
  background: #CA1111;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-top: 4rem;
  font-size: 1.125rem;

  &:hover {
    background: #a30d0d;
  }
`;

const BuildDao = () => {
  const dispatch = useDispatch();

  const steps = [
    {
      number: 'Step 1',
      title: 'Select blockchain',
      icon: '🔗'
    },
    {
      number: 'Step 2',
      title: 'Describe your DAO',
      icon: '✍️'
    },
    {
      number: 'Step 3',
      title: 'Define membership',
      icon: '👥'
    },
    {
      number: 'Step 4',
      title: 'Select governance settings',
      icon: '⚙️'
    }
  ];

  const handleStart = () => {
    dispatch(setCurrentStep('blockchain'));
  };

  return (
    <>
      <TopHeader />
      <BuildDaoContainer>
        <Header>
          <div className='heading'>
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
              <StepIcon>{step.icon}</StepIcon>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
            </StepCard>
          ))}
        </StepsGrid>
      </BuildDaoContainer>
    </>
  );
};

export default BuildDao;