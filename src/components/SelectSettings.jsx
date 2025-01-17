import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateGovernanceSettings, setCurrentStep } from '../redux/daoSlice';
import { Info } from 'lucide-react';
import styled from 'styled-components';
import TopHeader from './Header';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.6s ease;
  margin-top: 80px;

  button:focus {
    outline: none;
  }
`;

const Progress = styled.div`
  background: #e2e8f0;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: #CA1111;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0b1b27;
  margin-bottom: 0.5rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Description = styled.p`
  color: #183B56;
  margin-bottom: 1rem;
`;

const LearnMore = styled.a`
  color: #CA1111;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a2b3b;
  font-size: 1rem;
`;

const SubLabel = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  color: #CA1111;
  font-size: 0.875rem;
  margin-top: 0.5rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
`;

const SliderContainer = styled.div`
  margin: 1.5rem 0;
`;

const SliderGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Slider = styled.input`
  width: 100%;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #CA1111;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SliderValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 60px;
`;

const DurationGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DurationInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NumberInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const NumberButton = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid #e2e8f0;
  color: #CA1111;
  cursor: pointer;
  
  &:hover {
    background: #f8fafc;
  }
`;

const NumberValue = styled.input`
  width: 100%;
  text-align: center;
  border: none;
  padding: 0.5rem;
  background: none;
  color: black;
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const ProposalGroup = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ProposalSection = styled.div`
  flex: 1;
`;

const RadioButton = styled.button`
    flex: 1;
    padding: 1rem;
    border: 1px solid ${props => props.isSelected ? '#4361ee' : '#e2e8f0'};
    border-radius: 0.5rem;
    background: ${props => props.isSelected ? '#f8fafc' : 'white'};
    color: #1a2b3b;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      border-color: #CA1111;
    }
  `;

const ProposalOption = styled.div`
    padding: 1rem;
    border: 1px solid ${props => props.isSelected ? '#4361ee' : '#e2e8f0'};
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    
    &:hover {
      border-color: #CA1111;
    }
  `;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.primary ? `
    background: #CA1111;
    color: white;
    border: none;

    &:hover {
      background: #a30d0d;
    }
  ` : `
    background: white;
    color: #0b1b27;
    border: 1px solid #e2e8f0;

    &:hover {
      border-color: #CA1111;
    }
  `}
`;

const SelectSettings = () => {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({
    supportThreshold: 50,
    minParticipation: 15,
    minDuration: { days: 1, hours: 0, minutes: 0 },
    earlyExecution: true,
    voteChange: false,
    proposalCreation: 'members',
    minimumTokens: 1
  });

  const handleDurationChange = (field, value) => {
    const newValue = Math.max(0, value);
    setSettings(prev => ({
      ...prev,
      minDuration: {
        ...prev.minDuration,
        [field]: newValue
      }
    }));
  };

  const handleNext = () => {
    dispatch(updateGovernanceSettings(settings));
    dispatch(setCurrentStep('review'));
  };

  const handleBack = () => {
    dispatch(setCurrentStep('membership'));
  };


  return (
    <>
      <TopHeader />
      <PageContainer>
        <Header>
          <Progress>
            <ProgressBar />
          </Progress>

          <Title>Select governance settings</Title>
          <Description>
            These are the rules that define how decisions are made in your DAO. How many people have to participate? How much support is needed? How long are proposals open for voting?
          </Description>
          <LearnMore>
            Learn more
            <span>→</span>
          </LearnMore>
        </Header>

        <Form>
          <FormGroup>
            <Label>Support threshold</Label>
            <SubLabel>
              The percentage of tokens that vote "Yes," in support of a proposal, out of all tokens that have voted, must be greater than this value for the proposal to pass.
            </SubLabel>
            <SliderContainer>
              <SliderGroup>
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  value={settings.supportThreshold}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    supportThreshold: parseInt(e.target.value)
                  }))}
                />
                <SliderValue>
                  {settings.supportThreshold}%
                </SliderValue>
              </SliderGroup>
            </SliderContainer>
            <InfoText>
              <Info size={16} />
              Proposal will be approved by majority
            </InfoText>
          </FormGroup>

          <FormGroup>
            <Label>Minimum participation</Label>
            <SubLabel>
              The percentage of tokens that participate in a proposal, out of the total TT supply, must be greater than or equal to this value for the proposal to pass.
            </SubLabel>
            <SliderContainer>
              <SliderGroup>
                <Slider
                  type="range"
                  min="0"
                  max="100"
                  value={settings.minParticipation}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    minParticipation: parseInt(e.target.value)
                  }))}
                />
                <SliderValue>
                  {settings.minParticipation}%
                </SliderValue>
              </SliderGroup>
            </SliderContainer>
          </FormGroup>

          <FormGroup>
            <Label>Minimum duration</Label>
            <SubLabel>
              The shortest period of time a proposal is open for voting. Proposals can be created with a longer duration, but not shorter.
            </SubLabel>
            <DurationGroup>
              <DurationInput>
                <Label>Minutes</Label>
                <NumberInput>
                  <NumberButton type="button" onClick={() => handleDurationChange('minutes', settings.minDuration.minutes - 1)}>-</NumberButton>
                  <NumberValue
                    type="number"
                    value={settings.minDuration.minutes}
                    onChange={(e) => handleDurationChange('minutes', parseInt(e.target.value))}
                  />
                  <NumberButton type="button" onClick={() => handleDurationChange('minutes', settings.minDuration.minutes + 1)}>+</NumberButton>
                </NumberInput>
              </DurationInput>
              <DurationInput>
                <Label>Hours</Label>
                <NumberInput>
                  <NumberButton type="button" onClick={() => handleDurationChange('hours', settings.minDuration.hours - 1)}>-</NumberButton>
                  <NumberValue
                    type="number"
                    value={settings.minDuration.hours}
                    onChange={(e) => handleDurationChange('hours', parseInt(e.target.value))}
                  />
                  <NumberButton type="button" onClick={() => handleDurationChange('hours', settings.minDuration.hours + 1)}>+</NumberButton>
                </NumberInput>
              </DurationInput>
              <DurationInput>
                <Label>Days</Label>
                <NumberInput>
                  <NumberButton type="button" onClick={() => handleDurationChange('days', settings.minDuration.days - 1)}>-</NumberButton>
                  <NumberValue
                    type="number"
                    value={settings.minDuration.days}
                    onChange={(e) => handleDurationChange('days', parseInt(e.target.value))}
                  />
                  <NumberButton type="button" onClick={() => handleDurationChange('days', settings.minDuration.days + 1)}>+</NumberButton>
                </NumberInput>
              </DurationInput>
            </DurationGroup>
            <InfoText>
              <Info size={16} />
              Set this to a duration that is long enough for your members to have sufficient time to vote. It's recommended to set this to at least 1 day.
            </InfoText>
          </FormGroup>

          <FormGroup>
            <Label>Early execution</Label>
            <SubLabel>
              Allows a proposal to be executed before the voting period ends if the support threshold is surpassed, the minimum participation is met, and the outcome cannot be changed by more voters participating.
            </SubLabel>
            <RadioGroup>
              <RadioButton
                isSelected={settings.earlyExecution}
                onClick={() => setSettings(prev => ({ ...prev, earlyExecution: true }))}
                type="button"
              >
                Yes
              </RadioButton>
              <RadioButton
                isSelected={!settings.earlyExecution}
                onClick={() => setSettings(prev => ({ ...prev, earlyExecution: false }))}
                type="button"
              >
                No
              </RadioButton>
            </RadioGroup>
          </FormGroup>

          <FormGroup>
            <Label>Vote change</Label>
            <SubLabel>
              Allows voters to change their vote during the voting period. This setting can't be enabled if early execution is enabled.
            </SubLabel>
            <RadioGroup>
              <RadioButton
                type='button'
                selected={!settings.voteChange}
                onClick={() => setSettings(prev => ({ ...prev, voteChange: false }))}
              >
                No
              </RadioButton>
              <RadioButton
                selected={settings.voteChange}
                onClick={() => setSettings(prev => ({ ...prev, voteChange: true }))}
                disabled={settings.earlyExecution}
              >
                Yes
              </RadioButton>
            </RadioGroup>
          </FormGroup>

          <FormGroup>
            <Label>Proposal creation</Label>
            <SubLabel>
              Specify who is permitted to create proposals and what the minimum requirement is.
            </SubLabel>
            <ProposalGroup>
              <ProposalSection>
                <Label>Who is eligible?</Label>
                <ProposalOption
                  isSelected={settings.proposalCreation === 'members'}
                  onClick={() => setSettings(prev => ({ ...prev, proposalCreation: 'members' }))}
                >
                  <h4>Members</h4>
                  <p>Only token holders with at least the minimum required balance...</p>
                </ProposalOption>
                <ProposalOption
                  selected={settings.proposalCreation === 'any'}
                  onClick={() => setSettings(prev => ({ ...prev, proposalCreation: 'any' }))}
                >
                  <h4>Any wallet</h4>
                  <p>Any connected wallet can create proposals.</p>
                </ProposalOption>
              </ProposalSection>

              <ProposalSection>
                <Label>Minimum requirement</Label>
                <NumberInput>
                  <NumberButton
                    type='button'
                    onClick={() => setSettings(prev => ({
                      ...prev,
                      minimumTokens: Math.max(1, prev.minimumTokens - 1)
                    }))}
                  >
                    -
                  </NumberButton>
                  <NumberValue
                    type="number"
                    min="1"
                    value={settings.minimumTokens}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      minimumTokens: Math.max(1, parseInt(e.target.value) || 1)
                    }))}
                  />
                  <NumberButton
                    type='button'
                    onClick={() => setSettings(prev => ({
                      ...prev,
                      minimumTokens: prev.minimumTokens + 1
                    }))}
                  >
                    +
                  </NumberButton>
                </NumberInput>
              </ProposalSection>
            </ProposalGroup>
          </FormGroup>

          <Navigation>
            <Button onClick={handleBack}>Back</Button>
            <Button isPrimary onClick={handleNext}>Next</Button>
          </Navigation>
        </Form>
      </PageContainer>
    </>
  );
};

export default SelectSettings;