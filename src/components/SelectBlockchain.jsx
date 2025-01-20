import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep, updateBlockchain } from '../redux/daoSlice';
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
  width: 25%;
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

const NetworkSelector = styled.div`
  margin-bottom: 2rem;
`;

const NetworkButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid ${props => props.active ? '#CA1111' : '#e2e8f0'};
  background: ${props => props.active ? '#CA1111' : 'white'};
  color: ${props => props.active ? 'white' : '#0b1b27'};
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #CA1111;
  }
`;

const BlockchainList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
`;

const BlockchainInfo = styled.div`
  flex: 1;
`;

const BlockchainOption = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #CA1111;
    background: #f8fafc;
  }
`;

const BlockchainName = styled.div`
  font-weight: 600;
  color: #0b1b27;
`;

const BlockchainType = styled.div`
  font-size: 0.875rem;
  color: #183B56;
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 1rem;
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

const blockchains = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    type: 'L1 Blockchain',
    logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
  },
  {
    id: 'polygon',
    name: 'Polygon',
    type: 'L2 Blockchain',
    logo: 'https://assets.coingecko.com/coins/images/4713/large/polygon.png'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    type: 'L2 Blockchain',
    logo: 'https://docs.arbitrum.io/img/logo.svg'
  },
  {
    id: 'base',
    name: 'Base',
    type: 'L2 Blockchain',
    logo: 'https://mirror-media.imgix.net/publication-images/cgqxxPdUFBDjgKna_dDir.png?h=250&w=250'
  },
  {
    id: 'zksync era',
    name: 'ZKsync Era',
    type: 'L2 Blockchain',
    logo: '	https://assets.coingecko.com/coins/images/38043/large/ZKTokenBlack.png?1718614502'
  }
];

const SelectBlockchain = () => {
  const dispatch = useDispatch();
  const [network, setNetwork] = useState('mainnet');
  const [selectedChain, setSelectedChain] = useState('');

  const handleNext = () => {
    if (selectedChain) {
      const blockchainData = {
        network: network,
        selectedChain: selectedChain
      };
      // Dispatch both formData and blockchain data
      dispatch(setFormData({ blockchain: blockchainData }));
      dispatch(updateBlockchain(blockchainData));
      dispatch(setCurrentStep('describe'));
    }
  };

  const handleBack = () => {
    dispatch(setCurrentStep('build'));
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
            <Title>Select blockchain</Title>
            <Description>
              The chain you choose is where your tokens and assets are stored. If you already have a token, choose the chain your token is minted on. This cannot be changed later.
            </Description>
            <LearnMore href="#">
              Learn more
              <span>→</span>
            </LearnMore>
          </Header>
        </div>

        <NetworkSelector>
          <NetworkButton
            active={network === 'mainnet'}
            onClick={() => setNetwork('mainnet')}
          >
            Mainnet
          </NetworkButton>
          <NetworkButton
            active={network === 'testnet'}
            onClick={() => setNetwork('testnet')}
          >
            Testnet
          </NetworkButton>
        </NetworkSelector>

        <BlockchainList>
          {blockchains.map(chain => (
            <BlockchainOption key={chain.id}>
              <Logo src={chain.logo} alt={chain.name} />
              <BlockchainInfo>
                <BlockchainName>{chain.name}</BlockchainName>
                <BlockchainType>{chain.type}</BlockchainType>
              </BlockchainInfo>
              <Radio
                type="radio"
                name="blockchain"
                value={chain.id}
                checked={selectedChain === chain.id}
                onChange={(e) => setSelectedChain(e.target.value)}
              />
            </BlockchainOption>
          ))}
        </BlockchainList>

        <Navigation>
          <Button onClick={handleBack}>Back</Button>
          <Button primary onClick={handleNext}>Next</Button>
        </Navigation>
      </PageContainer>
    </>
  );
};

export default SelectBlockchain;
