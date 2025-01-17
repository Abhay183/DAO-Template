import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  setCurrentStep, updateMembership } from '../redux/daoSlice';
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

  .header-border {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    margin-bottom: 3rem;
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
  width: 75%;
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

const Label = styled.label`
  font-weight: 600;
  color: #0b1b27;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


const SubLabel = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RadioContent = styled.div`
  flex: 1;
  
  h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: 100%;
  background: none;
  color: black;
  
  &:focus {
    outline: none;
    border-color: #CA1111;
  }
`;

const TokenDistributionWrapper = styled.div`
  margin-top: 1.5rem;
`;

const DistributionTable = styled.div`
  margin-top: 1rem;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1a2b3b;
`;

const DistributionRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const AddButton = styled.button`
  color: #CA1111;
  background: none;
  border: none;
  padding: 0;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const InfoText = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const RadioOption = styled.label`
  display: flex;
  padding: 1rem;
  border: 1px solid ${props => props.isSelected ? '#CA1111' : '#e2e8f0'};
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${props => props.isSelected ? '#f8fafc' : 'white'};
  gap: 1rem;
  
  &:hover {
    border-color: #CA1111;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.isPrimary ? `
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

const DefineMembership = () => {
  const dispatch = useDispatch();
  const [formData, setLocalFormData] = useState({
    membershipType: 'token',
    hasExistingToken: false,
    tokenDetails: {
      name: '',
      symbol: '',
      distributions: [
        { address: '', tokens: '1', allocation: '100' }
      ]
    }
  });

  const handleMembershipTypeChange = (type) => {
    setLocalFormData({ ...formData, membershipType: type });
  };

  const handleExistingTokenChange = (hasToken) => {
    setLocalFormData({ ...formData, hasExistingToken: hasToken });
  };

  const handleTokenDetailsChange = (e) => {
    setLocalFormData({
      ...formData,
      tokenDetails: {
        ...formData.tokenDetails,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleDistributionChange = (index, field, value) => {
    const newDistributions = [...formData.tokenDetails.distributions];
    newDistributions[index] = {
      ...newDistributions[index],
      [field]: value
    };

    setLocalFormData({
      ...formData,
      tokenDetails: {
        ...formData.tokenDetails,
        distributions: newDistributions
      }
    });
  };

  const addDistribution = () => {
    setLocalFormData({
      ...formData,
      tokenDetails: {
        ...formData.tokenDetails,
        distributions: [
          ...formData.tokenDetails.distributions,
          { address: '', tokens: '0', allocation: '0' }
        ]
      }
    });
  };

  const handleNext = () => {
    const membershipData = {
      tokenDetails: {
        name: formData.tokenDetails.name,
        symbol: formData.tokenDetails.symbol,
        distributions: formData.tokenDetails.distributions,
      },
      minimumTokens: formData.minimumTokens || '0',
    };
    
    dispatch(updateMembership(membershipData));
    dispatch(setCurrentStep('settings'));
  };

  const handleBack = () => {
    dispatch(setCurrentStep('describe'));
  };

  return (
    <>
      <TopHeader />
      <PageContainer>
        <div className='header-border'>
          <Progress>
            <ProgressBar />
          </Progress>

          <Header>
            <Title>Define membership</Title>
            <Description>Decide the type of voting your DAO uses. You can change these settings with a vote.</Description>
            <LearnMore href="#">
              Learn more
              <span>→</span>
            </LearnMore>
          </Header>
        </div>

        <Form>
          <FormGroup>
            <Label>Who can participate in governance?</Label>
            <RadioGroup>
              <RadioOption
                isSelected={formData.membershipType === 'token'}
                onClick={() => handleMembershipTypeChange('token')}
              >
                <input
                  type="radio"
                  checked={formData.membershipType === 'token'}
                  onChange={() => { }}
                />
                <RadioContent>
                  <h4>Token holders</h4>
                  <p>Tokens act as voting chips. The more tokens you hold, the more weight your vote has.</p>
                </RadioContent>
              </RadioOption>

              <RadioOption
                selected={formData.membershipType === 'multisig'}
                onClick={() => handleMembershipTypeChange('multisig')}
              >
                <input
                  type="radio"
                  checked={formData.membershipType === 'multisig'}
                  onChange={() => { }}
                />
                <RadioContent>
                  <h4>Multisig members</h4>
                  <p>Only multisig members can vote. 1 wallet address equals 1 approval.</p>
                </RadioContent>
              </RadioOption>
            </RadioGroup>
          </FormGroup>

          {formData.membershipType === 'token' && (
            <>
              <FormGroup>
                <Label>Does your community already have an ERC-20 token to govern your DAO?</Label>
                <RadioGroup>
                  <RadioOption
                    selected={!formData.hasExistingToken}
                    onClick={() => handleExistingTokenChange(false)}
                  >
                    <input
                      type="radio"
                      checked={!formData.hasExistingToken}
                      onChange={() => { }}
                    />
                    <RadioContent>
                      <h4>No</h4>
                    </RadioContent>
                  </RadioOption>

                  <RadioOption
                    selected={formData.hasExistingToken}
                    onClick={() => handleExistingTokenChange(true)}
                  >
                    <input
                      type="radio"
                      checked={formData.hasExistingToken}
                      onChange={() => { }}
                    />
                    <RadioContent>
                      <h4>Yes</h4>
                    </RadioContent>
                  </RadioOption>
                </RadioGroup>
              </FormGroup>

              {!formData.hasExistingToken && (
                <TokenDistributionWrapper>
                  <FormGroup>
                    <Label>Mint your token</Label>
                    <SubLabel>Define the token details and distribute tokens to a core team and DAO treasury.</SubLabel>
                    <Input
                      placeholder="Name of the token. Example: Uniswap"
                      name="name"
                      value={formData.tokenDetails.name}
                      onChange={handleTokenDetailsChange}
                    />
                    <Input
                      placeholder="Symbol of the token. Example: UNI"
                      name="symbol"
                      value={formData.tokenDetails.symbol}
                      onChange={handleTokenDetailsChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Distribute tokens</Label>
                    <SubLabel>Add the wallets you'd like to distribute tokens to.</SubLabel>

                    <DistributionTable>
                      <TableHeader>
                        <div>Address</div>
                        <div>Tokens</div>
                        <div>Allocation</div>
                        <div></div>
                      </TableHeader>

                      {formData.tokenDetails.distributions.map((dist, index) => (
                        <DistributionRow key={index}>
                          <Input
                            value={dist.address}
                            onChange={(e) => handleDistributionChange(index, 'address', e.target.value)}
                            placeholder="0x0..."
                          />
                          <Input
                            value={dist.tokens}
                            onChange={(e) => handleDistributionChange(index, 'tokens', e.target.value)}
                            type="number"
                          />
                          <Input
                            value={dist.allocation}
                            onChange={(e) => handleDistributionChange(index, 'allocation', e.target.value)}
                            type="number"
                            suffix="%"
                          />
                          <button>•••</button>
                        </DistributionRow>
                      ))}
                    </DistributionTable>

                    <AddButton onClick={addDistribution}>
                      Add wallet
                    </AddButton>

                    {/* <InfoText>
                    <Info size={16} />
                    Your connected wallet was automatically added to the distribution list. You can remove it if you like.
                  </InfoText> */}
                  </FormGroup>
                </TokenDistributionWrapper>
              )}
            </>
          )}

          <Navigation>
            <Button onClick={handleBack}>Back</Button>
            <Button isPrimary onClick={handleNext}>Next</Button>
          </Navigation>
        </Form>
      </PageContainer>
    </>
  );
};

export default DefineMembership;