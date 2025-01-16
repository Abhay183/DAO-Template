import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, setCurrentStep } from '../../redux/daoSlice';
import {
  ModalOverlay,
  ModalContent,
  ImageSection,
  ContentSection,
  DaoImage,
  DaoTitle,
  DaoDescription,
  ContinueButton,
  CloseButton
} from './DaoModal.styles';

const daoInfo = {
  governance: {
    title: 'Governance DAO',
    description: 'Create a decentralized organization focused on community-driven decision making and protocol governance.',
    image: '/images/governance-dao.png'
  },
  investment: {
    title: 'Investment DAO',
    description: 'Build a collective investment vehicle for crypto assets and DeFi opportunities.',
    image: '/images/investment-dao.png'
  },
  charity: {
    title: 'Charity DAO',
    description: 'Establish a transparent and efficient platform for charitable giving and social impact.',
    image: '/images/charity-dao.png'
  },
  nft: {
    title: 'NFT Collector DAO',
    description: 'Create a collective for curating, collecting, and managing valuable NFT assets.',
    image: '/images/nft-dao.png'
  },
  service: {
    title: 'Service DAO',
    description: 'Build a decentralized service marketplace with shared ownership and governance.',
    image: '/images/service-dao.png'
  }
};

const DaoModal = () => {
  const dispatch = useDispatch();
  const { selectedDao, modalOpen } = useSelector(state => state.dao);
  
  const handleContinue = () => {
    dispatch(setCurrentStep('form'));
    dispatch(closeModal());
  };

  if (!modalOpen) return null;

  const dao = daoInfo[selectedDao];

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => dispatch(closeModal())}>×</CloseButton>
        <ImageSection>
          <DaoImage src={dao.image} alt={dao.title} />
        </ImageSection>
        <ContentSection>
          <DaoTitle>{dao.title}</DaoTitle>
          <DaoDescription>{dao.description}</DaoDescription>
          <ContinueButton onClick={handleContinue}>
            Continue to Setup
          </ContinueButton>
        </ContentSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DaoModal;