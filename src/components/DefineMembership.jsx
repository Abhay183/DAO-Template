import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentStep, updateMembership } from '../redux/daoSlice';
import { Info, Copy, ExternalLink, MoreVertical, Minus, Plus } from 'lucide-react';
import styled from 'styled-components';
import TopHeader from './Header';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.6s ease;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 60px;
  }

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

const InlineRadioGroup = styled(RadioGroup)`
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompactRadioOption = styled(RadioOption)`
  flex: 0 1 auto;
  min-width: 150px;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 0rem;
  border: none;
  background: none;
  color: #CA1111;
  cursor: pointer;
  
  &:hover {
    background: #f8fafc;
  }
`;

const DistributionPreview = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  
  h4 {
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0b1b27;
  }
`;

const PreviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  appearance: none;
  border: 2px solid #000000;
  border-radius: 50%;
  background-color: white;
  position: relative;
  cursor: pointer;

  &:checked {
    border-color: #CA1111;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #CA1111;
  }
`;

const TokenButton = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #64748b;

  &:hover {
    color: #CA1111;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TokenValue = styled.input`
  width: 60px;
  text-align: center;
  border: none;
  padding: 0.25rem;
  
  &:focus {
    outline: none;
  }
`;

const DistributionSection = styled.div`
  margin-top: 2rem;
`;

const DistributionTable = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) 140px 100px 40px;
  gap: 1rem;
  margin-bottom: 0.5rem;
  color: #111827;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DistributionRow = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 2fr) 140px 100px 40px;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: #f8fafc;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    gap: 1rem;

    & > * {
      width: 100%;
    }
  }
`;

const MobileLabel = styled.div`
  display: none;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AddressInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const TokenControlsWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  background: white;

  &:focus {
    outline: none;
    border-color: #CA1111;
    box-shadow: 0 0 0 1px #CA1111;
  }
`;

const AddressActions = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #111827;
  }
`;

const TokenControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 0.5rem;
  background: white;
  padding: 2px;
  
  @media (max-width: 768px) {
    width: 50%;
    justify-content: space-between;
  }
`;

const ControlButton = styled.button`
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #111827;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TokenInput = styled.input`
  width: 60px;
  text-align: center;
  border: none;
  padding: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


const AddButton = styled.button`
  color: #CA1111;
  background: none;
  border: none;
  padding: 0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 24px; // Positioned below the three dots
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
`;

// ... (keep other styled components until AllocationDisplay)

const AllocationDisplay = styled.div`
  background: #F3F4F6;
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 50%;
  }
  
  input {
    background: transparent;
    border: none;
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    color: #111827;
    
    &:focus {
      outline: none;
    }
    
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; // Added for dropdown positioning
  
  &:hover {
    color: #111827;
  }

  @media (max-width: 768px) {
    position: absolute;
    justify-content: end;
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
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
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

  const calculateAllocations = (distributions) => {
    const totalTokens = distributions.reduce((sum, dist) => sum + parseFloat(dist.tokens || 0), 0);
    return distributions.map(dist => ({
      ...dist,
      allocation: totalTokens > 0 ? ((parseFloat(dist.tokens || 0) / totalTokens) * 100).toFixed(2) : '0'
    }));
  };

  const handleDistributionChange = (index, field, value) => {
    const newDistributions = [...formData.tokenDetails.distributions];
    newDistributions[index] = {
      ...newDistributions[index],
      [field]: value
    };

    // Only recalculate allocations if tokens are changed
    if (field === 'tokens') {
      const updatedDistributions = calculateAllocations(newDistributions);
      setLocalFormData({
        ...formData,
        tokenDetails: {
          ...formData.tokenDetails,
          distributions: updatedDistributions
        }
      });
    } else if (field === 'allocation') {
      // If allocation is changed manually, adjust tokens accordingly
      const newAllocation = parseFloat(value);
      if (!isNaN(newAllocation)) {
        const totalTokens = newDistributions.reduce((sum, dist, i) =>
          i === index ? sum : sum + parseFloat(dist.tokens || 0), 0);

        const newTokens = ((newAllocation / (100 - newAllocation)) * totalTokens).toFixed(2);
        newDistributions[index].tokens = newTokens;
        newDistributions[index].allocation = value;

        setLocalFormData({
          ...formData,
          tokenDetails: {
            ...formData.tokenDetails,
            distributions: newDistributions
          }
        });
      }
    } else {
      setLocalFormData({
        ...formData,
        tokenDetails: {
          ...formData.tokenDetails,
          distributions: newDistributions
        }
      });
    }
  };

  const handleDeleteDistribution = (index, e) => {
    e.stopPropagation();
    const newDistributions = [...formData.tokenDetails.distributions];
    newDistributions.splice(index, 1);

    // Recalculate allocations after deletion
    const updatedDistributions = calculateAllocations(newDistributions);

    setLocalFormData({
      ...formData,
      tokenDetails: {
        ...formData.tokenDetails,
        distributions: updatedDistributions
      }
    });
    setOpenMenuIndex(null);
  };

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

  const handleTokenIncrement = (e, index) => {
    e.preventDefault();
    const currentTokens = parseFloat(formData.tokenDetails.distributions[index].tokens) || 0;
    const newTokens = (currentTokens + 1).toString();
    handleDistributionChange(index, 'tokens', newTokens);
  };

  const handleTokenDecrement = (e, index) => {
    e.preventDefault();
    const currentTokens = parseFloat(formData.tokenDetails.distributions[index].tokens) || 0;
    if (currentTokens > 1) {
      const newTokens = (currentTokens - 1).toString();
      handleDistributionChange(index, 'tokens', newTokens);
    }
  };

  const addDistribution = (e) => {
    e?.preventDefault();
    const newDistributions = [
      ...formData.tokenDetails.distributions,
      { address: '', tokens: '1', allocation: '0' }
    ];

    // Recalculate allocations for all distributions
    const updatedDistributions = calculateAllocations(newDistributions);

    setLocalFormData({
      ...formData,
      tokenDetails: {
        ...formData.tokenDetails,
        distributions: updatedDistributions
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
                <InlineRadioGroup>
                  <CompactRadioOption
                    isSelected={!formData.hasExistingToken}
                    onClick={() => handleExistingTokenChange(false)}
                  >
                    <Radio
                      type="radio"
                      checked={!formData.hasExistingToken}
                      onChange={() => { }}
                    />
                    <RadioContent>
                      <h4>No</h4>
                    </RadioContent>
                  </CompactRadioOption>

                  <CompactRadioOption
                    isSelected={formData.hasExistingToken}
                    onClick={() => handleExistingTokenChange(true)}
                  >
                    <Radio
                      type="radio"
                      checked={formData.hasExistingToken}
                      onChange={() => { }}
                    />
                    <RadioContent>
                      <h4>Yes</h4>
                    </RadioContent>
                  </CompactRadioOption>
                </InlineRadioGroup>
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

                  <DistributionSection>
                    <Label>Distribute tokens</Label>
                    <Description>Add the wallets you'd like to distribute tokens to.</Description>

                    <InfoText>
                      <Info size={16} />
                      Your connected wallet was automatically added to the distribution list. You can remove it if you like.
                    </InfoText>

                    <DistributionTable>
                      <TableHeader>
                        <div>Address</div>
                        <div>Tokens</div>
                        <div>Allocation</div>
                        <div></div>
                      </TableHeader>

                      {formData.tokenDetails.distributions.map((dist, index) => (
                        <DistributionRow key={index}>
                          <div>
                            <MobileLabel>Wallet Address</MobileLabel>
                            <AddressInput>
                              <StyledInput
                                value={dist.address}
                                onChange={(e) => handleDistributionChange(index, 'address', e.target.value)}
                                placeholder="0x0..."
                              />
                              <AddressActions>
                                <IconButton onClick={(e) => { e.preventDefault(); }}>
                                  <Copy size={16} />
                                </IconButton>
                                <IconButton onClick={(e) => { e.preventDefault(); }}>
                                  <ExternalLink size={16} />
                                </IconButton>
                              </AddressActions>
                            </AddressInput>
                          </div>

                          <TokenControlsWrapper>
                            <MobileLabel>Number of Tokens</MobileLabel>
                            <TokenControls>
                              <ControlButton
                                onClick={(e) => handleTokenDecrement(e, index)}
                                disabled={parseInt(dist.tokens) <= 1}
                              >
                                <Minus size={16} />
                              </ControlButton>
                              <TokenInput
                                type="number"
                                value={dist.tokens}
                                onChange={(e) => handleDistributionChange(index, 'tokens', e.target.value)}
                                min="1"
                                onClick={(e) => e.preventDefault()}
                              />
                              <ControlButton
                                onClick={(e) => handleTokenIncrement(e, index)}
                              >
                                <Plus size={16} />
                              </ControlButton>
                            </TokenControls>
                          </TokenControlsWrapper>

                          <div>
                            <MobileLabel>Allocation (%)</MobileLabel>
                            <AllocationDisplay>
                              <input
                                type="number"
                                value={dist.allocation}
                                onChange={(e) => handleDistributionChange(index, 'allocation', e.target.value)}
                                min="0"
                                max="100"
                                step="0.01"
                              />
                            </AllocationDisplay>
                          </div>

                          <MenuButton onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenMenuIndex(openMenuIndex === index ? null : index);
                          }}>
                            <MoreVertical size={16} />
                            {openMenuIndex === index && (
                              <DropdownMenu>
                                <DropdownItem onClick={(e) => handleDeleteDistribution(index, e)}>
                                  Delete this address
                                </DropdownItem>
                              </DropdownMenu>
                            )}
                          </MenuButton>
                        </DistributionRow>
                      ))}
                    </DistributionTable>
                    <AddButton onClick={addDistribution}>
                      Add wallet
                    </AddButton>
                  </DistributionSection>
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