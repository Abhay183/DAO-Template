import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep } from '../redux/daoSlice';
import styled from 'styled-components';
import TopHeader from './Header';
import { Info } from 'lucide-react';
import deployImg from '../assets/deploy.jpg';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.6s ease;
  margin-top: 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const HeaderImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    background-color: #f8fafc;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0b1b27;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #183B56;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SectionContainer = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #0b1b27;
  }
  
  span {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    background: #e5e7eb;
    border-radius: 1rem;
    color: #4b5563;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const EditButton = styled.button`
  color: #CA1111;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const InfoLabel = styled.div`
  color: #4b5563;
  font-weight: 500;
`;

const InfoValue = styled.div`
  color: #1a2b3b;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: ${props => props.background || '#e5e7eb'};
  color: ${props => props.color || '#4b5563'};
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  
  svg {
    color: #CA1111;
  }
`;

const DeployButton = styled.button`
  display: block;
  width: fit-content;
  margin: 2rem auto;
  padding: 0.75rem 2rem;
  background: #CA1111;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #a30d0d;
  }
`;

const DaoPreview = () => {
    const dispatch = useDispatch();
    const daoState = useSelector((state) => state.dao);
    const { blockchain, daoInfo, membership, governanceSettings } = daoState;

    useEffect(() => {
        console.log('Current DAO State:', daoState);
    }, [daoState]);

    const isSectionComplete = (section) => {
        if (!section) return false;
        return Object.values(section).some(value =>
            value !== null && value !== '' && value !== '0'
        );
    };

    const handleEdit = (step) => {
        dispatch(setCurrentStep(step));
      };

    const getBlockchainDisplay = () => {
        if (!blockchain?.selectedChain) return 'Not selected';
        return blockchain.selectedChain.charAt(0).toUpperCase() +
            blockchain.selectedChain.slice(1);
    };

    const getNetworkDisplay = () => {
        if (!blockchain?.network) return 'Not selected';
        return blockchain.network.charAt(0).toUpperCase() +
            blockchain.network.slice(1);
    };

    const formatDuration = (duration) => {
        if (!duration) return '';
        const parts = [];
        if (duration.days && duration.days !== '0') parts.push(`${duration.days} days`);
        if (duration.hours && duration.hours !== '0') parts.push(`${duration.hours} hours`);
        if (duration.minutes && duration.minutes !== '0') parts.push(`${duration.minutes} minutes`);
        return parts.join(' ') || 'No duration set';
    };

    const calculateTotalSupply = () => {
        if (!membership?.tokenDetails?.distributions) return '0';
        return membership.tokenDetails.distributions.reduce(
            (acc, curr) => acc + (parseFloat(curr.tokens) || 0),
            0
        ).toFixed(2);
    };

    return (
        <>
            <TopHeader />
            <PageContainer>
                <Header>
                    <HeaderContent>
                        <Title>Deploy your DAO</Title>
                        <Description>Double-check that everything is correct before deploying your DAO.</Description>
                    </HeaderContent>
                    <HeaderImage>
                        <img src={deployImg} alt="" />
                    </HeaderImage>
                </Header>

                <SectionContainer>
                    <SectionHeader>
                        <SectionTitle>
                            <h2>Blockchain</h2>
                            <span>Not changeable</span>
                        </SectionTitle>
                        <EditButton
                            onClick={() => dispatch(setCurrentStep('blockchain'))}
                            disabled={!isSectionComplete(blockchain)}
                        >
                            Edit
                        </EditButton>
                    </SectionHeader>
                    <InfoGrid>
                        <InfoLabel>Network</InfoLabel>
                        <InfoValue>{getNetworkDisplay()}</InfoValue>
                        <InfoLabel>Blockchain</InfoLabel>
                        <InfoValue>{getBlockchainDisplay()}</InfoValue>
                    </InfoGrid>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader>
                        <SectionTitle>
                            <h2>DAO</h2>
                            <span>Changeable with a vote</span>
                        </SectionTitle>
                        <EditButton
                            onClick={() => dispatch(setCurrentStep('describe'))}
                            disabled={!isSectionComplete(daoInfo)}
                        >
                            Edit
                        </EditButton>
                    </SectionHeader>
                    <InfoGrid>
                        <InfoLabel>Logo</InfoLabel>
                        <InfoValue>
                            {daoInfo?.logo ? (
                                <img
                                    src={URL.createObjectURL(daoInfo.logo)}
                                    alt="DAO Logo"
                                    style={{ width: '50px', height: '50px' }}
                                />
                            ) : '−'}
                        </InfoValue>
                        <InfoLabel>Name</InfoLabel>
                        <InfoValue>{daoInfo?.name || 'Not set'}</InfoValue>
                        <InfoLabel>ENS Subdomain</InfoLabel>
                        <InfoValue>
                            {daoInfo?.subdomain ?
                                `${daoInfo.subdomain}.dao.eth` :
                                'Not set'}
                        </InfoValue>
                        <InfoLabel>Summary</InfoLabel>
                        <InfoValue>{daoInfo?.description || 'Not set'}</InfoValue>
                        {daoInfo?.links?.length > 0 && (
                            <>
                                <InfoLabel>Links</InfoLabel>
                                <InfoValue>
                                    {daoInfo.links.map((link, index) => (
                                        <div key={index}>
                                            {link.name}: {link.url}
                                        </div>
                                    ))}
                                </InfoValue>
                            </>
                        )}
                    </InfoGrid>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader>
                        <SectionTitle>
                            <h2>Voters</h2>
                            <span>Changeable with a vote</span>
                        </SectionTitle>
                        <EditButton onClick={() => handleEdit('membership')}>Edit</EditButton>
                    </SectionHeader>
                    <InfoGrid>
                        <InfoLabel>Eligible voters</InfoLabel>
                        <InfoValue>Token holders</InfoValue>
                        <InfoLabel>Token</InfoLabel>
                        <InfoValue>
                            {membership?.tokenDetails?.name ?
                                `${membership.tokenDetails.name} (${membership.tokenDetails.symbol})` :
                                'Not set'}
                            <Tag background="#e5f9f6" color="#059669">New</Tag>
                        </InfoValue>
                        <InfoLabel>Supply</InfoLabel>
                        <InfoValue>
                            {calculateTotalSupply()}
                            <Tag background="#f3f4f6" color="#4b5563">Mintable</Tag>
                        </InfoValue>
                        <InfoLabel>Distribution</InfoLabel>
                        <InfoValue>
                            {membership?.tokenDetails?.distributions?.length > 0 ?
                                `See ${membership.tokenDetails.distributions.length} addresses` :
                                'No distributions set'}
                        </InfoValue>
                        <InfoLabel>Proposal creation</InfoLabel>
                        <InfoValue>Members with ≥ {membership?.minimumTokens || '0'} voting power or balance</InfoValue>
                    </InfoGrid>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeader>
                        <SectionTitle>
                            <h2>Voting parameters</h2>
                            <span>Changeable with a vote</span>
                        </SectionTitle>
                        <EditButton onClick={() => handleEdit('settings')}>Edit</EditButton>
                    </SectionHeader>
                    <InfoGrid>
                        <InfoLabel>Support threshold</InfoLabel>
                        <InfoValue>≥{governanceSettings?.supportThreshold || '0'}%</InfoValue>
                        <InfoLabel>Minimum participation</InfoLabel>
                        <InfoValue>≥{governanceSettings?.minParticipation || '0'}%</InfoValue>
                        <InfoLabel>Minimum duration</InfoLabel>
                        <InfoValue>{formatDuration(governanceSettings?.minDuration) || 'Not set'}</InfoValue>
                    </InfoGrid>
                </SectionContainer>

                <Footer>
                    <Info size={16} />
                    Most of these settings can be changed later with a vote.
                </Footer>

                <DeployButton>Deploy your DAO</DeployButton>
            </PageContainer>
        </>
    );
};

export default DaoPreview;